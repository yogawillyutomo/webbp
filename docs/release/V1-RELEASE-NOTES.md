# WEBBP v1.0.0 — Draft Release Notes

> Status: **draft**. Do not treat `v1.0.0` as released until `docs/release/V1-READINESS.md` is completed and the release commit/deployment are verified.

## Release scope

WEBBP v1 is the public corporate/product website for Bakaran Project.

It is intentionally **not**:

- the Bakaran operational platform;
- a customer/tenant application;
- a content-management system;
- evidence that every displayed product is production-complete.

## What v1 establishes

### Product-house positioning

The website presents Bakaran Project through:

- Home;
- Solution Domains;
- Product Portfolio;
- About;
- Contact;
- Privacy Policy;
- Terms of Service.

Public product maturity is shown explicitly instead of flattening every product into a generic success claim.

### Current public product maturity

At the M9 baseline:

- Bakaran Platform — In Development;
- HADIRA — In Development;
- KARSA — Pre-production;
- SmartLab — In Development;
- SINGGAH — Prototype.

These labels must remain evidence-backed at release time.

### UX and accessibility work

The hardening sequence established:

- responsive desktop/mobile navigation;
- dark/light theme support;
- keyboard-accessible navigation and interactive cards;
- skip-to-content behavior;
- accessible hero interaction;
- focus-managed portfolio dialog;
- reduced-motion handling;
- independent Solution Domain expansion;
- multi-tag Product Portfolio filtering;
- responsive product modal lifecycle;
- branded 404 behavior.

### SEO and discoverability

The site includes:

- canonical metadata;
- Open Graph/Twitter metadata and generated images;
- Organization JSON-LD;
- `robots.txt`;
- `sitemap.xml`;
- web manifest;
- self-hosted brand fonts.

### Production hardening

M9 adds/reviews:

- production security headers and CSP;
- legal-page skip-link consistency;
- public asset efficiency;
- production route/header smoke tests;
- release governance evidence.

## Content management direction

v1 remains repository-driven.

The roadmap intentionally separates CMS adoption from production readiness:

- M10 — Content Architecture & CMS Readiness;
- M11 — Public Content Expansion;
- M12 — Headless CMS only if real editorial triggers justify it.

A headless CMS is **not** a v1 requirement.

## Known governance limitation

At the M9 baseline, GitHub `main` is not branch-protected and no repository ruleset is active. Until repository administration enforces those controls, merge discipline relies on documented process, exact-head verification, local parity, and Vercel deployment evidence.

## Final release evidence

To be filled only when v1 is actually released:

- release commit: `TBD`;
- release PR: `TBD`;
- release date: `TBD`;
- production deployment: `TBD`;
- readiness exceptions: `TBD`;
- tag/version: `TBD`.
