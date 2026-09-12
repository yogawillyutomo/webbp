import {
  PRODUCT_FILTER_TAGS,
  PRODUCT_STATUSES,
} from "./content.data.mjs";

const SOLUTION_ICON_KEYS = new Set(["learning", "cloud", "chip"]);

function assert(condition, message) {
  if (!condition) throw new Error(`[content] ${message}`);
}

function string(value, label) {
  assert(
    typeof value === "string" && value.trim().length > 0,
    `${label} must be a non-empty string.`
  );
}

function stringArray(value, label, { allowEmpty = false } = {}) {
  assert(Array.isArray(value), `${label} must be an array.`);
  assert(allowEmpty || value.length > 0, `${label} must not be empty.`);
  value.forEach((item, index) => string(item, `${label}[${index}]`));
}

function unique(items, getKey, label) {
  const seen = new Set();
  for (const item of items) {
    const key = getKey(item);
    assert(!seen.has(key), `${label} must be unique: ${key}`);
    seen.add(key);
  }
}

function ordered(items, label) {
  const orders = new Set();
  for (const item of items) {
    assert(
      Number.isInteger(item.order) && item.order > 0,
      `${label} order must be a positive integer.`
    );
    assert(!orders.has(item.order), `${label} order must be unique: ${item.order}`);
    orders.add(item.order);
  }
}

function cta(value, label) {
  assert(value && typeof value === "object", `${label} is required.`);
  string(value.label, `${label}.label`);
  string(value.href, `${label}.href`);
}

