import { getSiteSettings, getSocialLink } from "@/content/repository";

const site = getSiteSettings();
const github = getSocialLink("github");

// Compatibility projection for metadata/SEO modules that still consume SITE.
// Canonical public content now lives in src/content.
export const SITE = {
  name: site.siteName,
  url: site.siteUrl,
  title: site.defaultTitle,
  description: site.defaultDescription,
  locale: site.locale,
  language: site.language,
  email: site.publicEmail,
  social: {
    github: github?.href ?? "",
  },
};
