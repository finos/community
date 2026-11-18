---
id: intro
title: Code Validation
description: "Code validation for FINOS projects: GitHub-native security features, OSV-Scanner, and OpenSSF Scorecard and Security Baseline checks that keep dependencies, code, and releases secure."
---

FINOS projects validate their code with tools that are built into GitHub or that are free and open source.

## Security baseline

Every FINOS lifecycle stage requires adherence to a maturity level of the [Open Source Project Security Baseline (OSPS Baseline)](https://baseline.openssf.org/) from the OpenSSF:

| Stage | OSPS Baseline level |
|:---|:---|
| [Labs](/docs/governance/lifecycle-stages/labs) | Maturity Level 1 |
| [Incubating](/docs/governance/lifecycle-stages/incubating) | Maturity Level 2 |
| [Graduated](/docs/governance/lifecycle-stages/graduated) | Maturity Level 3 |

The tools on this page help you meet Baseline controls such as multi-factor authentication and branch protection (`OSPS-AC`), keeping secrets out of the repository (`OSPS-BR-07`), private vulnerability reporting (`OSPS-VM-03`), and automated dependency (SCA) and static analysis (SAST) checks on every change (`OSPS-VM-05`, `OSPS-VM-06`). Read the [Baseline checklist](https://baseline.openssf.org/) for the full list of controls at each level.

## Security vulnerabilities responsible disclosure
Read the [FINOS security vulnerabilities responsible disclosure](/docs/governance/Software-Projects/cve-responsible-disclosure) document to know how security incidents are managed across FINOS projects. Enable [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository) so that people can report vulnerabilities to maintainers privately, and use [repository security advisories](https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories) to publish fixes and request CVEs.

## Recommended tools

| Feature | Tool | How to enable |
|:---|:---|:---|
| **Dependencies** | | |
| List and track dependencies | [GitHub dependency graph](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) | On by default for public repositories |
| Alert on vulnerable dependencies | [Dependabot alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) | Repository **Settings > Advanced Security** |
| Open PRs that fix vulnerable dependencies | [Dependabot security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates) | Repository **Settings > Advanced Security** |
| Keep dependencies up to date | [Dependabot version updates](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates) | Add a `.github/dependabot.yml` file |
| Scan dependencies for known vulnerabilities in CI | [OSV-Scanner](https://google.github.io/osv-scanner/) | Add the [OSV-Scanner GitHub Action](https://google.github.io/osv-scanner/github-action/) |
| Block PRs that add vulnerable dependencies or disallowed licenses | [Dependency review action](https://github.com/actions/dependency-review-action) | Add a workflow on `pull_request`; set `allow-licenses` to [FINOS approved licenses](/docs/governance/Software-Projects/license-categories) |
| **Code** | | |
| Scan code for security vulnerabilities and bugs | [GitHub CodeQL code scanning](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql) | [Default setup](https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning) in **Settings > Advanced Security** |
| Detect committed secrets and block pushes that contain them | [Secret scanning and push protection](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning) | Repository **Settings > Advanced Security** |
| **Project security posture** | | |
| Check repository security practices (branch protection, pinned dependencies, token permissions and more) | [OpenSSF Scorecard](https://scorecard.dev/) | Add the [Scorecard GitHub Action](https://github.com/ossf/scorecard-action) |
| Self-assess against open source best practices | [OpenSSF Best Practices Badge](https://www.bestpractices.dev/) | Register the project on bestpractices.dev |

These features are free for public repositories. Results from CodeQL, OSV-Scanner, and Scorecard are uploaded in SARIF format and appear together in the repository's **Security** tab, so maintainers can triage them in one place.

### OSV-Scanner

[OSV-Scanner](https://google.github.io/osv-scanner/) checks your lockfiles and manifests against the [OSV.dev](https://osv.dev/) vulnerability database. The [GitHub Action](https://google.github.io/osv-scanner/github-action/) provides two reusable workflows:

- `osv-scanner-reusable-pr.yml` runs on pull requests and reports only the vulnerabilities that the pull request introduces.
- `osv-scanner-reusable.yml` scans the whole repository on a schedule or on pushes to the default branch.

Docusaurus website dependencies are excluded from OSV scans by default with an `osv-scanner.toml` file; see [Project Documentation](/docs/development-infrastructure/project-documentation).

### OpenSSF Scorecard

[OpenSSF Scorecard](https://scorecard.dev/) runs automated checks on a repository's security practices and gives each check a score from 0 to 10. To run it on every push to the default branch, either choose the **OSSF Scorecard** workflow from **Security > Code scanning > Explore workflows**, or add `.github/workflows/scorecard.yml` by following the [Scorecard Action instructions](https://github.com/ossf/scorecard-action). You can then add the Scorecard badge to your `README.md`.

## Continuous validation

### Contributor sign-off

FINOS software projects use the [Developer Certificate of Origin (DCO)](/docs/governance/Software-Projects/dco) by default, enforced on pull requests by the DCO2 GitHub App. Projects that use a Contributor License Agreement instead are checked by [EasyCLA](/docs/governance/Software-Projects/easycla). See the [contribution compliance requirements](/docs/governance/Software-Projects/contribution-compliance-requirements) for details.
