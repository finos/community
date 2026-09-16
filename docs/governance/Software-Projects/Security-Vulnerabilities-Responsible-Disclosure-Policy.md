---
id: cve-responsible-disclosure
title: Vulnerability Disclosure Policy
description: "Responsible disclosure for FINOS security issues: how reporters, maintainers, and users coordinate fixes, embargoes, and public communication about CVEs."
---
:::caution
Currently, FINOS does not operate a bug bounty program, and does not offer rewards or compensations of any kind in exchange for submitting potential bugs, issues or vulnerabilities.
:::

FINOS defines a **set of rules to manage the lifecycle of potential vulnerabilities and security incidents within FINOS projects**. Our goal is to guarantee:

1. Discretion for new and ongoing development activity around undisclosed security vulnerabilities
2. Transparency and guidance around security vulnerabilities that have been identified, patched and released as new versions

We have step-by-step guides on [how contributors can manage security vulnerabilities](#for-finos-open-source-contributors) and [how anyone can privately submit an undisclosed security vulnerability](#for-finos-open-source-consumers) to a FINOS project.

## What are Common Vulnerabilities and Exposures
The **Common Vulnerabilities and Exposures** (or [CVE](https://cve.mitre.org/cve/)) is a dictionary that provides definitions for publicly disclosed cybersecurity [vulnerabilities](https://cve.mitre.org/about/terminology.html#vulnerability) and [exposures](https://cve.mitre.org/about/terminology.html#exposure), although the term is normally used to identify CVE entries; each entry is comprised of an identification number, a description, and at least one public reference, you can check [an example on the cla-bot project](https://github.com/finos/cla-bot/issues/157). Please note that the term security vulnerability also comprises undisclosed ones, as opposed to CVEs, which only refer to publicly disclosed entries.

## For FINOS Open Source Consumers

**IMPORTANT!** No information should be made public about the vulnerability until it is formally announced at the end of this process. Do NOT create a GitHub Issue to track the vulnerability, since that will make the issue public. Commit messages should not make ANY reference to the security nature of the commit.

### Reporting a Vulnerability

In order to report a vulnerability in a FINOS project, follow these steps:

1. Visit the "Security and quality" tab of the project repository, available at `github.com/finos/<project-name>/security`:

    ![Security and quality tab](security-and-quality-tab.png)

2. Carefully read the project's `SECURITY.md` policy, in case any processes override what's described on this page:

    ![Security Policy](security-policy.png)

3. Follow the submission steps in the project's security policy. Usually, this means clicking the "Report a vulnerability" button and filling in the [requested details](#details-to-include).
4. If the project doesn't have a SECURITY.md policy available, submit the vulnerability via email to a project Maintainer (ideally, the Lead Maintainer). You can find contact emails in the project's `MAINTAINERS.md` file. Also, CC the email to [security@finos.org](mailto:security@finos.org).
5. If the project doesn't provide a contact email for a maintainer, submit the report directly to [security@finos.org](mailto:security@finos.org).

**Important: Do NOT make a GitHub issue or discuss the vulnerability through public channels.**

### Details to include

When reporting a vulnerability, it's very helpful to provide as many details as possible, including:

- **Impact:** _What kind of vulnerability is it? Who is impacted?_
- **Patches:** _Has the problem been patched? What versions should users upgrade to?_
- **Workarounds:** _Is there a way for users to fix or remediate the vulnerability without upgrading?_
- **References:** _Are there any links users can visit to find out more?_
- **Screenshots (if applicable):** _Which user flows demonstrate the problem?_

### Vulnerability Remediation Process

1. The project's team members work privately with the reporter to resolve the vulnerability.
2. The affected FINOS project releases a new version including the fix.
3. The vulnerability is publicly announced.

For more details, see how maintainers [Manage new vulnerabilities](#managing-new-vulnerabilities) and how you can contribute to patching the issue.

### Browse security vulnerabilities for a project

Published security vulnerabilities are available in the "Security and quality" tab at the repository's main page, accessible via `github.com/finos/<project-name>/security`.

### Information Sharing

If you would like to share vulnerability information with domain experts (e.g. co-workers), you must first ask the project's Security Team (maintainers, etc.) for permission. It should be made clear that the information is not for public disclosure and that [security@finos.org](mailto:security@finos.org) or the Lead Maintainer must be kept in the loop on any communication regarding the vulnerability.

## For FINOS Open Source Contributors

**IMPORTANT!** No information should be made public about the vulnerability until it is formally announced at the end of this process. Do NOT create a GitHub Issue to track the vulnerability, since that will make the issue public. Commit messages should not make ANY reference to the security nature of the commit.

### Reporting a Vulnerability

Submitting a vulnerability report is identical to the process followed by project Consumers. See [the guide above](#for-finos-open-source-consumers) for reference.

### Setting up responsible disclosure

To start leveraging GitHub's native disclosure and remediation process, you must add a `SECURITY.md` file describing the disclosure process.

This is a sample `SECURITY.md` file that you may edit as appropriate and add to your project; just replace `PROJECT_NAME` and `PROJECT_URL` with your actual name and GitHub URL:

```markdown
# Security Policy

{PROJECT_NAME} supports responsible disclosure of security vulnerabilities and adheres to the [FINOS Security Vulnerabilities Policy](https://community.finos.org/docs/governance/Software-Projects/cve-responsible-disclosure). If you find something you believe to be a security issue in {PROJECT_NAME}, we encourage and appreciate your report. Please report the issue privately to the [project maintainers]({PROEJCT_URL}/blob/main/MAINTAINERS.md) using one of the following methods:

## Reporting a Vulnerability

- **GitHub Security Reports:** In order for the vulnerability reports to reach maintainers as soon as possible, the preferred way is to use the ["Report a vulnerability"]({PROJECT_URL}/security) button under our "Security and quality" tab. This creates a private communication channel between you and the maintainers.
- **Email:** If you are unable to or have strong reasons not to use the GitHub Security vulnerability reporting feature, please email the maintainers directly and CC: [security@finos.org](mailto:security@finos.org) with a description of the vulnerability, along with relevant details (Impact, Patches, Workarounds, References and Screenshots).

## Vulnerability Process

1. **Report the vulnerability privately** using one of the methods above. Do not create a public GitHub Issue or make any public reference to the vulnerability.
2. The project team will acknowledge receipt of your report and triage the issue. If a vulnerability is confirmed, the team will work with you to investigate and resolve it.
3. Once a fix is available, a release will be made and the vulnerability will be publicly disclosed in accordance with the [FINOS policy](https://community.finos.org/docs/governance/Software-Projects/cve-responsible-disclosure).
```

### Collecting project CVE list
Since all CVE entries are labeled as security vulnerability, it is possible to use GitHub Issues UI to browse them.

### Managing new vulnerabilities
A typical process for handling a new security vulnerability is as follows. Projects that wish to use other processes MAY do so, but **MUST** clearly and publicly document their process and have FINOS team review it ahead of time.

#### Accepting a new vulnerability
1. The person discovering the issue, the reporter, reports the vulnerability privately to the Lead Maintainer and cc's [security@finos.org](mailto:security@finos.org) (or sends the email directly to security@finos.org).
2. The project team sends an e-mail to the original reporter to acknowledge the report, cc to [security@finos.org](mailto:security@finos.org).
3. The project team investigates report and either rejects it or accepts it.

#### Working on a fix
1. The project team agrees the fix, the announcement and the release schedule with the reporter. The level of detail to include in the report is a matter of judgement. Generally, reports should contain enough information to enable people to assess the risk associated with the vulnerability for their system and no more. Steps to reproduce the vulnerability are not normally included.
2. The project team commits the fix. No reference should be made to the commit being related to a security vulnerability.
3. The project team creates a release that includes the fix.

#### Apply fixes to all supported versions
As soon as the project team finds and implements a fix for the vulnerability, all supported versions (most likely GitHub branches) can be patched and released.

#### Publishing
1. The project team announces the release.
2. The project team announces the vulnerability. The vulnerability announcement should be sent after, or at the same time as, the release announcement to the following destinations:
    a. GitHub Issues, reporting the following info:
        i. CVE ID in the title
        ii. Apply label security vulnerability
        iii. Specify which library is affected, if any
        iv. Specify code line/block that causes the vulnerability
        v. Specify vulnerability details, including link to CVE description
        vi. Specify fix (high level)
        vii. Specify affected and fixed released versions
    b. The same destinations as the release announcement.
    c. The vulnerability reporter.
    d. [security@finos.org](mailto:security@finos.org)
3. Additional requirements for the emails sent to the above lists are:
    a. The subject must contain the name of the project and the CVE name(s), and should contain a short description of the issue(s), for example `Subject: [CVE-2007-5648] Apache Tomcat information disclosure vulnerability`
    b. The message body must contain details of the vulnerability, similar to what will be sent to The Mitre Corporation in the next step (not just a URL link to the details)
4. Any relevant project documentation page must be updated
5. The log for the Git commit that applied the fix is updated to include the CVE number. Projects that use git as their primary source code control system should not do this as editing a pushed commit causes all sorts of problems.

## Automating security vulnerabilities
FINOS provides multiple tools that adapt to languages and build platforms adopted by the project's codebase, please visit the [code validation page](https://community.finos.org/docs/development-infrastructure/code-validation/intro/). 

## Responsible Disclosure at Apache Software Foundation
We took great inspiration from the work that the Apache Software Foundation have done; we started from there, then adapted processes and contents around our requirements; below the links describing the ASF responsible disclosure.
- https://www.apache.org/security/
- https://www.apache.org/security/committers.html
