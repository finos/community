
# Foreword

The purpose of this document is to propose simplifications to the governance of FINOS projects. We’ll discuss several issues with the existing governance structure and propose a simplified structure reducing hierarchy and bureaucracy.


# Motivation

When the Symphony Software Foundation was reorganized as FINOS in April 2018, a governance structure for collaborative community projects was instituted. Projects and working groups (now collectively known simply as “projects”) were organized into high-level “programs” grouping projects focused on the same problem domain (e.g. Data Technology) or technology (e.g. Symphony). 

Programs were designed to be self-governing, managed by a Program Management Committee of contributors to the projects within each program. Programs were required to abide by the high-level governance requirements of the FINOS Program Governance Policy (PGP) and to adopt a Program Operations Policy (POP) setting out their own particular operational rules. (Most adopted the “standard” POP recommended by the Foundation.)

This governance structure was largely borrowed from other open source foundations with mature projects produced by many active contributors experienced with open source collaboration. FINOS is different: our members are still new to open source collaboration and many FINOS projects are experimental or less mature. For many participants, the projects they contribute to are not essential to their daily work, so participation in FINOS governance is extra work with little reward. Strict requirements to constitute a PMC, hold meetings, and report regularly on program activity can be burdensome or pointless for programs whose projects are loosely connected and immature.

Additionally in July 2019 the Board of Directors approved a revision of the project lifecycle which identified objective criteria of quality, activity and viability for projects to transition into incubating, active and archived state. The goal was to provide a meta-roadmap for each project to become a successful pan industry open source effort while allowing a clear differentiation (for consumers primarily and for contributors) between nascent (incubating) and mature (active) projects. Like in most OSS Foundations, the project lifecycle should have a central role in the project taxonomy. 


# Background

The table below details how the existing governance structure has failed to operate as expected:


<table>
  <tr>
   <td><strong>Expectations</strong>
   </td>
   <td><strong>Experience</strong>
   </td>
  </tr>
  <tr>
   <td>Programs are self-governing on technology and lifecycle matters
   </td>
   <td>Programs have become a governance overhead for FINOS and PMCs
   </td>
  </tr>
  <tr>
   <td>PMCs are in charge of nurturing their own Projects through the lifecycle
   </td>
   <td>PMCs are not mature or engaged enough and responsibility falls on FINOS
   </td>
  </tr>
  <tr>
   <td>Programs consolidate common activities around a theme/business problem
   </td>
   <td>Projects within programs are often loosely related. Concept of programs is a barrier of entry for new contributors.
   </td>
  </tr>
  <tr>
   <td>Programs are a governance only structure
   </td>
   <td>Program quickly got conflated within the FINOS messaging, which became more complex, and effectively became a strong partition of the project portfolio which limits organic evolution and growth in new areas. 
   </td>
  </tr>
  <tr>
   <td>Membership to a PMC is a highly regarded responsibility and incentive for contributors to take a leadership role
   </td>
   <td>Only few PMCs have been functional with their members taking an active role 
   </td>
  </tr>
</table>



# Proposal



1. **Do away with programs and PMCs**: Projects will live at top level. They can still be categorized around similar themes and areas of interest in Github (theming / tagging)  and other web properties.
2. **FINOS approval role in software projects**: FINOS team approves new software projects and lifecycle transitions, based on objective criteria of [Incubating](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530363/Incubating) and [Activation](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530376/Activation).  An appeal process to the Board is provided to contributors and community members to ensure impartiality and appropriate checks and balances.
3. **Board input can be optionally requested**: FINOS team can decide to bring projects to the Board for approval into incubation (contribution) or other lifecycle transitions (activation/archival), to ensure initial industry wide buy-in as well as appropriate validation of the maturity state of a project. Board approves transition of incubating projects to “active” state when they demonstrate the required level of maturity.
4. **Clarify Foundation focus and investments**:** **FINOS focuses on “coaching” incubating projects, while focused “marketing” efforts on active projects. In this sense, FINOS team’s open source coaching is directed more towards incubating projects, while marketing  investment is directed more towards active projects (the crown jewels).

The expected benefits of this simplification are as follows:


