# WEBBP v1 Readiness Gate

## Purpose

This checklist defines the minimum evidence required before WEBBP may be treated as a stable `v1.0.0` public release.

Passing this checklist does not mean every future feature is complete. It means the current public website is sufficiently stable, truthful, secure, accessible, deployable, and maintainable for its declared scope.

## Release baseline

Current pre-M9 baseline:

- `main@1978ccc500ee99aa5ec10e5de668790b331e8054`
- M0–M8 completed
- post-M8 Vercel deployment successful

## 1. Source and dependency gate

Required:

- [ ] `npm ci` succeeds from a clean dependency state
- [ ] `npm audit` reports no unresolved release-blocking vulnerability
- [ ] `npm audit --omit=dev` reports no unresolved release-blocking production vulnerability
- [ ] `npm run verify` passes
- [ ] `git diff --check` passes
- [ ] release branch working tree is clean
- [ ] package lock is committed and consistent
- [ ] no generated/archive junk is committed
- [ ] release commit is traceable through PR history

## 2. Build and runtime gate

Required:

- [ ] production build succeeds without external build-time font/network dependency
- [ ] production deployment completes successfully
- [ ] homepage returns expected success response
- [ ] `/privacy` loads
- [ ] `/terms` loads
- [ ] `/robots.txt` loads
- [ ] `/sitemap.xml` loads
- [ ] `/manifest.webmanifest` loads
- [ ] Open Graph image route loads
- [ ] Twitter image route loads
- [ ] unknown route presents acceptable 404 behavior
- [ ] no known production console error blocks normal use

## 3. Production security gate

M9 must review security headers against actual application requirements.

Required:

- [ ] HTTPS production domain verified
- [ ] no mixed-content dependency identified
- [ ] clickjacking policy reviewed
- [ ] MIME sniffing protection reviewed
- [ ] referrer policy reviewed
- [ ] permissions policy reviewed
- [ ] Content Security Policy evaluated and implemented if it can be safely enforced
- [ ] headers do not break fonts, scripts, styles, images, Next.js runtime, or Vercel behavior
- [ ] no privileged secret is exposed to client bundles

Security headers must be tested rather than copied from a generic template.

## 4. Content truth gate

Required:

- [ ] public Bakaran Project positioning matches approved scope
- [ ] product maturity statuses remain evidence-backed
- [ ] no unsupported customer/partner/revenue/adoption claim
- [ ] no unverified legal-entity claim
- [ ] public contact data correct
- [ ] privacy policy current for actual website behavior
- [ ] terms page current for actual website behavior
- [ ] product filters/tags do not imply unsupported maturity
- [ ] visible evidence language remains accurate

## 5. UX and responsive regression gate

Required manual smoke:

- [ ] desktop navigation
- [ ] mobile navigation
- [ ] Home → Solutions → Products → About → Contact navigation
- [ ] Solution Domain expansion works independently
- [ ] product filters return correct products and counts
- [ ] ProductCard opens on first interaction
- [ ] modal closes and immediate next interaction works
- [ ] theme toggle works
- [ ] light theme acceptable
- [ ] dark theme acceptable
- [ ] contact/footer links work
- [ ] layout acceptable at common mobile/tablet/desktop widths

## 6. Accessibility regression gate

Required:

- [ ] skip link still works
- [ ] primary navigation operable by keyboard
- [ ] hero interaction operable by keyboard
- [ ] Solution cards operable by keyboard
- [ ] portfolio filters operable by keyboard
- [ ] portfolio modal traps/restores focus correctly
- [ ] Escape closes modal where expected
- [ ] visible focus states remain clear
- [ ] reduced-motion preference respected
- [ ] no major semantic regression identified

This checklist does not constitute a formal WCAG certification claim.

## 7. SEO and discoverability gate

Required:

- [ ] home canonical correct
- [ ] legal-page canonicals self-reference correctly
- [ ] title/description metadata correct
- [ ] Open Graph metadata correct
- [ ] Twitter metadata correct
- [ ] social images render
- [ ] Organization JSON-LD remains truthful
- [ ] sitemap lists intended public routes only
- [ ] robots policy intentional
- [ ] manifest remains valid for declared usage

## 8. Performance gate

M9 should establish an evidence-based baseline rather than inventing a score target.

Required:

- [ ] production page load reviewed on desktop
- [ ] production page load reviewed on mobile-class viewport/network where practical
- [ ] obvious oversized asset issue absent
- [ ] self-hosted fonts load correctly
- [ ] animation does not create obvious interaction jank
- [ ] major layout shift issue not observed
- [ ] Web Vitals/Lighthouse evidence recorded if tooling is available and repeatable

A performance number must not be published as a product claim unless measurement conditions are documented.

## 9. Governance and release gate

Required:

- [ ] release PR documents verification evidence
- [ ] post-merge production deployment verified
- [ ] repository protection/ruleset status explicitly recorded
- [ ] unresolved governance limitation documented if technical permissions prevent enforcement
- [ ] `SECURITY.md` and `CONTRIBUTING.md` remain current
- [ ] release notes summarize public changes
- [ ] version decision recorded

## 10. v1 version decision

`1.0.0` may be assigned only when all release-blocking items above pass or have a documented, explicitly accepted non-blocking exception.

A CMS is **not** required for `1.0.0`.

The stable v1 scope is the public corporate/product website, not a content-management platform and not the Bakaran operational platform.

## Exit artifact

M9 should leave behind:

- completed version of this checklist;
- `docs/hardening/M9.md` containing verification evidence;
- release notes;
- exact release/main commit;
- production deployment evidence;
- any accepted known limitations.
