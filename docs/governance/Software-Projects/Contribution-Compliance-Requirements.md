---
id: contribution-compliance-requirements
title: Contribution Compliance Requirements
---

## Overview
To ensure that FINOS has the legal right to distribute your contribution, the Foundation has three requirements for every contribution:

1. **Contributor License Agreement**. Before contributing for the first time, every contributor (or their employer) must complete the appropriate contributor license agreement.
2. **License information**. Projects and contributions must include certain license information, copyright notices, and other information.
3. **Third-party code compliance**. Contributions that include third-party open source code must comply with applicable licenses and Foundation policies.

## Requirements for Contributions
### Contributor License Agreement
Each contribution to a Foundation open source project must be covered by a contributor license agreement (CLA). This is a legal agreement granting the Foundation the necessary rights (under copyright and patent laws) to distribute the contribution.

If **your employer owns the rights** to your contributions, you should submit a **Corporate Contributor License Agreement (CCLA)** signed by an authorized representative of your employer; if **you alone own the rights** to your contributions, you should sign and submit an Individual Contributor License Agreement (ICLA). [Read more about EasyCLA](EasyCLA.md) and how to proceed with signature.

If you change jobs after contributing to the Foundation under your previous employer's CCLA, please notify [help@finos.org](mailto:help@finos.org) so that we can ensure that an appropriate CLA is in place with you or your new employer.

### License Information
All Foundation projects must include certain license information and copyright notices. If you are contributing a new project, you must include `LICENSE`, and `NOTICE` files, as described below. If you are contributing to an existing project, you may need to add information to the `NOTICE` or (optionally) `CONTRIBUTING` file.

#### The LICENSE file
A `LICENSE` file must be present at the root of each project, and must contain the text of the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt).

