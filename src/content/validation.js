import {
  PRODUCT_FILTER_TAGS,
  PRODUCT_STATUSES,
} from "./content.data.js";

const SOLUTION_ICON_KEYS = new Set(["learning", "cloud", "chip"]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[content] ${message}`);
  }
}

function assertNonEmptyString(value, label) {
  assert(
    typeof value === "string" && value.trim().length > 0,
    `${label} must be a non-empty string.`
  );
}

function assertStringArray(value, label, { allowEmpty = false } = {}) {
  assert(Array.isArray(value), `${label} must be an array.`);
  assert(allowEmpty || value.length > 0, `${label} must not be empty.`);

  value.forEach((item, index) => {
    assertNonEmptyString(item, `${label}[${index}]`);
  });
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
    assert(
      Number.isInteger(item.order) && item.order > 0,
      `${label} order must be a positive integer.`
    );
  }
}

function assertCta(cta, label) {
  assert(cta && typeof cta === "object", `${label} is required.`);
  assertNonEmptyString(cta.label, `${label}.label`);
  assertNonEmptyString(cta.href, `${label}.href`);
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
  assertNonEmptyString(siteSettings.siteName, "siteSettings.siteName");
  assertNonEmptyString(siteSettings.siteUrl, "siteSettings.siteUrl");
  assertNonEmptyString(siteSettings.defaultTitle, "siteSettings.defaultTitle");
  assertNonEmptyString(
    siteSettings.defaultDescription,
    "siteSettings.defaultDescription"
  );
  assertNonEmptyString(siteSettings.locale, "siteSettings.locale");
  assertNonEmptyString(siteSettings.language, "siteSettings.language");
  assertNonEmptyString(siteSettings.publicEmail, "siteSettings.publicEmail");
  assert(
    siteSettings.brandAssets && typeof siteSettings.brandAssets === "object",
    "siteSettings.brandAssets is required."
  );
  assertNonEmptyString(siteSettings.brandAssets.logo, "siteSettings.brandAssets.logo");
  assertNonEmptyString(
    siteSettings.brandAssets.vectorLogo,
    "siteSettings.brandAssets.vectorLogo"
  );
  assertNonEmptyString(
    siteSettings.brandAssets.browserIcon,
    "siteSettings.brandAssets.browserIcon"
  );
  assert(
    Array.isArray(siteSettings.socialLinks),
    "siteSettings.socialLinks must be an array."
  );
  assertUnique(siteSettings.socialLinks, (item) => item.key, "social link key");

  for (const social of siteSettings.socialLinks) {
    assertNonEmptyString(social.key, "social.key");
    assertNonEmptyString(social.label, `social.${social.key}.label`);
    assertNonEmptyString(social.href, `social.${social.key}.href`);
    assertNonEmptyString(social.display, `social.${social.key}.display`);
  }

  assert(
    Array.isArray(navigation) && navigation.length > 0,
    "navigation must contain public items."
  );
  assertUnique(navigation, (item) => item.id, "navigation id");
  assertUnique(navigation, (item) => item.href, "navigation href");
  assertPositiveOrder(navigation, "navigation");

  for (const item of navigation) {
    assertNonEmptyString(item.id, "navigation.id");
    assertNonEmptyString(item.label, `navigation.${item.id}.label`);
    assertNonEmptyString(item.href, `navigation.${item.id}.href`);
    assert(
      ["public", "hidden"].includes(item.visibility),
      `navigation.${item.id}.visibility is invalid.`
    );
  }

  assert(hero && typeof hero === "object", "hero is required.");
  assertNonEmptyString(hero.eyebrow, "hero.eyebrow");
  assertNonEmptyString(hero.title, "hero.title");
  assertNonEmptyString(hero.subtitle, "hero.subtitle");
  assertNonEmptyString(hero.description, "hero.description");
  assertCta(hero.primaryCta, "hero.primaryCta");
  assertCta(hero.secondaryCta, "hero.secondaryCta");

  assert(
    solutionsSection && typeof solutionsSection === "object",
    "solutionsSection is required."
  );
  assertNonEmptyString(solutionsSection.eyebrow, "solutionsSection.eyebrow");
  assertNonEmptyString(solutionsSection.title, "solutionsSection.title");
  assertNonEmptyString(
    solutionsSection.description,
    "solutionsSection.description"
  );
  assertStringArray(solutionsSection.badges, "solutionsSection.badges");

  assert(
    Array.isArray(solutionDomains) && solutionDomains.length > 0,
    "solutionDomains must not be empty."
  );
  assertUnique(solutionDomains, (item) => item.slug, "solution slug");
  assertPositiveOrder(solutionDomains, "solution domain");

  assert(
    portfolioSection && typeof portfolioSection === "object",
    "portfolioSection is required."
  );
  assertNonEmptyString(portfolioSection.eyebrow, "portfolioSection.eyebrow");
  assertNonEmptyString(portfolioSection.title, "portfolioSection.title");
  assertNonEmptyString(
    portfolioSection.description,
    "portfolioSection.description"
  );

  assert(
    Array.isArray(products) && products.length > 0,
    "products must not be empty."
  );
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
    assert(
      SOLUTION_ICON_KEYS.has(solution.iconKey),
      `solution.${solution.slug} uses unknown icon key: ${solution.iconKey}`
    );
    assert(
      typeof solution.published === "boolean",
      `solution.${solution.slug}.published must be boolean.`
    );
    assertStringArray(
      solution.relatedProductCodes,
      `solution.${solution.slug}.relatedProductCodes`
    );

    for (const code of solution.relatedProductCodes) {
      assert(
        productCodes.has(code),
        `solution.${solution.slug} references unknown product code: ${code}`
      );
    }
  }

  for (const product of products) {
    assertNonEmptyString(product.code, "product.code");
    assertNonEmptyString(product.slug, `product.${product.code}.slug`);
    assertNonEmptyString(product.title, `product.${product.code}.title`);
    assertNonEmptyString(
      product.primaryCategory,
      `product.${product.code}.primaryCategory`
    );
    assertNonEmptyString(
      product.statusDetail,
      `product.${product.code}.statusDetail`
    );
    assertNonEmptyString(
      product.description,
      `product.${product.code}.description`
    );
    assert(
      allowedStatuses.has(product.status),
      `product.${product.code} uses unapproved status: ${product.status}`
    );
    assert(
      typeof product.published === "boolean",
      `product.${product.code}.published must be boolean.`
    );
    assertStringArray(product.filterTags, `product.${product.code}.filterTags`);
    assertStringArray(product.technology, `product.${product.code}.technology`);
    assertStringArray(product.proof, `product.${product.code}.proof`);
    assertStringArray(
      product.relatedSolutionSlugs,
      `product.${product.code}.relatedSolutionSlugs`
    );
    assert(
      Array.isArray(product.publicLinks),
      `product.${product.code}.publicLinks must be an array.`
    );

    for (const tag of product.filterTags) {
      assert(
        allowedFilterTags.has(tag),
        `product.${product.code} uses unregistered filter tag: ${tag}`
      );
    }

    for (const solutionSlug of product.relatedSolutionSlugs) {
      assert(
        solutionSlugs.has(solutionSlug),
        `product.${product.code} references unknown solution: ${solutionSlug}`
      );
    }
  }

  assert(about && typeof about === "object", "about is required.");
  assertNonEmptyString(about.eyebrow, "about.eyebrow");
  assertNonEmptyString(about.title, "about.title");
  assertStringArray(about.paragraphs, "about.paragraphs");
  assert(
    Array.isArray(about.principles) && about.principles.length > 0,
    "about.principles must not be empty."
  );

  for (const principle of about.principles) {
    assertNonEmptyString(principle.title, "about.principle.title");
    assertNonEmptyString(
      principle.description,
      `about.principle.${principle.title}.description`
    );
  }

  assert(contact && typeof contact === "object", "contact is required.");
  assertNonEmptyString(contact.eyebrow, "contact.eyebrow");
  assertNonEmptyString(contact.title, "contact.title");
  assertNonEmptyString(contact.description, "contact.description");
  assertNonEmptyString(contact.emailSubject, "contact.emailSubject");
  assertNonEmptyString(contact.primaryCtaLabel, "contact.primaryCtaLabel");
  assertCta(contact.secondaryCta, "contact.secondaryCta");

  assert(footer && typeof footer === "object", "footer is required.");
  assertNonEmptyString(footer.description, "footer.description");
  assertNonEmptyString(footer.navigationTitle, "footer.navigationTitle");
  assertNonEmptyString(footer.solutionsTitle, "footer.solutionsTitle");
  assertNonEmptyString(footer.copyrightSuffix, "footer.copyrightSuffix");
  assert(
    Array.isArray(footer.legalLinks) && footer.legalLinks.length > 0,
    "footer.legalLinks must not be empty."
  );

  for (const link of footer.legalLinks) {
    assertCta(link, "footer.legalLink");
  }

  return true;
}
