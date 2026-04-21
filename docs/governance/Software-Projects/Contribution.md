---
id: contribution
title: Contributing to FINOS
---
There are several ways you can contribute to our existing projects and SIGs, and [FINOS Members](https://finos.org/members) can propose new projects for contribution. Take a look at the diagram below for an overall picture of how contributions flow into FINOS:

![FINOS Contribution Process](/finos-contribution-process.png)

## Contribution of use cases and ideas to a Special Interest Group (SIG)
If you are looking to contribute a use case or idea, start by searching if there already is [a special interest groups](/docs/governance/special-interest-groups) in that area. SIGs are meant to be arenas for like minded professionals to identify common challenges, pain points and opportunities to then be solved collaboratively in the open.

## Contribution to an existing FINOS project
The easiest way to engage is to contribute code, documentation, test cases, requirements, issues and pull requests, etc. to [projects that are currently within the Foundation](https://landscape.finos.org). 

Before contributing to a project, community members are encouraged to familiarize themselves with a project by doing any or all of the following:

- [Engage](/docs/journey/engage) with the project community via mailing list/slack/github 
- Review the project specific roadmap, area of focus, typically contained in a project Readme.md. 
- Review [good first issue/help wanted issues in the FINOS GitHub organization](https://github.com/search?q=org%3Afinos+is%3Aopen+label%3A%22good+first+issue%22%2C%22help+wanted%22)

> **NOTE**: Forms of contribution that require a contributor to make git commits, and in turn, request those to be merged via pull requests, must comply with the [Contribution Compliance Requirements](Contribution-Compliance-Requirements.md) in place within FINOS.

## Contribution of a new FINOS project or SIG

### FINOS Membership requirement
While everyone can contribute to existing projects, only [FINOS Members](https://finos.org/members) can contribute new projects to FINOS. This ensures sustainability of our ecosystem. If you are not a FINOS Member, consider:

1. Inviting a FINOS Member to be a maintainer of your project and submit on your behalf. You can reach out to our community via our [community@finos.org](mailto:community@finos.org) mailing list to solicit interest.
2. Consider becoming a [FINOS Corporate Member](https://www.finos.org/membership-benefits) to contribute to the sustainability of the ecosystem

> **OPTIONAL**: [FINOS Platinum Members](https://finos.org/members) can also request a so called [Forming stage](/docs/governance/lifecycle-stages/forming). If you are a member and want to explore project formation, please reach out to [FINOS Member Success](mailto:membersuccess@finos.org).

### Pre-Work: Contribution Fitness
First off, you want to evaluate whether the contribution is suitable for a Foundation-hosted open source project, in terms of long term expectations and desire to build a diverse Community of adopters and contributors.

Projects contributed to the Foundation generally start in [Labs stage](/docs/governance/lifecycle-stages/labs), which sets out a set of criteria and maintenance expectations. Contributors are encouraged to evaluate the checklist and ensure they are willing to achieve those criteria before, during and after contribution. 

For more mature projects, at the time of contribution contributors will have an option to evidence compliance with later stages and request the [Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) to award [Incubating](/docs/governance/lifecycle-stages/incubating) or [Graduated](/docs/governance/lifecycle-stages/graduated) stage.

### Step 1: Submit a contribution proposal
Draft a proposal to be reviewed by the FINOS team. Please use the available templates for:
- [Open source software project](https://github.com/finos/community/issues/new?template=software_project_contribution.yml)
- [Open standard / specification project](https://github.com/finos/community/issues/new?assignees=TheJuanAndOnly99%2C+maoo&labels=contribution&template=Standards-Project-Contribution.md&title=%3Cinsert%20name%20here%3E+Standard+Project+Contribution+and+Onboarding)
- [Special Interest Group](https://github.com/finos/community/issues/new?assignees=TheJuanAndOnly99%2C+maoo&labels=contribution&template=Special-Interest-Group-Contribution.md&title=%3Cinsert%20name%20here%3E+SIG+Contribution+and+Onboarding)
  
This will create a new issue on the [FINOS Community Repository](https://github.com/finos/community/issues) and kick off the process. The proposal is meant to cover the following:

1. **Business problem**: the business problem that the proposed contribution solves.
2. **Proposed solution**: how the proposed contribution solves that business problem. For software projects, include a detailed description of the software and its functionality.
3. **Tentative roadmap**: a description of the short and medium term goals and phases of the project, and what success looks like for this project
4. **Current state**: a summary of the contribution's history and status. Include information about the contribution's maturity and roadmap.
5. **Existing materials**: links to and descriptions of any existing project materials (e.g. GitHub repositories). If any materials are currently private, please describe them in detail. The FINOS team will reach out to request access to private materials in order to evaluate them.
6. **Development team**: current contributors, including full name, affiliation, work email address, and GitHub.com username where available.
7. **Contributor commitment**: describe the resources you'll commit to supporting the contribution should it be accepted by the Foundation, in line with the Lifecycle Stage you are applying for. This might include developer time (in FTEs), marketing support, Foundation membership, etc.

To maximize the chances of being accepted, you should provide evidence in your submission of compliance with the criteria and commitment to fulfill ongoing maintenance requirement listed in the [Project Lifecycle](/docs/governance/project-lifecycle).

> **TIP**: To review previous contribution proposals (to see examples, or to see if someone has contributed something similar, etc.) you can search our [Github contribution issues history](https://github.com/finos/community/issues?q=is%3Aissue+label%3Acontribution+). 

### Step 2: Socialization
Once the issue is raised, maintainers should email directly the [community@finos.org](mailto:community@finos.org) ([subscribe here](mailto:community+subscribe@finos.org)) and [TOC](mailto:toc@lists.finos.org) to outline your contribution idea and link to the previously created contribution issue). A simple note pointing to the Github contribution issue and encouraging the FINOS Community and Members to post their support / feedback on the issue will go a long way here.

Below a template provided for you as a starting point to socialize your proposed contribution.
 
```
Subject: New proposed contribution to FINOS: <insert Project Name> - we need your feedback!
 
Body:
 
Dear FINOS Community,
 
I am excited to announce that we have just submitted the contribution of <insert Project Name> <insert project github URL if already open source>. You can find all the details of the contribution at <insert github contribution issue URL>. 
 
<insert brief project description and example use cases>

As the TOC gears up to review the contribution we would love to see your feedback and questions on the issue to express your interest in adopting or even better contributing to the project. Even a thumbs up would be very much appreciated. 

Also please don't hesitate to reach out to me at <insert mailing list / slack / email> if you have any questions.

Thanks in advance for your consideration!

<insert contributor name(s)>
```

> **Note**: while everyone is welcome to contribute to existing projects, **only [FINOS Members](https://finos.org/members) can propose new projects**. If you are not a Member this step is particularly important to identify a Member who could become a sponsor for your project, by being listed in the initial maintainers.

### Step 3: Approval
Once the FINOS team has validated the contribution proposal for completeness, the contribution must go through an approval phase, for alignment with the scope and objectives of the Foundation, viability, perceived interest within the FINOS community. 

Particularly:

- Special Interest Groups and Open Standards, the Governing Board will review and approve the contributions either via an email vote or at the next available meeting.
- For software project contributions, the [Technical Oversight Committee (TOC)](https://github.com/finos/technical-oversight-committee/) will review and approve the contributions.

### Step 4: IP review & Transfer of Contributions
Once a contribution is approved, the Foundation will perform an audit to ensure the contribution is consistent with the [FINOS contribution compliance requirements](Contribution-Compliance-Requirements.md). The main areas covered are:

#### Trademark

-  If the chosen project name and existing logo are found to be risky choices from a trademark standpoint (e.g. they clash with existing marks), the project will be requested to select a new name that does not conflict with any existing marks

-  If the contributor holds a trademark or the project name has been previously used in the public domain (therefore potentially granting the contributor [common law trademark rights](https://www.uspto.gov/learning-and-resources/trademark-faqs#type-browse-faqs_1967), the contributor will be requested to transfer the project trademark to the Linux Foundation by completing a [contribution agreement](/governance-docs/The.Linux.Foundation.--.Form.of.Trademark.Assignment.20221202.pdf). This will allow FINOS to neutrally steward the project consistently with our [Trademark Guidelines](/governance-docs/Trademark-Guidelines.pdf).

#### Intellectual property

The project will be required to:

- Have [contributor license agreements](/docs/governance/Software-Projects/contribution-compliance-requirements#contributor-license-agreement) in place for each maintainer 

- Comply with third-party licenses and the [FINOS acceptable Apache-compatible license policy](/docs/governance/Software-Projects/license-categories).
- Comply with FINOS notice requirements for IP notices, contributor attribution, etc - this can happen right after the contribution (see [incubating criteria](/docs/governance/lifecycle-stages/incubating))

### Step 5: Transfer and Review of Contribution Materials

Following successful IP and trademark compliance, the FINOS infrastructure team will work with the contributing organization to transfer existing code and other materials to the project's collaboration infrastructure (e.g. its GitHub repository, project web site, and/or wiki space) and set for permissions for the initial list of maintainers. This can happen by giving access to an existing DVCS repository to the FINOS team or sending the FINOS team an archive containing the code to be contributed. See [Code Transfer options](/docs/governance/Software-Projects/code-transfer).

It's during this step as well that [code validation and scanning](/docs/development-infrastructure/code-validation/intro) of the code base will be performed, any build processes set up and configured, and the various components documented in the `Project Tooling` section configured and set up for the project, at which point the rest of the Foundation's infrastructure will be available to the project contributors moving forward to use to develop, test and release the project.

### Step 6: Contribution Announcements
Once the transfer and review is complete, it's time to announce the contribution and garner attention and additional contributions from the FINOS community. In order to do so:

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

Besides the technical announcement on list, the FINOS team will recommend to coordinate marketing announcements including:
- Blog posts to announce the contribution on [finos.org/blog](https://www.finos.org/blog) - you can contact our [Marketing](mailto:marketing@finos.org) to propose an article
- Social media announcements - you can reach out to [marketing@finos.org](mailto:marketing@finos.org) to ask for our support in promoting the contribution
- For substantial contributions, especially of those with multiple contributing orgs, FINOS may choose to support contribution announcement with a press release. Contact [marketing@finos.org](mailto:marketing@finos.org) if you think a press release is warranted and co-promotion from your organization.

## Have questions?
If you'd like help, don't hesitate to reach out by email to [help@finos.org](mailto:help@finos.org) or ask the wider community with a note to [community@finos.org](mailto:community@finos.org).
