# Bakaran Project Website

Official public website for **Bakaran Project**, presenting its engineering capabilities, product portfolio, and contact information.

🌐 **Live:** https://bakaranproject.com

## Overview

This repository contains the public-facing Bakaran Project website. The current site is organized around:

- **Hero** — evidence-led positioning and introduction
- **Services** — engineering capabilities grounded in current work
- **Products** — selected products with explicit maturity/status wording
- **Contact** — inquiry and collaboration entry point
- **Legal & metadata** — privacy, terms, canonical metadata, crawl routes, and social previews

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **ESLint**

## Project Structure

```text
src/
├── app/          # Next.js app entry, legal pages, metadata routes, global styles
├── config/       # Public site identity / canonical configuration
├── constants/    # Shared static values
├── core/         # Core application concerns
├── features/     # Hero, services, portfolio, and contact features
└── shared/       # Shared UI, layout, providers, and SEO helpers
```

## Local Development

Install exactly from the committed lockfile:

```bash
npm ci
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Verification

The local merge gate is:

```bash
npm ci
npm audit
npm audit --omit=dev
npm run verify
git diff --check
git status --short
```

`npm run verify` runs ESLint and the production Next.js build.

Browser-visible changes should also receive a focused manual smoke test. When a Vercel preview is available, verify the exact pull-request HEAD rather than assuming an older preview represents the current branch.

## Contribution & Security

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the branch/PR workflow and required evidence.

Potential vulnerabilities should be reported privately according to [SECURITY.md](./SECURITY.md), not through public issues.

## Repository Governance

- `main` is the production source branch.
- Pull requests should carry local verification evidence and exact-head deployment evidence when available.
- Dependency updates are tracked by Dependabot.
- Ownership defaults are declared in `.github/CODEOWNERS`.
- Generated archives/build artifacts should not be committed.

GitHub branch/ruleset configuration is repository-level state and must be verified separately from committed files. A green Vercel deployment is useful evidence, but it does not replace the local audit/lint/build gate.

## Website Metadata

The application uses Indonesian-language public metadata with `https://bakaranproject.com` as the canonical base URL. Metadata claims must stay aligned with evidence-backed product status and public identity.

## License

This public repository currently does **not** include an open-source license. Public visibility alone does not grant reuse, redistribution, or modification rights beyond rights provided by applicable law.

---

**Bakaran Project** — building digital systems for real operational needs.
