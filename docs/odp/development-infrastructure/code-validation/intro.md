---
id: intro
title: Code Validation
---

In order to assess Security, Quality and Legal compliance of software hosted by the Foundation, project leads and committers can configure integrations with third-party systems that are provided by the Foundation; the result of these processes can be published in the project's documentation to improve the final consumer experience and when requesting activation.

Below is the list of code validation systems currently available, across supported languages and validation features.

## Security vulnerabilities responsible disclosure
Read the [FINOS security vulnerabilities responsible disclosure](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/1230176257/Security+vulnerabilities+responsible+disclosure) document to know how security incidents are managed across FINOS projects. Use [WhiteSource](whitesource) to configure your FINOS project for automated scanning.

## Matrix of validation features and supported languages

| Features | C# | Clojure | Java | Javascript | Python |
|--- | :---: | :---: | :---: | :---: | :---: |
| **Legal compliance** | 
| Check libraries for problematic/undefined licenses | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| Generates legal reports | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) |
| **Security** |
| Scans code for security vulnerabilities | [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | | [CodeClimate](codeclimate), [CoverityScan](coverityscan), [SonarCloud](sonarcloud) | [CodeClimate](codeclimate), [NodeSecurity](nodesecurity),[SonarCloud](sonarcloud) | |
| Check libraries for security vulnerabilities | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource) | [WhiteSource](whitesource), [BitHound](bithound) | [WhiteSource](whitesource) |
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

### CLA bot
To help project leads validating external contributor's identity and capacity to contribute code to the Foundation, the Foundation team have deployed an instance of cla-bot, which validates all Pull Requests (PRs) across all FINOS repositories and:

1. Extracts the list of GitHub users who contributed to the PR
2. Matches their identities against FINOS internal identity database
3. Updates the Pull Request with the result of the validation
    a. If ok, adds a cla-signed label
    b. if not ok, posts a comment on the issue and informs 1) the user on how to submit the CLA to FINOS 2) the project lead that the PR cannot be merged.

