---
id: graduated
title: FINOS Graduated Projects
---

Projects that have been approved for graduation (aka transition to the Graduated state), a formal recognition that **the project is now mature in terms of quality and community**.

Virtually all Foundation-hosted projects are expected to strive towards, and ultimately attain, Graduated status. This indicates to potential consumers that the project has reached a level of maturity, both functional and non-functional, that represents a solid long term investment.

Graduated projects represent the highest level of project maturity. To achieve Graduated status, projects must meet OSPS Baseline Level 3 requirements in addition to other requirements. In recognition of this achievement, Graduated projects receive a more extensive list of FINOS benefits to further enhance their presence and impact.

## Objectives
The objectives of the Graduated lifecycle state primarily involve the project team developing and executing on an ongoing roadmap of features and bug fixes, informed by feedback from the project's user base. It's also recommended a Graduated project deploy a `v1.0.0` or higher version, a generally accepted signal of a stable, production-ready version.

## Releases
A Graduated project can use any version number it wishes, although generally releases from a Graduated project will be `≥ v1.0.0`.  Ecosystem-specific suffixes may also be used for pre-releases (e.g. `-SNAPSHOT` in the Java ecosystem, or `-alpha`, `-beta`, etc. in the .NET ecosystem).

All Graduated project starting from `v1.0.0` upward must adhere to the version numbering rules defined by [Semantic Versioning](http://semver.org/) ("semver"), specifically:
- Increment `MAJOR` version when an incompatible change is made
- Increment `MINOR` version when new functionality is added in a backwards-compatible manner
- Increment `PATCH` version when bugs are fixed in a backwards-compatible manner

## Initiating Graduation
In order for a project to become Graduated, it must be reviewed and the change formally approved by the [Technical Steering Committee](https://github.com/finos/technical-steering-committee); any project maintainer may initiate this approval process at any time, but opening a [project graduation issue](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Graduation.md&title=Project+Graduation) with an information packet demonstrating that they've met the requirements for activation (see below for details).

## Requirements

### Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-active.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Graduated](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-active.svg)](https://community.finos.org/docs/governance/Software-Projects/maturity/graduated)
```

### Graduated Project Acceptance Requirements

- All Incubation maintenance requirements must be met in addition to the following:
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

- All feature work adheres to a public roadmap
- Demonstrated progress against the Community Development Plan milestones
- Demonstrated adherence to **Maturity Level 3** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

## What does graduation mean for the consumer? 
:heavy_check_mark: The Project is high quality, mature from a codebase and community dynamics perspective. 

:dart: The Project produces valuable releases to solve a useful business problem for our Community.

## What does graduation mean for the project team?
:star: Glory in the Community 

:eyes: :loudspeaker: Increased visibility and positioning in FINOS web resources, marketing and Community building efforts like meetups, blog posts, etc.

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

In order to achieve a Graduated status, FINOS requires that every project also meets the OpenSSF Best Practices Badge `pass` criteria prior to requesting graduation.

You can [get your badge now](https://bestpractices.coreinfrastructure.org/en) or [access the list of criteria](https://github.com/coreinfrastructure/best-practices-badge#summary-of-best-practices-criteria-passing-level); crossovers between the FINOS Graduation criteria and the OpenSSF Best Practices Badge are also highlighted in the table below.

:eyes: :loudspeaker: As soon as you start applying for an OpenSSF badge, even prior to full completion, you'll be able to add the markdown syntax to the top of your project's README.md file, as shown in the example below.

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5948/badge)](https://bestpractices.coreinfrastructure.org/projects/5948)


