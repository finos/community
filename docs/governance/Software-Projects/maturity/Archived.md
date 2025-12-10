---
id: archived
title: FINOS Archived Projects
---

Projects that are no longer active, or falter for other reasons, may be marked as archived to educate consumers and other potential evaluators.  In this state:
- issues may not be triaged in a timely fashion (or at all), and almost certainly won't be addressed,
- code changes and new software releases are not expected,
- the project team may have disbanded and unresponsive.

## Triggers
Projects that have become inactive become eligible for archiving, where "inactivity" is defined as having had no activity (released / publications, commits, PRs, mailing list traffic, documentation updates, issue updates, etc.) in the last 180 days (6 months).

Anyone can publicly request to trigger the archiviation process for a project by [creating a GitHub Issue](https://github.com/finos/community/issues/new?template=Project-Archiviation.md); if the Project Lead Maintainer agrees that archiving is the appropriate course of action, or the project team  does not respond within 14 days, FINOS will proceed with the archiviation.

The [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) is responsible for resolving any possible dispute in case of disagreement from project teams and for reporting to the FINOS Governing Board on a quarterly cadence.

## Objectives
Archived projects have no objectives - they are simply retained as-is, in whatever state they were in at the time of archival.

The FINOS team might, however, continue to gauge community interest in reviving the project, and will actively support such activities.

## Requirements

### Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-archived.png" width="150"/>

Foundation-hosted projects are expected to provide a clear indication to visitors that they are active. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Archived](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-archived.svg)](https://community.finos.org/docs/governance/Software-Projects/maturity/archived)
```

## Releases
Archived projects cannot publish anything, of any kind.  If an archived project intends to make publish new or updated artifacts, it must be revived first by going through the contribution process again and being reinstated as an incubating or graduated project.

The Foundation encourages community members to volunteer to revive any archived project, whether they originally contributed it or not. Reviving an existing code base is preferable to creating a competing alternative of the same functionality from scratch.

## Notes for Evaluators
If you're evaluating Foundation-hosted projects and see the archived badge shown above, here are some of the things you should expect should you choose to download and use the software:

- The artifacts (software, standards, etc.) produced by this activity are no longer maintained.  You cannot expect that any issues you raise, or contributions you make, will be triaged, let alone addressed.
- The project may not have ever been released, and therefore may never have achieved significant levels of functionality or quality.
- The project may not have a team any more. Some projects are archived precisely because the team disbanded and no replacements were forthcoming from the community.
