---
name: "\U0001F58ASoftware Project Contribution and Onboarding"
about: To Contribute a Software Project to FINOS
title: Software Project Contribution and Onboarding
labels: contribution

---
Please note that only FINOS members can propose new projects. If you're interested in membership, see https://www.finos.org/membership-benefits#become-a-member.


# Onboarding Process

Completing an onboarding of a project into FINOS requires following these 4 main steps:  

1.  Describing the Contribution _performed by contributor_
2.  FINOS Approval _performed by FINOS_
3.  Preparing for Onboarding _performed by contributor_
4.  Onboarding _completed by FINOS_

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

|Name                        |Work Email Address.                             |Github / GitLab username|
|----------------------------|------------------------------------------------|------------------------|
|John Example                |john@example.com                                |@johnexampleabc         |
|Jane Example                |jane@example.com                                |@janeexamplexyz         |


### Confirmed contributors
*If applicable, list all of the individuals that have expressed interest in and/or are committed to contributing to this project, including full name, affiliation, work email address, and GitHub.com username*

|Name                        |Work Email Address.                             |Github / GitLab username|
|----------------------------|------------------------------------------------|------------------------|
|Contributor1 Example        |con1@example.com                                |@con1xampleabc          |
|Contributor2 Example        |con2@example.com                                |@con2examplexyz         |


### Target Contributors
*Describe the contributor profile (background, position, organization) you would like to get contributions from*

## Infrastructure needs
*Describe the FINOS infrastructure you will need for this project, in addition to a GitHub repository. The FINOS team will connect with you before setting up any of this infrastructure.  Remove items if not required. *

