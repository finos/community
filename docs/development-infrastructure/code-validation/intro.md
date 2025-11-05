---
id: intro
title: Code Validation
---

In order to assess Security, Quality and Legal compliance of software hosted by the Foundation, project leads and committers can configure integrations with third-party systems that are provided by the Foundation; the result of these processes can be published in the project's documentation to improve the final consumer experience and when requesting activation.

Below is the list of code validation systems currently available, across supported languages and validation features.

## Security vulnerabilities responsible disclosure
Read the [FINOS security vulnerabilities responsible disclosure](/docs/governance/Software-Projects/cve-responsible-disclosure) document to know how security incidents are managed across FINOS projects. Use [WhiteSource](/docs/development-infrastructure/code-validation/whitesource) to configure your FINOS project for automated scanning.

## Matrix of validation features and supported languages

| Features | C# | Clojure | Java | Javascript | Python |
|--- | :---: | :---: | :---: | :---: | :---: |
| **Legal compliance** | 
| Check libraries for problematic/undefined licenses | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| Generates legal reports | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| **Security** |
| Scans code for security vulnerabilities | [FINOS Code Scanning](https://github.com/finos/code-scanning), [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | [FINOS Code Scanning](https://github.com/finos/code-scanning) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [CodeClimate](codeclimate), [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [CodeClimate](codeclimate), [NodeSecurity](nodesecurity),[SonarCloud](sonarcloud) | [FINOS Code Scanning](https://github.com/finos/code-scanning) |
| Check libraries for security vulnerabilities | [FINOS Code Scanning](https://github.com/finos/code-scanning), [WhiteSource](whitesource) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [WhiteSource](whitesource) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [WhiteSource](whitesource) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [WhiteSource](whitesource), [BitHound](bithound) | [FINOS Code Scanning](https://github.com/finos/code-scanning), [WhiteSource](whitesource) |
| **Quality** | | | | | |
| Measures test coverage | [SonarCloud](sonarcloud) | | [CodeClimate](codeclimate),[SonarCloud](sonarcloud) | [CodeClimate](codeclimate), [SonarCloud](sonarcloud) | |
| Check libraries for bugs | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
| Check libraries for outdated versions | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
| Check unused libraries | | | | [BitHound](bithound) | |
| Check libraries for release activity | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| Scans code for hacks and todos | | | | [BitHound](bithound) | |
| Scans code for bad practices | [CoverityScan](coverityscan) | | [CodeClimate](codeclimate), [CoverityScan](coverityscan) | [CodeClimate](codeclimate) | |
| Scans code for bugs | [CoverityScan](coverityscan) | | [CoverityScan](coverityscan) | | |

## Continuous validation

FINOS provides a set of tools, specifically GitHub Apps and Actions, that enforce a continuous scanning across the FINOS GitHub repositories.

### CLA 

To help project leads validate external contributor's identity and capacity to contribute code to the Foundation please visit https://community.finos.org/docs/governance/Software-Projects/EasyCLA/ to know more about FINOS CLAs. 

### Project compliance scan
FINOS have developed a tool that scans all the GitHub repositories across all FINOS orgs and generates a report based on the following quality and compliance validations:
- `has-admin` - One or more admin collaborators were found in this GitHub repository. FINOS Governance doesn't allow GitHub users to have Admin rights on repositories, therefore it must be removed.
- `has-user` - One or more user collaborators were found in this GitHub repository. FINOS Governance only allows GitHub users to be added via Teams. Please remove it, therefore it must be removed.
- `disabled-issues` - This GitHub repository does not have GitHub Issues enabled; make sure that there is a documented way to submit questions, feature requests and other communications to the project team.
- `no-teams` - This GitHub repository does not grant permissions to any FINOS Team, although it should be configured to grant access to project maintainers defined as [GitHub Teams](https://github.com/orgs/finos/teams). Please email help@finos.org and coordinate changes to the repository access permissions.
- `no-issue-templates` - This GitHub repository does not use issue templates; please check the [issue template blueprints](https://github.com/finos/software-project-blueprint/tree/master/.github/ISSUE_TEMPLATE).
- `no-contributing` - `CONTRIBUTING.md` file is missing; check the [CONTRIBUTING.md template](https://github.com/finos/software-project-blueprint/blob/master/.github/CONTRIBUTING.md).
- `no-code-conduct` - `CODE_OF_CONDUCT.md` file is missing; check the [CODE_OF_CONDUCT.md template](https://github.com/finos/software-project-blueprint/blob/master/.github/CODE_OF_CONDUCT.md).
- `notice-nok` - `NOTICE` file is incomplete; check line 4 of the [NOTICE template](https://github.com/finos/software-project-blueprint/blob/master/NOTICE).
- `no-notice` - `NOTICE` file is missing; check the [NOTICE template](https://github.com/finos/software-project-blueprint/blob/master/NOTICE).
- `no-readme` - `README.md` file is missing; check the [README.md template](https://github.com/finos/software-project-blueprint/blob/master/README.template.md).
- `no-description` - This GitHub repository does not have a general description defined; the `Edit` button is seen when on the repositories main page, which is the `Code` tab.
- `is-archivable` - This repository belongs to project `{{project-name}}` which is archived, therefore the GitHub repository is expected to be archived too. @finos-staff will get in touch with the project lead to sort it out.
- `readme-nok` - `README.md` file is incomplete; check the [README.md template](https://github.com/finos/software-project-blueprint/blob/master/README.template.md) and make sure that `## Contributing` and `## License` sections exist.
- `no-badge` - `README.md` file is missing the FINOS badge; check the [README.md template](https://github.com/finos/software-project-blueprint/blob/master/README.template.md) and make sure that it embeds one of SVG FINOS badges.
- `wrong-badge` - Our internal records state that this project is in `{{project-state}}` state, whereas `README.md` states `{{readme-state}}`; make sure that `README.md` embeds the right FINOS badge.
- `repo-not-on-file` - We don't have this repository on file. We will fix this issue on our side as soon as possible and keep you posted.
- `no-whitesource` - WhiteSource configuration was not found; make sure that dependencies are scanned against security vulnerabilities. Read more on [the WhiteSource page](/docs/development-infrastructure/code-validation/whitesource).

Code is publicly available on https://github.com/finos/metadata-tool, the command to invoke is `check-project-repos`.

#### Ignoring validations
There may be corner cases, for example repositories that contain data don't need whitesource integration. In those cases, it is possible to define a `.finos-blueprint.json` file in the root folder, with the following structure:
```
{
  "ignore" : [
    "no-whitesource",
    "readme-nok"
  ]
}
```

#### Exporting to CSV

Here's a useful command to transform the metadata-tool JSON output in CSV.
```
cat finos-repo-validation.json| jq -r '.[] | [.org, .["repo-name"], .validations["has-admin"], .validations["has-user"], .validations["no-teams"], .validations["no-issues"], .validations["no-issue-templates"], .validations["no-contributing"], .validations["no-code-conduct"], .validations["notice-nok"], .validations["no-notice"], .validations["no-readme"], .validations["no-description"], .validations["is-archivable"], .validations["readme-nok"], .validations["no-badge"], .validations["wrong-badge"], .validations["repo-not-on-file"], .validations["no-whitesource"]] | @csv'
```
