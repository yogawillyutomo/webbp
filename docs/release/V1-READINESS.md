# WEBBP v1 Readiness Gate

## Purpose

This checklist records the evidence used to approve WEBBP as stable `v1.0.0`.

The stable v1 scope is the public Bakaran Project corporate/product website. It is not the Bakaran operational platform and it is not a CMS.

## Release baseline

- M0–M8 completed before M9.
- Roadmap/content/CMS strategy merged through PR #13.
- M9 merged through PR #15.
- M9 main commit: `74bb027bf9c8748b4ba8e5ef5846b5f7a2c74160`.
- M9 post-merge Vercel deployment: SUCCESS.
- Production smoke on `https://bakaranproject.com` was manually confirmed safe before the version-release tranche.
- Release branch: `release/v1.0.0`.
- Release PR: #16.
- Version-release merge commit: `178f4a63ec6d01edb1be6bac99a0ce62a3f71c21`.
- Version-release post-merge Vercel deployment: SUCCESS.

## 1. Source and dependency gate

- [x] Clean `npm ci` passed on the final release branch.
- [x] `npm audit` reported 0 vulnerabilities.
- [x] `npm audit --omit=dev` reported 0 production vulnerabilities.
- [x] `npm run verify` passed under `bp-fe@1.0.0`.
- [x] `git diff --check` passed.
- [x] Final release-branch working tree was clean.
- [x] `package.json` and `package-lock.json` are both versioned `1.0.0`.
- [x] The version bump changed no dependency versions.
- [x] Package lock is committed and dependency-consistent.
- [x] M7 removed known generated/archive repository junk and ignore rules prevent recurrence.
- [x] Release history is traceable through PRs and exact-head deployment evidence.

## 2. Build and runtime gate

- [x] Production build succeeds without external Google-font/build-time font network dependency.
- [x] M9 post-merge production deployment completed successfully.
- [x] Release PR #16 exact-head Vercel completed successfully.
- [x] Release PR #16 post-merge Vercel completed successfully.
- [x] Homepage returns success.
- [x] `/privacy` loads.
- [x] `/terms` loads.
- [x] `/robots.txt` loads.
- [x] `/sitemap.xml` loads.
- [x] `/manifest.webmanifest` loads.
- [x] Open Graph image route loads.
- [x] Twitter image route loads.
- [x] Unknown route returns the branded 404 experience.
- [x] `npm run smoke -- http://localhost:3000` passed on the final release branch.
- [x] Production browser smoke was confirmed safe for the M9 runtime inherited unchanged by the release tranche.

The release/version tranche changed only documentation and package-version metadata relative to the already-verified M9 runtime.

## 3. Production security gate

- [x] Production domain uses HTTPS.
- [x] No mixed-content dependency was identified in the current implementation.
- [x] Clickjacking policy reviewed and enforced with CSP `frame-ancestors 'none'` plus `X-Frame-Options: DENY`.
- [x] MIME sniffing protection enabled.
- [x] Referrer policy reviewed and enabled.
- [x] Restrictive permissions policy enabled for unused browser capabilities.
- [x] CSP was evaluated against actual Next.js/theme/Fontsource/Framer Motion requirements and implemented.
- [x] Runtime smoke confirms the security headers are present.
- [x] Browser smoke did not report breakage of fonts, scripts, styles, images, navigation, animation, or portfolio interaction.
- [x] Repository search found no current client-side privileged-secret mechanism or hardcoded common secret pattern in the public source.

The CSP intentionally allows inline script/style behavior required by the current Next.js/theme implementation. This is a documented compatibility decision, not a claim of maximal CSP strictness.

## 4. Content truth gate

- [x] Bakaran Project positioning remains within the approved public corporate/product-site scope.
- [x] Product maturity statuses remain explicit and evidence-governed.
- [x] No unsupported customer, partner, revenue, adoption, SLA, or production-performance claim is published.
- [x] No unverified registered/legal-entity claim is published.
- [x] Public contact data remains centralized through `SITE` configuration.
- [x] Privacy policy reflects the current public website behavior.
- [x] Terms page reflects the current website scope.
- [x] Portfolio filter tags are navigation metadata and do not override maturity status.
- [x] Public evidence language remains deliberately bounded.

Current product maturity at v1 release:

- Bakaran Platform — In Development;
- HADIRA — In Development;
- KARSA — Pre-production;
- SmartLab — In Development;
- SINGGAH — Prototype.

## 5. UX and responsive regression gate

