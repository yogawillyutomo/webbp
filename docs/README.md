# WEBBP Documentation

This directory is the documentation source of truth for WEBBP roadmap, architecture, release readiness, and milestone implementation evidence.

## Strategy and roadmap

- [`roadmap/WEBBP-ROADMAP.md`](roadmap/WEBBP-ROADMAP.md) — product boundary and milestones M9–M12.
- [`architecture/CONTENT-ARCHITECTURE.md`](architecture/CONTENT-ARCHITECTURE.md) — implemented normalized public-content model, server/client boundary, validation rules, and future CMS adapter seam.
- [`architecture/CMS-STRATEGY.md`](architecture/CMS-STRATEGY.md) — decision to remain repository-driven while becoming CMS-ready.
- [`release/V1-READINESS.md`](release/V1-READINESS.md) — v1.0.0 readiness evidence and accepted limitations.
- [`release/V1-RELEASE-NOTES.md`](release/V1-RELEASE-NOTES.md) — stable WEBBP v1.0.0 release record.
- [`release/V1.1-READINESS.md`](release/V1.1-READINESS.md) — v1.1.0 readiness and final release gate.
- [`release/V1.1-RELEASE-NOTES.md`](release/V1.1-RELEASE-NOTES.md) — v1.1.0 release-candidate record covering M10 and the completed M11 Product Detail Pages tranche.

## Milestone evidence

The [`hardening/`](hardening/) directory records milestone-specific implementation and verification evidence.

Current sequence:

- M0–M9 — baseline through stable public v1.0.0;
- [`hardening/M10.md`](hardening/M10.md) — Content Architecture & CMS Readiness;
- [`hardening/M11.md`](hardening/M11.md) — completed initial Public Content Expansion tranche: evidence-backed Product Detail Pages.

## Current release direction

- stable historical baseline: `v1.0.0`;
- release candidate in progress: `v1.1.0`;
- M12 headless CMS adoption remains conditional on demonstrated editorial need.

## Decision hierarchy

When implementation and documentation disagree, resolve the conflict rather than silently choosing one source.

Use this order when planning work:

1. current repository and production behavior;
2. approved architecture/roadmap decisions in this directory;
3. milestone implementation and verification evidence;
4. implementation plan for the active branch.

Public product claims remain subject to evidence-before-claims rules regardless of where content is stored. A CMS or content model never turns an unsupported statement into a verified claim.
