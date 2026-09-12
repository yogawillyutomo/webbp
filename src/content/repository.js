import { repositoryContent } from "./content.data.js";
import { legalContent } from "./legal.data.js";
import { validateContent } from "./validation.js";
import { validateLegalContent } from "./legal.validation.js";

validateContent(repositoryContent);
validateLegalContent(legalContent);

const byOrder = (items) => [...items].sort((a, b) => a.order - b.order);

export function getSiteSettings() {
  return repositoryContent.siteSettings;
}

export function getSocialLink(key) {
  return repositoryContent.siteSettings.socialLinks.find((item) => item.key === key) ?? null;
}

export function getNavigation() {
  return byOrder(
    repositoryContent.navigation.filter((item) => item.visibility === "public")
  );
}

export function getHeroContent() {
  return repositoryContent.hero;
}

export function getSolutionsSection() {
  return repositoryContent.solutionsSection;
}

export function getSolutionDomains() {
  return byOrder(repositoryContent.solutionDomains.filter((item) => item.published));
}

export function getPortfolioSection() {
  return repositoryContent.portfolioSection;
}

export function getProducts() {
  return byOrder(repositoryContent.products.filter((item) => item.published));
}

export function getProductBySlug(slug) {
  return getProducts().find((item) => item.slug === slug) ?? null;
}

export function getAboutContent() {
  return repositoryContent.about;
}

export function getContactContent() {
  return repositoryContent.contact;
}

export function getFooterContent() {
  return repositoryContent.footer;
}

export function getLegalPage(key) {
  return legalContent[key] ?? null;
}

export const contentRepository = {
  getSiteSettings,
  getSocialLink,
  getNavigation,
  getHeroContent,
  getSolutionsSection,
  getSolutionDomains,
  getPortfolioSection,
  getProducts,
  getProductBySlug,
  getAboutContent,
  getContactContent,
  getFooterContent,
  getLegalPage,
};
