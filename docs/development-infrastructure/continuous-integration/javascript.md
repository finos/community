---
id: javascript
title: Javascript
---

In the last decade, Javascript (JS) has been increasingly used for backend software development, especially since the first appearance of Node.js.  Listed below are some of the most common processes that are involved in a Javascript project lifecycle in several JS ecosystems/platforms, and how they interact with the project infrastructure provided by the Foundation.

## Node.js
Node.js is a Javascript runtime for running JS code; the `node` command line is [easy to install](https://nodejs.org/en/download/) and provides a rich [set of options](https://nodejs.org/api/cli.html) to manage the entire project lifecycle.

## Publishing on npm
[npm](https://docs.npmjs.com/) is the Node.js package manager, enabling developers to fetch and publish Node.js packages; project teams can use their own npm credentials to publish packages (locally or via CI), or ask [help@finos.org](mailto:help@finos.org) to support setting up the release process.

To date, the Foundation has provisioned:
1. A FINOS NPMJS Organisation, that is used as a directory of all NPM packages that are released from a FINOS hosted project or working group.
2. A FINOS Admin user, which can be used to publish NPM packages to NPMJS, if a Project Lead is unable to create a personal account to do so
3. A Symphony Software Foundation NPMJS Organisation, that houses all published Node.js packages.

### Using package scoping
All npm packages released under the FINOS npm organisation should define the @finos scope, in order to point to the npm organisation; if you're not familiar, r[ead more about scoped packages](https://docs.npmjs.com/misc/scope).

There are some situations where it is not possible to specify the scope of a package, since scoping maybe used for behaviour-related aspects of the application; for example when [defining typescript typings](https://www.npmjs.com/org/types).

## Semantic release
[Semantic release](https://semantic-release.gitbook.io/semantic-release/) is a Node.js library that automates the software release process by parsing commit messages; on every commit, semantic release is executed by Travis CI and - based on the commit message - decides to trigger a release or not; release managers can use [commitizen](https://commitizen.github.io/cz-cli/) (see image below) to simplify their commit process; simply type `npm install -g commitizen` and use `git cz` (instead of `git commit`) to commit your changes.

![Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

It is worth noting that release managers have the opportunity [squash and merge](https://help.github.com/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) using GitHub merge UI, in order to choose the right commit messages and keep commit log clean.

When a release is performed, your CI environment will do the following:

- Run all build and validation tasks defined by your build descriptor (ie `.travis.yml`)
- Create a GitHub tag, labelled after the version specified in `package.json`
  - Include a `CHANGELOG.md` file with a recap of all commits added since last release
  - Publish (on [npmjs.org/org/finos](https://npmjs.org/org/finos)) an updated version of the NPM package defined by `package.json`
- Increase the the version specified in `package.json` and push changes to `master` branch

### Release setup
Travis CI must be configured with the following environment variables:

- `GH_TOKEN`, used to create tags on GitHub
- `NPM_TOKEN`, used to publish the npm package

You can setup variables using [semantic-release-cli](https://semantic-release.gitbook.io/semantic-release/usage/ci-configuration#automatic-setup-with-semantic-release-cli) or the CI environment of your choice (see [how variables are set in GitHub Actions](https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables))

Release configurations can also be [shared across npm projects](https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations).

### Advanced configurations
Semantic release allows [additional configurations](https://semantic-release.gitbook.io/semantic-release/usage/plugins) to customise the release flow.