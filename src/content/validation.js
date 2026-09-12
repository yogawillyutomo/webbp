import {
  PRODUCT_FILTER_TAGS,
  PRODUCT_STATUSES,
} from "./content.data.js";

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[content] ${message}`);
  }
}

function assertNonEmptyString(value, label) {
  assert(typeof value === "string" && value.trim().length > 0, `${label} must be a non-empty string.`);
}

function assertUnique(items, getKey, label) {
  const seen = new Set();

  for (const item of items) {
    const key = getKey(item);
    assert(!seen.has(key), `${label} must be unique: ${key}`);
    seen.add(key);
  }
}

function assertPositiveOrder(items, label) {
  for (const item of items) {
    assert(Number.isInteger(item.order) && item.order > 0, `${label} order must be a positive integer.`);
  }
}

export function validateContent(content) {
  const { siteSettings, navigation, solutionDomains, products } = content;

  assert(siteSettings && typeof siteSettings === "object", "siteSettings is required.");
  assertNonEmptyString(siteSettings.siteName, "siteSettings.siteName");
  assertNonEmptyString(siteSettings.siteUrl, "siteSettings.siteUrl");
  assertNonEmptyString(siteSettings.defaultTitle, "siteSettings.defaultTitle");
  assertNonEmptyString(siteSettings.defaultDescription, "siteSettings.defaultDescription");
  assertNonEmptyString(siteSettings.publicEmail, "siteSettings.publicEmail");

  assert(Array.isArray(navigation) && navigation.length > 0, "navigation must contain public items.");
  assertUnique(navigation, (item) => item.id, "navigation id");
  assertUnique(navigation, (item) => item.href, "navigation href");
  assertPositiveOrder(navigation, "navigation");

  for (const item of navigation) {
    assertNonEmptyString(item.id, "navigation.id");
    assertNonEmptyString(item.label, `navigation.${item.id}.label`);
    assertNonEmptyString(item.href, `navigation.${item.id}.href`);
    assert(["public", "hidden"].includes(item.visibility), `navigation.${item.id}.visibility is invalid.`);
  }

  assert(Array.isArray(solutionDomains) && solutionDomains.length > 0, "solutionDomains must not be empty.");
  assertUnique(solutionDomains, (item) => item.slug, "solution slug");
  assertPositiveOrder(solutionDomains, "solution domain");

  assert(Array.isArray(products) && products.length > 0, "products must not be empty.");
  assertUnique(products, (item) => item.code, "product code");
  assertUnique(products, (item) => item.slug, "product slug");
  assertPositiveOrder(products, "product");

  const productCodes = new Set(products.map((item) => item.code));
  const solutionSlugs = new Set(solutionDomains.map((item) => item.slug));
  const allowedStatuses = new Set(PRODUCT_STATUSES);
  const allowedFilterTags = new Set(PRODUCT_FILTER_TAGS);

  for (const solution of solutionDomains) {
    assertNonEmptyString(solution.slug, "solution.slug");
    assertNonEmptyString(solution.title, `solution.${solution.slug}.title`);
    assertNonEmptyString(solution.subtitle, `solution.${solution.slug}.subtitle`);
    assertNonEmptyString(solution.summary, `solution.${solution.slug}.summary`);
    assertNonEmptyString(solution.detail, `solution.${solution.slug}.detail`);
    assertNonEmptyString(solution.iconKey, `solution.${solution.slug}.iconKey`);
    assert(typeof solution.published === "boolean", `solution.${solution.slug}.published must be boolean.`);
    assert(Array.isArray(solution.relatedProductCodes), `solution.${solution.slug}.relatedProductCodes must be an array.`);

    for (const code of solution.relatedProductCodes) {
      assert(productCodes.has(code), `solution.${solution.slug} references unknown product code: ${code}`);
    }
  }

  for (const product of products) {
    assertNonEmptyString(product.code, "product.code");
    assertNonEmptyString(product.slug, `product.${product.code}.slug`);
    assertNonEmptyString(product.title, `product.${product.code}.title`);
    assertNonEmptyString(product.primaryCategory, `product.${product.code}.primaryCategory`);
    assertNonEmptyString(product.statusDetail, `product.${product.code}.statusDetail`);
    assertNonEmptyString(product.description, `product.${product.code}.description`);
    assert(allowedStatuses.has(product.status), `product.${product.code} uses unapproved status: ${product.status}`);
    assert(typeof product.published === "boolean", `product.${product.code}.published must be boolean.`);
    assert(Array.isArray(product.filterTags) && product.filterTags.length > 0, `product.${product.code}.filterTags must not be empty.`);
    assert(Array.isArray(product.technology) && product.technology.length > 0, `product.${product.code}.technology must not be empty.`);
    assert(Array.isArray(product.proof) && product.proof.length > 0, `product.${product.code}.proof must not be empty.`);
    assert(Array.isArray(product.relatedSolutionSlugs), `product.${product.code}.relatedSolutionSlugs must be an array.`);
    assert(Array.isArray(product.publicLinks), `product.${product.code}.publicLinks must be an array.`);

    for (const tag of product.filterTags) {
      assert(allowedFilterTags.has(tag), `product.${product.code} uses unregistered filter tag: ${tag}`);
    }

    for (const solutionSlug of product.relatedSolutionSlugs) {
      assert(solutionSlugs.has(solutionSlug), `product.${product.code} references unknown solution: ${solutionSlug}`);
    }
  }

  return true;
}
