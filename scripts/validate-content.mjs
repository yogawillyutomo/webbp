import { repositoryContent } from "../src/content/content.data.js";
import { legalContent } from "../src/content/legal.data.js";
import { validateContent } from "../src/content/validation.js";
import { validateLegalContent } from "../src/content/legal.validation.js";

try {
  validateContent(repositoryContent);
  validateLegalContent(legalContent);
  console.log("WEBBP content validation PASSED.");
} catch (error) {
  console.error("WEBBP content validation FAILED.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
