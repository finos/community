---
name: "\U0001F58ASoftware Project Contribution and Onboarding"
about: To Contribute a Software Project to FINOS
title: Software Project Contribution and Onboarding
labels: contribution

---
Please note that only FINOS members can propose new projects. If you're interested in membership, see https://www.finos.org/membership-benefits#become-a-member.


# Onboarding Process

Completing an onboarding of a project into FINOS requires following these 5 main steps:  

1.  **Describing the Contribution** _led by contributor_
2.  **FINOS Approval** _led by FINOS Point of Contact (POC)_
3.  **Preparing for Onboarding** _led by contributor_
4.  **Onboarding** _completed by FINOS Infra_
5.  **Announcement** _led by FINOS Point of Contact (POC)_

# 1. Describing The Contribution

This is a list of questions that need to be answered by the contributor in order to allow a new project to pass to the approval stage of onboarding.

## Business Problem
*Describe the business problem the contribution solves*
 
## Proposed Solution
*Describe the type of contribution (project or working group) and how it solves that business problem*

## Tentative Roadmap
*Describe the short and medium term goals and phases of the project. What does success look like for this project?* 
 
## Current State
*Summarize the history and current state of the project*
 
## Existing Materials
*If materials already exist, provide a link to them that Foundation staff can access - if it's in a private GitHub.com repositories, you should invite the finos-admin user with R/O permissions to those repositories*

 - [ ] GitHub / GitLab Repository _(delete as appropriate)_
   - [ ] URL for the repository _(if it exists)_
   - [ ] Project Name _(enter here)_
   - [ ] @finos-admin has been given read-only permissions if private
 - [ ] Is Continuous Integration used? _If so, which system is used?_
 - [ ] Was the project ever released? _(yes / no)_ 
   - [ ] If so, are releases public? _(yes / no)_ 
   - [ ] And what's the latest released version?
 - [ ] Existing Project Documentation _( URL / microsite / PDF etc detail here)_
 - [ ] Does the name have a registered trademark? _(yes / no)_
 - [ ] Is there a logo? _(yes / no)_
 - [ ] High-Level Presentation prepared for Technical Steering Committee _(~15 mins)_
 - [ ] Are meetings currently held for the project? _(yes / no + details)_
 - [ ] Are meeting minutes, agenda and attendance tracked? _(yes / no + details)_

## Development Team

