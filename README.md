# WEBBP

Public website for Bakaran Project.

## Local development

Use the committed lockfile for reproducible installs:

```bash
npm ci
npm run dev
```

The local development server is available at `http://localhost:3000` unless another port is selected by Next.js.

## Verification

Before a change is considered merge-ready, run:

```bash
npm ci
npm audit
npm audit --omit=dev
npm run verify
git diff --check
git status --short
```

`npm run verify` runs ESLint and a production Next.js build.

For UI changes, also perform focused manual smoke testing for the affected flows. Portfolio changes should verify filter counts/results, first-click modal opening, keyboard activation, equal card alignment, and smooth hover/focus transitions.

## Delivery policy

- `main` is the source of truth for released website code.
- Feature work should be reviewed through a pull request before merge.
- Exact-head Vercel status is supporting evidence, not a substitute for the local verification gate.
- Public product, partnership, legal, customer, adoption, or performance claims require evidence before publication.
- Do not weaken lint, build, security, or accessibility checks merely to make a merge gate pass.

See `CONTRIBUTING.md` and `docs/hardening/` for additional delivery and hardening guidance.

## Repository visibility and licensing

This repository being public does not grant an open-source license. No open-source license is currently declared.
