import Navbar from "@/shared/layout/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";
import PortfolioSection from "@/features/portfolio/PortfolioSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/shared/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection/>
      <ContactSection />
      <Footer/>
    </>
  );
}