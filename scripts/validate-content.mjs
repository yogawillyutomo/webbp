import { repositoryContent } from "../src/content/content.data.js";
import { validateContent } from "../src/content/validation.js";

try {
  validateContent(repositoryContent);
  console.log("WEBBP content validation PASSED.");
} catch (error) {
  console.error("WEBBP content validation FAILED.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
