---
name: "\U0001F58ASpecial Interest Group Contribution and Onboarding"
about: To Contribute a Special Interest Group to FINOS
title: Special Interest Group Contribution and Onboarding
labels: contribution
assignees: maoo, TheJuanAndOnly99

---
Please note that only FINOS members can propose new projects. If you're interested in membership, see https://www.finos.org/membership-benefits#become-a-member.

## Business Problem
*Describe the business problem the contribution solves*
 
## Proposed Solution
*Describe the type of contribution and how it solves that business problem*
 
## Current State
*Summarize the history and current state of the special interest group*
 
## Existing Materials
*If materials already exist, provide a link to them that Foundation staff can access - if it's in a private GitHub.com repositories, you should invite the finos-admin user with R/O permissions to those repositories*

## SIG Maintainers
*Who will be the [SIG maintainer(s)](https://odp.finos.org/docs/finos-maintainers-cheatsheet/#maintainer-responsibilities-and-available-resources)? Provide full name, affiliation, work email address, and GitHub.com username.*

# SIG Contribution and Onboarding process (v. 1.0, last updated on October 27, 2020)
Below is the list of tasks that FINOS Team and the contribution author goes through in order to complete the FINOS SIG onboarding process. **Please do not edit these contents at contribution time!**

## Voting (SIG Lead and FINOS ED)
- [ ] Contribution author triggers community socialization to gauge interest - recommended emailing issue link to community@finos.org
- [ ] If there's positive response from the Community, prepare short SIG proposal deck for the FINOS Governing Board. You can start from [this template](https://github.com/finos/community/blob/master/governance/special-interest-groups/202103%20-%20New%20Project%20or%20SIG%20proposal%20(template)%20-%20PUBLIC.pptx) or see a [previous SIG example](https://github.com/finos/community/blob/master/governance/special-interest-groups/202101%20-%20InnerSource%20SIG%20Proposal%20-%20APPROVED.pdf))
- [ ] Assign issue to Executive Director (@mindthegab) to request SIG to be proposed to FINOS Governing Board
- [ ] FINOS governing board accepts (and the onboarding process can move forward) or declines the SIG

## Identify project meta (Lead: FINOS SIG POC, Support: FINOS Marketing)
- [ ] Identify and Assign FINOS SIG POC
- [ ] Link to SIG approval resolution - // _public link to board resolution_
- [ ] SIG Name
    - [ ] Assess current trademark status
    - [ ] Define new SIG name (if applicable)
    - [ ] Design new SIG logo (if applicable)
    - [ ] Trademark new SIG name and logo (if applicable)
- [ ] Category and sub-category (for FINOS Landscape)
- [ ] Existing content/assets or new Github repository
- [ ] Team composition: lead maintainer and other maintainers
- [ ] Meetings? (existing/yes/no)
- [ ] Meeting minutes, agenda, attendance tracking (existing/yes/no)
- [ ] Documentation website (existing/yes/no)
- [ ] Define SIG slug : Dependant on `Define new SIG name`

## Project Communication Channel(s)
- [ ] Ask maintainers which communications channels they'd like to use and if more than one are needed. These may include
    - [ ] Creation of one or more project mailing lists (e.g. general@, or dev@ and users@)
    - [ ] Creation of one or more Slack or Symphony chats for the project
- [ ] Create the identified communication channels during infra set up
- [ ] Link communication channels linked front and center in the project README.md.

## Repository transfer (Lead: FINOS Infra)
- [ ] Check GitHub repository transfer requirements:
  - [ ] [finos-admin](http://github.com/finos-admin) has `Admin` to all repositories to transfer
  - [ ] [finos-admin](http://github.com/finos-admin) is allowed to transfer repositories out of the org
  - [ ] if the repository is owned by a user (and not an org), the user must be able to transfer the repository to [finos-admin](http://github.com/finos-admin)
- [ ] Transfer all assets as GitHub repositories under github.com/finos
- [ ] Invite GitHub usernames to GitHub FINOS Org
- [ ] Create `<sig-name>-maintainers` GitHub team and invite users
- [ ] Configure `finos-admins` and `finos-staff` team permissions

## Infra setup (Lead: FINOS Infra)
- [ ] Update SIG badge
- [ ] Update SIG README
- [ ] Enable meeting attendance tracking (optional)

## Metadata update (Lead: FINOS Infra)
- [ ] Add SIG to metadata
- [ ] Add identities, orgs and affiliations to metadata
- [ ] Add logo to FINOS landscape
- [ ] Add SIG Leads emails to finos-project-maintainers@finos.org list
- [ ] Add SIG Leads GitHub usernames to the project-maintainers Team

## Update FINOS SIG Roster
- [ ] [FINOS Governance](https://github.com/finos/community/tree/master/governance/special-interest-groups)

## Announcement (Lead: FINOS POC)
- [ ] Work with FINOS marketing to send out announcement to announce@finos.org , checkout announcement template at https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute
- [ ] Notify FINOS POC and FINOS marketing manager once the announcement has been sent out (FINOS infra)

## Press Release (OPTIONAL) (Lead: FINOS POC)
- [ ] Identify quotes for press release
- [ ] Draft press release
- [ ] Send embargoed press release to reporters
- [ ] Coordinate social media promotion of the press release with FINOS marketing 
    - [ ] Post on FINOS social media
    - [ ] Post on LF social media

## Onboarding and training
- [ ] FINOS SIG Governance
- [ ] FINOS Project Lifecycle
- [ ] ODP Training

## Contributors Metadata (Lead: FINOS SIG POC, Support: FINOS infra)
- [ ] For each SIG material contributor identified in the previous step, collect: the following info:
  - Fullname
  - GitHub username
  - Corporate email address
- [ ] Identify other existing contributors (assuming there's a contribution history (eg Git history)
