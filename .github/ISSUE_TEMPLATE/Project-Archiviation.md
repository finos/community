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

*Describe the reason for proposing the archival*

# What's next?
Upon submission of this proposal, the FINOS team will follow the checklist reported below.

-----

## Confirm archivation
- [ ] Validate [reasons for project archival](https://community.finos.org/docs/governance/Software-Projects/stages/archived)
- [ ] Discuss request with FINOS Leadership team
- [ ] Get in touch with Project Lead. If she/he agrees with the request, then move forward
- [ ] (if applicable, and on a case to case basis) communicate project archival, reasons for archival and implications of archival to the project community

## Archive GitHub repositories
- [ ] Collect all GitHub repository for a given project, from FINOS metadata; iterate the following steps on each of them:
    - [ ] Remove all users and teams from `Member Access` repository settings
    - [ ] Update badge on `README.md` to [Archived](https://community.finos.org/docs/governance/software-projects/stages/archived/#badge) (linking to https://community.finos.org/docs/governance/Software-Projects/stages/archived)
    - [ ] Add a note at the top of the README file, stating: _This project is archived, which means that it's in read-only state; you can download and use this code, but please be aware that it may be buggy and may also contain security vulnerabilities. If you're interested to restore development activities on this project, please email help@finos.org_
    - [ ] Hit the `Archive` button on GitHub, by accessing the Settings repository page using `finos-admin` credentials
    - [ ] Open ticket to LF Support in order to update Project definition:
      - `Stage` = `Archived`
      - `Category` = `Idle`

## Archive mailing list (if present)
- [ ] add `[ARCHIVED]`prefix to project mailing list name
- [ ] set up an automated message for any emails sent to that mailing list, to let the community know that the mailing list has been archived + encourage to reach out to help@finos.org

## Infra tasks
- [ ] Create a `staging` branch on https://github.com/finos/finos-landscape
- [ ] Update https://github.com/finos/finos-landscape/blob/master/landscape.yml
- [ ] Remove project Leads from the [finos-project-maintainers@finos.org](https://groups.google.com/a/finos.org/g/finos-project-maintainers/members) list (unless they're leading other FINOS projects!)
- [ ] Remove project Leads from the [project-maintainers Team](https://github.com/orgs/finos/teams/project-maintainers/members) (unless they're leading other FINOS projects!)