- [x] Desktop navigation smoke-tested through the hardening sequence.
- [x] Mobile navigation behavior was hardened and keyboard/focus-managed in M5.
- [x] Home → Solutions → Products → About → Contact remains the approved information architecture.
- [x] Solution Domain expansion works independently.
- [x] Product filters return the intended multi-tag product subsets/counts.
- [x] ProductCard opens on first interaction.
- [x] Modal close releases pointer interaction immediately and next-card interaction works.
- [x] Theme toggle remains operational.
- [x] Light and dark themes were manually reviewed during M8/M9.
- [x] Contact/footer links remain part of the regression smoke.
- [x] Responsive behavior was reviewed during M5/M8 and no release-blocking layout regression is known.

## 6. Accessibility regression gate

- [x] Skip-link target exists on home and legal pages.
- [x] Primary navigation is keyboard-operable.
- [x] Hero capability interaction uses an accessible button and keyboard activation.
- [x] Solution cards remain keyboard-operable.
- [x] Portfolio filters are actual buttons.
- [x] Portfolio modal traps/restores focus and supports Escape.
- [x] Visible focus treatment remains present on major interactive controls.
- [x] Reduced-motion preference is respected through the Motion provider and animation guards.
- [x] No known major semantic regression remains.

This is not a formal WCAG certification claim.

## 7. SEO and discoverability gate

- [x] Home canonical is correct.
- [x] Legal-page canonicals self-reference correctly.
- [x] Title/description metadata is defined.
- [x] Open Graph metadata is defined.
- [x] Twitter metadata is defined.
- [x] Social image routes render successfully.
- [x] Organization JSON-LD is restricted to verified public fields.
- [x] Sitemap lists intended public routes.
- [x] Robots policy is intentional.
- [x] Manifest is present and valid for the declared site usage.
- [x] Browser/tab icon metadata uses the Bakaran Project logo.

## 8. Performance gate

- [x] Production page load was manually reviewed on normal desktop use.
- [x] Obvious public-asset waste was reduced by replacing the navbar's ~362 KB SVG load with the existing ~43 KB PNG.
- [x] Brand fonts are self-hosted and build without the former Google Fonts network dependency.
- [x] M8 interaction work removed known hover/modal interaction jank.
- [x] No major layout-shift issue was reported during final browser smoke.
- [~] A dedicated throttled mobile-network benchmark was not recorded for this release.
- [~] Repeatable Lighthouse/Web Vitals measurements were not established as a release gate.

The two `[~]` items are accepted non-blocking measurement limitations. No Lighthouse, Web Vitals, or performance score is published as a product claim.

## 9. Governance and release gate

- [x] M9 PR #15 documents implementation and verification evidence.
- [x] Release PR #16 documents version and release evidence.
- [x] M9 post-merge production deployment was verified SUCCESS.
- [x] Release PR #16 post-merge Vercel deployment was verified SUCCESS.
- [x] Repository protection/ruleset status is explicitly recorded.
- [x] Governance limitation is documented in M7, M9, readiness, and release notes.
- [x] `SECURITY.md` and `CONTRIBUTING.md` remain present.
- [x] Release notes summarize the stable public scope and hardening work.
- [x] Version decision is `1.0.0`.

### Accepted governance limitation

At v1 release time:

- GitHub `main` branch protection is disabled;
- repository rulesets are empty.

This is accepted as a known non-blocking governance limitation for v1. Merge discipline therefore continues to rely on PR process, exact-head verification, local parity, and Vercel deployment evidence until repository-level enforcement is added.

## 10. v1 version decision

`1.0.0` is approved as the stable release version.

Final release-branch verification on `ec1753b80121765cf7a13dbb9021f6d14fd82f2f` passed:

```text
npm ci                       PASS
npm audit                    0 vulnerabilities
npm audit --omit=dev         0 vulnerabilities
npm run verify               PASS
git diff --check             PASS
git status --short           clean
npm run smoke -- localhost   PASS
```

A CMS is **not** required for `1.0.0`. M10 remains Content Architecture & CMS Readiness; M12 headless CMS adoption remains conditional on real editorial triggers.

## Final release actions

- [x] Package and lockfile version bumped to `1.0.0` using npm.
- [x] Final release-branch parity passed.
- [x] Release PR #16 merged.
- [x] Post-merge Vercel deployment verified SUCCESS.
- [x] Production runtime smoke evidence remains valid because the release tranche changed no runtime code relative to the verified M9 deployment.
- [ ] Create Git tag `v1.0.0` on the final verified `main` commit after the documentation-only final release record is merged.

## Exit artifacts

- this readiness record;
- `docs/hardening/M9.md`;
- `docs/release/V1-RELEASE-NOTES.md`;
- PR #15 M9 evidence;
- PR #16 release evidence;
- version-release merge commit `178f4a63ec6d01edb1be6bac99a0ce62a3f71c21`;
- post-merge Vercel deployment evidence;
- accepted non-blocking limitations above;
- `v1.0.0` tag on the final verified `main` commit.