### Maintainers
*Who will be the [project maintainer(s)](https://odp.finos.org/docs/finos-maintainers-cheatsheet/#maintainer-responsibilities-and-available-resources)? Provide full name, affiliation, work email address, and GitHub / GitLab username.*

|Name                        |Affiliation              |Work Email Address             |Github / GitLab username              |
|----------------------------|-------------------------|-------------------------------|--------------------------------------|
|John Example                |Example LTD              |john@example.com               |@johnexampleabc                       |
|Jane Example                |Example LTD              |jane@example.com               |@janeexamplexyz                       |


### Confirmed contributors
*If applicable, list all of the individuals that have expressed interest in and/or are committed to contributing to this project, including full name, affiliation, work email address, and GitHub.com username*

|Name                        |Affiliation              |Work Email Address             |Github / GitLab username              |
|----------------------------|-------------------------|-------------------------------|--------------------------------------|
|Contributor1 Example        |Example LTD              |con1@example.com               |@con1xampleabc                        |
|Contributor2 Example        |Example LTD              |con2@example.com               |@con2examplexyz                       |


### Target Contributors
*Describe the contributor profile (background, position, organization) you would like to get contributions from.*

## Project Communication Channel(s)
*Remove items if not required*

- [ ] Contributor to ask maintainers which communications channels they'd like to use:
- Asynchronous
  - [ ] GitHub Issues _(public)_
  - [ ] GitHub Discussions _(public)_
  - [ ] GitHub Team Discussions _(consisting of the above described contributors)_
    - [ ] Public
    - [ ] Private
  - [ ] Mailing-list (groups.io)
  - [ ] FINOS Slack Channel (consisting of the above described contributors)
    - [ ] General (public) _(supply channel name)_ 
    - [ ] Leadership (private) _(supply channel name)_
- Synchronous
  - [ ] Recurring meetings

## Understanding FINOS Onboarding Requirements

As a project onboarding into FINOS, you will need to familiarize yourself and your contributor team with the following materials:

 - [ ] [FINOS overview](https://www.finos.org/hubfs/An%20Introduction%20to%20FINOS.pdf) (if necessary)
 - [ ] [FINOS Maintainers cheatsheet](https://community.finos.org/docs/finos-maintainers-cheatsheet/)
 - [ ] [FINOS Project/Standards Governance](https://community.finos.org/docs/governance)
 - [ ] [FINOS Project Lifecycle](https://community.finos.org/docs/governance/Software-Projects/project-lifecycle)
 - [ ] Notify help@finos.org that you have completed the _describing the contribution_ section. 

# 2. FINOS Approval

Below is the list of tasks that the **FINOS Team** go through in order to complete the FINOS approval process.  At this point, a FINOS Point-of-Contact (POC) should be assigned to this GitHub issue.

**Please do not edit these contents when completing part 1, "describing the contribution" above.**

## Record The Contribution
- [ ] Submit contribution to LF by opening a ticket via https://jira.linuxfoundation.org/browse/SS and marking contribution as "Exploratory"; attach a summary of the **Business Problem** and **Proposed Solution** (above) of the project.

## Kick-off meeting
- [ ] Set up kick-off meeting with project leads
- [ ] Run kick-off meeting
  - [ ] Walk through the checklist in part 1, ensure all the questions are answered and remove items that don't apply
  - [ ] Write and send contribution proposal announcement (optional - see below)

## FINOS Contrib POC
- [ ] Identify and Assign FINOS Project Coordinator
- [ ] Identify and Assign FINOS Strategic Advisor

## Proposal (Lead Maintainer)
- [ ] Lead maintainer to send out announcement to community@finos.org using this template:
    
    ```
    Dear FINOS Community, 
    
    We would like to propose a new FINOS project. Please review the proposal details at (_TODO: add link to the GitHub issue proposal_).
    
    If you're interested in participating, please :+1: the GitHub issue proposal and drop a comment with your name, org and email

   Thanks a lot,
   ```

## Technical Steering Committee Approval

- [ ] Prioritise this issue on the [TSC Backlog](https://github.com/orgs/finos/projects/39)
- [ ] Assign this issue to @colineberhardt
- [ ] Add the `ready-for-tsc` label
- [ ] TSC to invite contributors to present their project
- [ ] FINOS TSC approves/rejects the contribution
- [ ] Ask @jgavronsky to mark contribution as "Engaged" within LF systems
- [ ] (optional) If additional socialization is required, the Executive Director may bring projects to the FINOS Governing Board
- [ ] Update the contribution status to "Engaged" by sending another email to **LF Legal Representative** with the name of the project and its new status.

## TSC Findings / Report
*TSC to enter findings summary here.*

# 3. Preparing For Onboarding

Before the FINOS team can onboard your project, there are a few housekeeping that need to be taken care of.  These must be completed by the contributor, with help if required from the POC or FINOS Infra.   

## Logo / Trademarks
 - [ ] Initiate transfer of trademarks to FINOS _(request help from help@finos.org / LF Legal if needed)_
 - [ ] Request logo design from `help@finos.org` _(if needed)_
 - [ ] The codebase doesn’t include any patent or copyright that conflicts with FINOS Governance and bylaws. _(POC to validate with FINOS Legal team if anything important is raised)_

## Coding Standards 
- [ ] The codebase doesn’t have HIGH or CRITICAL CVEs across direct and transitive libraries.  _Enable GitHub actions from [Security Scanning](https://github.com/finos/security-scanning) to ensure this._
- [ ] The codebase doesn’t have any unfriendly licenses across direct and transitive libraries
- [ ] (optional - if a build system is provided) The build process runs successfully

## FINOS Project Standards
- [ ] [finos-admin](http://github.com/finos-admin) is Admin of the GitHub repository to transfer
- [ ] Apply project blueprint contents - see [ODP docs](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint)
    - [ ] README.md file contains the sections in the [README Template](https://github.com/finos/software-project-blueprint/blob/main/README.template.md)
    - [ ] Project FINOS badge in README (incubating)
    - [ ] [OpenSSF Passing Badge](https://bestpractices.coreinfrastructure.org/en)
    - [ ] License in README
    - [ ] Contributing in README
    - [ ] `CONTRIBUTING.md`
    - [ ] `LICENSE` (replace `{}` placeholders)
    - [ ] Ensure that the proper project governance is in the CONTRIBUTING.md file
- [ ] [All incubating criteria](https://community.finos.org/docs/governance/Software-Projects/stages/incubating) are checked and documented below

_Add documentation here_

# 4.  FINOS Onboarding

This is performed by FINOS Infra once the three previous stages are complete, with support from the contributor and the FINOS POC.

## Maintainers, Contributors and CLAs 
- [ ] Identify other existing contributors (assuming there's a contribution history (eg Git history)
- [ ] Check if maintainers and other contributors are all covered by FINOS CLA
- [ ] Engage with FINOS Legal team to figure out what’s needed to cover all maintainers and contributors with FINOS CLA
- [ ] Reach out to contributors and employers to coordinate CLA signatures

## Validation (only if code is contributed) 
- [ ] The codebase doesn’t have HIGH or CRITICAL CVEs across direct and transitive libraries
- [ ] The codebase doesn’t have any unfriendly licenses across direct and transitive libraries
- [ ] (optional - if a build system is provided) The build process runs successfully
- [ ] [finos-admin](http://github.com/finos-admin) is Admin of the GitHub repository to transfer
- [ ] The codebase doesn’t include any patent or copyright that conflicts with FINOS Governance and bylaws (to be validated with FINOS Legal team)
- [ ] Check project blueprint contents - see [ODP docs](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint)
- [ ] [All incubating criteria](https://community.finos.org/docs/governance/Software-Projects/stages/incubating) are met (review documentation provided above)

## Code transfer 
- [ ] Backup (even with screenshot) GitHub permissions of the repository to transfer
- [ ] Check GitHub repository transfer requirements:
  - [ ] [finos-admin](http://github.com/finos-admin) has `Admin` to all repositories to transfer
  - [ ] [finos-admin](http://github.com/finos-admin) ia allowed to transfer repositories out of the org
  - [ ] if the repository is owned by a user (and not an org), the user must be able to transfer the repository to [finos-admin](http://github.com/finos-admin)
- [ ] Transfer all code assets as GitHub repositories under github.com/finos
- [ ] Invite GitHub usernames to GitHub FINOS Org
- [ ] Create `<project-name>-maintainers` GitHub team and invite users
- [ ] Configure `finos-admins` (`Maintain` role) and `finos-staff` (`Triage` role) team permissions

## Project Communication Channel(s)
- [ ] Create the identified communication channels during infra set up
- [ ] Create mailing-list on lists.finos.org (if requested)
    - [ ] Enable Hubspot Sync for all project mailing lists created
    - [ ] Aggregate mailing lists to community@finos.org
    - [ ] Update marketing lists
      - Add new list to the included "Email List" part of the filter
      - Add new list to the excluded "Email" part of the filter
- [ ] Create Slack channels if requested.
- [ ] Link communication channels linked front-and-center in the project README.md

## Infra setup 
- [ ] Enable EasyCLA
- [ ] Add project to metadata
- [ ] Add identities, orgs and affiliations to metadata (deprecated by EasyCLA)
- [ ] Add logo to FINOS landscape
    - [ ] Create `staging` branch on `finos/finos-landscape`
    - [ ] Merge `finos/metadata` changes on master (will udpdate `landscape.yml` in `finos/finos-landscape`)
    - [ ] Create PR from `staging` branch on `finos/finos-landscape`
    - [ ] Review Netlify preview
    - [ ] Merge PR
- [ ] Add project maintainers emails to [finos-project-maintainers@finos.org](https://groups.google.com/a/finos.org/g/finos-project-maintainers/members) list
- [ ] Add project maintainers GitHub usernames to the [project-maintainers Team](https://github.com/orgs/finos/teams/project-maintainers/members)
- [ ] Ask @jgavronsky to mark contribution as "Active" within LF systems
- [ ] (best effort) Update release coordinates and code namespace to include `finos`
- [ ] Check that CVE (and preferably static code analysis, if applicable) scanning is in place
- [ ] Enable automated dependency update, using [Renovate](https://renovatebot.com/)
- [ ] Enable [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) (`Require a pull request before merging`)
- [ ] (optional) Enable meeting attendance tracking
- [ ] (optional) Onboard into legend.finos.org/studio

# 5. Announcement 

(Lead: FINOS Contrib POC)

- [ ] Update the contribution status to "Active" by sending another email to **LF Legal Representative** with the name of the project and its new status.
- [ ] Lead maintainer works with FINOS marketing to send out announcement to announce@finos.org , checkout announcement template at the [Contribution page](https://community.finos.org/docs/governance/Software-Projects/contribution#step-5-contribution-announcements)
- [ ] Notify FINOS marketing (@grizzwolf + finos-marketing internal Slack channel)
