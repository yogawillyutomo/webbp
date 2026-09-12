# WEBBP Content Architecture

## Objective

This document defines how public content should be modeled so WEBBP can remain simple today while being ready for a future headless CMS without a frontend rewrite.

The key rule is:

> Presentation components render normalized content. They should not become the source of truth for business/public content.

## Content layers

### 1. Presentation layer

Owned by React/Next.js components.

Responsibilities:

- layout;
- interaction;
- animation;
- accessibility;
- responsive behavior;
- visual state;
- modal/filter rendering.

Presentation must not decide product maturity, public claims, contact identity, or evidence wording.

### 2. Content model layer

Defines normalized shapes consumed by the UI.

Initial domains:

- site settings;
- navigation;
- solution domains;
- products;
- company/about content;
- case studies;
- public updates/insights;
- legal metadata;
- SEO metadata.

### 3. Content source layer

Current source: version-controlled repository data.

Future source: repository data or a headless CMS through an adapter.

The frontend should not care which storage implementation supplies the normalized models.

## Proposed models

### SiteSettings

Suggested fields:

- `siteName`
- `siteUrl`
- `defaultTitle`
- `defaultDescription`
- `locale`
- `language`
- `publicEmail`
- `socialLinks[]`
- `brandAssets`

### NavigationItem

Suggested fields:

- `label`
- `href`
- `order`
- `visibility`

Navigation labels and destinations should be content configuration, while interaction behavior remains presentation code.

### SolutionDomain

Suggested fields:

- `slug`
- `title`
- `subtitle`
- `summary`
- `detail`
- `iconKey`
- `relatedProductCodes[]`
- `order`
- `published`

Solution domains describe public problem/solution areas. They must not imply that every listed capability is production-complete.

### Product

Suggested fields:

- `code`
- `slug`
- `title`
- `primaryCategory`
- `filterTags[]`
- `status`
- `statusDetail`
- `summary`
- `description`
- `proof[]`
- `technology[]`
- `relatedSolutionSlugs[]`
- `publicLinks[]`
- `published`
- `order`

Recommended maturity vocabulary remains explicit and controlled. Current public values include:

- `In Development`
- `Pre-production`
- `Prototype`

New statuses must not be introduced casually because they are public claims.

### EvidenceItem

Where portfolio evidence becomes richer, proof should evolve from free text into a normalized shape:

- `type`
- `label`
- `description`
- `source`
- `verifiedAt`
- `visibility`

This enables stronger evidence-before-claims governance later without requiring it for every M10 change.

### CaseStudy

Suggested fields:

- `slug`
- `title`
- `summary`
- `problem`
- `approach`
- `outcome`
- `relatedProducts[]`
- `evidence[]`
- `publishedAt`
- `updatedAt`
- `published`

A case study must not be published if its outcome cannot be supported by evidence approved for public use.

### PublicUpdate / Insight

Suggested fields:

- `slug`
- `title`
- `summary`
- `body`
- `type`
- `relatedProducts[]`
- `publishedAt`
- `updatedAt`
- `authorDisplayName`
- `published`

This model should only be implemented if M11 proves there is a real publishing need.

## Content adapter boundary

M10 should introduce one stable access boundary, conceptually:

```text
UI components
    ↓
content queries / repository
    ↓
normalized content adapter
    ↓
repository data today
headless CMS later
```

Possible query responsibilities:

- `getSiteSettings()`
- `getNavigation()`
- `getSolutionDomains()`
- `getProducts()`
- `getProductBySlug()`
- `getCaseStudies()`

Function names are illustrative; implementation should follow the codebase conventions when M10 begins.

## Source-of-truth hierarchy

For public facts:

1. verified evidence / committed product source of truth;
2. normalized WEBBP content model;
3. UI rendering.

The UI must never silently upgrade a product status or invent a claim.

## Validation rules

At minimum, M10 should make invalid public content difficult to commit:

- product codes and slugs unique;
- required public fields non-empty;
- `status` constrained to approved values;
- solution/product references valid;
- unknown filter tags either rejected or centrally registered;
- unpublished content excluded from public output;
- external links explicitly defined rather than inferred.

Schema validation may use plain JavaScript validation, JSON Schema, Zod, or another small mechanism, but the choice should be made during M10 based on actual code complexity rather than introduced prematurely.

## CMS migration rule

If a headless CMS is adopted later, the CMS schema should map onto these normalized models. The UI should not be rewritten around vendor-specific CMS response shapes.

Preferred boundary:

```text
CMS SDK/API response
      ↓
CMS adapter
      ↓
WEBBP normalized content models
      ↓
existing UI
```

This prevents CMS vendor lock-in from leaking through the entire frontend.

## Non-goals

This architecture does not turn WEBBP into:

- Bakaran Platform admin;
- product master data storage;
- operational database;
- identity provider;
- customer CRM;
- tenant configuration service.

Those concerns belong outside the public website.