<table>
  <tr>
   <td><strong>Benefit</strong>
   </td>
   <td><strong>How?</strong>
   </td>
  </tr>
  <tr>
   <td>Drive allocation of FINOS resources
   </td>
   <td>Marketing focus only for “active” projects. Coaching / support focus for “incubating” projects.
   </td>
  </tr>
  <tr>
   <td>Reduce contribution friction 
   </td>
   <td>FINOS can approve new “Incubating” projects directly, removing need for PMC approval or other governance process
   </td>
  </tr>
  <tr>
   <td>Reduce governance overhead
   </td>
   <td>Remove need for aggregated quarterly program-level reporting.  Projects can report in a largely automated and independent fashion.
   </td>
  </tr>
  <tr>
   <td>Avoid speculative projects
   </td>
   <td>To promote sustainability and resource stewardship, FINOS will heavily validate initial buy-in from Community and board on “industry-wide” efforts (e.g. standards), thus promoting focus on valuable and viable efforts
   </td>
  </tr>
  <tr>
   <td>Drive banks’ member engagement
   </td>
   <td>For industry-wide  projects (e.g. standards), FINOS will require bank SME engagement  to establish projects
   </td>
  </tr>
</table>



# Implementation

Implementation of these changes requires changes to the following FINOS governing documents:


## Policies



*   **Bylaws**
    *   Section 4.1(b)(ii): remove reference to Programs (and working groups)
    *   Section 6.2: remove this section entirely
*   The **Program Governance Policy** will be eliminated entirely. None of its requirements are necessary once programs are eliminated.
*   The **Program Operations Policy **will be eliminated. The following provisions should be adapted and moved to a separate FINOS policy (e.g. a “Project Operations Policy”):
    *   Section II(C), setting out the procedure for approving new projects
    *   Most of Sections III (Collaborative Principles) and IV (Projects) can be moved to the Community Handbook as statements of best practices for operating a project, but need not be strictly required. Section III(A)(a), requiring projects to enforce FINOS IP policies, is unnecessary because the Community Handbook already addresses these issues and FINOS staff enforces the IP policies.
*   The **IP Policy** will be revised to remove references to Program Operations Policies and to add the requirement of board approval for standards projects.
*   The **Trademark Guidelines** will be revised to remove references to programs.
*   


## Web Properties


### Messaging and Web properties

The removal of Programs will allow centering the FINOS messaging and web properties around:



1. Project Lifecycle: Active projects will be given central visibility on website, project catalog and other FINOS web properties. Incubating project will be listed in the project catalog and organized in a simplifies taxonomy for easier discoverability
2. Functional taxonomy: With Program removed, FINOS will be able to implement a multi-dimensional taxonomy (e.g. tagging) allowing to simplify discovery of FINOS projects based on their functionality and / or position in the financial stack. This taxonomy will be validated with the Community and then implemented across web properties
3. User centric messaging: FINOS web properties will be restructured to put the different target personas (consumers, contributors, etc.) front and center and enable discovery of high value projects solving problems for specific personas.


### Source Code repositories

The process of consolidation of source code repositories into the main FINOS Github Org is expected to continue with the removal of programs. Repositories will be tagged appropriately to reflect the functional taxonomy (#2 above) and optionally map into the user centric messaging (#3). The FINOS catalog will be updated accordingly. 


### Wiki

The Wiki is currently organized around the Program construct. Whether the wiki remains on Confluence or moves to Github, a major wiki content overhaul is to be expected to align to the new governance:



*   The Community Handbook will be revised throughout to remove references to programs, incorporate the new procedures for lifecycle transitions listed above, and incorporate elements of the standard POP.Remove Program structure and align to functional taxonomy above


## Process



1. **Early Jan:** Internal review (AaronW, Tosha, Rob, Gab, James)
2. **Mid Jan:** M&G Committee review
3. **Mid Jan: **Community RFC starts
4. **Late Jan: **Board approves a “blanket” resolution giving FINOS team green light to proceed
5. **Early Feb:** Community RFC end and comments are incorporated
6. **Feb - April: **Operationalization
7. **Late April: **Board final policy approvals / cleanup
