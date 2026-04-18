---
id: dco
title: DCO on GitHub
---

FINOS software projects use the [Developer Certificate of Origin](https://developercertificate.org/) (DCO) by default. Contributors certify their commits by adding a `Signed-off-by` line to each commit message (for example with `git commit -s`). For background on DCO compared with CLA, see [CLA vs. DCO](https://osr.finos.org/docs/bok/artifacts/clas-and-dcos#cla-vs-dco) on OSR.

This page describes how to **enforce DCO on GitHub** using **[DCO2](https://github.com/cncf/dco2)**—the GitHub App that checks pull requests for valid sign-offs (a successor to the classic DCO bot).

## Install DCO2

1. [Install and configure the DCO2 GitHub App](https://github.com/apps/dco-2) for your FINOS organization or for the repositories that should enforce DCO.
2. After installation, DCO2 reports a **status check** on each pull request indicating whether every commit includes a valid `Signed-off-by` line.

See the [DCO2 documentation](https://github.com/cncf/dco2) for details on check output, remediation commits, and optional `.github/dco.yml` configuration.

## Require the check in branch protection

To actually block merges when sign-offs are missing, enable **branch protection** on your default branch (and other protected branches as needed) and **require the DCO2 status check** to pass before merging. See GitHub’s guide on [required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging) and protected branches.

## Maintainer policy: do not bypass DCO

DCO2 may show a **“Set DCO to pass”** control on failed checks. **Maintainers must not use this to mark a pull request as passing** when commits are not properly signed off. Doing so undermines the policy FINOS relies on for contribution provenance. If DCO2’s override remains visible in your repository, treat it as unsupported for routine use; FINOS may remove or hide this option over time.

Projects that want to hide the override UI entirely can set `allowOverrideAction: false` in `.github/dco.yml` as described in the [DCO2 README](https://github.com/cncf/dco2/blob/main/README.md) (note that this only affects the app’s button—not all ways a repository could be misconfigured).

## Getting help

For DCO2 behavior, open an issue on [cncf/dco2](https://github.com/cncf/dco2). For FINOS policy questions, contact [help@finos.org](mailto:help@finos.org).
