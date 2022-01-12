# Establishing and Running an Open Standard Project

Within FINOS, a Open standard project is a project chartered primarily to produce technical standards specifications, rather than software. Standards projects follow a different set of processes from software projects, to account for the different intellectual property requirements of standards. The purpose of these rules is to ensure that all contributions to a standard are appropriately licensed and that the final published standard may be implemented freely by FINOS members and the community at large.

FINOS standards projects follow the Joint Development Foundation's [Community Specification](https://github.com/CommunitySpecification/1.0) process, which is a mature suite of workflows, policies, and templates for collaborating on a standard specification via source code management system such as git & GitHub. Each standards project will also be goverened by the additional policies and procedures set out in its charter.

This document summarizes the requirements for establishing, joining, and running standards projects, but it is not comprehensive. Anyone involved in running a standards project should review the Community Specification documentation carefully in addition to referring to this information. Note that FINOS has made a few customizations to the Community Specification process for its own needs, so please refer to the [FINOS Standards Project Blueprint](https://github.com/finos/standards-project-blueprint/), which contains the full Community Specification documentation together with those customizations. The rest of this document links to the Blueprint.

**NB**: The Community Specification process replaces the **now deprecated** previous rules for standards projects found in the FINOS [IP Policy](../IP-Policy.pdf). While some existing FINOS projects (e.g. [FDC3](http://github.com/finos/fdc3)) still follow the IP Policy process and are in the process of migrating out of it, all new standards projects should use the Community Specification process. Future versions of the IP Policy will likely remove the current open standard IPR related provisions.

## Establishing a standards project

To begin a new standards project, a FINOS member must:
1. involve two or more institutional sponsors, at least one of which is a FINOS member, to serve as Maintainers.
2. submit a draft project charter to FINOS, identifying the project's purpose and initial Maintiners.

## Getting the project started

After a standards project is approved, it will be given a repository in the FINOS GitHub organization. The project can then copy the [FINOS Standards Project Blueprint](https://github.com/finos/standards-project-blueprint) into the project repository and follow the directions in the [Getting Started](https://github.com/finos/standards-project-blueprint/blob/master/..Getting%20Started.md) file.

## Requirements of standards project participants

### IP licensing requirements

Contributions to FINOS standards projects are governed by the [Community Specification License](https://github.com/finos/standards-project-blueprint/blob/master/1._Community_Specification_License-v1.md) (the "CSL"). The CSL specifies the copyright and patent rights licensed by contributors to implementers of the specification, as well as the other terms applicable to contributions. Generally, contributors authorize anyone to produce specification-compliant implementations of: (1) any draft version of the specification that they contributed to, and (2) any final specification approved by the project (except for patent claims properly excluded by the contributor).

Every participant to a FINOS standards project must agree to the [Community Specification Contributor License Agreement 1.0](https://github.com/finos/standards-project-blueprint/blob/master/.0_CS_Contributor_License_Agreement.md) ("CSLA") as it applies to that project. Participants contributing on behalf of their employers must have permission to agree to the CSLA on behalf of their employer.

By agreeing the CSLA, participants agree to the terms of the following project policies:
* [Community Specification License](https://github.com/finos/standards-project-blueprint/blob/master/.0_CS_Contributor_License_Agreement.md) (described above)
* [Community Specification Governance Policy](https://github.com/finos/standards-project-blueprint/blob/master/1._Community_Specification_License-v1.md) (setting out the project governance rules)
* [Community Specification Contribution Policy](https://github.com/finos/standards-project-blueprint/blob/master/6._Contributing.md) (setting out the workflow for making contributions to the project)
* [Community Specification Code of Conduct](https://github.com/finos/standards-project-blueprint/blob/master/8._Code_of_Conduct.md) (setting out the rules for appropriate participant behavior)

The CSLA also requires that participants represent that their contributions are original (or appropriately licensed by third parties) and that they have permission to enter the CSLA on behalf of their employer, if applicable.

The above is only a summary of the obligations of participants. Each participant should review the CSLA, and the other policies it references, with their own counsel to understand how these terms apply to their participation.

### Community Specification License Patent Exclusion Rules

When a participant contributes to a draft specification, the participant agrees to license to implementers of the specification any of its patent claims that apply to that draft specification. Likewise, when the project issues an approved specification, all contributors to that specification agree to license any claims that apply to that approved specification. These licenses apply to any claims practiced by the specification as a whole, not merely to the individual participant's contributions.

However, the CSL (in Section 3) gives contributors an opportunity to exclude specified claims from its licensing commitments by issuing an "exclusion notice" within 45 days of its contribution to a draft specification, or from the project's adoption of a draft specification as an approved specification. Thus, if a participant learns that a specification it has contributed to incorporates patented claims it is unwilling to license, it may withhold a license for those claims.

### Specific rules for software

If a standards project incorporates software (e.g. example code or reference implementations), whether in the specification itself or as supporting material, that software is subject to the same licensing requirements as other FINOS software projects, i.e. it must be licensed under the Apache License unless the FINOS Governing Board approves the use of another license.

## Meeting procedures for standards projects and working groups

At the beginning of each meeting of a standards project, the project leaders should remind participants that their participation is subject to the Community Specification License and the Linux Foundation Antitrust Policy. Here are slides that can be used:

* [Download as PPTX](../Compliance-Slides/Comm-Spec-Compliance-Slides.pptx)
* [Download as PDF](../Compliance-Slides/Comm-Spec-Compliance-Slides.pdf)
* [View as Google Slides](https://docs.google.com/presentation/d/1qVhtj3OoPxfPSIPAbR8mQl3z3P9Ai2IH2CIzv1ReBoM/edit#slide=id.g41c8fed37d_0_0)
