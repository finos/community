---
id: code-transfer
title: Code Transfer Options
---

Here’s several options contributors can use to transfer the code to the FINOS infrastructure team during contribution:

## GitHub.com repository (recommended)

Use [GitHub's transfer ownership capability](https://help.github.com/articles/about-repository-transfers/) to move it over to the Program's GitHub organization. To do this you will need to temporarily add one of the Program's GitHub organization owners (e.g. the PMC Lead) as an admin on the source repository, so that they can initiate the transfer (once the transfer is complete, you will be able to remove the Program's GitHub organization owner from the repository - in fact we encourage you to do so).

The Foundation recommends this approach as it has the unique benefit of preserving the full commit & pull request histories, the project's issue list, wiki and GitHub pages, and more.

Some important notes:
1. When you transfer a repository, its issues, wiki, stars, and watchers are also transferred (read more details [about repository transfers](https://help.github.com/articles/about-repository-transfers/))
2. When you transfer a private repository, all forks will be disabled, until [marked as public](https://help.github.com/articles/making-a-private-repository-public/); they will also be disconnected from the upstream repository, therefore it is strongly advised to push all changes to an upstream branch, before performing the code transfer

## GitHub.com repository where it is not possible to temporarily configure someone else as an admin

Perform a double transfer:
1. Transfer ownership of the repository to a personal ("user") account on GitHub (see the [GitHub documentation](https://help.github.com/articles/transferring-a-repository-owned-by-your-organization/) for details)
2. Follow the steps described above for transferring a GitHub.com repository to the Program

## GitHub Enterprise repository

Perform a copy, transfer, and freeze:
1. Copy the repository into a personal ("user") account on GitHub ([this StackOverflow post](http://stackoverflow.com/questions/28753111/migrate-from-github-enterprise-to-github-com) describes how to accomplish this)
2. Follow the steps described above for transferring a GitHub.com repository to the Program
3. Delete or freeze (e.g. disable access, make read-only, etc.) the repository in your GitHub Enterprise installation, to prevent accidental modifications to the wrong repository.

## Other Source Code Management (SCM) repository

Perform an import, transfer, and freeze:

1. Use the [GitHub importer](https://help.github.com/articles/about-github-importer/) to import the repository into a personal ("user") account on GitHub (see the [GitHub documentation](https://help.github.com/articles/importing-a-repository-with-github-importer/) for details)
2. Follow the steps described above for transferring a GitHub.com repository to the Program
3. Delete or freeze (e.g. disable access, make read-only, etc.) the repository in your SCM installation, to prevent accidental modifications to the wrong repository.

## Source code snapshot
Snapshotting the code and providing it to the PMC in an archive file (.zip, .tar.gz, etc.) can also work.
This is the recommended approach if you wish to truncate the commit history prior to contribution.

## Do-It-Yourself (DIY)
If you wish to populate your repository yourself, the PMC should create an empty repository in the Program's GitHub organization (as described above), and then configure the contributing team as owners and committe