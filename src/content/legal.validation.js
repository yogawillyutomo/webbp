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

export function validateLegalContent(legalContent) {
  assert(
    legalContent && typeof legalContent === "object",
    "legalContent is required."
  );

  const entries = Object.entries(legalContent);
  assert(entries.length > 0, "legalContent must not be empty.");

  const slugs = new Set();
  const canonicals = new Set();

  for (const [key, page] of entries) {
    assert(page && typeof page === "object", `legalContent.${key} is required.`);
    assertNonEmptyString(page.slug, `legalContent.${key}.slug`);
    assertNonEmptyString(page.title, `legalContent.${key}.title`);
    assertNonEmptyString(page.description, `legalContent.${key}.description`);
    assertNonEmptyString(page.canonicalPath, `legalContent.${key}.canonicalPath`);
    assertNonEmptyString(
      page.effectiveDateLabel,
      `legalContent.${key}.effectiveDateLabel`
    );

    assert(!slugs.has(page.slug), `legal slug must be unique: ${page.slug}`);
    assert(
      !canonicals.has(page.canonicalPath),
      `legal canonical path must be unique: ${page.canonicalPath}`
    );

    slugs.add(page.slug);
    canonicals.add(page.canonicalPath);
  }

  return true;
}
