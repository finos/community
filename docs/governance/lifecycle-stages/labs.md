---
id: labs
title: Labs Stage
---

## Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-labs.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are in the labs stage. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Labs](https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-labs.png)](https://community.finos.org/docs/governance/lifecycle-stages/labs)
```

See here for a list of [FINOS Labs](https://github.com/finos-labs/) projects.

## Definition
Projects in the FINOS Labs stage are in an experimental and exploratory phase. 

To clearly differentiate their early stage maturity, projects in this stage are hosted in the dedicated [FINOS Labs](https://github.com/finos-labs/) Github org, separate from the main [FINOS org](https://github.com/finos).

## Objectives
The objective of the Labs labs stage is to provide a low-friction environment to allow the project team to experiment under a neutral governance in the open, and work through their concepts collaboratively within the FINOS umbrella.   

This stage serves the default entry stage for all new projects contributed to FINOS, allowing for quick evolution towards project-market-fit.

This stage is also used to support FINOS hackathons providing an immediately open source outlet for projects built during these events. 

Once established, Labs projects are expected to prioritise some or all of the following activities, in approximately this order:

1. Rapid experimentation e.g. with different technical designs, deployment architectures, platforms & capabilities etc.
2. Selection and adoption of an appropriate SDLC and supporting [project infrastructure services](/docs/collaboration-infrastructure).
3. Construction of an implementation timeline or additions to the project roadmap
4. Development and testing.

## How to apply for FINOS Labs

To be accepted, Labs projects must comply with formal [FINOS Labs Acceptance Requirements](/docs/governance/lifecycle-stages/labs#labs-acceptance-requirements) by the [Technical Oversight Committee (TOC)](https://github.com/finos/technical-oversight-committee) and enforced by the FINOS staff. After acceptance, they must also adhere to a short list [FINOS Labs ongoing maintainance requirements](/docs/governance/lifecycle-stages/labs#labs-ongoing-maintenance-requirements).

If you are a FINOS Member (or have a FINOS member as a maintainer of your project) and would like to contribute a new open source or open standard project into Labs, please follow the [new Project contribution process](/docs/governance/Software-Projects/contribution#contribution-of-a-new-FINOS-project-or-SIG) to:

1. detail the proposal
2. evidence your compliance the [FINOS Labs Acceptance Requirements](/docs/governance/lifecycle-stages/labs#labs-acceptance-requirements)
3. commit to fulfill the [FINOS Labs ongoing maintainance requirements](/docs/governance/lifecycle-stages/labs#labs-ongoing-maintenance-requirements).

If you believe your project is more mature than a Labs project, at the time of contribution you will have an option to evidence compliance with later stages and contextually request the [Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) to award [Incubating](/docs/governance/lifecycle-stages/incubating) or [Graduated](/docs/governance/lifecycle-stages/graduated) stage.

## Requirements

### Labs Acceptance Requirements

The following factors must be confirmed before the project can be accepted and onboarded as a FINOS Labs Project.

- Project has a clear use case for the financial services industry
- Next steps for development are documented in the README or a linked document
- Project name and logo, if extant, comply with the [FINOS trademark requirements](/docs/governance/Software-Projects/contribution#trademark); Otherwise a new name / logo is agreed during contribution
- Project's license must comply with the [FINOS IP Policy](https://community.finos.org/governance-docs/IP-policy.pdf)
- The above may be brought into compliance during the contribution process before final onboarding

### Labs Ongoing Maintenance Requirements

The following must remain true for projects at all times. A Health Review may be done by the FINOS TOC or Staff as often as once every six months. Project support will be offered in the event that a project is found to be out of compliance. If a project remains out of compliance for two consecutive Health Reviews, it will qualify for archival.

- All _Labs_ acceptance requirements
- Public FINOS GitHub repository must have development activity since the last Health Review
- Completion of any action items issued to the project following a vote of the TOC
- LICENSE, NOTICE and CONTRIBUTING files conform to [FINOS compliance requirements](/docs/governance/Software-Projects/contribution-compliance-requirements#license-information)
- All community meetings are run according to [FINOS meeting procedures](/docs/governance/meeting-procedures)
- The appropriate [FINOS Labs Badge](https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-labs.png) is displayed at the top of the project README
- All official project websites or related assets are owned and hosted by FINOS
- Use of an automated build and release pipeline when releases are made
- Released artifacts must be distributed under a FINOS namespace following language-specific best practices
- Demonstrated adherence to Maturity Level 1 of the [Open Source Project Security Baseline](https://baseline.openssf.org/)

## Transition out of Labs
As projects become more mature they have several options to progress:

1. Transition into FINOS Incubating stage by [requesting incubation](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Incubation.md&title=projectName+Incubation+Request).
2. Transition into FINOS Graduated stage by [requesting graduation](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Graduation.md&title=projectName+Graduation+Request).
3. Graduate to another LF foundation (if scope / audience has grown beyond finance)
5. Archive

## Notes for Consumers and other Evaluators
If you're evaluating Foundation-hosted open source projects and see the Labs badge shown above, here are some of the things you should expect should you choose to download and use the software:

* The software is not guaranteed to be "finished", either from a functional perspective or a quality (security, compliance, testing) perspective. As a result you should expect to run into bugs and missing features.
* The code is under active development, so you should expect a rapid rate of changes.
* The installation & upgrade experiences may be primitive or non-existent - you may have to build the project yourself simply in order to evaluate it.
* Documentation may be primitive or non-existent.
* Supporting users of the software is not necessarily a priority of the project team yet, so while your feedback (bug reports, etc.) will be gratefully received, it may not be acted upon immediately.
* Backwards compatibility is unlikely to be a priority, so it's likely that breaking changes will appear in various revisions of the project.  You should be especially conscious of this if the project is developer-oriented (a library or SDK) - APIs likely will change repeatedly during incubation.

The above list also suggests ample opportunity for contribution - documentation enhancements, for example, are a great way to contribute back to a project without necessarily having to invest a lot of time in tooling or code comprehension.
