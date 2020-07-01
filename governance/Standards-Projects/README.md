# Establishing and Running a Standards Project

Within FINOS, a standards project is a project chartered to produce technical standards specifications, rather than software alone (although 3standards projects may also produce software related to their standards). Because the process for producing standards, and the intellectual property rules associated with them, are different than for software, the [FINOS IP Policy](../IP-Policy.pdf) contains special rules for standards projects. The purpose of these rules is to ensure that all contributions to a standard are appropriately licensed and that the final published standard may be implemented freely by FINOS members and the community at large.

The information in this document summarize the requirements for standards projects, most of which are found in the [IP Policy](../IP-Policy.pdf). Anyone involved in running a standards project should review that policy carefully in addition to referring to this information. Each standards project will also be goverened by the additional policies and procedures set out in its charter.

## Establishing a standards project

To begin a new standards project, a FINOS member must:
1. involve two or more institutional sponsors, at least one of which is a FINOS member, to serve as Steering Members.
2. submit a draft project charter to FINOS, identifying the project's purpose and initial Steering Members. FINOS provides a [template charter](CONTRIBUTING.standards.md) for projects to start from.

## Requirements of standards project participants

### IP licensing requirements

When a standards project approves a final standard, every participant in the project agrees to license its IP for purposes of implementing the standard, to anyone who chooses to implement it. This includes IP related to the participant's own specific contributions to the standard, as well as IP owned by the participant that relates to contributions made by other participants. These rules ensure that a standard cannot be held hostage by a single participant at the end of the process.

The above is only a summary of the IP licensing requirements of the FINOS IP Policy. Each participant should review the policy with its own counsel for complete information about these requirements.

### Joining a standards project, grace period for new participants

Because every participant in a standards process must make a meaningful commitment regarding its own IP, membership in standards projects is important. Project leads should ensure that participants make their intent to join the group explicit, in writing (an email is fine). Each participant has a grace period of 60 days after their enrollment to withdraw from the project and from any licensing commitment regarding the standards it approves. However, this grace period does not apply to the participant's own intentional contributions; if a participant makes a written or oral contribution to the standards process during the grace period, it commits to license any IP it holds related to that contribution.

### Specific rules for software

If a final standard includes software (e.g. example code) in the specification itself, that software is subject to the same licensing requirements as any other contribution. If a standards project produces software separate from the specification (e.g. a reference implementation or other tools related to implementing the standard), that software is subject to the same licensing requirements as other FINOS software projects, i.e. it must be licensed under the Apache License unless the board approves an exception.

## Getting the standards process underway

When a standards project or working group begins its activities, it should notify all initial participants of the relevant terms of the FINOS IP Policy. Here is a sample email that can be used:

    This standards project is subject to the rules related to standards development set out in Section V of the FINOS IP Policy. By joining this project and/or participating in its activities, you agree that you are bound by those rules. These include the following:

        By participating in a standards project, each participant agrees to be bound by the FINOS IP Policy.
        If a participant owns any intellectual property rights necessary to implement the final approved standard, it agrees to license those rights to all implementers on a royalty-free, reasonable, and non-discriminatory basis. 
        This license applies to the entire approved standard, including portions contributed by other participants.
        Upon joining the project, participants have 60 days to withdraw from the project and its licensing obligations. Withdrawal does not affect the license to any intentional submission made by the participant that is incorporated into a final specification.

    The above are summaries only; it is the FINOS IP Policy which is binding on participants. Please review the FINOS IP Policy with your counsel before participating. If you have any questions, please contact legal@finos.org.

This notice should also be provided to new participants that join after the project's activities are underway.

## Meeting procedures for standards projects and working groups

Project and working group chairs should begin each meeting of the project by referencing the FINOS IP Policy and the FINOS Antitrust Policy. Here are slides that can be used:

* [Download as PPTX](Standards-Project-Compliance-Slides.pptx)
* [Download as PDF](Standards-Project-Compliance-Slides.pdf)
* [View as Google Slides](https://docs.google.com/presentation/d/1Jhaqsb0FZoCViiYpCvfC6sMymyg8QCI01bd0gnffQx4/edit?usp=sharing)

## Preparing for release

### Publication for public comment

If a draft specification is published for public comment prior to its approval, it must include the introductory language provided in Section V.3.2.1 of the FINOS IP Policy:

    Recipients of this document are requested to submit, with their comments, notification of any relevant patent claims or other intellectual property rights of which they may be aware that might be infringed by any implementation of the standard set forth in this document, and to provide supporting documentation.

### Disclosure of necessary claims

Before a final specification is approved, the project lead should again remind participants of the FINOS IP Policy. Participants should be specifically reminded of Section V.3.1(c). That section says that, if a participant wishes to require implementers of the standard to obtain an explicit license from them, they must disclose the relevant patents, necessary claims, and the relevant portion of the standard using the appropriate form in Appendix A-1 or A-2 of the FINOS IP Policy. Any such forms submitted must be provided to the FINOS legal department at legal@finos.org.