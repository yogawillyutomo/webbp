import { SITE } from "@/config/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: "BP",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#050508",
    lang: SITE.language,
    icons: [
      {
        src: "/ico.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
