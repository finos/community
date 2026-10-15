---
id: roadmap-guidelines
title: Roadmap guidelines
description: "Guidelines for writing roadmaps for FINOS projects: achieving consensus between contributing organizations and focusing development efforts on shared high-priority features."
---

A roadmap is an essential tool to make sure contributors and maintainers align their efforts to the collective needs of the community. It is also a [requirement for incubating projects](/docs/governance/lifecycle-stages/incubating.md#incubating-acceptance-requirements). Meanwhile, adhering to the roadmap is a [requirement for graduation](/docs/governance/lifecycle-stages/graduated.md).

## Roadmap meeting

To give all users and contributors a chance to shape the roadmap, maintainers must agree on a time and date to meet and discuss the roadmap exclusively. This may be done on a bi-weekly community call, or at another convenient time ensuring the highest possible attendance of participating firms.

During this meeting, each firm gets 5-10 minutes to discuss their most wanted features and improvements, in order of priority. **Each firm's highest priority item will be given additional weight in the roadmap.** Meeting participants are encouraged to document their requirements by commenting on the meeting issue.

After the meeting is over, an AI meeting summary will be generated and sent to maintainers via email. These **meeting minutes may be incomplete or inaccurate, it's critical that firms leave a comment with their requirements** (or otherwise, the maintainer in charge of handling meeting minutes writes them down herself).

Once the meeting minutes and meeting issue comments are ready, a maintainer can use the [following template](#roadmap-issue-template) to create the roadmap (either manually or with AI assistance). If using AI, one must not forget to include *all* the relevant context (meeting minutes, meeting issue, roadmap template, and any additional context provided by participants). 

### Roadmap meeting and issue templates

These are some sample templates for the roadmap meeting minutes and roadmap issue itself. Feel free to adapt them to the project's rules.

In order to make use of these, add them as `.md` files into your `.github/ISSUE_TEMPLATE` directory. You'll be able to see them when creating a new issue.

#### Roadmap meeting template

`.github/ISSUE_TEMPLATE/roadmap_meeting_minutes.md`:

```md
---
name: "\U0001F91D {{PROJECT_NAME}} Roadmap Meeting Minutes"
about: To track {{PROJECT_NAME}} roadmap meeting agenda and attendance
title: DD MMM YYYY - {{PROJECT_NAME}} Roadmap Meeting Minutes
labels: meeting
assignees:
---

## Date

YYYYMMDD - time

## Meeting info

- [Meeting link](https://zoom-lfx.platform.linuxfoundation.org/meeting/95849833904?password=99413314-d03a-4b1c-b682-1ede2c399595)

- [Register for future meetings](https://zoom-lfx.platform.linuxfoundation.org/meeting/95849833904?password=99413314-d03a-4b1c-b682-1ede2c399595&invite=true)

## Meeting notices

- FINOS **Project leads** are responsible for observing the FINOS guidelines for [running project meetings](https://community.finos.org/docs/governance/meeting-procedures/). Project maintainers can find additional resources in the [FINOS Maintainers Cheatsheet](https://community.finos.org/docs/finos-maintainers-cheatsheet).

- **All participants** in FINOS project meetings are subject to the [LF Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), the [FINOS Community Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct) and all other [FINOS policies](https://community.finos.org/docs/governance/#policies).

- FINOS meetings involve participation by industry competitors, and it is the intention of FINOS and the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws. Please contact legal@finos.org with any questions.

- FINOS project meetings may be recorded for use solely by the FINOS team for administration purposes. In very limited instances, and with explicit approval, recordings may be made more widely available.

## Agenda

- [ ] Convene & roll call (5mins)
- [ ] Display [FINOS Antitrust Policy summary slide](https://community.finos.org/Compliance-Slides/Antitrust-Compliance-Slide.pdf) and review Meeting Notices (see above)
- [ ] Approve past meeting minutes
- [ ] Organization/user 1 desired features & improvements
- [ ] Organization/user 2 desired features & improvements
- [ ] ...
- [ ] Prioritization & Summary
- [ ] AOB, Q&A & Adjourn (5mins)

## Meeting Minutes

<!-- Add meeting minutes here, edit as appropriate -->

## Action Items

- [ ] Make roadmap issue from meeting minutes, comments and roadmap template
- [ ] Action 2
- [ ] ...
```
