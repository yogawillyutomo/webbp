# WEBBP Roadmap

## Purpose

WEBBP is the public corporate and product website for Bakaran Project. Its job is to explain what Bakaran Project builds, show evidence-backed product maturity, present solution domains, publish public information, and provide a credible contact surface.

WEBBP is **not** the operational application layer for Bakaran Platform, HADIRA, KARSA, SmartLab, SINGGAH, or future products. Authentication, tenant operations, master data, transactional workflows, AI gateways, and product-local business logic remain owned by their respective platforms.

## Product boundary

WEBBP owns:

- public Bakaran Project positioning;
- solution-domain presentation;
- product portfolio and maturity labels;
- public product detail and evidence pages when justified;
- case studies and public updates when evidence exists;
- public contact information;
- SEO, metadata, social previews, sitemap, and robots policy;
- privacy and terms pages;
- public release quality and accessibility.

WEBBP does not own:

- operational user accounts or tenant administration;
- school or customer master data;
- transactional workflows;
- product-local authorization;
- parent, student, teacher, operator, or staff portals;
- internal financial or operational dashboards;
- AI/MCP operational execution.

## Completed milestones

### M0–M8 — Foundation and repositioning

The pre-v1 sequence established:

- M0–M2 — baseline, security/dependency hardening, and production-trust cleanup;
- M3 — evidence-led Product Portfolio;
- M4 — theme/frontend correctness;
- M5 — accessibility and motion safety;
- M6 — SEO and discoverability;
- M7 — repository and delivery governance;
- M8 — corporate/product-house repositioning.

### M9 — Production Readiness & v1.0

M9 closed the stable public release gate with:

- production/security headers;
- desktop/mobile regression;
- dark/light theme and reduced-motion regression;
- production-domain smoke testing;
- custom 404 behavior;
- legal/robots/sitemap/manifest/social-preview verification;
- dependency and clean-install verification;
- repeatable smoke tooling;
- release checklist and release notes.

Stable release:

- version: `1.0.0`;
- tag: `v1.0.0`;
- final release-record commit: `3b373963efad12779de476fcd1f4b1cbdfff2dfe`.

## Active milestone

### M10 — Content Architecture & CMS Readiness

Goal: separate content ownership from presentation without introducing a CMS yet.

Primary scope:

- define canonical content models;
- centralize product, solution, company, navigation, contact, legal metadata, and public SEO content;
- introduce a server-side content repository/query boundary;
- ensure Client Components receive normalized public props rather than importing content-source/CMS concerns directly;
- add deterministic content validation to the standard verification gate;
- remove duplicate presentation-local sources of truth;
- preserve v1 visual and interaction behavior;
- prepare a vendor-neutral migration seam for a future headless CMS.

Exit condition:

- normalized repository-backed content is the canonical source for implemented public domains;
- UI presentation no longer owns the migrated source-of-truth copy/data;
- exact-head content validation, lint, build, smoke, visual regression, and Vercel gates pass;
- no CMS provider is required for milestone closure.

Implementation evidence is recorded in `docs/hardening/M10.md`.

## Forward roadmap

### M11 — Public Content Expansion

Goal: add useful public content only where Bakaran Project has evidence and an ongoing editorial need.

Candidate scope:

- product detail routes;
- case studies;
- project/product updates;
- insights or technical notes;
- richer evidence references;
- structured public media.

M11 is content-demand driven. Features are not added solely to make the website appear larger.

Exit condition: new content structures are proven by real publishing needs and do not weaken evidence-before-claims guardrails.

### M12 — Headless CMS Adoption (Conditional)

Goal: introduce an editorial system only when the operational need is proven.

M12 is **not automatically required** after M11.

A CMS becomes justified when one or more of these conditions becomes persistent rather than occasional:

- non-developers must edit or publish content independently;
- publishing frequency makes pull-request-based content updates inefficient;
- multiple editors need draft/review/publish workflows or permissions;
- case-study/update/media volume grows materially;
- scheduled publishing, preview, or separate editorial revision history is required;
- one content source must feed multiple public channels.

If these conditions are absent, WEBBP should remain repository-driven and continue using the M10 content architecture.

## Release philosophy

1. Evidence before claims.
2. Stability before feature breadth.
3. Content architecture before CMS adoption.
4. CMS adoption must solve a demonstrated editorial problem.
5. Public website concerns stay separate from operational product concerns.
6. A milestone is complete only when its verification gate passes.
7. Stable release tags are immutable historical baselines; future milestones advance from `main` rather than rewriting `v1.0.0`.

## Versioning direction

- `v1.0.0` is the stable public baseline produced by M9.
- M10 architecture work does not itself require a major-version change because it is intended to preserve public behavior.
- M11/M12 version changes should follow actual public-surface or compatibility impact rather than milestone numbering.
- CMS adoption is not a prerequisite for a stable WEBBP release.