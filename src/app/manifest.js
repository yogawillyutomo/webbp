import { getSiteSettings } from "@/content/repository";

const site = getSiteSettings();

export default function manifest() {
  return {
    name: site.siteName,
    short_name: "BP",
    description: site.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#050508",
    lang: site.language,
    icons: [
      {
        src: site.brandAssets.vectorLogo,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
