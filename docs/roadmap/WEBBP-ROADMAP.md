# WEBBP Roadmap

## Purpose

WEBBP is the public corporate and product website for Bakaran Project. Its job is to explain what Bakaran Project builds, show evidence-backed product maturity, present solution domains, publish public information, and provide a credible contact surface.

WEBBP is **not** the operational application layer for Bakaran Platform, HADIRA, KARSA, SmartLab, SINGGAH, or future products. Authentication, tenant operations, master data, transactional workflows, AI gateways, and product-local business logic remain owned by their respective platforms.

## Product boundary

WEBBP owns:

- public Bakaran Project positioning;
- solution-domain presentation;
- product portfolio and maturity labels;
- public product detail and evidence pages;
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

## Completed foundation

Milestones M0–M8 established the current baseline:

- M0–M2 — baseline, security/dependency hardening, production-trust cleanup;
- M3 — evidence-led product portfolio;
- M4 — theme/frontend correctness;
- M5 — accessibility and motion safety;
- M6 — SEO and discoverability;
- M7 — repository and delivery governance;
- M8 — corporate/product-house repositioning.

The M8 merge baseline is `main@1978ccc500ee99aa5ec10e5de668790b331e8054`.

## Forward roadmap

### M9 — Production Readiness & v1.0

Goal: make the current public site releasable as a stable v1 without introducing a new product surface.

Primary scope:

- production/security headers;
- final desktop/mobile regression;
- dark/light theme regression;
- keyboard and reduced-motion regression;
- production-domain smoke tests;
- 404/error behavior;
- privacy/terms/robots/sitemap/manifest/social-preview checks;
- performance and Web Vitals review;
- dependency and clean-install verification;
- release checklist and release notes;
- release version decision only after all gates pass.

Exit condition: `V1-READINESS.md` has no unresolved release-blocking item.

### M10 — Content Architecture & CMS Readiness

Goal: separate content ownership from presentation without introducing a CMS yet.

Primary scope:

- define canonical content models;
- centralize product, solution, company, navigation, and public metadata;
- introduce a content repository/adapter boundary;
- remove presentation-layer dependence on scattered hardcoded copy;
- preserve current static build and deployment simplicity;
- prepare migration seams for a future headless CMS.

Exit condition: UI components consume normalized content models instead of owning source-of-truth content.

### M11 — Public Content Expansion

Goal: add useful public content only where Bakaran Project has evidence and an ongoing editorial need.

Candidate scope:

- product detail routes;
- case studies;
- project/product updates;
- insights or technical notes;
- richer evidence references;
- structured public media.

This milestone is content-demand driven. Features are not added solely to make the website appear larger.

Exit condition: content structures are proven by real publishing needs and do not weaken evidence-before-claims guardrails.

### M12 — Headless CMS Adoption (Conditional)

Goal: introduce an editorial system only when the operational need is proven.

M12 is **not automatically required** after M11.

A CMS becomes justified when one or more of these conditions are persistent:

- non-developers must edit or publish content;
- content changes are frequent enough that Git-based editing becomes a bottleneck;
- multiple editors need draft/review/publish workflows;
- case studies, updates, or media volume grows materially;
- scheduled publishing, preview, revision history, or editorial permissions become necessary;
- the same content must be distributed to more than one frontend/channel.

If these conditions are absent, WEBBP should remain repository-driven.

## Release philosophy

1. Evidence before claims.
2. Stability before feature breadth.
3. Content architecture before CMS adoption.
4. CMS adoption must solve a demonstrated editorial problem.
5. Public website concerns stay separate from operational product concerns.
6. A milestone is complete only when its verification gate passes.

## Versioning direction

- `0.x` represents pre-v1 hardening and restructuring.
- `1.0.0` is allowed only after M9 release criteria pass.
- CMS adoption is not a prerequisite for `1.0.0`.
- Content expansion and CMS work should not delay v1 if the current public site is otherwise production-ready.
