import Navbar from "@/shared/layout/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";
import PortfolioSection from "@/features/portfolio/PortfolioSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/shared/layout/Footer";
import OrganizationJsonLd from "@/shared/seo/OrganizationJsonLd";
import { SOCIAL_IMAGE } from "@/shared/seo/socialMetadata";
import { SITE } from "@/config/site";

export const metadata = {
  title: {
    absolute: SITE.title,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [SOCIAL_IMAGE.openGraph],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
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
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