#### The NOTICE file
A `NOTICE` file must be present at the root of each project, and must contain the copyright notices of each copyright holder who has contributed to the project. If you are contributing to an existing project, you should add (or update) your copyright notice in the `NOTICE` file. A sample `NOTICE` file (Markdown format) is provided in the [FINOS Software project blueprint](https://github.com/finos/software-project-blueprint). It must also contain any other attributions required by third-party dependencies (see below).  

You should use this template for your `NOTICE` file:
```
[PROJECT_NAME] - FINOS
Copyright [XXXX-XXXX] [Copyright holder 1 - name and email]
Copyright [XXXX-XXXX] [Copyright holder 2 - name and email] ...
Copyright [XXXX-XXXX] [Copyright holder N - name and email]

This product includes software developed at the Fintech Open Source Foundation (https://www.finos.org/).
 
[Other notices, as necessary]
```

#### The CONTRIBUTING file
The `CONTRIBUTING` file contains basic instructions to prospective contributors about how to make a contribution to the project – submitting a CLA, filing issues, making pull requests, etc. A sample `CONTRIBUTING.md` file (Markdown format) is provided in the [FINOS Software project blueprint](https://github.com/finos/software-project-blueprint).  Project leads are free to revise to fit the practices and style of the project, but references to the Foundation's contribution requirements must be included.  While a `CONTRIBUTING` file is not required, we strongly encourage you to add one to your repository as early as possible.

Please note that Github will prompt this content when a user creates an issue or pull request, you can read more on [GitHub Contributing Guidelines](https://github.com/blog/1184-contributing-guidelines).

#### Source code license headers
For [Activation](/docs/governance/Software-Projects/Project-Lifecycle), it's recommended that each source code file should include a license header comment. Most projects use the standard Apache-style header. Note that all copyright notices should go into a separate single `NOTICE.md` file at the root level (i.e., same level as `README.md` and `CONTRIBUTING.md`) of the GitHub/GitLab repository.

```
SPDX-License-Identifier: Apache-2.0
Copyright [yyyy] FINOS [Project Name] contributors - see NOTICE file
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

If space is at a premium, you are welcome to use an abbreviated version like the following:

```
SPDX-License-Identifier: Apache-2.0
Copyright [yyyy] FINOS [Project Name] contributors - see NOTICE file
```

#### SPDX information
We encourage project teams to place a [SPDX-format](https://github.com/david-a-wheeler/spdx-tutorial#spdx-files) `LICENSE.spdx` file in the root of each project. SPDX is a standard for describing machine-readable license information about open source projects. For more information on SPDX, please see the [SPDX website](https://spdx.org/). See below for a basic example `LICENSE.spdx` file. For a tutorial on adding SPDX information to a project, [see here](https://github.com/david-a-wheeler/spdx-tutorial/blob/master/README.md).

```
SPDXVersion: SPDX-2.1
DataLicense: CC0-1.0
Creator: John Smith (jsmith@acme.com)
PackageName: example-project
PackageOriginator: John Smith (jsmith@acme.com)
PackageHomePage: https://github.com/finos-<program name>/example-project
PackageLicenseDeclared: Apache-2.0
```

### Third-Party Code Compliance
If your contribution includes any third-party open source code, the license for that code must permit its use within an Apache-licensed project, and the Foundation's use of the code must comply with the terms of the third-party license.

#### Identifying acceptable licenses
All Foundation projects must be licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) and the license for any third-party code must be compatible with this requirement. The Foundation [categorizes open source licenses in the same way as the Apache Software Foundation](/docs/governance/Software-Projects/License-categories):

- **Category A licenses** have similar terms to the Apache License. Contributions to the Foundation can include (or depend upon) code licensed under Category A licenses.
  - Examples: common variants of the BSD and MIT licenses; the Apache License.
- **Category B licenses** impose restrictions on downstream use of the third-party code, but permit the code to be included in an Apache-licensed project. Typically, these are "weak copyleft" licenses requiring that modifications to the third-party code be licensed "reciprocally" under the same license. Contributions can include (or depend upon) Category B code, but if the code itself is included with the contribution, you should include a notice in the `CONTRIBUTING` file as described below.
  - Examples: the CDDL, EPL, and MPL licenses.
- **Category X licenses** impose restrictions that prevent the code from being included in an Apache-licensed project. Because all Foundation projects must be Apache-licensed, the Foundation does not accept contributions with Category X dependencies.
  - Examples: most proprietary licenses; any version of the GPL, LGPL, or AGPL; Creative Commons Non-Commercial and No-Derivatives licenses.

Projects teams are expected to ensure that the license of each dependency meets these requirements at all times; committers can expedite this by carefully researching each dependency before adding it. Because all incompatibly licensed dependencies must be removed before the Foundation can accept a contribution, contributors should also take care to avoid them during their development on a fork.

#### Including required third-party notices
Depending how your contribution uses third-party open source software, you may need to add notices to the project you're contributing to.

**If your contribution contains third-party code directly** (i.e. not via an import or similar reference resolved by the build system or interpreter) you must include a copy of the applicable license and preserve any copyright notices, license information, disclaimers, and similar notices in the third-party code. You should also add a notice in the following form to the project's file:

`This project includes code from SuperWidget 1.2.3, which is licensed under a BSD-style license. For details, see lib/superwidget/.`

If you have a `LICENSE.spdx` file in your repository, you should also update the PackageLicenseDeclared setting to use the appropriate SPDX license expression for your "mixed license" repository.

**If your contribution contains Category B-licensed code directly**, you must also add a notice in the following form to the project's `NOTICE` file:

`This project contains source code for SuperWidget 1.2.3, which is licensed under the Mozilla Public License, version 1.1. For details, see lib/superwidget/.`

The purpose of this notice is to make contributors aware that their modifications to the Category B code will be governed by the terms of the Category B license.

**If the third-party license requires specific notices**, you must add them to the `NOTICE` file. For example, some open source licenses require that you include a description of any modifications made to the third-party code.

#### Validating license and notice information
When you make a contribution, the Foundation attempts to validate compliance with these requirements automatically using a variety of tools [made available by FINOS](/docs/development-infrastructure/code-validation/intro).

However, no automated tool can resolve these questions definitively, so we depend upon our contributors and project teams to ensure compliance with this policy at all times.
