import Navbar from "@/shared/layout/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";
import PortfolioSection from "@/features/portfolio/PortfolioSection";
import AboutSection from "@/features/about/AboutSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/shared/layout/Footer";
import OrganizationJsonLd from "@/shared/seo/OrganizationJsonLd";
import { SOCIAL_IMAGE } from "@/shared/seo/socialMetadata";
import { getSiteSettings } from "@/content/repository";

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
  return (
    <>
      <OrganizationJsonLd />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
