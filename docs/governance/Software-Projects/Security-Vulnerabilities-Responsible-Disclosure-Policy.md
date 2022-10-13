---
id: cve-responsible-disclosure
title: FINOS Security Vulnerabilities Responsible Disclosure Policy
---

This document defines a **set of rules and policies established by FINOS to manage the lifecycle of potential vulnerabilities and security incidents within FINOS projects**, aimed to guarantee...

1. Discretion for new and ongoing development activity around security vulnerabilities that haven't been published yet
2. Transparency and guidance around security vulnerabilities that have been identified, patched and released as new versions

It includes step-by-step guides on [how contributors can setup a process to manage security vulnerabilities](#ForFINOSOpenSourceContributors) and [how anyone can privately submit an undisclosed security vulnerability](#ForFINOSOpenSourceConsumers) to a FINOS project.

## What are Common Vulnerabilities and Exposures
The **Common Vulnerabilities and Exposures** (or [CVE](https://cve.mitre.org/cve/)) is a dictionary that provides definitions for publicly disclosed cybersecurity [vulnerabilities](https://cve.mitre.org/about/terminology.html#vulnerability) and [exposures](https://cve.mitre.org/about/terminology.html#exposure), although the term is normally used to identify CVE entries; each entry is comprised of an identification number, a description, and at least one public reference, you can check [an example on the cla-bot project](https://github.com/finos/cla-bot/issues/157). Please note that the term security vulnerability also comprises undisclosed ones, as opposed to CVEs, which only refer to publicly disclosed entries.

## For FINOS Open Source Consumers

**IMPORTANT!** No information should be made public about the vulnerability until it is formally announced at the end of this process. That means, for example that a GitHub Issue must NOT be created to track the issue since that will make the issue public. Also the messages associated with any commits should not make ANY reference to the security nature of the commit.

An overview of the vulnerability handling process is:
1. The reporter reports the vulnerability privately to a FINOS Lead Maintainer.
2. The appropriate project's team members works privately with the reporter to resolve the vulnerability.
3. A new release of the FINOS product concerned is made that includes the fix.
4. The vulnerability is publicly announced.

### Browse security vulnerabilities for a project and release
Security vulnerabilities are published as GitHub Issues marked with the label security vulnerability. You can easily browse through the open and closed ones using the GitHub web UI.

### Submit a new security vulnerability
To submit a new vulnerability, please follow these steps:
1. Identify the FINOS Project (project) related to the security vulnerability.
2. If you cannot find her personal email, please ask [help@finos.org](mailto:help@finos.org)
3. Email the Lead Maintainer privately with the description - and screenshots, if useful - of the vulnerability.

**Sharing information. ** Information may be shared with domain experts (e.g. colleagues at your employer) at the discretion of the project's security team providing that it's made clear the information is not for public disclosure and that [help@finos.org](mailto:help@finos.org) or the Lead Maintainer must be copied on any communication regarding the vulnerability.

## For FINOS Open Source Contributors

**IMPORTANT!** No information should be made public about the vulnerability until it is formally announced at the end of this process. That means, for example that a GitHub Issue must NOT be created to track the issue since that will make the issue public. Also the messages associated with any commits should not make ANY reference to the security nature of the commit.

### FINOS lifecycle
The responsible disclosure ties into [FINOS Project Lifecycle](/docs/governance/Software-Projects/project-lifecycle) in the following items:

- All [Incubating projects](/docs/governance/Software-Projects/stages/incubating) **MUST** have an automated way to manage security vulnerabilities, see below
- All [Active projects](/docs/governance/Software-Projects/stages/active) **MUST** have WhiteSource enabled
- All projects **publishing artefacts under FINOS package registries MUST** have WhiteSource enabled

### Collecting project CVE list
Since all CVE entries are labeled as security vulnerability, it is possible to use GitHub Issues UI to browse them.

### Managing new vulnerabilities
A typical process for handling a new security vulnerability is as follows. Projects that wish to use other processes MAY do so, but **MUST** clearly and publicly document their process and have FINOS team review it ahead of time.

#### Accepting a new vulnerability
1. The person discovering the issue, the reporter, reports the vulnerability privately to the Lead Maintainer and cc's [help@finos.org](mailto:help@finos.org) (or sends the email directly to help@finos.org).
2. The project team sends an e-mail to the original reporter to acknowledge the report, cc to [help@finos.org](mailto:help@finos.org).
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
    d. [help@finos.org](mailto:help@finos.org)
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
