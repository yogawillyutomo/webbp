# WEBBP v1.0.0 — Release Candidate Notes

> Status: **release candidate**. `v1.0.0` is not final until the release branch passes parity, is merged, the resulting main deployment is verified, and the `v1.0.0` tag/release is created on that exact verified commit.

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

At release-candidate time:

- Bakaran Platform — In Development;
- HADIRA — In Development;
- KARSA — Pre-production;
- SmartLab — In Development;
- SINGGAH — Prototype.

These labels remain evidence-governed and must not be interpreted as equivalent production maturity.

### UX and accessibility

The M0–M9 hardening sequence established:

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
- branded 404 behavior with conversational recovery copy and direct recovery links.

### SEO, browser identity, and discoverability

The site includes:

- canonical metadata;
- Open Graph/Twitter metadata and generated images;
- Organization JSON-LD;
- `robots.txt`;
- `sitemap.xml`;
- web manifest;
- Bakaran Project browser/tab icon metadata;
- self-hosted Orbitron/Rajdhani brand fonts.

### Production hardening

M9 adds and verifies:

- repository-owned production security headers and CSP;
- clickjacking, MIME-sniffing, referrer, permissions-policy, and HSTS controls;
- legal-page skip-link consistency;
- custom 404 recovery behavior;
- public asset efficiency improvements;
- repeatable production route/header smoke tests;
- release governance evidence.

## Content management direction

v1 remains repository-driven.

The roadmap intentionally separates CMS adoption from production readiness:

- M10 — Content Architecture & CMS Readiness;
- M11 — Public Content Expansion;
- M12 — Headless CMS only if real editorial triggers justify it.

A headless CMS is **not** a v1 requirement.

## Verification evidence before the release tranche

M9 merged through PR #15 to:

`main@74bb027bf9c8748b4ba8e5ef5846b5f7a2c74160`

Evidence already completed before starting `release/v1.0.0`:

- local `npm ci` PASS;
- `npm audit` — 0 vulnerabilities;
- `npm audit --omit=dev` — 0 vulnerabilities;
- `npm run verify` PASS;
- `git diff --check` PASS;
- clean working tree;
- local runtime smoke PASS;
- exact-head M9 Vercel SUCCESS;
- M9 post-merge Vercel SUCCESS;
- production-domain smoke manually confirmed safe;
- BP browser icon and conversational 404 manually confirmed safe.

The release branch must rerun parity after the package/lock version bump before merge.

## Known accepted limitations

### Repository governance

At release-candidate time, GitHub `main` is not branch-protected and no repository ruleset is active. This remains a known non-blocking governance limitation. Until enforcement is added, merge discipline relies on PR process, exact-head verification, local parity, and Vercel deployment evidence.

### Performance measurement

No repeatable Lighthouse/Web Vitals score is being declared as a v1 release criterion or public claim. No dedicated throttled mobile-network benchmark was recorded for this release. These are measurement limitations, not evidence of a known blocking performance defect.

## Final release record

To be completed after the release PR is merged and the exact main release commit is verified:

- version: `1.0.0`;
- tag: `v1.0.0`;
- release branch: `release/v1.0.0`;
- release PR: pending;
- exact release/main commit: pending;
- release date: pending;
- post-merge Vercel deployment: pending;
- production smoke: pending final release-commit verification;
- blocking readiness exceptions: none currently known;
- accepted non-blocking limitations: repository protection/ruleset enforcement and repeatable performance-score baseline as documented above.
