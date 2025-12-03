---
id: project-lifecycle
title: Lifecycle introduction
---

FINOS projects are categorized by maturity and activity according to the FINOS Project Lifecycle, aligning to the [CNCF maturity](https://github.com/cncf/toc/blob/main/process/README.md) model. The lifecycle is designed to help users easily determine which projects are appropriate for their use and to give FINOS maintainers a roadmap for progressing their projects. The lifecycle includes two axis, maturity and status:

* Maturity
  * **[Labs](/docs/governance/Software-Projects/maturity/labs)** - experimental or innovative projects that are early in their life
  * **[Incubating](/docs/governance/Software-Projects/maturity/incubating)** - for new (and newly contributed) projects;
  * **[Graduated](/docs/governance/Software-Projects/maturity/graduated)** - for mature, active projects with healthy and diverse contributor communities; and
  * **[Archived](/docs/governance/Software-Projects/maturity/archived)** - for projects that are no longer actively maintained.

These maturity stages and project statuses are described in greater detail below.

## Maturity

The project maturity is a recognition of scale of governance and community involvement and not a statement on worthiness or usefulness.  Indeed, a project may have Active project status (active development and usage) but remain in Incubating maturity level due to very fast delivery of the already existing contributors, or a Graduated project with Inactive status due to already having solved the business need and low maintenance requirements.

### Incubating Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-incubating.png" width="150" />

When a project is first created or contributed, it is automatically placed in the [Incubating stage](/docs/governance/Software-Projects/maturity/incubating).
An Incubating project is under active early development and typically has not made its first major release (i.e. version 1.0). During incubation, projects typically experiment heavily with technical designs, standardize their build and release processes, develop their collaborative processes, and work to grow their developer community. Incubating projects are usually not focused on support or backward compatibility.

To be accepted into the Incubating stage, a project must meet the requirements of the [Incubating Lifecycle Checklist](/docs/governance/Software-Projects/maturity/incubating) and get approval from the [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/).

### Graduated Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-graduated.png" width="150"/>

**Graduated** projects are mature open source projects with diverse and active developer communities. They follow best practices for collaborative software development, have mature and well-documented build and release processes, are free of high-risk security vulnerabilities, and maintain thorough documentation. To become Graduated, a project have made or be nearing its first major release and must have two or more independent contributors from different organizations.

To graduate from the Incubating stage, a project must meet the requirements of the [Graduation Lifecycle Checklist](/docs/governance/Software-Projects/maturity/graduated) and get approval from the [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/).

### Archived Projects

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-archived.png" width="150"/>

Projects are [Archived](/docs/governance/Software-Projects/maturity/archived) when they are no longer actively developed (with a project status of Unsupported or Moved), for any reason. Archived projects may no longer actively address new issues, including security vulnerabilities. Their code and documentation remain available because they may still be useful, but should be used with caution due to the lack of updated.

Projects may be moved to the Archived state from either the Incubating or Graduated states, either upon the request of the project maintainers, or upon a determination by FINOS on the basis of the project's status.

### FINOS Labs (Optional)

<img src="https://user-images.githubusercontent.com/327285/230928932-7c75f8ed-e57b-41db-9fb7-a292a13a1e58.svg" width="150" />

Optionally, before a project is contributed, the FINOS team might work with the contributors and FINOS Members to gauge viability and evaluate interest ahead of contribution as an Incubating project via the use of the [finos-labs](https://github.com/finos-labs/).  FINOS TOC will decide if the project is appropriate for entry into the Labs (see [Labs maturity](/docs/governance/Software-Projects/maturity/labs) for details).

Projects may be moved to the Archived state from either the Incubating or Graduated maturity level, either upon the request of the project maintainers, or upon a determination by FINOS that the project is inactive.

The [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee/) provides support to resolve any potential dispute that may occur between project maintainers and who is proposing the transition to archived.
