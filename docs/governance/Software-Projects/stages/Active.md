---
id: active
title: The Active stage
---

Projects that have been approved for activation transition to the Active state, a formal recognition that **the software is now suitable for production use**.

Virtually all Foundation-hosted projects are expected to strive towards, and ultimately attain, Active  status. This indicates to potential consumers that the project has reached a level of maturity, both functional and non-functional, that it is suitable for production use.

## Objectives
The first priority of a newly Active project is to deploy a `v1.0.0` or higher production-grade version.
The Foundation expects this to occur soon after activation, ideally within one month.

Once a `v1.0.0` is released, the objectives of the Active lifecycle state primarily involve the project team developing and executing on an ongoing roadmap of features and bug fixes, informed by feedback from the project's user base.

## Releases
An Active project can use any version number it wishes, although it is expected that virtually all releases from a released project will be `≥ v1.0.0`.  Ecosystem-specific suffixes may also be used for pre-releases (e.g. `-SNAPSHOT` in the Java ecosystem, or `-alpha`, `-beta`, etc. in the .NET ecosystem).

All Active project starting from `v1.0.0` upward must adhere to the version numbering rules defined by semantic versioning, specifically:
- Increment `MAJOR` version when an incompatible change is made
- Increment `MINOR` version when new functionality is added in a backwards-compatible manner
- Increment `PATCH` version when bugs are fixed in a backwards-compatible manner

