---
id: contribution
title: Contributing to FINOS
---

![FINOS Contribution Process](/finos-contribution-process.png)

## Contribution of code to an existing FINOS project

The easiest way to engage is to contribute code, documentation, test cases, requirements, issues and pull requests, etc. to projects that are currently within the Foundation. A great place to start is the [good first issues in the FINOS GitHub organization](https://github.com/search?q=org%3Afinos+is%3Aopen+label%3A%22good+first+issue%22&unscoped_q=is%3Aopen+label%3A%22good+first+issue%22).

Before contributing to a project, community members are encouraged to familiarize themselves with a project by doing any or all of the following:

- Attend a couple of project meetings (note: not all projects run regularly scheduled meetings, check out the [Community Calendar](https://calendar.google.com/calendar/ical/finos.org_fac8mo1rfc6ehscg0d80fi8jig%40group.calendar.google.com/public/basic.ics))
- Getting involved in discussions within a project respective [Google Group mailing list](https://groups.google.com/a/finos.org/) or [Slack Channel](https://finos-lf.slack.com/)
- The project specific governance and areas of focus, typically contained in a project Readme.md.

Contributions can take various forms:

- Raising a GitHub/GitLab Issue on code or documentation
- Starting a new discussion thread on email / slack
- Extending and amending documentation (**)
- Actively raising code contributions (**)

** Forms of contribution that require a contributor to make git commits, and in turn, request those to be merged via pull requests, must comply with the [Contribution Compliance Requirements](Contribution-Compliance-Requirements.md) in place within FINOS.

## Contribution of an existing code base into FINOS as a new project

Do you have an existing product, project, or activity that would be a good fit within the FINOS community? Here's how to propose a new contribution.

### Pre-Work: Contribution Fitness
First off, you want to evaluate whether the contribution is suitable for a Foundation-hosted open source project, in terms of long term expectations and desire to build a diverse Community of adopters and contributors. 

Since every Project contributed to the Foundation comes into an [Incubating stage](/docs/governance/Software-Projects/project-lifecycle), a comprehensive set of criteria to review to evaluate contribution fitness is the Incubation checklist.  Contributors are encouraged to evaluate the checklist and ensure they are willing to achieve those criteria before, during and after contribution.

For Projects initiated by FINOS Members, there’s the opportunity to carry out a pre-incubation so called [Formation stage](/docs/governance/Software-Projects/project-lifecycle), where the FINOS team and Members can support the contributor to socialize, gauge interest and ready the project for open sourcing.


### Step 1: Submit a contribution proposal
Draft a proposal to be reviewed by the FINOS team. Please use the available templates for [software projects](https://github.com/finos/community/issues/new?assignees=aitana16%2C+maoo&labels=contribution&template=Software-Project-Contribution.md&title=Software+Project+Contribution+and+Onboarding) and [standards projects](https://github.com/finos/community/issues/new?assignees=aitana16%2C+maoo&labels=contribution&template=Standards-Project-Contribution.md&title=Standard+Project+Contribution+and+Onboarding), which will create a new issue on the [FINOS Github Community](https://github.com/finos/community). The proposal is meant to cover the following:

1. Business problem: the business problem that the proposed contribution solves.
2. Proposed solution: how the proposed contribution solves that business problem. For software projects, include a detailed description of the software and its functionality.
3. Tentative roadmap: a description of the short and medium term goals and phases of the project, and what success looks like for this project
4. Current state: a summary of the contribution's history and status. Include information about the contribution's maturity and roadmap.
5. Existing materials: links to and descriptions of any existing project materials (e.g. GitHub repositories). If any materials are currently private, please describe them in detail. The FINOS team will reach out to request access to private materials in order to evaluate them.
6. Development team: current contributors, including full name, affiliation, work email address, and GitHub.com username where available.
7. Contributor commitment: describe the resources you'll commit to supporting the contribution should it be accepted by the Foundation. This might include developer time (in FTEs), marketing support, Foundation membership, etc.

To review previous contribution proposals (to see examples, or to see if someone has contributed something similar, etc) you can search our [Github contribution issues history](https://github.com/finos/community/issues?q=is%3Aissue+label%3Acontribution+). 

### Step 2: Gauge Community interest 
You are encouraged to email directly to the Community at [community@finos.org](mailto:community@finos.org) ([subscribe here](mailto:community+subscribe@finos.org)) to outline your contribution idea (and link to the previously created contribution issue). If you experience issues, you can reach you directly to the FINOS team at [help@finos.org](mailto:help@finos.org). Note that while everyone is welcome to contribute to existing projects, **only FINOS Members can propose new projects**. If you are not a Member this step is particularly important to identify a Member who could become a sponsor for your project.

#### Compliance review & IP transition
Once a contribution is raised, the Foundation will perform an audit to ensure the contribution is consistent with the [FINOS contribution compliance requirements](Contribution-Compliance-Requirements.md). In addition to having contributor agreements for each contributor, the main steps are:

- Transferring the project trademark to FINOS, or selecting a new name for the FINOS project that does not conflict with any existing marks, so that FINOS can enforce the project's rights consistent with our [Trademark Guidelines](/governance-docs/Trademark-Guidelines.pdf).
- Compliance with third-party licenses and the [FINOS acceptable Apache-compatible license policy](/docs/governance/Software-Projects/license-categories).
- Compliance with FINOS notice requirements for IP notices, contributor attribution, etc - this can happen right after the contribution (see [incubating criteria](/docs/governance/Software-Projects/project-lifecycle))

### Step 3: FINOS Approval
Once legal and IP review is complete, the FINOS team will review the proposal and work with the Governing Board where appropriate to make a decision on approving the project. 

The FINOS team will review your proposal for alignment with the scope and objectives of the Foundation, viability, perceived interest within the FINOS community. The FINOS may contact the submitter for more information during its evaluation, and will typically be providing constant updates on the progress of the approval process.

### Step 4: Transfer and Review of Contribution Materials
Following contribution approval, the FINOS infrastructure team will work with the contributing organization to transfer existing code and other materials to the project's collaboration infrastructure (e.g. its GitHub repository, project web site, and/or wiki space) and set for permissions for the initial list of maintainers. This can happen by giving access to an existing DVCS repository to the FINOS team or Sending the FINOS team an archive containing the code to be contributed. See [Code Transfer options](/docs/governance/Software-Projects/code-transfer).

It's during this step as well that [code validation and scanning](/docs/development-infrastructure/code-validation/intro) of the code base with be performed, any build processes set up and configured, and the various components documented in the `Project Tooling` section configured and set up for the project, at which point the rest of the Foundation's infrastructure will be available to the project contributors moving forward to use to develop, test and release the project.

### Step 5: Contribution Announcements
Once the transfer and review is complete, it's time to announce the contribution and garner attention and additional contribution from our the FINOS community. In order to do so:

We encourage project leads to [email announce@finos.org](mailto:announce@finos.org) - see a couple of [good examples](https://groups.google.com/a/finos.org/forum/#!topic/announce/2LoANL9lzB0) or use the template below and don't be shy!

```
Subject: New Project announcement: <insert Project Name> now Open Source in FINOS
 
Body:
 
Dear FINOS Community,
 
I am excited to announce that <insert Project Name> was successfully contributed to FINOS and hosted at <insert Github URL>.
 
<insert brief project description and example use cases>
 
The most current release is <insert release version>, available for download at <insert download URL or dependency coordinates for different build systems>. Documentation is available at <insert doc site URL> and you can reach out to the project team at <insert email list, chat URL, etc>.
 
Your feedback, issues, and contributions are more than welcome. See <link to contribution information, e.g. CONTRIBUTING.md> for more information on how to contribute and here's a few area where we could use help <insert URL of issues tagged with "good first issue" or "help wanted">
 
Thanks to the FINOS Community for a warm welcome!
 
<insert contributor name(s)>
```

- We welcome blog post on [finos.org/blog](https://www.finos.org/blog) - you can contact our [Marketing](mailto:marketing@finos.org) to propose an article
- Social media support - you can reach out to [marketing@finos.org](mailto:marketing@finos.org) to ask for our support in promoting the contribution
- For substantial contributions, especially of those with multiple contributing orgs, FINOS may choose to support contribution announcement with a press release. Contact [press@finos.org](mailto:press@finos.org) if you think a press release is warranted. 

## Have questions?
If you'd like help, don't hesitate to reach out by email to [help@finos.org](mailto:help@finos.org) or ask the wider community with a note to [community@finos.org](mailto:community@finos.org).
