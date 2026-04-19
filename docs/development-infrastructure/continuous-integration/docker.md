---
id: docker
title: Docker Build and Publish
---

## Why?

Many organizations require obtaining and deploying software packages from an image for ease of deployment. Furthermore, there can be strict requirements for those images to be signed or provide provenance attestations, as well as come from a trusted source such as Docker Hub or GitHub Container Registry.

[Publishing to Docker Hub](https://hub.docker.com/r/finos/) and verifying provenance allows FINOS projects to increase adoption by making deployments easy, consistent and trusted - something especially important for enterprise users.

## Getting started

In order to start publishing your image to Docker Hub, you'll first need to create a `Dockerfile` to define what the runtime environment should look like, install dependencies and build the project.

Then, you'll need a GitHub workflow `.github/workflows/docker-publish.yml` to check out the repository, and then build and publish the Docker image. 

Optionally, a `docker-compose.yml` can be created for ease of local development and testing. This is not needed for publishing to Docker Hub, which only requires a Dockerfile.

### Dockerfile

Your Dockerfile will vary wildly depending on which dependencies you need to build the project, your project's runtime environment(s), etc. A guide on [how to write a basic Dockerfile](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) is available in the Docker documentation.

Even if there isn't a one-size-fits-all solution, there are general best practices that are good to follow when writing a Dockerfile.

Here's a [sample Dockerfile from GitProxy](https://github.com/finos/git-proxy/blob/main/Dockerfile):

```Dockerfile
FROM node:24@sha256:5a593d74b632d1c6f816457477b6819760e13624455d587eef0fa418c8d0777b AS builder

USER root

WORKDIR /out

COPY package*.json ./
COPY tsconfig.json tsconfig.publish.json proxy.config.json config.schema.json test-e2e.proxy.config.json vite.config.ts index.html index.ts ./

RUN npm pkg delete scripts.prepare && npm ci --include=dev

COPY src/ /out/src/
COPY public/ /out/public/

RUN npm run build-ui \
  && npx tsc --project tsconfig.publish.json \
  && cp config.schema.json dist/ \
  && npm prune --omit=dev

FROM node:24@sha256:5a593d74b632d1c6f816457477b6819760e13624455d587eef0fa418c8d0777b AS production

COPY --from=builder /out/package*.json ./
COPY --from=builder /out/node_modules/ /app/node_modules/
COPY --from=builder /out/dist/ /app/dist/
COPY --from=builder /out/build /app/dist/build/
COPY proxy.config.json config.schema.json ./
COPY docker-entrypoint.sh /docker-entrypoint.sh

USER root

RUN apt-get update && apt-get install -y \
    git tini \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app/.data /app/.tmp /app/.remote \
    && chown -R 1000:1000 /app

USER 1000

WORKDIR /app

EXPOSE 8080 8000

ENTRYPOINT ["tini", "--", "/docker-entrypoint.sh"]
CMD ["node", "--enable-source-maps", "dist/index.js"]
```

This file is specific to GitProxy, but it showcases elements that are good to have in any `Dockerfile`:

- Multi-stage builds: We divide the work into a `builder` stage that compiles/installs everything, and a `production` stage that copies over the final artifacts. This keeps image sizes small and prevents shipping dev tooling into production
- Pinning images to SHA digests: Notice that image versions include a SHA. This is needed because tags are mutable. Pinning to a specific SHA guarantees the environment is properly replicated
- Running as non-root: Setting `USER 1000` allows minimizing privileges during Dockerfile execution, for improved security. 

### `docker-publish.yml`

This file should be created in your `.github/workflows` directory to automate the build and publish process. In this file, we can detail *when* and *how* we want to publish to Docker Hub, for example:

- Publish a `my-project:main` tag every time something gets pushed to `main`
- Publish a `my-project:latest` tag whenever a new version of our software is published
- Publish a `my-project:X.Y` tag when publishing a specific version of our software

Here's an example of a [`docker-publish.yml` workflow from GitProxy](https://github.com/finos/git-proxy/blob/main/.github/workflows/docker-publish.yml):

```yml
name: Build and Publish Docker Image

on:
  push:
    branches: [main]
  release:
    types: [published]

jobs:
  docker-build-publish:
    name: Build and Publish Docker Image
    runs-on: ubuntu-latest

    steps:
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@4d04d5d9486b7bd6fa91e7baf45bbb4f8b9deedd # v4

      - name: Checkout Repository
        uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6

      - name: Log in to Docker Hub
        if: github.repository_owner == 'finos'
        uses: docker/login-action@b45d80f862d83dbcd57f89517bcf500b2ab88fb2 # v4
        with:
          username: finos
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Set Docker Image Tag
        id: tags
        run: |
          if [ "${{ github.event_name }}" = "release" ]; then
            echo "tags=${{ github.repository }}:${{ github.ref_name }},${{ github.repository }}:latest" >> $GITHUB_OUTPUT
          else
            echo "tags=${{ github.repository }}:main" >> $GITHUB_OUTPUT
          fi

      - name: Build and Publish Docker Image
        if: github.repository_owner == 'finos'
        uses: docker/build-push-action@d08e5c354a6adb9ed34480a06d141179aa583294 # v7
        with:
          context: .
          file: Dockerfile
          push: true
          tags: ${{ steps.tags.outputs.tags }}
          provenance: true
```

You can tweak when to run the workflow as follows:

```yml
on:
  push:
    branches: [main] # Run when pushing to main
  release:
    types: [published] # Run when publishing a release (via GitHub)
```

Note that the following section requires a `DOCKER_PASSWORD` repository secret to log into the `finos` Docker Hub account. Please contact [help@finos.org](mailto:help@finos.org) to set it up:

```yml
      - name: Log in to Docker Hub
        if: github.repository_owner == 'finos' # Only allow workflow to run from upstream repository
        uses: docker/login-action@b45d80f862d83dbcd57f89517bcf500b2ab88fb2 # v4
        with:
          username: finos
          password: ${{ secrets.DOCKER_PASSWORD }}
```

The following bit tags the image depending on whether the workflow got triggered on release or a regular push. Then, it automatically sets the tag name to the repository name and appends `:latest`, `:main` or `:X.Y` depending on what triggered the flow:

```yml
      - name: Set Docker Image Tag
        id: tags
        run: |
          if [ "${{ github.event_name }}" = "release" ]; then
            echo "tags=${{ github.repository }}:${{ github.ref_name }},${{ github.repository }}:latest" >> $GITHUB_OUTPUT
          else
            echo "tags=${{ github.repository }}:main" >> $GITHUB_OUTPUT
          fi
```

Finally, the image gets published to Docker Hub using the tags determined earlier. The `provenance: true` flag includes a [provenance attestation](https://docs.docker.com/build/metadata/attestations/slsa-provenance/), often used for security and auditing purposes: 

```yml
      - name: Build and Publish Docker Image
        if: github.repository_owner == 'finos'
        uses: docker/build-push-action@d08e5c354a6adb9ed34480a06d141179aa583294 # v7
        with:
          context: .
          file: Dockerfile
          push: true
          tags: ${{ steps.tags.outputs.tags }}
          provenance: true
```

### docker-compose.yml

A `docker-compose.yml` can be optionally used for using images locally and testing. This isn't required for deploying to Docker Hub.

Here's an [example `docker-compose.yml` from GitProxy](https://github.com/finos/git-proxy/blob/main/docker-compose.yml) for reference.

## Testing

If everything