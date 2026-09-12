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

M9 closed the stable public release gate with production/security headers, responsive regression coverage, legal/SEO runtime checks, repeatable smoke tooling, and release governance evidence.

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

Merge commit:

- `c7c108926ad3f27a0b7a05bca3d0e3d74645a5da`.

Implementation evidence is recorded in `docs/hardening/M10.md`.

### M11 — Public Content Expansion: Product Detail Pages

The first M11 tranche made every published product individually addressable and shareable using the canonical M10 content architecture.

Implemented scope:

- static route for each published product at `/products/[slug]`;
- canonical metadata derived from normalized product content;
- explicit maturity/status presentation;
- evidence and technology sections using canonical product data;
- related solution-domain presentation;
- portfolio modal links to canonical product pages;
- sitemap inclusion for all published product routes;
- smoke verification for every product route exposed by the sitemap;
- nested-route navigation/footer behavior;
- unknown product slug verification against the branded 404 experience.

The tranche intentionally did not add invented case studies, unsupported adoption/revenue/SLA claims, a generic newsroom, or a CMS.

Merge commit:

- `6df7388b6f3af2dd1a81ea45c7c9f207ae6d16c6`.

Post-merge Vercel for that exact commit completed successfully, and production smoke was confirmed safe.

Implementation evidence is recorded in `docs/hardening/M11.md`.

Further M11 content structures such as case studies, updates, technical notes, or structured public media remain demand-driven and require supporting evidence before implementation.

## Current release direction

### v1.1.0

`v1.1.0` is the approved release target for the completed M10 architecture work plus the M11 Product Detail Pages tranche.

Why a minor release:

- the public site gains new backward-compatible routes and discoverability;
- the established v1 routes remain available;
- the operational product boundary is unchanged;
- the release does not require a breaking public contract change.

Release records:

- `docs/release/V1.1-READINESS.md`;
- `docs/release/V1.1-RELEASE-NOTES.md`.

The final tag is `v1.1.0` after the release branch, merge, deployment, production smoke, and final release-record gates complete.

## Forward roadmap

### M12 — Headless CMS Adoption (Conditional)

Goal: introduce an editorial system only when the operational need is proven.

M12 is **not automatically required** after `v1.1.0` or after the first M11 tranche.

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
6. A milestone or release is complete only when its verification gate passes.
7. Stable release tags are immutable historical baselines.

## Versioning direction

- `v1.0.0` is the stable public baseline produced by M9.
- M10 preserves public behavior and establishes architecture rather than a breaking contract.
- M11 Product Detail Pages add backward-compatible public routes, justifying `v1.1.0`.
- Future M11 content additions should be versioned according to actual public-surface impact rather than milestone numbering.
- M12/CMS work should not dictate versioning unless it changes the public contract or compatibility surface.
- CMS adoption is not a prerequisite for a stable WEBBP release.
