---
name: "\U0001F58ASoftware Project Archival"
about: To Archive a FINOS Software Project
title: Software Project Archival
labels: contribution
assignees: maoo, TheJuanAndOnly99

---

*Describe the reason for proposing the archival*

# What's next?
Upon submission of this proposal, the FINOS team will follow the checklist reported below.

-----

# Confirm archiviation
- [ ] Validate [reasons for project archival](https://github.com/finos/community/blob/master/governance/Software-Projects/Project-Lifecycle.md#archived-projects)
- [ ] Discuss request with FINOS Leadership team
- [ ] Get in touch with Project Lead. If she/he agrees with the request, then move forward
- [ ] (if applicable, and on a case to case basis) communicate project archival, reasons for archival and implications of archival to the project community

# Archive project
- [ ] Collect all GitHub repository for a given project, from FINOS metadata; iterate the following steps on each of them:
    - [ ] Remove all users and teams from `Member Access` repository settings
    - [ ] Update badge on `README.md` to archived, or remove it
    - [ ] Archive all Github repositories related with the project
- [ ] Archive mailing list: 
    - [ ] add `[ARCHIVED]`prefix to project mailing list name
    - [ ] set up an automated message for any emails sent to that mailing list, to let the community know that the mailing list has been archived + encourage to reach out to help@finos.org
- [ ] Create a `staging` branch on https://github.com/finos/finos-landscape
- [ ] Update FINOS Metadata (set `state` to `ARCHIVED` and set `archiveDate`)
- [ ] Submit ticket to LF to update SFDC
- [ ] Remove project Leads from the [finos-project-maintainers@finos.org](https://groups.google.com/u/1/a/finos.org/g/finos-project-maintainers/members) list (unless they're leading other FINOS projects!)
- [ ] Remove project Leads from the [project-maintainers Team](https://github.com/orgs/finos/teams/project-maintainers/members) (unless they're leading other FINOS projects!)
