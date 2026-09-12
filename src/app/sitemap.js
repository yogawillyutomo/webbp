import { SITE } from "@/config/site";

export default function sitemap() {
  return [
    {
      url: SITE.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
