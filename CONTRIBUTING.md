# Contributing to WEBBP

This repository is the public website for Bakaran Project. Repository state, committed documentation, pull requests, deployment status, and verified local gates are the source of truth for changes.

## Working model

1. Start from the latest `main`.
2. Create a focused branch. Prefer prefixes such as `feat/`, `fix/`, `chore/`, or `docs/`.
3. Keep changes scoped to one reviewable concern.
4. Do not rewrite shared history, force-push, or weaken verification gates merely to make a change pass.
5. Open a pull request into `main`; do not treat a preview deployment as equivalent to merged production state.

## Local setup

Use the committed lockfile:

```bash
npm ci
npm run dev
```

## Required merge gate

Before a pull request is considered merge-ready, run:

```bash
npm ci
npm audit
npm audit --omit=dev
npm run verify
git diff --check
git status --short
```

Expected result:

- clean install succeeds;
- both audit commands report zero known vulnerabilities;
- ESLint passes;
- the production Next.js build succeeds;
- `git diff --check` reports no whitespace errors;
- the working tree is clean after verification.

For changes affecting navigation, theme, motion, accessibility, metadata, or other browser-visible behavior, perform an appropriate manual smoke test as part of the pull request evidence.

## Pull request evidence

A pull request should state:

- the exact problem or objective;
- the scope of files or behavior changed;
- important risks or intentionally deferred work;
- local verification results;
- preview/deployment status when available;
- any public claims introduced and the evidence supporting them.

Do not invent product maturity, customer, performance, security, partnership, legal, or availability claims.

## Dependencies

Use `npm ci` for reproducible installs. When adding or removing a dependency, commit both `package.json` and `package-lock.json` from the same npm operation.

Do not hand-edit the lockfile to imitate an npm install/uninstall operation.

## Secrets and personal data

Never commit credentials, private keys, `.env` files, access tokens, production secrets, personal records, or private customer/school data. If a secret is committed, treat it as compromised and rotate it rather than relying only on deletion from Git history.

## Security reports

Do not open public issues for suspected vulnerabilities. Follow [SECURITY.md](./SECURITY.md).
