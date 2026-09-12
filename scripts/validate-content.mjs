import { repositoryContent } from "../src/content/content.data.mjs";
import { legalContent } from "../src/content/legal.data.mjs";
import { seoContent } from "../src/content/seo.data.mjs";
import { validateContent } from "../src/content/validation.mjs";
import { validateLegalContent } from "../src/content/legal.validation.mjs";
import { validateSeoContent } from "../src/content/seo.validation.mjs";

try {
  validateContent(repositoryContent);
  validateLegalContent(legalContent);
  validateSeoContent(seoContent);
  console.log("WEBBP content validation PASSED.");
} catch (error) {
  console.error("WEBBP content validation FAILED.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
