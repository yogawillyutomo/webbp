import { getLegalPage, getSiteSettings } from "@/content/repository";

const site = getSiteSettings();
const privacy = getLegalPage("privacy");
const terms = getLegalPage("terms");

export default function sitemap() {
  return [
    {
      url: site.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.siteUrl}${privacy.canonicalPath}`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.siteUrl}${terms.canonicalPath}`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
