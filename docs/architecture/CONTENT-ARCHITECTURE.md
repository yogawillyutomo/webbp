# WEBBP Content Architecture

## Objective

WEBBP separates public content ownership from presentation so the current repository-backed site can later adopt a headless CMS without rewriting the frontend.

The governing rule is:

> Presentation components render normalized public content. They are not the source of truth for business facts, product maturity, evidence wording, contact identity, legal metadata, or public SEO copy.

M10 implements this boundary while keeping WEBBP repository-driven. No CMS provider is adopted by this milestone.

## Implemented architecture

```text
Verified product/project evidence
            ↓
Repository-backed canonical content
            ↓
Validation gate
            ↓
Server-side content repository / queries
            ↓
Next.js server entry points
            ↓
Normalized public props
            ↓
Presentation + interactive Client Components
```

The important security and migration boundary is between the content repository and Client Components.

Client Components do not import the repository/CMS source directly. Server entry points obtain public normalized content and pass only the required serializable content to interactive components.

This preserves a future migration path:

```text
Headless CMS SDK / API response
            ↓
CMS adapter on server
            ↓
WEBBP normalized content model
            ↓
Existing server queries
            ↓
Public props
            ↓
Existing UI
```

Vendor-specific CMS response shapes must not leak into presentation components.

## Current source modules

Repository-backed content is currently version-controlled under `src/content/`.

Canonical domains include:

- site settings and public brand identity;
- navigation;
- Hero content;
- Solution Domains;
- Product Portfolio;
- About content;
- Contact content;
- Footer content;
- legal-page metadata and effective-date labels;
- social-image / SEO copy.

The canonical data and standalone validators use explicit ESM modules (`.mjs`) so the same validation logic can run deterministically from Node and the Next.js application.

## Repository/query boundary

`src/content/repository.js` owns the public query interface.

Current responsibilities include:

- `getSiteSettings()`;
- `getSocialLink(key)`;
- `getNavigation()`;
- `getHeroContent()`;
- `getSolutionsSection()`;
- `getSolutionDomains()`;
- `getPortfolioSection()`;
- `getProducts()`;
- `getProductBySlug(slug)`;
- `getAboutContent()`;
- `getContactContent()`;
- `getFooterContent()`;
- `getLegalPage(key)`;
- `getSocialImageContent()`;
- `getHomePageContent()`.

The repository filters publication state before public UI consumption. A future CMS adapter must preserve this behavior so draft or unpublished content is not exposed merely because it exists in the editorial system.

## Server/client boundary

Interactive components such as Navbar, Hero, Solution cards, Product Portfolio, Contact, and Footer receive normalized content through props.

`src/app/page.jsx` acts as the Home page server composition boundary:

```text
getHomePageContent()
      ↓
page.jsx
      ↓
Navbar / Hero / Solutions / Portfolio / About / Contact / Footer props
```

This rule is intentional. A future CMS SDK, draft token, privileged credential, preview client, or vendor-specific object must remain outside browser bundles unless an explicitly public client-side API is required and separately reviewed.

Server-owned metadata routes and helpers may query the repository directly, including root metadata, legal-page metadata, sitemap, robots, manifest, Organization JSON-LD, and generated social images.

## Implemented content models

### SiteSettings

Public site identity includes:

- `siteName`;
- `siteUrl`;
- `defaultTitle`;
- `defaultDescription`;
- `locale`;
- `language`;
- `publicEmail`;
- `socialLinks[]`;
- `brandAssets`.

### NavigationItem

Navigation items include:

- `id`;
- `label`;
- `href`;
- `order`;
- `visibility`.

Interaction behavior remains presentation code.

### SolutionDomain

Solution domains include:

- `slug`;
- `title`;
- `subtitle`;
- `summary`;
- `detail`;
- `iconKey`;
- `relatedProductCodes[]`;
- `published`;
- `order`.

`iconKey` is intentionally data-only. React icon components remain in a presentation-owned icon registry so canonical content stays serializable and CMS-compatible.

### Product

Products include:

- `code`;
- `slug`;
- `title`;
- `primaryCategory`;
- `filterTags[]`;
- `status`;
- `statusDetail`;
- `description`;
- `proof[]`;
- `technology[]`;
- `relatedSolutionSlugs[]`;
- `publicLinks[]`;
- `published`;
- `order`.

The approved public maturity vocabulary at the M10 baseline remains:

- `In Development`;
- `Pre-production`;
- `Prototype`.

Adding another maturity value is a public-claim change, not merely a UI change.

### Legal content

Legal metadata is normalized separately from presentation markup. Current legal data covers route identity, metadata description, canonical path, and effective-date label for Privacy Policy and Terms of Service.

The substantive legal body remains intentionally presentation-controlled for now. Moving long-form legal body content into a future editorial source requires a separate governance review rather than being bundled into M10.

### SEO/social content

Generated social-image public copy is repository-backed so brand headline/description content is not duplicated in rendering helpers.

## Validation gate

`npm run validate:content` executes repository-content validation without requiring a browser runtime.

`npm run verify` runs:

```text
content validation
    ↓
lint
    ↓
production build
```

Validation currently enforces, among other rules:

- required public fields are non-empty;
- product codes are unique;
- product slugs are unique;
- Solution Domain slugs are unique;
- navigation IDs and hrefs are unique;
- order values are positive integers;
- product status belongs to the controlled maturity vocabulary;
- Product Portfolio filter tags are centrally registered;
- solution → product references resolve;
- product → solution references resolve;
- solution `iconKey` belongs to the presentation registry contract;
- publication flags are explicit booleans;
- required product proof and technology arrays are populated;
- legal metadata is structurally valid;
- social-image content is structurally valid.

Validation does not prove a marketing or product claim is true. Evidence-before-claims review remains a separate governance responsibility.

## Source-of-truth hierarchy

For public product facts and maturity claims:

1. verified product/project evidence and committed source of truth;
2. normalized WEBBP repository content;
3. public query/adapter layer;
4. UI rendering.

The UI must never silently upgrade maturity, invent evidence, infer partnerships, or convert an engineering capability into a production-adoption claim.

## CMS migration rule

M10 makes WEBBP CMS-ready but does not select or install a CMS.

If CMS adoption is justified later, the provider integration must map into the existing normalized models:

```text
CMS
 ↓
server-only provider adapter
 ↓
validation / normalization
 ↓
WEBBP repository/query contract
 ↓
server composition
 ↓
existing UI
```

A migration should therefore primarily replace the content-source adapter, not the presentation layer.

## Publishing safety requirements for a future CMS

A future CMS integration must preserve these invariants:

- privileged CMS credentials never enter client bundles;
- draft/unpublished content is excluded from normal production queries;
- preview access is explicitly authorized and isolated;
- controlled maturity vocabulary remains enforced;
- product/solution references remain validated;
- evidence-before-claims review remains mandatory;
- provider response shapes are normalized before UI consumption;
- export/backup/provider-exit capability exists before the CMS becomes operationally critical.

## Deferred models

Case studies, public updates, insights, richer evidence objects, and editorial workflows are intentionally deferred until real M11 publishing requirements exist.

M10 does not create unused schema merely to imitate a large CMS.

## Non-goals

This architecture does not turn WEBBP into:

- Bakaran Platform admin;
- product master-data storage;
- an operational database;
- an identity provider;
- a CRM;
- tenant configuration;
- a customer portal;
- a product-local authorization system;
- an AI/MCP operational gateway.

Those concerns remain outside the public website.