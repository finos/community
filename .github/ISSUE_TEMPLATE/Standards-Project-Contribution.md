---
name: "\U0001F58AStandard Project Contribution and Onboarding"
about: To Contribute a Standard Project to FINOS
title: Standard Project Contribution and Onboarding
labels: contribution
assignees: aitana16, maoo, TheJuanAndOnly99

---
Please note that only FINOS members can propose new Standards projects. If you're interested in membership, see https://www.finos.org/membership-benefits#become-a-member.

## Business Problem
*Describe the business problem or opportunity the proposed standard addresses*
 
## Proposed Solution
*Describe the proposed standard, including the format if known (e.g. specification, model, extension to existing standard) and how it solves that business problem*

## Tentative Roadmap
*Describe the short and medium term goals and phases of the project. What does success look like for this project?* 

## Scope (optional)
*Clearly define the scope of the standard. In cases where the scope is expected to be defined by the standard project participants this should be one of the first tasks the group completes. Guidelines can be found in the [Community Specification documentation](https://github.com/finos/standards-project-blueprint).*

## Current State
*Summarize the history and current state of the project*
 
## Existing Materials
*If materials already exist, provide a link to them that Foundation staff can access - if it's in a private GitHub.com repository, you should invite the finos-admin user with R/O permissions to those repositories*

## Development Team

### Leadership
*Who will be the project's lead maintainer(s)? Provide full name, affiliation, work email address, and GitHub.com username.*

### Confirmed contributors
*If applicable, list all of the individuals that have expressed interest in and/or are committed to contributing to this project, including full name, affiliation, work email address, and GitHub.com username*

### Target Contributors
*Describe the contributor profile (background, position, organization) you would like to get contributions from*

## Infrastructure needs
*Describe the FINOS infrastructure you will need for this project, in addition to a GitHub repository. The FINOS team will connect with you before setting up any of this infrastructure*
- [ ] Recurring meetings
- [ ] Mailing list
- [ ] A project on the [Legend Studio shared instance](https://odp.finos.org/docs/platforms/legend-studio-shared)
- [ ] Other (please explain):

# What's next?
Upon submission of this project proposal, the FINOS team will get in touch with you to discuss next steps. 

-----

# Contribution process (v. 1.0, last updated on May 26, 2021)
Below is the list of tasks that FINOS Team and the contribution author go through in order to complete the FINOS contribution process.
**Please do not edit these contents at contribution time!**

## FINOS Contrib POC
- [ ] Identify and Assign FINOS Contrib POC

## Kick-off meeting
- [ ] Set up kick-off meeting with project leads to cover
    - [ ] [FINOS overview](https://www.finos.org/hubfs/An%20Introduction%20to%20FINOS.pdf) (if necessary)
    - [ ] [FINOS Maintainers cheatsheet](https://odp.finos.org/docs/finos-maintainers-cheatsheet/) 
    - [ ] Discuss project proposal

## Proposal (Lead Maintainer)
- [ ] Lead maintainer to send out announcement to community@finos.org using this template:
    
    ```
    Dear FINOS Community, 
    
    We would like to propose a new FINOS project. Please review the proposal details at (_TODO: add link to the GitHub issue proposal_).
    
    If you're interested in participating, please :+1: the GitHub issue proposal and drop a comment with your name, org and email

   Thanks a lot,
   ```

## Identify project meta (Lead: FINOS Contrib POC, Support: FINOS Marketing)
- [ ] Project Name
    - [ ] Standard Name
    - [ ] Assess current trademark status
    - [ ] Define new project name (if applicable)
    - [ ] Design new project logo (if applicable)
    - [ ] Trademark new project name and logo (if applicable)
- [ ] Category and sub-category (for FINOS Landscape)
- [ ] Existing code or new Github repository
- [ ] Existing code releases (and which artifact repositories are used)
- [ ] Team composition: lead maintainer and other maintainers
- [ ] Meetings (existing/yes/no)
- [ ] Meeting minutes, agenda, attendance tracking (existing/yes/no)
- [ ] Continuous Integration (existing/yes/no)
- [ ] Documentation website (existing/yes/no)
- [ ] Define project slug

## Maintainers, contributors and CLAs (Lead: FINOS Contrib POC, Support: FINOS infra)
- [ ] For each maintainer identified in the previous step, collect: the following info:
  - Fullname
  - GitHub username
  - Corporate email address
- [ ] Identify other existing contributors (assuming there's a contribution history (eg Git history)
- [ ] Maintainers to determine if participants will be required to execute a Community Specification License Agreement (CSLA) or submit a Pull Request to accept the license terms.
- [ ] (optional) Check if maintainers, editors, and other participants are covered by a FINOS CSLA

## Project Communication Channel(s)
- [ ] Ask maintainers which communications channels they'd like to use
- Asynchronous
  - [ ] GitHub Issues (_public_)
  - [ ] GitHub Discussions (_public_)
  - [ ] GitHub Team Discussions (_public_ and _private_ **FINOS CLAs Required**)
  - [ ] Google Groups or Groups.io
- Synchronous
  - [ ] FINOS Slack Channel (general _public Slack_ / leadership _private Slack_)
- [ ] Create the identified communication channels during infra set up
- [ ] Link communication channels linked front and center in the project README.md

## Approval (Lead: FINOS Infra)
- [ ] Assign issue to Executive Director (@mindthegab) to trigger voting
 (optional). If additional socialization is required, the Executive Director may bring standards projects to the FINOS Governing Board
- [ ] FINOS accepts the contribution/new standard project (and the contribution process can move forward)

## Assets transfer (optional - Lead: FINOS Infra)
- [ ] Check GitHub repository transfer requirements:
  - [ ] [finos-admin](http://github.com/finos-admin) has `Admin` to all repositories to transfer
  - [ ] [finos-admin](http://github.com/finos-admin) ia allowed to transfer repositories out of the org
  - [ ] if the repository is owned by a user (and not an org), the user must be able to transfer the repository to [finos-admin](http://github.com/finos-admin)
- [ ] Transfer all code assets as GitHub repositories under github.com/finos
- [ ] Invite GitHub usernames to GitHub FINOS Org
- [ ] Create `<project-name>-maintainers` GitHub team and invite users
- [ ] Configure `finos-admins` and `finos-staff` team permissions

## Infra setup (Lead: FINOS Infra)
- [ ] Update release coordinates and code namespace to include `finos` (best effort)
- [ ] Update project badge
- [ ] Update project README
- [ ] Aggregate mailing lists to community@finos.org
- [ ] Enable meeting attendance tracking (optional)
- [ ] (optional) Onboard into legend.finos.org/studio

## Metadata update (Lead: FINOS Infra)
- [ ] Add project to metadata
- [ ] Add identities, orgs and affiliations to metadata
- [ ] Add logo to FINOS landscape
- [ ] Add maintainers emails to finos-project-maintainers@finos.org list
- [ ] Add maintainers GitHub usernames to the project-maintainers Team
- [ ] Onboard project on LF systems ([SFDC](https://jira.linuxfoundation.org/browse/SOPS), Insights, EasyCLA, Groups.io)

## Mailing list (optional)
- [ ] Create mailing-list
- [ ] Enable Hubspot Sync for all project mailing lists created
- [ ] Update marketing lists
  - Add new list to the included "Email List" part of the filter
  - Add new list to the excluded "Email" part of the filter
## Announcement (Lead: FINOS Contrib POC)
- [ ] Work with FINOS marketing to send out announcement to announce@finos.org , checkout announcement template at https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute
- [ ] Notify FINOS Contrib POC and FINOS marketing manager once the announcement has been sent out (FINOS infra)

## Marketing collateral and Social (Lead: FINOS Marketing)
- [ ] Update FINOS marketing collaterals to update numbers and include the new project
- [ ] Post on FINOS social media
- [ ] Post on LF social media
- [ ] Email brief announcement to lf_staff@linuxfoundation.org (Optional depending applicability of contribution)

## Onboarding and training (Lead: FINOS Infra)
- [ ] FINOS Standards Project Governance
- [ ] FINOS Standards Project Lifecycle

## Press Release (OPTIONAL - Lead: FINOS Marketing)
- [ ] Identify quotes for press release
- [ ] Draft press release
- [ ] Send embargoed press release to reporters
