---
id: active
title: The Active stage
---

Projects that have been approved for activation or graduation (aka transition to the Active state), a formal recognition that **the project is now mature in terms of quality and community**.

Virtually all Foundation-hosted projects are expected to strive towards, and ultimately attain, Active (or Graduated, or Top-Level) status. This indicates to potential consumers that the project has reached a level of maturity, both functional and non-functional, that represents a solid long term investment.

## Objectives
The objectives of the Active lifecycle state primarily involve the project team developing and executing on an ongoing roadmap of features and bug fixes, informed by feedback from the project's user base. It's also recommended an Active project deploy a `v1.0.0` or higher version, a generally accepted signal of a stable, production-ready version.

## Releases
An Active project can use any version number it wishes, although generally releases from an Active project will be `≥ v1.0.0`.  Ecosystem-specific suffixes may also be used for pre-releases (e.g. `-SNAPSHOT` in the Java ecosystem, or `-alpha`, `-beta`, etc. in the .NET ecosystem).

All Active project starting from `v1.0.0` upward must adhere to the version numbering rules defined by [Semantic Versioning](http://semver.org/) ("semver"), specifically:
- Increment `MAJOR` version when an incompatible change is made
- Increment `MINOR` version when new functionality is added in a backwards-compatible manner
- Increment `PATCH` version when bugs are fixed in a backwards-compatible manner

## Initiating Activation
In order for a project to become Active, it must be reviewed and the change formally approved by the [Technical Oversight Committee](https://github.com/finos/technical-oversight-committee); any project maintainer may initiate this approval process at any time, but opening a [project activation issue](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Activation.md&title=Project+Activation) with an information packet demonstrating that they've met the requirements for activation (see below for details).

## Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-active.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Active](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-active.svg)](https://community.finos.org/docs/governance/Software-Projects/stages/active)
```

## What does activation mean for the consumer? 
:heavy_check_mark: The Project is high quality, mature from a codebase and community dynamics perspective. 

:dart: The Project produces valuable releases to solve a useful business problem for our Community.

## What does activation mean for the project team?
:star: Glory in the Community 

:eyes: :loudspeaker: Increased visibility and positioning in FINOS web resources, marketing and Community building efforts like meetups, blog posts, etc.

## Activation Checklist
|  | **Activation (promotion to Active State)** | How and Where Demonstrated |
|:------ |:----------- |:----------- |
|  | **QUALITY & SECURITY** |   |
| **Development Process** | <p>The Project adopts best-of-breed standards of distributed software development, including but not limited to:</p><ul><li>semantic versioning</li><li>tagging / branch protection</li><li>continuous integration ("CI") and continuous delivery ("CD") where applicable</li></ul> |  |
| **Build & Release** | <p>The Project code/documentation release process automated or at lest well documented.</p><p>If code is published, publicly redistributed release binaries should be listed or referred to in the documentation (e.g. under the FINOS namespace in an artefact repository or package manager, e.g. NPM, Maven Central, etc.)</p> |   |
| **Security** | <li>The project has an [OpenSSF "Passing" badge](#obtaining-the-openssf-best-practices-badge) </li> <li>Maintainers are familiar with the [FINOS Security vulnerabilities responsible disclosure](../cve-responsible-disclosure)</li><li>An automated security scanning tool is enabled on the project (e.g. [FINOS Security Scanning](https://www.finos.org/blog/introducing-finos-security-scanning) or [WhiteSource](/docs/development-infrastructure/code-validation/whitesource))</li>
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
| **Compliance** | The appropriate license text is included in each source file's header. [See details and template](https://www.apache.org/licenses/LICENSE-2.0.html#apply). |  |
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

## Obtaining the OpenSSF Best Practices Badge
The Open Source Security Foundation (OpenSSF) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices. Projects can voluntarily self-certify, at no cost, by using this web application to explain how they follow each best practice.

In order to achieve an Active status, FINOS requires that every project also meets the OpenSSF Best Practices Badge `pass` criteria prior to requesting activation.

You can [get your badge now](https://bestpractices.coreinfrastructure.org/en) or [access the list of criteria](https://github.com/coreinfrastructure/best-practices-badge#summary-of-best-practices-criteria-passing-level); crossovers between the FINOS Activation criteria and the OpenSSF Best Practices Badge are also highlighted in the table below.

:eyes: :loudspeaker: As soon as you start applying for an OpenSSF badge, even prior to full completion, you'll be able to add the markdown syntax to the top of your project's README.md file, as shown in the example below.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5948/badge)](https://bestpractices.coreinfrastructure.org/projects/5948)
