# WEBBP CMS Strategy

## Decision

WEBBP will become **CMS-ready**, but it will **not adopt a CMS yet**.

The current website remains repository-driven until editorial complexity demonstrates that a CMS solves a real operational problem.

## What is a headless CMS?

A headless CMS manages content but does not own the public website presentation.

Typical flow:

```text
Editor / Content Manager
        ↓
Headless CMS
        ↓ API / SDK
WEBBP Next.js
        ↓
Public Website
```

The CMS provides content storage, editing, revision workflows, media management, and permissions. WEBBP remains responsible for layout, design, interaction, accessibility, routing, and rendering.

This differs from a traditional coupled CMS where content management and page/theme rendering are tightly integrated.

## Why headless fits WEBBP

WEBBP has a highly customized Next.js presentation layer with:

- custom product portfolio interactions;
- motion and reduced-motion behavior;
- theme handling;
- accessibility behavior;
- evidence-led public product claims;
- SEO metadata and generated social assets.

Keeping presentation independent allows a future CMS to improve editorial workflow without forcing a redesign or replacing the application architecture.

## Why not adopt a CMS now?

Current public content volume is still manageable in Git:

- a small number of products;
- three solution domains;
- a limited About narrative;
- contact data;
- privacy and terms;
- no proven high-frequency editorial calendar yet.

Adding a CMS now would introduce new concerns before they are necessary:

- authentication and editor accounts;
- roles and permissions;
- CMS schema lifecycle;
- API tokens and secrets;
- preview environments;
- media lifecycle;
- backup/export strategy;
- vendor/service availability;
- additional security surface;
- additional operational cost;
- content synchronization and cache invalidation.

The present benefit does not yet justify that complexity.

## Trigger conditions for CMS adoption

A CMS should be reconsidered when at least one of the following becomes a sustained requirement rather than a one-off request:

1. non-developers need to edit public content independently;
2. publishing frequency makes pull-request-based content updates inefficient;
3. more than one editor needs workflow or permissions;
4. draft → review → publish becomes a formal process;
5. case study/news/insight volume grows significantly;
6. media management becomes operationally painful in Git;
7. scheduled publication is required;
8. content previews before publication are routinely required;
9. one content source must feed multiple websites/apps/channels;
10. content revision history needs to be managed separately from code history.

## Architecture requirement before CMS adoption

M10 must first establish normalized content models and a content adapter boundary.

The desired shape is:

```text
UI
 ↓
WEBBP content interface
 ↓
Adapter
 ├─ Repository-backed source (current)
 └─ Headless CMS source (future)
```

No component should consume a vendor-specific CMS response directly if that can reasonably be avoided.

## Candidate CMS direction

No provider is selected at this stage.

When CMS adoption is triggered, evaluate candidates against the requirements at that time.

### Sanity — likely fit when

- managed SaaS is acceptable;
- strong editorial experience is important;
- structured content and preview workflow matter;
- rapid integration with Next.js is preferred;
- BP does not want to operate the CMS infrastructure itself.

### Directus — likely fit when

- BP wants stronger control over infrastructure/data;
- a relational database-oriented content model is preferred;
- self-hosting or infrastructure ownership matters;
- API-first administration over existing structured data is useful.

These are evaluation candidates, not a final technology commitment.

Other products may be evaluated if requirements change.

## CMS security principles

If a CMS is introduced later:

- public frontend must not contain privileged CMS credentials;
- write credentials remain server-side only;
- least-privilege access is required;
- preview/draft content must not leak to public production pages;
- public content validation remains enforced;
- product maturity/status vocabulary remains controlled;
- content publishing must not bypass evidence-before-claims rules;
- backups/export and provider-exit procedures must exist before CMS becomes critical.

## Publishing governance

A CMS does not make a claim true.

Regardless of storage mechanism, the following still require evidence and approval:

- product maturity changes;
- production/customer adoption statements;
- partnerships;
- measured performance claims;
- customer outcomes;
- legal/business identity claims.

The CMS is an editorial tool, not a replacement for source-of-truth governance.

## Decision status

**Current decision: CMS-ready, repository-driven.**

Re-evaluate at M12 or earlier only if a trigger condition is clearly met.