**NOTE!**
The Foundation strongly recommends the use of [Semantic Versioning](http://semver.org/) ("semver") throughout a project's lifecycle.

## Initiating Activation
In order for a project to become Active, it must be reviewed and the change formally approved by the Project Lead Maintainer; any project team may initiate this approval process at any time, which involves:
- Preparing an information packet demonstrating that they've met the requirements for activation (see below for details).
- Submitting the packet via the project's GitHub Issue.

## Approval Process
Activation votes are performed by the Project Lead Maintainer, and only after any outstanding questions or clarifications are answered by the project team.

## Requirements

### Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-active.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Active](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-active.svg)](https://community.finos.org/docs/governance/Software-Projects/stages/active)
```

## Activation Lifecycle Checklist
The FINOS team approves lifecycle transitions following objective criteria detailed in the below checklist. More information in the [FINOS Governance](https://github.com/finos/community/tree/master/governance#project-lifecycle).

### What does activation mean for the consumer? 
:heavy_check_mark: The Project is high quality, mature from a codebase and community dynamics perspective. 

:dart: The Project produces valuable releases to solve a useful business problem for our Community.

### What does activation mean for the project team?
:star: Glory in the Community 

:eyes: :loudspeaker: Increased visibility and positioning in FINOS web resources, marketing and Community building efforts like meetups, blog posts, etc.

## Obtaining the OpenSSF Best Practices Badge
The Open Source Security Foundation (OpenSSF) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices. Projects can voluntarily self-certify, at no cost, by using this web application to explain how they follow each best practice.

In order to achieve an Active status, FINOS requires that every project also meets the OpenSSF Best Practices Badge `pass` criteria prior to requesting activation.

You can [get your badge now](https://bestpractices.coreinfrastructure.org/en) or [access the list of criteria](https://github.com/coreinfrastructure/best-practices-badge#summary-of-best-practices-criteria-passing-level); crossovers between the FINOS Activation criteria and the OpenSSF Best Practices Badge are also highlighted in the table below.

:eyes: :loudspeaker: As soon as you start applying for an OpenSSF badge, even prior to full completion, you'll be able to add the markdown syntax to the top of your project's README.md file, as shown in the example below.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5948/badge)](https://bestpractices.coreinfrastructure.org/projects/5948)

# Activation Checklist
|  | **Activation (promotion to Active State)** | How and Where Demonstrated |
|:------ |:----------- |:----------- |
|  | **QUALITY & SECURITY** |   |
| **Development Process** | <p>The Project adopts best-of-breed standards of distributed software development, including but not limited to:</p><ul><li>semantic versioning</li><li>tagging / branch protection</li><li>continuous integration ("CI") and continuous delivery ("CD") where applicable</li></ul><p>If Project Team choses not to use the FINOS provided Open Developer Platform (ODP), a comparable SDLC should be adopted and made available.</p> |  |
| **Build & Release** | <p>The Project code/documentation release process automated or at lest well documented.</p><p>If code is published, publicly redistributed release binaries should be listed or referred to in the documentation (e.g. under the FINOS namespace in an artefact repository or package manager, e.g. NPM, Maven Central, etc.)</p> |   |
| **Security** | <li>No OWASP Top 10 warnings are present in the code</li> <li>No long-standing medium or higher vulnerabilities (2+ months) and proper security disclosure processes</li> <li>Any cryptographic functions and key lengths used within the software should be identified and vetted with Foundation's legal counsel in order to request compliance with U.S. Export policy.</li> Read more about [FINOS Security vulnerabilities responsible disclosure](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/1230176257/Security+Vulnerabilities+Responsible+Disclosure+Policy) and how to [automate scanning with WhiteSource](https://odp.finos.org/docs/development-infrastructure/code-validation/whitesource/). |
| **Documentation** | <p>The README.md must include or reference up to date:</p><ul><li>end user docs, including a description of the software, feature overview, installation & configuration instructions</li><li>developer docs, including links to other external systems (further docs, wiki, CI & validation tools, artefact repository, change log / history, etc.)</li><li>where possible badges (e.g. from shields.io) are encouraged</li><li>sample code explaining how to use the project, library, standard, SDK, etc.</li></ul> |  |
|  | **DIVERSITY & VIABILITY** |       |
| **Community** | Project has active participation from 2+ independent individuals and/or organizations; Ideally Project Team members who make contributions in connection with their employment are doing do as part of their regular job duties. |  |
| **Project Team** | Project Team has/have demonstrated active involvement commitment to the open source project |  |
| **License** | Project must not have dependencies which effectively restrict how the project may be distributed or deployed and must not depend on any proprietary third-party components for their core functionality. |  |
| **Trademark** | Community is using a different established Project name or original contribution trademark is owned by FINOS. All Project related websites and assets are owned and hosted by FINOS. |  |
|  | **ROADMAP & RESOURCES** |       |
| **Progress** | Project has progressed against its public roadmap during incubation. |  |
| **Versioning** | Project software is production grade and ready for large scale consumption. 1.0.0 version was released and announced it to the announce@ mailing list. |  |
| **Roadmap** | Projects share and work to a public roadmap. |  |
| **FINOS Support** | Project Team is largely self-sufficient, requiring minimal operational support from FINOS to govern and maintain the project. FINOS support switches to strategic growth of the Project in the Community. |  |
|  | **GROWTH & ADOPTION** |       |
| **Usefulness** | The Project demonstrably solves a real life use case in the Community. Evidence of adoption beyond the contributing individuals or firms (e.g., in the form of download statistics, listing known deployments or implementations, etc.) |  |
| **Status Badging** | Project Team commits to adopt the FINOS Active badge in the README.md once the FINOS team approves activation, in order to properly signal the new Project Lifecycle status to adopters. |  |
|  | **HYGIENE & OPERATIONS** |       |
| **Compliance** | The appropriate license text is included in each source file's header. See details and template |  |
| **Community Inquiries** | Community inquiries on the project channels (mailing lists, issues and pull requests, etc) are generally promptly answered |   |
| **Meeting Hygiene** | If the project meets regularly on-line, the Project Team has demonstrated a track record of publishing and distributing agenda no less than 24 hours before the meeting, and publishes meeting minutes after calls. |  |
| **Transparency** | Project Team has adopted a transparent governance model(*) consistent with FINOS Community governance. Work for new contributors is organized into issues within a public issue tracking system, as appropriate, tagged as "Good First Issues" |  |

_(*) transparent governance model is when a project’s discussions, minutes, deliberations, project plans, issue tracking plans for new features, and other artefacts are open, public, and easily accessible in the FINOS Project Infrastructure or FINOS sanctioned external system._
## Notes for Evaluators
If you're evaluating Foundation-hosted open source projects and see the released badge shown above, here are some of the things you should expect should you choose to download and use the software. 

- The software is functional, though perhaps minimally viable.
- The software has high quality - it has met or exceeded all of the Foundation's security and compliance requirements, and has been well tested.
- The installation & upgrade experiences should be relatively smooth - binaries will be available at a minimum, and more advanced deployment options (installers, containers, VM images, automated upgrade scripts etc.) may also be available.
- The project is well documented.
- The project is supported by an engaged project team. While there may not be a formal SLA (depending on the availability of commercial support for the project), bugs and enhancement requests will be triaged and addressed by the team.
- Backwards compatibility is a priority, and [semantic versioning](http://semver.org/) (or similar) is used to clearly communicate breaking changes.
