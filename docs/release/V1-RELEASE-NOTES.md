# WEBBP v1.0.0 — Release Notes

## Status

WEBBP `v1.0.0` is approved for stable public release.

The release scope is the public Bakaran Project corporate/product website. It is intentionally **not** the Bakaran operational platform, a customer/tenant application, or a CMS.

## Release scope

WEBBP v1 presents Bakaran Project through:

- Home;
- Solution Domains;
- Product Portfolio;
- About;
- Contact;
- Privacy Policy;
- Terms of Service.

Public product maturity remains explicit and evidence-governed rather than being flattened into generic success claims.

### Product maturity at v1

- Bakaran Platform — In Development;
- HADIRA — In Development;
- KARSA — Pre-production;
- SmartLab — In Development;
- SINGGAH — Prototype.

These labels are not equivalent production states and must remain evidence-backed.

## What v1 establishes

### Product-house positioning

The website now communicates Bakaran Project as a digital product and systems engineering team with three public solution domains:

- Education Systems;
- Operational Platforms & Integration;
- Smart Mobility & Edge.

No unverified registered-company, customer, partner, revenue, SLA, adoption, or production-performance claim is introduced by the release.

### UX and accessibility

The M0–M9 hardening sequence established:

- responsive desktop/mobile navigation;
- dark/light theme support;
- self-hosted Orbitron/Rajdhani brand fonts;
- keyboard-accessible navigation and interactive cards;
- skip-to-content behavior;
- accessible hero interaction;
- independent Solution Domain expansion;
- multi-tag Product Portfolio filtering;
- focus-managed portfolio dialog;
- immediate pointer release during modal close;
- reduced-motion handling;
- branded 404 behavior with conversational recovery copy and direct recovery links;
- Bakaran Project browser/tab icon metadata.

### SEO and discoverability

The site includes:

- canonical metadata;
- Open Graph/Twitter metadata and generated images;
- Organization JSON-LD restricted to verified public fields;
- `robots.txt`;
- `sitemap.xml`;
- web manifest;
- self-hosted brand fonts and browser identity assets.

### Production hardening

M9 added and verified:

- repository-owned Content Security Policy;
- clickjacking protection;
- MIME-sniffing protection;
- referrer policy;
- restrictive permissions policy;
- HSTS;
- legal-page skip-link consistency;
- custom 404 recovery behavior;
- public asset efficiency improvements;
- repeatable route/header smoke testing through `npm run smoke -- <base-url>`;
- release governance evidence.

## Verification evidence

### M9

M9 merged through PR #15 to:

`74bb027bf9c8748b4ba8e5ef5846b5f7a2c74160`

Evidence included:

- `npm ci` PASS;
- `npm audit` — 0 vulnerabilities;
- `npm audit --omit=dev` — 0 vulnerabilities;
- `npm run verify` PASS;
- `git diff --check` PASS;
- clean working tree;
- localhost runtime smoke PASS;
- exact-head Vercel SUCCESS;
- post-merge Vercel SUCCESS;
- production-domain smoke manually confirmed safe;
- BP browser icon and conversational 404 manually confirmed safe.

### Release tranche

Release PR #16 set `package.json` and `package-lock.json` consistently to `1.0.0` without changing dependency versions.

Final local release-branch evidence on `ec1753b80121765cf7a13dbb9021f6d14fd82f2f`:

- clean `npm ci` PASS;
- `npm audit` — 0 vulnerabilities;
- `npm audit --omit=dev` — 0 vulnerabilities;
- `npm run verify` PASS under `bp-fe@1.0.0`;
- `git diff --check` PASS;
- clean working tree;
- `npm run smoke -- http://localhost:3000` PASS.

PR #16 was squash-merged to:

`178f4a63ec6d01edb1be6bac99a0ce62a3f71c21`

Post-merge Vercel for that commit completed successfully. The release tranche changed only documentation and package-version metadata relative to the already-smoked M9 runtime, so no runtime behavior was introduced by the version bump.

## Content management direction

v1 remains repository-driven.

The approved roadmap remains:

- M10 — Content Architecture & CMS Readiness;
- M11 — Public Content Expansion;
- M12 — Headless CMS only when real editorial triggers justify it.

A headless CMS is **not** a v1 requirement.

## Accepted non-blocking limitations

### Repository governance

GitHub `main` is not branch-protected and no repository ruleset is active. This remains a known non-blocking governance limitation. Until enforcement is added, release discipline relies on PR process, exact-head verification, local parity, and Vercel deployment evidence.

### Performance measurement

No repeatable Lighthouse/Web Vitals score baseline is declared as a v1 release criterion or public claim. A dedicated throttled mobile-network benchmark was not recorded for this release. These are measurement limitations, not evidence of a known blocking performance defect.

## Final release record

- version: `1.0.0`;
- tag: `v1.0.0`;
- release date: 13 September 2026;
- M9 PR: #15;
- release PR: #16;
- version-release merge commit: `178f4a63ec6d01edb1be6bac99a0ce62a3f71c21`;
- post-merge Vercel: SUCCESS;
- production runtime smoke: confirmed safe for the M9 runtime inherited unchanged by the release tranche;
- blocking readiness exceptions: none;
- accepted non-blocking limitations: repository protection/ruleset enforcement and repeatable performance-score baseline as documented above.

The `v1.0.0` tag is to be placed on the final verified `main` commit after this documentation-only release record is merged.
