---
id: incubating
title: FINOS Incubating Projects
---

# Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-incubating.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are in an incubating stage.  To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://community.finos.org/docs/governance/lifecycle-stages/incubating)
```

See here for a list of [FINOS Incubating Projects](https://landscape.finos.org/?group=undefined&view-mode=grid&project=incubating).

# Definition
This stage is for projects with high potential in early growth phase in terms of their functionality, maturity and sustainability. Projects in Incubation will typically have shown demonstrable early adoption and contributions in financial services and are seeking to accelerate their growth. 

During incubation, projects typically evolve towards stable technical designs, develop their openly collaborative processes, and work to grow their developer community.

Incubation projects must comply with a the formal checklist defined by the [Technical Oversight Committee (TOC)](https://github.com/finos/technical-oversight-committee) and, after promotion to incubation, they must also adhere to a Incubation ongoing maintenance requirements.

Incubating projects are hosted under the main [FINOS org](https://github.com/finos).

# Objectives
The Incubation stage continues to nurture projects in their growth phase. The objectives of incubation are to allow the project team continue to growh functionality, adoption and contribution in the open and further figure out their collaborative processes as the community of adopters and contributors grows.

By providing potential consumers of the software with a clear sign that the project is still in growth phase, the project team can also focus on innovation, relatively unburdened by support requests, backwards compatibility concerns, etc.

The ultimate goal for Incubation is meet or exceed the requirements for the Graduated stage, and thereby be ready for graduation, the higher stage of maturity in FINOS. 

To help support this, in this stage they will receive increased FINOS infrastructure, legal, and marketing support to help bolster their visibility and adoption. The Foundation encourages the thoughtful adoption of a variety of [project collaboration services](/docs/collaboration-infrastructure) and [development tools](/docs/development-infrastructure/continuous-integration/intro); our experience has been that these services greatly expedite the creation of high quality, secure and compliant open source projects.

# How to apply for Incubation
To be accepted into the Incubating stage, a project must meet the requirements of the [Incubating Lifecycle Checklist](/docs/governance/lifecycle-stages/incubating#Incubating+Acceptance+Requirements) and [Incubating ongoing maintenance requirements](/docs/governance/lifecycle-stages/incubating#Incubating+Ongoing+Maintenance+Requirements). 

Generally all new projects accepted in FINOS start in the [FINOS Labs](/docs/governance/lifecycle-stages/labs) stage and then apply for promotion to Incubating stage when the project matures. But if, at the time of initial contribution to FINOS, contributors believe a project (e.g. with an existing community) is more mature than a Labs project, they have an option to directly evidence compliance with Incubating requirements.

Below we detail the process for each of the two scenarios. 

## Apply for promotion of a FINOS Labs Project to Incubating
In order for a project to become Incubating, it must be reviewed and the change formally approved by the [Technical Steering Committee](https://github.com/finos/technical-steering-committee). 

Any project maintainer may initiate this request process at any time by opening an [Incubation promotion request](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Incubation.md&title=ProjectName+Incubation+promotion+request) with an information packet demonstrating that they've met the requirements for Incubating.

## Contribution of a new project directly into Incubating stage

If you are a FINOS Member (or you have a FINOS Member maintainer) and would like to contribute an open source or open standard project directly into Incubating stage, please follow the [new Project contribution process](/docs/governance/Software-Projects/contribution#contribution-of-a-new-FINOS-project-or-SIG)

# Requirements

## Incubating Acceptance Requirements

- All [FINOS Labs](/docs/governance/lifecycle-stages/labs) acceptance and maintenance requirements must be met in addition to the following:
- At least **two** maintainers from different organizations, **one** of which must be a [FINOS member](https://finos.org/members)
- Active use by at least two financial services organizations
- At least one detailed end-user adoption story (public or private to the TOC)
- Consistent adherence to the contribution workflow described in the project’s CONTRIBUTING.md
- Project implements the appropriate governance structure according to [FINOS Community Governance](/docs/governance/#community-governance)
- A public roadmap or project backlog with target outcomes and timelines in or linked from the repo

## Incubating Ongoing Maintenance Requirements

The following must remain true for _Incubating_ projects at all times. A Health Review from the TOC should be expected every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for three consecutive Health Reviews, it will qualify for archival.

- All _Incubation_ acceptance requirements and _Labs_ maintenance requirements
- Public tracking of activity using GitHub Issues
- A shortlist of public “Good First Issues” or “Help Wanted” remains accurate and up-to-date
- All open issues and discussions are replied to with reasonable promptness
- Publicly visible adherence to a project roadmap
- Pre-release integration with a [FINOS-approved dependency and license scanner](/docs/development-infrastructure/code-validation/intro)
- Build and release processes do not use any private or undocumented steps
- Presentation once every six months at a public TOC meeting
- Demonstrated adherence to **Maturity Level 2** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

# Transition out of Incubation
As projects become more mature they have several options to progress:

1. Graduate into FINOS Graduated stage by [requesting graduation](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Graduation.md&title=projectName+Graduation+Request). Mature projects may request graduation quickly. In fact there are no expectations or requirements for how long projects incubate, provided they are being actively developed.
2. Graduate to another LF foundation (if scope / audience has grown beyond finance)
3. Transition into FINOS Archived stage by [requesting archival](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Archival.md&title=projectName+Archival+Request) if the project is no longer actively developed. This is an important FINOS maintainer hygiene duty. 

# Notes for Consumers and other Evaluators
If you're evaluating Foundation-hosted open source projects and see the Incubating badge shown above, here are some of the things you should expect should you choose to download and use the software:

* The software is in its early adoption phase, from a functional perspective or a quality (security, compliance, testing) perspective.
* The code is under active development, so you should expect a rapid rate of changes.
* The community is in growth mode, therefore it might still be reliant of a limited set of core contributors. You can evaluate project health metrics using [LFX Insights](https://insights.linuxfoundation.org/). 