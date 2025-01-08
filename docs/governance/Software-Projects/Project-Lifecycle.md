---
id: project-lifecycle
title: Lifecycle introduction
---

FINOS projects are categorized by maturity and activity according to the FINOS Project Lifecycle, aliging to the [CNCF maturity](https://github.com/cncf/toc/blob/main/process/README.md) and [repostatus.org status](https://www.repostatus.org/) models. The lifecycle is designed to help users easily determine which projects are appropriate for their use and to give FINOS maintainers a roadmap for progressing their projects. The lifecycle includes two axis, maturity and status:

* Maturity
  * **[Sandbox - finos-labs](https://github.com/finos-labs/)** - experimental or innovative projects that are early in their life
  * **Incubation** - for new (and newly contributed) projects;
  * **Graduated** - for mature, active projects with healthy and diverse contributor communities; and
  * **[Archived](archiving.md)** - for projects that are no longer actively maintained.
* Status (from [repostatus.org](https://www.repostatus.org/))
  *  **Concept** – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.
  *  **WIP** – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.
  *  **Suspended** – Initial development has started, but there has not yet been a stable, usable release; work has been stopped for the time being but the author(s) intend on resuming work.
  *  **Abandoned** – Initial development has started, but there has not yet been a stable, usable release; the project has been abandoned and the author(s) do not intend on continuing development.
  *  **Active** – The project has reached a stable, usable state and is being actively developed.
  *  **Inactive** – The project has reached a stable, usable state but is no longer being actively developed; support/maintenance will be provided as time allows.
  *  **Unsupported** – The project has reached a stable, usable state but the author(s) have ceased all work on it. A new maintainer may be desired.
  *  **Moved** - The project has been moved to a new location, and the version at that location should be considered authoritative. This status should be accompanied by a new URL.

These maturity stages and project statuses are described in greater detail below.

## Maturity

The project maturity is a recognition of scale of governance and community involvement and not a statement on worthiness or usefulness.  Indeed a project may have Active status (active development and usage) but remain in Incubating status due to very fast delivery of the already existing contributors, or a Graduated project with Inactive status due to already having solved the business need and low maintainence requirements.

### Sandbox - finos-labs

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-forming.png" width="150" />

Optionally, before a project is contributed, the FINOS team might work with the contributors and FINOS Members to gauge viability and evaluate interest ahead of contribution as an Incubating project via the use of the [finos-labs](https://github.com/finos-labs/).

### Incubating Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-incubating.png" width="150" />

When a project is first created or contributed, it is automatically placed in the [Incubating stage](/docs/governance/Software-Projects/stages/incubating).
An Incubating project is under active early development and typically has not made its first major release (i.e. version 1.0). During incubation, projects typically experiment heavily with technical designs, standardize their build and release processes, develop their collaborative processes, and work to grow their developer community. Incubating projects are usually not focused on support or backward compatibility.

To be accepted into the Incubating stage, a project must meet the requirements of the [Incubating Lifecycle Checklist](/docs/governance/Software-Projects/stages/incubating) and get approval from the [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/).

### Graduated Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-active.png" width="150"/>

**Graduated** projects are mature open source projects with diverse and active developer communities. They follow best practices for collaborative software development, have mature and well-documented build and release processes, are free of high-risk security vulnerabilities, and maintain thorough documentation. To become active, a project have made or be nearing its first major release and must have two or more independent contributors from different organizations.

To graduate from the Incubating stage, a project must meet the requirements of the [Graduation Lifecycle Checklist](/docs/governance/Software-Projects/stages/graduated) and get approval from the [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/).

### Archived Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-archived.png" width="150"/>

Projects are [Archived](/docs/governance/Software-Projects/stages/archived) when they are no longer actively developed (with a project status of Unsupported or Moved), for any reason. Archived projects may no longer actively address new issues, including security vulnerabilities. Their code and documentation remain available because they may still be useful, but should be used with caution due to the lack of updated.

Projects may be moved to the Archived state from either the Incubating or Graduated states, either upon the request of the project maintainers, or upon a determination by FINOS on the basis of the projects status.

The [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/) provides support to resolve any potential dispute that may occur between project maintainers and who is proposing the transition to archived.

## Project Status

During the life-cycle of even a Graduated project it's possible, even likely, that business need or strategy for further releases and support of a project changes over time.  The Maturity itself hasn't necessarily changed, rather that the level of support may, changing key contributors would be such an occurence.   The projects Status therefore is a signal from either the project team or the TOC for what can be expected in terms of support or future functional releases or indeed security patches providing further information to consumers and potential contributors alike.

### How Project Status and Maturity interact

The repostatus.org [lifecycle](https://www.repostatus.org/lifecycle) focusses on the split between stable and unstable states of delivery:

<img src="https://www.repostatus.org/images/lifecycle.svg" width="550" alt="lifecycle state transitions"/>

The following is a non-exclusive overview of possible project statuses per Maturity level:

| Maturity | Possible Status | Notes |
|--|--|--|
| Sandbox | Concept, WIP, Abandoned, Suspended | The intention should be to Incubate when a degree of stability is reached.  If a project reaches Abandoned status, or remains at Suspended for an extended period of time it will Archived by the TOC |
| Incubating | WIP, Active, Inactive | All Incubated projects will enter WIP status until a stable, usable release is made signalling transition into Active status,  Inactive projects will not be Graduated. * |
| Graduated | Active, Inactive | * |
| Archived | Unsupported, Moved | Inactive projects that still recieve best-efforts support |

\* 'Inactive' Incubating or Graduated projects that continue to have low activity over longer time periods will be subject Maturity re-assesment by the TOC, including possible status change to Unsupported and Archived.

### (Re)Assignment of Status

Project statuses, health metrics and their respective badges are mastered centrally, project teams may raise status change issues, with the TOC approving based on the provide evidence.

A given projects lifecycle status determination is based on agreement between the project team and the FINOS TOC, with the TOC able to override based on colletive recognition of status change (e.g. repeated quarters of low releasses, code or community activity signals the project may be Inactive or Unsupported).
