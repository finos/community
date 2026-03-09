---
id: graduated
title: Graduated Stage
---

## Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-graduated.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are in a graduated stage. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Graduated](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-graduated.svg)](https://community.finos.org/docs/governance/lifecycle-stages/graduated)
```

See here for a list of [FINOS Graduated Projects](https://landscape.finos.org/?group=undefined&view-mode=grid&project=active). 

## Definition

Graduated represent the highest level of maturity for FINOS projects. Projects awarded the Graduated state are in **the project is now mature in terms of quality, community, sustainability**. Projects in this stage have demonstrable widespread adoption in financial services and a healthy / diverse community of contributors.

They follow best practices for collaborative software development, have mature and well-documented build and release processes, are free of high-risk security vulnerabilities, and maintain thorough documentation.

Virtually all Foundation-hosted projects are expected to strive towards, and ultimately attain, Graduated status. 

This indicates to potential consumers that the project has reached a level of maturity, both functional and non-functional, that represents a solid long term investment.


## Objectives
The objectives of the Graduated lifecycle stage are to for project team to predictably execute on an ongoing roadmap of features and bug fixes informed by feedback from the project's user base, and continue growing its community of adopters and contributors in financial services.

While development activities in this stage are largely established and self-sufficient, in recognition of the achievement and to sustain project adoption, in this stage projects will receive the highest level of visibility FINOS in marketing, events, community engagement platform.


## Initiating Graduation

To graduate into the Graduated stage, a project must meet the requirements of the [Graduated Lifecycle Checklist](/docs/governance/lifecycle-stages/graduated#Graduated+Acceptance+Requirements) and [Graduated ongoing maintenance requirements](/docs/governance/lifecycle-stages/graduated#Graduated+Ongoing+Maintenance+Requirements). 

Any project maintainer may request Graduation by opening a [project graduation request](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Graduation.md&title=projectName+Graduation+request) with an information packet demonstrating that they've met the requirements for activation (see below for details).

## Requirements

### Graduated Acceptance Requirements

- All Incubation maintenance requirements must be met in addition to the following:
- The project has adhered to its roadmap during Incubation
- The project is self-sufficient without significant support from FINOS staff
- Project has made a production-ready major release, and announced it to [announce@lists.finos.org](mailto:announce@lists.finos.org). It's recommended a project deploy a `v1.0.0` or higher version, a generally accepted signal of a stable, production-ready version, before applying.
- Maintainers from at least **three** different organizations, **one** of which must be a FINOS member
- Actively used by at least **five** organizations, with at least **three** from financial services
- **Two** or more end-user adoption stories or case studies that can be publicly shared
- The project must publish and adhere to [FINOS responsible disclosure security policy](/docs/governance/Software-Projects/cve-responsible-disclosure)
- Root-level README.md must contain links to accurate and up-to-date usage and maintenance documentation
- The project [has worked with FINOS Staff](mailto:help@finos.org) to create a community sustainability plan which includes a go-to-market strategy
- Project documentation starts with a clear, unique financial services value proposition

### Ongoing Maintenance Requirements

The following must remain true for _Graduated_ projects at all times. A Health Review from the TOC will be executed every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for three consecutive Health Reviews, it will qualify for archival.

- All feature work adheres to a public roadmap
- Demonstrated progress against the Community Development Plan milestones
- Demonstrated adherence to **Maturity Level 3** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)
- All Graduated project starting from `v1.0.0` upward using [Semantic Versioning](http://semver.org/) ("semver"), specifically must follow the below approach to provide robust expectations for consumers:
   - Increment `MAJOR` version when an incompatible change is made
   - Increment `MINOR` version when new functionality is added in a backwards-compatible manner
   - Increment `PATCH` version when bugs are fixed in a backwards-compatible manner

## Transition out of Graduation
Mature projects that become no longer actively developed should transition into FINOS Archived stage by [requesting archival](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Archival.md&title=projectName+Archival+Request).

This is an important FINOS maintainer hygiene duty. 

## Notes for Consumers and Evaluators
:heavy_check_mark: The Project is high quality, mature from a codebase and community dynamics perspective. 

:dart: The Project produces valuable releases to solve a useful business problem for our Community.

If you're evaluating FINOS project and see the Graduated badge, here are some of the things you should expect should you choose to download and use the software:

- The software is functional and widely adopted in financial services
- The software has high quality - it has met or exceeded all of the Foundation's security and compliance requirements, and has been well tested.
- The installation & upgrade experiences should be relatively smooth - binaries will be available at a minimum, and more advanced deployment options
- The project is well documented.
- The project is supported by an engaged project team. While open source project do not provide a formal SLA (generally provided by commercial vendors supporting the project), bugs and enhancement requests will be triaged and addressed by the team.
- Backwards compatibility is a priority, and [semantic versioning](http://semver.org/) (or similar) is used to clearly communicate breaking changes.
