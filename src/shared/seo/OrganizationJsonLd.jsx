import { getSiteSettings, getSocialLink } from "@/content/repository";

const site = getSiteSettings();
const github = getSocialLink("github");

export default function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.siteName,
    url: site.siteUrl,
    logo: `${site.siteUrl}${site.brandAssets.vectorLogo}`,
    description: site.defaultDescription,
    email: site.publicEmail,
    sameAs: github ? [github.href] : [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
