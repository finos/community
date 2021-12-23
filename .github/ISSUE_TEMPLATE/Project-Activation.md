---
name: "\U0001F58AProject Activation"
about: To Activate a FINOS hosted Project
title: Project Activation
labels: ''
assignees: agitana, maoo, TheJuanAndOnly99

---
# Activation
Virtually all FINOS hosted projects are expected to strive towards, and ultimately attain, [Active  status](https://community.finos.org/docs/governance/Software-Projects/stages/active). 

An active lifecycle status badge indicates to potential consumers that the project has reached a level of maturity, both functional and non-functional, that it is suitable for production use.

The FINOS team approves lifecycle transitions following objective criteria detailed in the below checklist. More information in the [FINOS Governance](https://community.finos.org/docs/governance/intro#project-lifecycle).

### What does activation mean for the consumer? 
:heavy_check_mark: The Project is high quality, mature from a codebase and community dynamics perspective. 

:dart: The Project produces valuable releases to solve a useful business problem for our Community.

### What does activation mean for the project team?
:star: Glory in the Community 

:eyes: :loudspeaker: Increased visibility and positioning in FINOS web resources, marketing and Community building efforts like meetups, blog posts, etc.

# Activation Checklist
|  | **Activation (promotion to Active State)** | How and Where Demonstrated |
|:------ |:----------- |:----------- |
|  | **QUALITY & SECURITY** |   |
| **Development Process** | <p>The Project adopts best-of-breed standards of distributed software development, including but not limited to:</p><ul><li>semantic versioning</li><li>tagging / branch protection</li><li>continuous integration ("CI") and continuous delivery ("CD") where applicable</li></ul><p>If Project Team choses not to use the FINOS provided Open Developer Platform (ODP), a comparable SDLC should be adopted and made available.</p> |  |
| **Build & Release** | <p>The Project code/documentation release process automated or at lest well documented.</p><p>If code is published, publicly redistributed release binaries should be listed or referred to in the documentation (e.g. under the FINOS namespace in an artefact repository or package manager, e.g. NPM, Maven Central, etc.)</p> |   |
| **Security** | <li>No OWASP Top 10 warnings are present in the code</li> <li>No long-standing medium or higher vulnerabilities (2+ months) and proper security disclosure processes</li> <li>Any cryptographic functions and key lengths used within the software should be identified and vetted with Foundation's legal counsel in order to request compliance with U.S. Export policy.</li> Read more about [FINOS Security vulnerabilities responsible disclosure](https://community.finos.org/docs/governance/Software-Projects/cve-responsible-disclosure) and how to [automate scanning with WhiteSource](https://community.finos.org/docs/development-infrastructure/code-validation/whitesource). |
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
| **Status Badging** | Project Team commits to adopt the FINOS Active badge in the README.md once the FINOS team approves activation, in order to properly signal  the new Project Lifecycle status to adopters. |  |
|  | **HYGIENE & OPERATIONS** |       |
| **Compliance** | The appropriate license text is included in each source file's header. See details and template |  |
| **Community Inquiries** | Community inquiries on the project channels (mailing lists, issues and pull requests, etc) are generally promptly answered |   |
| **Meeting Hygiene** | If the project meets regularly on-line, the Project Team has demonstrated a track record of publishing and distributing agenda no less than 24 hours before the meeting, and publishes meeting minutes after calls. |  |
| **Transparency** | Project Team has adopted a transparent governance model(*) consistent with FINOS Community governance. Work for new contributors is organized into issues within a public issue tracking system, as appropriate, tagged as "Good First Issues" |  |

_(*) transparent governance model is when a project’s discussions, minutes, deliberations, project plans, issue tracking plans for new features, and other artefacts are open, public, and easily accessible in the FINOS Project Infrastructure or FINOS sanctioned external system._