export function validateContent(content) {
  const {
    siteSettings,
    navigation,
    hero,
    solutionsSection,
    solutionDomains,
    portfolioSection,
    products,
    about,
    contact,
    footer,
  } = content;

  assert(siteSettings && typeof siteSettings === "object", "siteSettings is required.");
  [
    [siteSettings.siteName, "siteSettings.siteName"],
    [siteSettings.siteUrl, "siteSettings.siteUrl"],
    [siteSettings.defaultTitle, "siteSettings.defaultTitle"],
    [siteSettings.defaultDescription, "siteSettings.defaultDescription"],
    [siteSettings.locale, "siteSettings.locale"],
    [siteSettings.language, "siteSettings.language"],
    [siteSettings.publicEmail, "siteSettings.publicEmail"],
  ].forEach(([value, label]) => string(value, label));

  assert(
    siteSettings.brandAssets && typeof siteSettings.brandAssets === "object",
    "siteSettings.brandAssets is required."
  );
  ["logo", "vectorLogo", "browserIcon"].forEach((key) =>
    string(siteSettings.brandAssets[key], `siteSettings.brandAssets.${key}`)
  );
  assert(Array.isArray(siteSettings.socialLinks), "siteSettings.socialLinks must be an array.");
  unique(siteSettings.socialLinks, (item) => item.key, "social link key");
  for (const social of siteSettings.socialLinks) {
    ["key", "label", "href", "display"].forEach((key) =>
      string(social[key], `social.${social.key || "unknown"}.${key}`)
    );
  }

  assert(Array.isArray(navigation) && navigation.length > 0, "navigation must not be empty.");
  unique(navigation, (item) => item.id, "navigation id");
  unique(navigation, (item) => item.href, "navigation href");
  ordered(navigation, "navigation");
  for (const item of navigation) {
    string(item.id, "navigation.id");
    string(item.label, `navigation.${item.id}.label`);
    string(item.href, `navigation.${item.id}.href`);
    assert(
      ["public", "hidden"].includes(item.visibility),
      `navigation.${item.id}.visibility is invalid.`
    );
  }

  assert(hero && typeof hero === "object", "hero is required.");
  ["eyebrow", "title", "subtitle", "description"].forEach((key) =>
    string(hero[key], `hero.${key}`)
  );
  cta(hero.primaryCta, "hero.primaryCta");
  cta(hero.secondaryCta, "hero.secondaryCta");

  assert(
    solutionsSection && typeof solutionsSection === "object",
    "solutionsSection is required."
  );
  ["eyebrow", "title", "description"].forEach((key) =>
    string(solutionsSection[key], `solutionsSection.${key}`)
  );
  stringArray(solutionsSection.badges, "solutionsSection.badges");

  assert(
    Array.isArray(solutionDomains) && solutionDomains.length > 0,
    "solutionDomains must not be empty."
  );
  unique(solutionDomains, (item) => item.slug, "solution slug");
  ordered(solutionDomains, "solution domain");

  assert(
    portfolioSection && typeof portfolioSection === "object",
    "portfolioSection is required."
  );
  ["eyebrow", "title", "description"].forEach((key) =>
    string(portfolioSection[key], `portfolioSection.${key}`)
  );

  assert(Array.isArray(products) && products.length > 0, "products must not be empty.");
  unique(products, (item) => item.code, "product code");
  unique(products, (item) => item.slug, "product slug");
  ordered(products, "product");

  const productCodes = new Set(products.map((item) => item.code));
  const solutionSlugs = new Set(solutionDomains.map((item) => item.slug));
  const allowedStatuses = new Set(PRODUCT_STATUSES);
  const allowedFilterTags = new Set(PRODUCT_FILTER_TAGS);

  for (const solution of solutionDomains) {
    ["slug", "title", "subtitle", "summary", "detail", "iconKey"].forEach((key) =>
      string(solution[key], `solution.${solution.slug || "unknown"}.${key}`)
    );
    assert(
      SOLUTION_ICON_KEYS.has(solution.iconKey),
      `solution.${solution.slug} uses unknown icon key: ${solution.iconKey}`
    );
    assert(
      typeof solution.published === "boolean",
      `solution.${solution.slug}.published must be boolean.`
    );
    stringArray(
      solution.relatedProductCodes,
      `solution.${solution.slug}.relatedProductCodes`
    );
    solution.relatedProductCodes.forEach((code) =>
      assert(
        productCodes.has(code),
        `solution.${solution.slug} references unknown product code: ${code}`
      )
    );
  }

  for (const product of products) {
    ["code", "slug", "title", "primaryCategory", "statusDetail", "description"].forEach(
      (key) => string(product[key], `product.${product.code || "unknown"}.${key}`)
    );
    assert(
      allowedStatuses.has(product.status),
      `product.${product.code} uses unapproved status: ${product.status}`
    );
    assert(
      typeof product.published === "boolean",
      `product.${product.code}.published must be boolean.`
    );
    stringArray(product.filterTags, `product.${product.code}.filterTags`);
    stringArray(product.technology, `product.${product.code}.technology`);
    stringArray(product.proof, `product.${product.code}.proof`);
    stringArray(
      product.relatedSolutionSlugs,
      `product.${product.code}.relatedSolutionSlugs`
    );
    assert(
      Array.isArray(product.publicLinks),
      `product.${product.code}.publicLinks must be an array.`
    );

    product.filterTags.forEach((tag) =>
      assert(
        allowedFilterTags.has(tag),
        `product.${product.code} uses unregistered filter tag: ${tag}`
      )
    );
    product.relatedSolutionSlugs.forEach((slug) =>
      assert(
        solutionSlugs.has(slug),
        `product.${product.code} references unknown solution: ${slug}`
      )
    );
    for (const link of product.publicLinks) {
      cta(link, `product.${product.code}.publicLink`);
    }
  }

  assert(about && typeof about === "object", "about is required.");
  string(about.eyebrow, "about.eyebrow");
  string(about.title, "about.title");
  stringArray(about.paragraphs, "about.paragraphs");
  assert(Array.isArray(about.principles) && about.principles.length > 0, "about.principles must not be empty.");
  for (const principle of about.principles) {
    string(principle.title, "about.principle.title");
    string(principle.description, `about.principle.${principle.title}.description`);
  }

  assert(contact && typeof contact === "object", "contact is required.");
  ["eyebrow", "title", "description", "emailSubject", "primaryCtaLabel"].forEach(
    (key) => string(contact[key], `contact.${key}`)
  );
  cta(contact.secondaryCta, "contact.secondaryCta");

  assert(footer && typeof footer === "object", "footer is required.");
  ["description", "navigationTitle", "solutionsTitle", "copyrightSuffix"].forEach(
    (key) => string(footer[key], `footer.${key}`)
  );
  assert(Array.isArray(footer.legalLinks) && footer.legalLinks.length > 0, "footer.legalLinks must not be empty.");
  footer.legalLinks.forEach((link) => cta(link, "footer.legalLink"));

  return true;
}
