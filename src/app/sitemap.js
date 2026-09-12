import {
  getLegalPage,
  getProducts,
  getSiteSettings,
} from "@/content/repository";

const site = getSiteSettings();
const privacy = getLegalPage("privacy");
const terms = getLegalPage("terms");

export default function sitemap() {
  const productEntries = getProducts().map((product) => ({
    url: `${site.siteUrl}/products/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: site.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...productEntries,
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
