# WEBBP Documentation

This directory is the documentation source of truth for WEBBP roadmap, architecture, release readiness, and milestone hardening evidence.

## Strategy and roadmap

- [`roadmap/WEBBP-ROADMAP.md`](roadmap/WEBBP-ROADMAP.md) — product boundary and milestones M9–M12.
- [`architecture/CONTENT-ARCHITECTURE.md`](architecture/CONTENT-ARCHITECTURE.md) — normalized public-content model and future adapter boundary.
- [`architecture/CMS-STRATEGY.md`](architecture/CMS-STRATEGY.md) — decision to remain repository-driven while becoming CMS-ready.
- [`release/V1-READINESS.md`](release/V1-READINESS.md) — objective release gate before WEBBP may be treated as `v1.0.0`.

## Hardening history

The [`hardening/`](hardening/) directory records milestone-specific implementation and verification evidence for the M0–M9 hardening program.

## Decision hierarchy

When implementation and documentation disagree, resolve the conflict rather than silently choosing one source.

Use this order when planning work:

1. current repository and production behavior;
2. approved architecture/roadmap decisions in this directory;
3. milestone hardening evidence;
4. implementation plan for the active branch.

Public product claims remain subject to evidence-before-claims rules regardless of where content is stored.