The CLA bot source code can be found on [https://github.com/finos/cla-bot](https://github.com/finos/cla-bot).

#### PR validation failure
If the CLA Bot finds something wrong in a PR, it will fail the validation checks, showing a visible red mark and (optionally, if configured), block anyone to merge the Pull Request.

#### Re summoning the bot
When a Pull Request gets modified, or a contributors CLA gets added, it can be re-summoned simply adding a comment with the text `@cla-bot[bot] check`.

#### GitLab version
There is a GitLab version of this bot that can be found on [https://github.com/ScottLogic/gitlab-cla-bot](https://github.com/ScottLogic/gitlab-cla-bot); FINOS uses it to run an internal GitLab instance.

#### Email validation
In order to allow the CLA bot to validate a Pull Request, every contributor must ensure that commits are signed with a valid email address, properly configured (and verified) on GitHub. Otherwise, the CLA bot will post the following message:
```
Thank you for your contribution and Welcome to our Open Source Community!

To make sure your pull request is successful, we need all our contributors to be identifiable, but we couldn't parse the GitHub details of the following people : {{unidentifiedUsers}}

Luckily, resolving the issue is straightforward and you can resolve it by following the instructions below.

1. Check your git client is configured with a user email git config --list | grep email

2. If the user email is missing, run the following command, substituting with your git commit email address git config --global user.email email@example.com

3. Make sure your git commit email is configured on GitHub by Setting your Commit Email Address

4. Then, amend the authors in your commit history by using git commit --amend to change your last commit.

Alternatively, use the slightly more complex git reset --soft and git rebase to checkout your changes, rewrite the commit history locally and (force) push changes to the downstream branch.

If you have any issues with the steps above, please email [help@finos.org](mailto:help@finos.org) so we can help you resolve before reviewing and accepting your pull request.

Thanks once again for the contribution and understanding.

_cc_ @finos-admin
```

### Project compliance scan
FINOS have developed a tool that scans all the GitHub repositories across all FINOS orgs and generates a report based on the following quality and compliance validations:
- `has-admin` - One or more admin collaborators were found in this GitHub repository. FINOS Governance doesn't allow GitHub users to have Admin rights on repositories, therefore it must be removed.
- `has-user` - One or more user collaborators were found in this GitHub repository. FINOS Governance only allows GitHub users to be added via Teams. Please remove it, therefore it must be removed.
- `disabled-issues` - This GitHub repository does not have GitHub Issues enabled; make sure that there is a documented way to submit questions, feature requests and other communications to the project team.
- `no-teams` - This GitHub repository does not grant permissions to any FINOS Team, although it should be configured to grant access to project maintainers defined as [GitHub Teams](https://github.com/orgs/finos/teams). Please email help@finos.org and coordinate changes to the repository access permissions.
- `no-issue-templates` - This GitHub repository does not use issue templates; please check the [issue template blueprints](https://github.com/finos/project-blueprint/tree/master/.github/ISSUE_TEMPLATE).
- `no-contributing` - `CONTRIBUTING.md` file is missing; check the [CONTRIBUTING.md template](https://github.com/finos/project-blueprint/blob/master/.github/CONTRIBUTING.md).
- `no-code-conduct` - `CODE_OF_CONDUCT.md` file is missing; check the [CODE_OF_CONDUCT.md template](https://github.com/finos/project-blueprint/blob/master/.github/CODE_OF_CONDUCT.md).
- `notice-nok` - `NOTICE` file is incomplete; check line 4 of the [NOTICE template](https://github.com/finos/project-blueprint/blob/master/NOTICE).
- `no-notice` - `NOTICE` file is missing; check the [NOTICE template](https://github.com/finos/project-blueprint/blob/master/NOTICE).
- `no-readme` - `README.md` file is missing; check the [README.md template](https://github.com/finos/project-blueprint/blob/master/README.template.md).
`no-description` - This GitHub repository does not have a general description defined; the `Edit` button is seen when on the repositories main page, which is the `Code` tab.
- `is-archivable` - This repository belongs to project `{{project-name}}` which is archived, therefore the GitHub repository is expected to be archived too. @finos-staff will get in touch with the project lead to sort it out.
- `readme-nok` - `README.md` file is incomplete; check the [README.md template](https://github.com/finos/project-blueprint/blob/master/README.template.md) and make sure that `## Contributing` and `## License` sections exist.
- `no-badge` - `README.md` file is missing the FINOS badge; check the [README.md template](https://github.com/finos/project-blueprint/blob/master/README.template.md) and make sure that it embeds one of SVG FINOS badges.
- `wrong-badge` - Our internal records state that this project is in {{project-state}} state, whereas `README.md` states `{{readme-state}}`; make sure that `README.md` embeds the right FINOS badge."
   :repo-not-on-file "We don't have this repository on file. We will fix this issue on our side as soon as possible and keep you posted.
- `no-whitesource` - WhiteSource configuration was not found; make sure that dependencies are scanned against security vulnerabilities. Read more on [the WhiteSource Wiki page](https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530440/WhiteSource).

Code is publicly available on https://github.com/finos/metadata-tool, the command to invoke is `check-project-repos`.

#### Reporting via GitHub Issues
*Work in progress - follow https://github.com/finos/open-developer-platform/issues/31*

In order to deliver these reports directly to the teams, the Open Developer Platform have developed a GitHub Action that uses metadata-tool to generate the project reports and submits a GitHub Issue for each GitHub repository where validation problems were spotted; the issue will include a detailed description of the validation done and point the reader on how to resolve it.

This is an example of [auto-generated issue for project compliance](https://github.com/finos/contrib-toolbox/issues/12).

GitHub Action can be found in the [ODP GitHub repo](https://github.com/finos/open-developer-platform/blob/master/.github/workflows/project-blueprint.yml).

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
