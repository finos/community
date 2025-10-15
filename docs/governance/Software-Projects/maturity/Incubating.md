---
id: incubating
title: FINOS Incubating Projects
---

All projects hosted by the Foundation initially land in incubating state, regardless of their size or level of maturity.  Mature projects may [request Graduation](https://github.com/finos/community/issues/new?template=Project-Graduation.md&title=Project+Graduation) relatively quickly of course, at least compared to projects that are starting from scratch; there are no expectations or requirements for how long projects incubate, provided they are being actively developed.

The Incubation level continues to nurture developing projects, where they will receive FINOS infrastructure, legal, and marketing benefits to help bolster their visibility and adoption. After acceptance, they must also adhere to ongoing maintenance requirements.

## Objectives

The objectives of incubation are to allow the project team to form in the open, figure out their collaborative processes, and start to improve the quality of the code towards meeting the activation criteria.  By providing potential consumers of the software with a clear sign that the project is under construction, the project team can also focus on innovation, unburdened by support requests, backwards compatibility concerns, etc.

Once established, incubating projects are expected to prioritise some or all of the following activities, in approximately this order:
1. Rapid experimentation e.g. with different technical designs, deployment architectures, platforms & capabilities etc.
2. Identification of a preferred technical design.
3. Selection and adoption of an appropriate SDLC and supporting [project infrastructure services](/docs/collaboration-infrastructure).
4. Construction of an implementation timeline or additions to the project roadmap
5. Development and testing.

The ultimate goal being to meet or exceed the requirements for activation, and thereby be ready for promotion to Graduation status.  To help support this, the Foundation encourages the thoughtful adoption of a variety of [project infrastructure services](/docs/collaboration-infrastructure); our experience has been that these services greatly expedite the creation of high quality, secure and compliant open source projects.

## Requirements

### Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-incubating.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are in an incubating stage.  To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://community.finos.org/docs/governance/Software-Projects/maturity/incubating)
```

### Incubation Acceptance Requirements

- All Labs acceptance and maintenance requirements must be met in addition to the following:
- At least **two** maintainers from different organizations, **one** of which must be a FINOS member
- Active use by at least two financial services organizations
- At least one detailed end-user adoption story (public or private to the TOC)
- Consistent adherence to the contribution workflow described in the project’s CONTRIBUTING.md
- Project implements the appropriate governance structure according to FINOS policy
- A public roadmap or project backlog with target outcomes and timelines in or linked from the repo

### Incubation Ongoing Maintenance Requirements

The following must remain true for _Incubating_ projects at all times. A Health Review from the TOC should be expected every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for three consecutive Health Reviews, it will qualify for archival.

- All _Incubation_ acceptance requirements and _Labs_ maintenance requirements
- Public tracking of activity using GitHub Issues
- A shortlist of public “Good First Issues” or “Help Wanted” remains accurate and up-to-date
- All open issues and discussions are replied to with reasonable promptness
- Publicly visible adherence to a project roadmap
- Pre-release integration with a FINOS-approved dependency and license scanner
- Build and release processes do not use any private or undocumented steps
- Presentation once every six months at a public TOC meeting
- Demonstrated adherence to **Maturity Level 2** of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

> **Transparent Governance** is core to FINOS: 
> 
> A project’s discussions, minutes, deliberations, project plans, issue tracking plans for new features, and other artefacts are open, public, and easily accessible in the FINOS Project Infrastructure or FINOS sanctioned external system.

### Releases
An incubating project is allowed to deploy releases while incubating, **provided version numbers are < 1.0.0**.  Only released projects are entitled to label themselves with versions 1.0.0 and above.

Incubating projects may also use ecosystem-appropriate suffixes for **pre-releases** (e.g. `-SNAPSHOT` in the Java ecosystem, or `-alpha`, `-beta`, etc. in the .NET ecosystem), in an effort to support wider contribution.

**NOTE!**
The Foundation strongly recommends the use of [Semantic Versioning](http://semver.org/) ("semver") throughout a project's lifecycle.

## Notes for Consumers and other Evaluators
If you're evaluating Foundation-hosted open source projects and see the incubating badge shown above, here are some of the things you should expect should you choose to download and use the software:

* The software is not guaranteed to be "finished", either from a functional perspective or a quality (security, compliance, testing) perspective.  As a result you should expect to run into bugs and missing features.
* The code is under active development, so you should expect a rapid rate of changes.
* The installation & upgrade experiences may be primitive or non-existent - you may have to build the project yourself simply in order to evaluate it.
* Documentation may be primitive or non-existent.
* Supporting users of the software is not necessarily a priority of the project team yet, so while your feedback (bug reports, etc.) will be gratefully received, it may not be acted upon immediately.
* Backwards compatibility is unlikely to be a priority, so it's likely that breaking changes will appear in various revisions of the project.  You should be especially conscious of this if the project is developer-oriented (a library or SDK) - APIs likely will change repeatedly during incubation.

The above list also suggests ample opportunity for contribution - documentation enhancements, for example, are a great way to contribute back to a project without necessarily having to invest a lot of time in tooling or code comprehension.
