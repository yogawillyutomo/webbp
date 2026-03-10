"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ServicesBackground from "./components/ServicesBackground";
import ServicesHeader from "./components/ServicesHeader";
import ServicesGrid from "./components/ServicesGrid";
import SectionDivider from "@/shared/ui/SectionDivider";

import { staggerContainer } from "@/shared/animations/staggerContainer";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">

      <ServicesBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <ServicesHeader />

        <ServicesGrid
          activeIndex={activeIndex}
          onToggle={handleToggle}
        />

      </motion.div>

      <SectionDivider />

    </section>
  );
}