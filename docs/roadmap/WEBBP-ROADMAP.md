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

### M10 — Content Architecture & CMS Readiness

M10 separated public content ownership from presentation without adopting a CMS.

Implemented scope:

- canonical repository-backed content models;
- centralized site, navigation, product, solution, company, contact, legal, and SEO content;
- server-side content repository/query boundary;
- normalized public props passed into Client Components;
- deterministic content validation in the standard verification gate;
- duplicate presentation-local content sources removed;
- vendor-neutral CMS migration seam preserved.

Merge baseline:

- `main@c7c108926ad3f27a0b7a05bca3d0e3d74645a5da`.

M10 local exact-head validation, build, runtime smoke, and visual regression passed. The merge explicitly accepted an external Vercel build-rate-limit condition; that provider quota state was not treated as evidence of an application compile failure.

Implementation evidence is recorded in `docs/hardening/M10.md`.

## Active milestone

### M11 — Public Content Expansion

Goal: add useful public content only where Bakaran Project has evidence and an ongoing public need.

Initial tranche: **Product Detail Pages**.

This tranche exists because the current Product Portfolio already contains evidence-backed product maturity, descriptions, technology, and claim-safe proof, but those records are not individually addressable or shareable.

Primary scope:

- static public route for each published product at `/products/[slug]`;
- metadata and canonical URL derived from canonical product content;
- explicit product maturity/status presentation;
- evidence and technology sections using existing normalized product data;
- related solution-domain navigation;
- portfolio modal links to the canonical product page;
- sitemap inclusion for published product routes;
- smoke verification for every product route exposed by the sitemap;
- nested-route navigation/footer behavior without introducing a second content source.

Non-goals for the initial M11 tranche:

- no invented customer case studies;
- no production/adoption/revenue/SLA claims beyond evidence already approved for public content;
- no generic blog or newsroom added only to increase page count;
- no headless CMS adoption;
- no operational product functionality moved into WEBBP.

Exit condition for the tranche:

- every published product has a stable, indexable, evidence-backed public detail page;
- homepage portfolio behavior remains intact;
- sitemap and smoke gates cover published product routes;
- content validation, lint, build, runtime smoke, visual/accessibility regression, and available deployment gates pass.

Further M11 content structures such as case studies, updates, or technical notes remain demand-driven and require source evidence before implementation.

## Forward roadmap

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
- M10 architecture work does not itself require a major-version change because it preserves public behavior.
- M11 introduces new public routes and should receive a version decision only after its public-surface scope and release impact are closed.
- M12/CMS work should not dictate versioning unless it changes the public contract or compatibility surface.
- CMS adoption is not a prerequisite for a stable WEBBP release.
