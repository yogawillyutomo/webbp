import Navbar from "@/shared/layout/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";
import PortfolioSection from "@/features/portfolio/PortfolioSection";
import AboutSection from "@/features/about/AboutSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/shared/layout/Footer";
import OrganizationJsonLd from "@/shared/seo/OrganizationJsonLd";
import { SOCIAL_IMAGE } from "@/shared/seo/socialMetadata";
import {
  getHomePageContent,
  getSiteSettings,
} from "@/content/repository";

const site = getSiteSettings();

export const metadata = {
  title: {
    absolute: site.defaultTitle,
  },
  description: site.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: "/",
    siteName: site.siteName,
    locale: site.locale,
    type: "website",
    images: [SOCIAL_IMAGE.openGraph],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.defaultDescription,
    images: [SOCIAL_IMAGE.twitter],
  },
};

export default function Home() {
  const content = getHomePageContent();

  return (
    <>
      <OrganizationJsonLd />
      <Navbar site={content.site} navigation={content.navigation} />

      <main id="main-content" tabIndex={-1}>
        <HeroSection content={content.hero} />
        <ServicesSection
          sectionContent={content.solutionsSection}
          services={content.solutionDomains}
        />
        <PortfolioSection
          sectionContent={content.portfolioSection}
          projects={content.products}
          siteName={content.site.siteName}
        />
        <AboutSection content={content.about} />
        <ContactSection content={content.contact} site={content.site} />
      </main>

      <Footer
        content={content.footer}
        navigation={content.navigation}
        services={content.solutionDomains}
        site={content.site}
      />
    </>
  );
}