- [ ] A project on the [Legend Studio shared instance](https://community.finos.org/docs/platforms/legend-studio-shared)
- [ ] Other _(please explain)_

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
    - [ ] General _(public Slack)_ 
    - [ ] Leadership _(private Slack)_
- Synchronous
  - [ ] Recurring meetings

# Finally...

 - [ ] All the above sections are completed / ticked
 - [ ] Notify help@finos.org that you have completed the _describing the contribution_ section. 

# 2. FINOS Approval

Below is the list of tasks that FINOS Team and the contribution author go through in order to complete the FINOS approval process.
**Please do not edit these contents at contribution time!**

## Kick-off meeting
- [ ] Set up kick-off meeting with project leads
- [ ] Run kick-off meeting
    - [ ] [FINOS overview](https://www.finos.org/hubfs/An%20Introduction%20to%20FINOS.pdf) (if necessary)
    - [ ] [FINOS Maintainers cheatsheet](https://community.finos.org/docs/finos-maintainers-cheatsheet/)
    - [ ] [FINOS Project/Standards Governance](https://community.finos.org/docs/governance)
    - [ ] [FINOS Project Lifecycle](https://community.finos.org/docs/governance/Software-Projects/project-lifecycle)
    - [ ] Walk through the checklist, answer questions and remove items that don't apply
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
- [ ] Prioritise this issue on the TSC Backlog
- [ ] Assign this issue to the TSC
- [ ] TSC to invite contributors to present their project
- [ ] FINOS TSC approves the contribution
- [ ] (optional) If additional socialization is required, the Executive Director may bring projects to the FINOS Governing Board

## TSC Findings / Report
*TSC to enter findings summary here.*

# 3. Preparing For Onboarding

Before the FINOS team can onboard your project, there are a few housekeeping that need to be taken care of.

## Code validation 
- [ ] The codebase doesn’t have HIGH or CRITICAL CVEs across direct and transitive libraries
- [ ] The codebase doesn’t have any unfriendly licenses across direct and transitive libraries
- [ ] (optional - if a build system is provided) The build process runs successfully
- [ ] [finos-admin](http://github.com/finos-admin) is Admin of the GitHub repository to transfer
- [ ] The codebase doesn’t include any patent or copyright that conflicts with FINOS Governance and bylaws (to be validated with FINOS Legal team)
- [ ] Apply project blueprint contents - see [ODP docs](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint)
    - [ ] Ensure that the proper project governance is in the CONTRIBUTING.md file
- [ ] [All incubating criteria](https://community.finos.org/docs/governance/Software-Projects/stages/incubating) are checked and documented below

## Identify project meta (Lead: FINOS Contrib POC, Support: FINOS Marketing)
- [ ] Project Slug _(a short name that forms part of the url.  E.g. `test` at the end of https://github.com/finos/test)_
- [ ] Does the name have a registered trademark?
- [ ] Request logo design (if needed)
- [ ] Category and sub-category (for [FINOS Landscape](https://landscape.finos.org/))
- [ ] Is there existing code? If so, is it public? If not, can you grant read access to user github.com/finos-admin ?
- [ ] Was the project ever released? If so, are releases public? And what's the latest released version?
- [ ] Team composition: lead maintainer and other maintainers
- [ ] Are meetings currently held for the project?
- [ ] Are meeting minutes, agenda and attendance tracked?
- [ ] Is Continuous Integration used? If so, which system is used?
- [ ] Is there an existing Documentation website? If not, would you like to have one?

## Maintainers, contributors and CLAs (Lead: FINOS Contrib POC, Support: FINOS infra)
- [ ] For each maintainer identified in the previous step, collect: the following info:
  - Fullname
  - GitHub username
  - Corporate email address
- [ ] Identify other existing contributors (assuming there's a contribution history (eg Git history)
- [ ] Check if maintainers and other contributors are all covered by FINOS CLA
- [ ] Engage with FINOS Legal team to figure out what’s needed to cover all maintainers and contributors with FINOS CLA
- [ ] Reach out to contributors and employers to coordinate CLA signatures

## Project Communication Channel(s)
- [ ] Ask maintainers which communications channels they'd like to use
- Asynchronous
  - [ ] GitHub Issues (_public_)
  - [ ] GitHub Discussions (_public_)
  - [ ] GitHub Team Discussions (_public_ and _private_ **FINOS CLAs Required**)
  - [ ] Mailing-list (groups.io)
- Synchronous
  - [ ] FINOS Slack Channel (general _public Slack_ / leadership _private Slack_)
- [ ] Create the identified communication channels during infra set up
    - [ ] Create mailing-list on lists.finos.org (optional)
        - [ ] Enable Hubspot Sync for all project mailing lists created
        - [ ] Aggregate mailing lists to community@finos.org
        - [ ] Update marketing lists
          - Add new list to the included "Email List" part of the filter
          - Add new list to the excluded "Email" part of the filter
- [ ] Link communication channels linked front and center in the project README.md

## Code validation (only if code is contributed) (Lead: FINOS Infra)
- [ ] The codebase doesn’t have HIGH or CRITICAL CVEs across direct and transitive libraries
- [ ] The codebase doesn’t have any unfriendly licenses across direct and transitive libraries
- [ ] (optional - if a build system is provided) The build process runs successfully
- [ ] [finos-admin](http://github.com/finos-admin) is Admin of the GitHub repository to transfer
- [ ] The codebase doesn’t include any patent or copyright that conflicts with FINOS Governance and bylaws (to be validated with FINOS Legal team)
- [ ] Apply project blueprint contents - see [ODP docs](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint)
    - [ ] Ensure that the proper project governance is in the CONTRIBUTING.md file
- [ ] [All incubating criteria](https://community.finos.org/docs/governance/Software-Projects/stages/incubating) are checked and documented below

## Code transfer (Lead: FINOS Infra)
- [ ] Backup (even with screenshot) GitHub permissions of the repository to transfer
- [ ] Check GitHub repository transfer requirements:
  - [ ] [finos-admin](http://github.com/finos-admin) has `Admin` to all repositories to transfer
  - [ ] [finos-admin](http://github.com/finos-admin) ia allowed to transfer repositories out of the org
  - [ ] if the repository is owned by a user (and not an org), the user must be able to transfer the repository to [finos-admin](http://github.com/finos-admin)
- [ ] Review FINOS [project blueprint contents](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint)
    - [ ] Project title/description in README
    - [ ] Project badge in README
    - [ ] License in README
    - [ ] Contributing in README
    - [ ] `CONTRIBUTING.md`
    - [ ] `LICENSE` (look for `{}` placeholders)
- [ ] Check protection settings and disable after transfer if necessary
- [ ] Transfer all code assets as GitHub repositories under github.com/finos
- [ ] Invite GitHub usernames to GitHub FINOS Org
- [ ] Create `<project-name>-maintainers` GitHub team and invite users
- [ ] Configure `finos-admins` (`Maintain` role) and `finos-staff` (`Triage` role) team permissions


## Communication Channels
- [ ] Create the identified communication channels during infra set up
    - [ ] Create mailing-list on lists.finos.org (optional)
        - [ ] Enable Hubspot Sync for all project mailing lists created
        - [ ] Aggregate mailing lists to community@finos.org
        - [ ] Update marketing lists
          - Add new list to the included "Email List" part of the filter
          - Add new list to the excluded "Email" part of the filter
- [ ] Link communication channels linked front and center in the project README.md


## Infra setup (Lead: FINOS Infra)
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
- [ ] Onboard project on LF systems ([SFDC](https://jira.linuxfoundation.org/browse/SS), Insights, EasyCLA, Groups.io)
- [ ] (best effort) Update release coordinates and code namespace to include `finos`
- [ ] Enable security vulnerabilities scanning
- [ ] (optional) Enable meeting attendance tracking
- [ ] (optional) Onboard into legend.finos.org/studio

## Announcement (Lead: FINOS Contrib POC)
- [ ] Lead maintainer works with FINOS marketing to send out announcement to announce@finos.org , checkout announcement template at the [Contribution page](https://community.finos.org/docs/governance/Software-Projects/contribution#step-5-contribution-announcements)
- [ ] Notify FINOS Contrib POC and FINOS marketing (@grizzwolf + finos-marketing internal Slack channel)
