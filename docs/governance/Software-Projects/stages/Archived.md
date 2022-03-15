---
id: archived
title: The Archived stage
---

Projects and SIGs that are no longer active, or falter for other reasons, may be marked as archived to educate consumers and other potential evaluators.  In this state, issues may not be triaged in a timely fashion (or at all), and almost certainly won't be addressed.  The project team or SIG group may also have disbanded.

## Triggers
Projects and SIGs that have become inactive become eligible for archiving, where "inactivity" is defined as having had no activity (released / publications, commits, PRs, mailing list traffic, documentation updates, issue updates, etc.) in the last 180 days (6 months).

Anyone can publicly request to trigger the archiviation process for a project or SIG by [creating a GitHub Issue](https://github.com/finos/community/issues/new?template=Project-Archiviation.md); if the Project Lead Maintainer agrees that archiving is the appropriate course of action, or the project team  does not respond within 14 days, FINOS will proceed with the archiviation.

## Objectives
Archived projects and SIGs have no objectives - they are simply retained as-is, in whatever state they were in at the time of archival.

The PMC will, however, continue to gauge community interest in reviving the project or SIG, and will actively support such activities.

## Requirements

### Badge

<img src="https://github.com/finos/contrib-toolbox/blob/main/images/badge-archived.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Archived](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-archived.svg)](https://community.finos.org/docs/governance/Software-Projects/stages/archived)
```

## Releases
Archived projects and SIGs cannot publish anything, of any kind.  If an archived project or SIG intends to make publish new or updated artifacts, it must be revived first by going through the contribution process again and being reinstated as an incubating or active project.

The Foundation encourages community members to volunteer to revive any archived project, whether they originally contributed it or not. Reviving an existing code base is preferable to creating a competing alternative of the same functionality from scratch.

## Notes for Evaluators
If you're evaluating Foundation-hosted projects or SIGs and see the archived badge shown above, here are some of the things you should expect should you choose to download and use the software:

- The artifacts (software, standards, etc.) produced by this activity are no longer maintained.  You cannot expect that any issues you raise, or contributions you make, will be triaged, let alone addressed.
- The project may not have ever been released, and therefore may never have achieved significant levels of functionality or quality.
- The project or SIG may not have a team any more. Some projects and SIGs are archived precisely because the team disbanded and no replacements were forthcoming from the community.
