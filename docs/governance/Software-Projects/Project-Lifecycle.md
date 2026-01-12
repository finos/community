---
id: project-lifecycle
title: Finos Project Lifecycle
---

FINOS projects are categorized by maturity and activity according to the FINOS Project Lifecycle.

The lifecycle is designed to help users easily determine which projects are appropriate for their use and to give FINOS maintainers a roadmap for progressing their projects.

The Lifecycle was refined in 2025 after a 12-month exploration process which included historical FINOS learnings, inspiration from the [CNCF Lifecycle](https://github.com/cncf/toc/blob/main/process/README.md) and recommendations from the OpenSSF's [Open Source Project Security Baseline](https://baseline.openssf.org). 

* **[Labs](/docs/governance/Software-Projects/project-lifecycle#labs)** - experimental or innovative projects that are early in their life
* **[Incubating](/docs/governance/Software-Projects/project-lifecycle#incubating)** - young, or mature but newly contributed projects
* **[Graduated](/docs/governance/Software-Projects/project-lifecycle#graduated)** - mature projects with healthy and diverse contributor communities

These maturity levels are described in greater detail below.

Projects may begin their journey at either Labs or Incubating, though the maintenance requirements are higher for higher maturity levels.

_Please note that this page is provided as reference material. In the event that this content appears to conflict with decisions documented in the [official TOC repository](https://github.com/finos/technical-oversight-committee), those decisions are considered authoritative._

## Labs

<img src="https://user-images.githubusercontent.com/327285/230928932-7c75f8ed-e57b-41db-9fb7-a292a13a1e58.svg" width="150" />

Labs projects are in an initial exploratory phase, hosted in a neutral space overseen by FINOS. They must comply with a formal checklist defined by the Technical Oversight Committee (TOC) and enforced by the FINOS team. After acceptance, they must also adhere to a short list of ongoing maintenance requirements.

### Labs Acceptance Requirements

The following factors must be confirmed before the project can be accepted and onboarded as a FINOS Labs Project.

- Project has a clear use case for the financial services industry
- Next steps for development are documented in the README or a linked document
- Project name and logo, if extant, comply with the FINOS trademark requirements; Otherwise a new name / logo is agreed during contribution
- Project's license must comply with the FINOS IP Policy
  - This may be brought into compliance during the contribution process before final onboarding

### Labs Ongoing Maintenance Requirements

The following must remain true for projects at all times. A Health Review may be done by the FINOS TOC or Staff as often as once every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for two consecutive Health Reviews, it will qualify for archival.

- **All _Labs_ acceptance requirements**
- Public FINOS GitHub repository must have development activity since the last Health Review
- Completion of any action items issued to the project following a vote of the TOC
- LICENSE, NOTICE and CONTRIBUTING files conform to FINOS requirements
- All community meetings are run according to FINOS requirements
- The appropriate FINOS Labs Project Status Badge is displayed at the top of the project README
- All official project websites or related assets are owned and hosted by FINOS
- Use of an automated build and release pipeline when releases are made
- Released artifacts must be distributed under a FINOS namespace following language-specific best practices
- Demonstrated adherence to Maturity Level 1 of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

## Incubating

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-incubating.png" width="150" />

The Incubation level continues to nurture developing projects, where they will receive FINOS infrastructure, legal, and marketing benefits to help bolster their visibility and adoption. After acceptance, they must also adhere to ongoing maintenance requirements.

### Incubation Acceptance Requirements

- **All Labs acceptance and maintenance requirements**
- At least **two** maintainers from different organizations, **one** of which must be a FINOS member
- Active use by at least two financial services organizations
- At least one detailed end-user adoption story (public or private to the TOC)
- Consistent adherence to the contribution workflow described in the project’s CONTRIBUTING.md
- Project implements the appropriate governance structure according to FINOS policy
- A public roadmap or project backlog with target outcomes and timelines in or linked from the repo

### Incubation Ongoing Maintenance Requirements

The following must remain true for _Incubating_ projects at all times. A Health Review from the TOC should be expected every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for three consecutive Health Reviews, it will qualify for archival.

- **All _Incubation_ acceptance requirements and _Labs_ maintenance requirements**
- Public tracking of activity using GitHub Issues
- A shortlist of public “Good First Issues” or “Help Wanted” remains accurate and up-to-date
- All open issues and discussions are replied to with reasonable promptness
- Publicly visible adherence to a project roadmap
- Pre-release integration with a FINOS-approved dependency and license scanner
- Build and release processes do not use any private or undocumented steps
- Presentation at a public TOC meeting at least once every six months
- Demonstrated adherence to **Maturity Level 2** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

## Graduated

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-graduated.png" width="150"/>

### Graduated Project Acceptance Requirements

- **All Incubation maintenance requirements**
- The project has adhered to its roadmap during Incubation
- The project is self-sufficient without significant support from FINOS staff
- Project has made a production-ready major release, and announced it to [announce@lists.finos.org](mailto:announce@lists.finos.org)
- Maintainers from at least **three** different organizations, **one** of which must be a FINOS member
- Actively used by at least **five** organizations, with at least **three** from financial services
- **Two** or more end-user adoption stories or case studies that can be publicly shared
- The project must publish and adhere to FINOS-approved security policy
- Root-level README.md must contain links to accurate and up-to-date usage and maintenance documentation
- The project has worked with FINOS Staff to create a community sustainability plan which includes a go-to-market strategy
- Project documentation starts with a clear, unique financial services value proposition

### Ongoing Maintenance Requirements

The following must remain true for _Graduated_ projects at all times. A Health Review from the TOC will be executed every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for three consecutive Health Reviews, it will qualify for archival.

- All _Graduated_, _Incubation_, _Labs_ acceptance requirements as well as _Incubation_ and _Labs_ maintenance requirements
- All feature work adheres to a public roadmap
- Demonstrated progress against the Community Development Plan milestones
- Demonstrated adherence to **Maturity Level 3** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

Graduated projects represent the highest level of project maturity. To achieve Graduated status, projects must meet OSPS Baseline Level 3 requirements in addition to other requirements. In recognition of this achievement, Graduated projects receive a more extensive list of FINOS benefits to further enhance their presence and impact.

## Archived

Projects that are fail to meet their ongoing maintenance requirements may be marked as archived to educate consumers and other potential evaluators.

In this state:

- issues may not be triaged in a timely fashion (or at all), and almost certainly won't be addressed,
- code changes and new software releases are not expected,
- the project team may have disbanded and unresponsive.

Anyone can publicly request to trigger the archival process for a project by [creating a GitHub Issue](https://github.com/finos/community/issues/new?template=Project-Archiviation.md); if the Project Lead Maintainer agrees that archiving is the appropriate course of action, or the project team  does not respond within 14 days, FINOS will proceed with the archival.

Archived projects have no objectives - they are simply retained as-is, in whatever state they were in at the time of archival.

The FINOS team might, however, continue to gauge community interest in reviving the project, and will actively support such activities.

The [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) is responsible for resolving any possible dispute in case of disagreement from project teams and for reporting to the FINOS Governing Board on a quarterly cadence.

### Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-archived.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Archived](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-archived.svg)](https://community.finos.org/docs/governance/Software-Projects/maturity/archived)
```

### Releases

Archived projects are not approved to publish anything, of any kind. If an archived project intends to make publish new or updated artifacts, it must be revived first by going through the contribution process again and being reinstated as an incubating or graduated project.

The Foundation encourages community members to volunteer to revive any archived project, whether they originally contributed it or not. Reviving an existing code base is preferable to creating a competing alternative of the same functionality from scratch.

### Notes for Evaluators

If you're evaluating Foundation-hosted projects and see the archived badge shown above, here are some of the things you should expect should you choose to download and use the software:

- The artifacts (software, standards, etc.) produced by this activity are no longer maintained.  You cannot expect that any issues you raise, or contributions you make, will be triaged, let alone addressed.
- The project may not have ever been released, and therefore may never have achieved significant levels of functionality or quality.
- The project may not have a team any more. Some projects are archived precisely because the team disbanded and no replacements were forthcoming from the community.