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

export function validateSeoContent(seoContent) {
  assert(seoContent && typeof seoContent === "object", "seoContent is required.");
  assert(
    seoContent.socialImage && typeof seoContent.socialImage === "object",
    "seoContent.socialImage is required."
  );

  const { socialImage } = seoContent;
  assertNonEmptyString(socialImage.alt, "seoContent.socialImage.alt");
  assertNonEmptyString(socialImage.eyebrow, "seoContent.socialImage.eyebrow");
  assertNonEmptyString(socialImage.title, "seoContent.socialImage.title");
  assertNonEmptyString(
    socialImage.description,
    "seoContent.socialImage.description"
  );
  assertNonEmptyString(
    socialImage.footerLabel,
    "seoContent.socialImage.footerLabel"
  );

  return true;
}
