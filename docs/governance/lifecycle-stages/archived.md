---
id: archived
title: Archived Stage
---

## Badge

<img src="https://raw.githubusercontent.com/finos/contrib-toolbox/master/images/badge-archived.png" width="150" />

Foundation-hosted projects are expected to provide a clear indication to visitors that they are in an archived stage. To this end, the Foundation provides a badge that should be displayed at the top of the project's root-level `README.md` file, using the following Markdown:

```
[![FINOS - Archived](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-archived.svg)](https://community.finos.org/docs/governance/lifecycle-stages/archived)
```

See here for a list of [FINOS Archived Projects](https://landscape.finos.org/?group=undefined&view-mode=grid&project=archived). 

## Definition

Projects are Archived when they are no longer actively developed, for any reason. Archived projects may no longer actively address new issues, including security vulnerabilities. Their code and documentation remain available because they may still be useful, but should be used with caution due to the lack of updates.

Archived projects cannot publish anything, of any kind.  If an archived project intends to make publish new or updated artifacts, it must be revived first by going through the contribution process again and being reinstated as an incubating or active project.

## Objectives
Archived projects have no objectives - they are simply retained as-is, in whatever state they were in at the time of archival. The FINOS team and maintainers might, however, continue to gauge community interest in reviving the project, and will actively support such activities.

Projects that are no longer active, or falter for other reasons, should be marked as archived to educate consumers and other potential evaluators. It's an important maintainer duty to trigger archival when the project is no longer maintained. 

Projects may be moved to the Archived state from either the Incubating or Graduated states, either upon the request of the project maintainers, or upon a determination by FINOS on the basis of the project's status.

## Initiating archival
Anyone can publicly trigger the archiviation process for a project by [requesting archival](https://github.com/finos/community/issues/new?assignees=maoo%2C+TheJuanAndOnly99&labels=&template=Project-Archival.md&title=projectName+Archival+Request); if the Project Lead Maintainer agrees that archiving is the appropriate course of action, or the project team does not respond within 14 days, the [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) will formalize the archival request.

The [FINOS Technical Oversight Committee](https://github.com/finos/technical-oversight-committee) is responsible for resolving any possible dispute in case of disagreement from project teams

## Archival inactivity trigger
Projects that have become inactive become eligible for archiving, where "inactivity" is defined as having had no activity (released / publications, commits, PRs, mailing list traffic, documentation updates, issue updates, etc.) in the last 180 days (6 months).

## Notes for Evaluators
If you're evaluating Foundation-hosted projects and see the archived badge shown above, here are some of the things you should expect should you choose to download and use the software:

- The artifacts (software, standards, etc.) produced by this activity are no longer maintained.  You cannot expect that any issues you raise, or contributions you make, will be triaged, let alone addressed.
- The project may not have ever been released, and therefore may never have achieved significant levels of functionality or quality.
- The project may not have a team any more. Some projects are archived precisely because the team disbanded and no replacements were forthcoming from the community.

The Foundation encourages community members to volunteer to revive any archived project, whether they originally contributed it or not. Reviving an existing code base is preferable to creating a competing alternative of the same functionality from scratch.
