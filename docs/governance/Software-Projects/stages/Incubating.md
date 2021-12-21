---
id: incubating
title: The Incubating stage
---

All projects hosted by the Foundation initially land in incubating state, regardless of their size or level of maturity.  Mature projects may [request activation](https://github.com/finos/community/issues/new?template=Project-Activation.md&title=Project+Activation) relatively quickly of course, at least compared to projects that are starting from scratch; there are no expectations or requirements for how long projects incubate, provided they are being actively developed.

## Objectives

The objectives of incubation are to allow the project team to form in the open, figure out their collaborative processes, and start to improve the quality of the code towards meeting the activation criteria.  By providing potential consumers of the software with a clear sign that the project is under construction, the project team can also focus on innovation, unburdened by support requests, backwards compatibility concerns, etc.

Once established, incubating projects are expected to prioritise some or all of the following activities, in approximately this order:
1. Rapid experimentation e.g. with different technical designs, deployment architectures, platforms & capabilities etc.
2. Identification of a preferred technical design.
3. Selection and adoption of an appropriate SDLC and supporting [project infrastructure services](https://odp.finos.org/docs/project-collaboration).
4. Construction of an implementation timeline or add to the Program Roadmap
5. Development and testing.

The ultimate goal being to meet or exceed the requirements for activation, and thereby be ready for promotion to Active status.  To help support this, the Foundation encourages the thoughtful adoption of a variety of [project infrastructure services](https://odp.finos.org/docs/project-collaboration); our experience has been that these services greatly expedite the creation of high quality, secure and compliant open source projects.

## Requirements

### Badge

<img src="https://github.com/finos/contrib-toolbox/blob/master/images/badge-incubating.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are incubating.  To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://github.com/finos/community/blob/master/governance/Software-Projects/Project-Lifecycle.md#incubating-projects)
```

### Releases
An incubating project is allowed to deploy releases while incubating, **provided version numbers are < 1.0.0**.  Only released projects are entitled to label themselves with versions 1.0.0 and above.

Incubating projects may also use ecosystem-appropriate suffixes for **pre-releases** (e.g. `-SNAPSHOT` in the Java ecosystem, or `-alpha`, `-beta`, etc. in the .NET ecosystem), in an effort to support wider contribution.

**NOTE!**
The Foundation strongly recommends the use of [Semantic Versioning](http://semver.org/) ("semver") throughout a project's lifecycle.

## Incubating Lifecycle Checklist

The table below presents a consolidate checklist for contributors to guide the decision to accept a new contribution into Incubation (all Projects get contributed into Incubating state):

| Check       | Description |
| ----------- | ----------- |
| What it means for consumers? | The Project is at early stages of maturity, across quality, community dynamics and value. |
| What it means for the Project Team? | All Projects enter in Incubating state so this is a good checklist for a new contribution which contributors can use to discuss approval of a new Project.  |
| **QUALITY & SECURITY** |
| Development Process | The current contributor(s) commit to adopt a development process suitable for distributed development -- i.e., well established ways of working in successful open source projects, like automated builds, CI/CD and maintaining a public backlog of issues. Access and support for the FINOS [project infrastructure](odp.finos.org) is offered free of charge to all Project Teams for this purpose. |
| Build & Release | If pre-existing software is contributed and there is a build process required to make software work, that build should work successfully as documented using publicly available artefacts. 
Security | No high or critical vulnerabilities are discovered by scanning systems during FINOS contribution due diligence or they are resolved before the code base is brought into FINOS. Read more about [FINOS Security vulnerabilities responsible disclosure](https://github.com/finos/community/blob/master/governance/Software-Projects/Security-Vulnerabilities-Responsible-Disclosure-Policy.md) and how to [automate scanning with WhiteSource](https://odp.finos.org/docs/development-infrastructure/code-validation/whitesource). |
| Documentation | The `README.md` must include a description of the idea or how to use and build any pre-existing contributed software. |
| **DIVERSITY & VIABILITY** |
| Community | The Project Team seeks more contributions, as well as wider adoption and feedback; the Project has a good idea of tasks (e.g. "good first issue) for new contributors to work on. |
| Project Team | One or more initial contributors, agree to form the initial Project Team and are able to further maintain the code base and work with prospective contributors. |
| License | Project is Apache v2 licensed or one of the [Category A licenses](https://github.com/finos/community/blob/master/governance/Software-Projects/License-categories.md#category-a). If your Project uses another license please get in touch with [help@finos.org](mailto:help@finos.org). |
| Trademark | Contributors choose a different name for the contributed Project or commit to transfer to FINOS the original contribution trademark and all related assets (web domains, websites, etc). |
| **ROADMAP & RESOURCES** |
| Progress | New Projects might involve existing code, but can also be an idea or proof of concept which gets developed and accelerate in the Open. |
| Versioning | Projects releases versions below 1.0.0 (or equivalent based on existing number scheme used in project). |
| Roadmap | The Project Team commits to building and working towards a public roadmap, aligned with the overall program Roadmap. |
| FINOS Support | The Project Team can work with FINOS to identify areas where they may need further help and support form the Community and the FINOS team |
| **GROWTH & ADOPTION** |
| Usefulness | The contributed code or idea has the potential to be useful to end users and organizations in the financial industry (even if the code base / project is not necessarily finance-specific)
Status Badging | Project Team is ready to adopt the FINOS Incubating badge in the `README.md` once contribution is approved |
| **HYGIENE & OPERATIONS** |
| Compliance | Before or during contribution, Project should work with the FINOS team to comply with the [FINOS contribution compliance requirements](https://github.com/finos/community/blob/master/governance/Software-Projects/Contribution-Compliance-Requirements.md), including `LICENSE`, `NOTICE` and `CONTRIBUTING` files are present and correct. Checkout [FINOS Software Project Blueprint](https://odp.finos.org/docs/project-collaboration/#finos-project-blueprint) |
| Community Inquiries | The project team commits to answer to Community inquiries on the project channels (mailing lists, issues and pull requests, etc) | 
| Meeting Hygiene | If the Project holds meetings, the Project Team commits to preparing and distributing agenda and as meeting minutes in accordance to guidelines to run good meetings. |
| Transparency | Project Team commits to work with FINOS to implement a transparent governance model(*) and publish a roadmap for the project towards activation. |

> (*) transparent governance model is when a project’s discussions, minutes, deliberations, project plans, issue tracking plans for new features, and other artefacts are open, public, and easily accessible in the FINOS Project Infrastructure or FINOS sanctioned external system.

## Notes for Consumers and other Evaluators
If you're evaluating Foundation-hosted open source projects and see the incubating badge shown above, here are some of the things you should expect should you choose to download and use the software:

* The software is not guaranteed to be "finished", either from a functional perspective or a quality (security, compliance, testing) perspective.  As a result you should expect to run into bugs and missing features.
* The code is under active development, so you should expect a rapid rate of changes.
* The installation & upgrade experiences may be primitive or non-existent - you may have to build the project yourself simply in order to evaluate it.
* Documentation may be primitive or non-existent.
* Supporting users of the software is not necessarily a priority of the project team yet, so while your feedback (bug reports, etc.) will be gratefully received, it may not be acted upon immediately.
* Backwards compatibility is unlikely to be a priority, so it's likely that breaking changes will appear in various revisions of the project.  You should be especially conscious of this if the project is developer-oriented (a library or SDK) - APIs likely will change repeatedly during incubation.
The above list also suggests ample opportunity for contribution - documentation enhancements, for example, are a great way to contribute back to a project without necessarily having to invest a lot of time in tooling or code comprehension.