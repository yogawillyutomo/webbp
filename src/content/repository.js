import { repositoryContent } from "./content.data.mjs";
import { legalContent } from "./legal.data.mjs";
import { seoContent } from "./seo.data.mjs";
import { validateContent } from "./validation.mjs";
import { validateLegalContent } from "./legal.validation.mjs";
import { validateSeoContent } from "./seo.validation.mjs";

validateContent(repositoryContent);
validateLegalContent(legalContent);
validateSeoContent(seoContent);

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

export function getSocialImageContent() {
  return seoContent.socialImage;
}

export function getHomePageContent() {
  return {
    site: getSiteSettings(),
    navigation: getNavigation(),
    hero: getHeroContent(),
    solutionsSection: getSolutionsSection(),
    solutionDomains: getSolutionDomains(),
    portfolioSection: getPortfolioSection(),
    products: getProducts(),
    about: getAboutContent(),
    contact: getContactContent(),
    footer: getFooterContent(),
  };
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
  getSocialImageContent,
  getHomePageContent,
};
