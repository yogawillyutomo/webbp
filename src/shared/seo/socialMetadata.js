import { getSocialImageContent } from "@/content/repository";

const socialImage = getSocialImageContent();

export const SOCIAL_IMAGE = {
  openGraph: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: socialImage.alt,
  },
  twitter: "/twitter-image",
};
