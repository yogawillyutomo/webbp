"use client";

import { useState } from "react";
import ServicesBackground from "./components/ServicesBackground";
import ServicesHeader from "./components/ServicesHeader";
import ServicesGrid from "./components/ServicesGrid";
import SectionDivider from "@/shared/ui/SectionDivider";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">

      <ServicesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <ServicesHeader />

        <ServicesGrid
          activeIndex={activeIndex}
          onToggle={handleToggle}
        />

      </div>

      <SectionDivider />
    </section>
  );
}