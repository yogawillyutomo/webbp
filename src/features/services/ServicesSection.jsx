"use client";
import { useState } from "react";
import ServiceCard from "@/shared/ui/ServiceCard";
import SectionDivider from "@/shared/ui/SectionDivider";
import { servicesData } from "./services.data";
import RevealSection from "@/shared/ui/RevealSection";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <BackgroundLayer />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <RevealSection direction="up" duration={900}>
          <SectionHeader />
        </RevealSection>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {servicesData.map((service, index) => (
            <RevealSection
              key={index}
              delay={index * 80}
              duration={800}
              direction="up"
            >
              <ServiceCard
                {...service}
                active={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            </RevealSection>
          ))}
        </div>

      </div>

      <SectionDivider />
    </section>
  );
}

/* ================= COMPONENTS ================= */

function SectionHeader() {
  return (
    <div className="text-center mb-20 space-y-6">
      <h2 className="
        font-orbitron
        text-4xl lg:text-5xl
        font-bold
        leading-[1.2]
        pb-2
        bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
        bg-clip-text text-transparent animate-gradient
      ">
        Building Intelligent Digital Ecosystems
      </h2>

      <p className="text-lg muted-text max-w-3xl mx-auto">
        Kami menggabungkan engineering excellence dengan desain modern
        untuk menciptakan sistem digital yang scalable, secure,
        dan siap menghadapi masa depan.
      </p>

      {/* <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium">
        <Tag>Agile Development Process</Tag>
        <Tag>Enterprise-Grade Security</Tag>
        <Tag>Performance & Scalability First</Tag>
      </div> */}

     <div className="flex flex-wrap justify-center gap-8 mt-12">
  {[
    "Agile Development Process",
    "Enterprise-Grade Security",
    "Performance & Scalability First",
  ].map((item, index) => (
    <RevealSection
      key={index}
      delay={index * 120}
      duration={700}
      direction="up"
    >
      <CyberBadge>{item}</CyberBadge>
    </RevealSection>
  ))}
</div>

    </div>
  );
}

function Tag({ children }) {
  return (
    <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
      {children}
    </div>
  );
}

function CyberBadge({ children }) {
  return (
    <div
      className="
        cyber-badge
        relative px-6 py-3
        rounded-full
        text-sm font-semibold tracking-[0.08em]
        transition-all duration-300
        cursor-default
        overflow-hidden
      "
    >
      <div className="scan-layer absolute inset-0 opacity-0 transition-opacity duration-500" />

      <div className="neon-line absolute top-0 left-0 w-full h-[1px]" />

      <span className="relative z-10">
        {children}
      </span>
    </div>
  );
}

function FeatureBadge({ children }) {
  return (
    <div
      className="
        relative px-6 py-3
        rounded-full
        text-sm font-semibold tracking-wide
        transition-all duration-300
        cursor-default

        /* LIGHT MODE */
        bg-gradient-to-br from-white to-slate-100
        text-slate-800
        border border-slate-300
        shadow-sm
        hover:shadow-md
        hover:border-blue-500/50

        /* DARK MODE */
        dark:bg-white/5
        dark:text-white
        dark:border-white/10
        dark:shadow-none
        dark:hover:border-blue-500/40

        hover:-translate-y-1
      "
    >
      <span className="relative z-10">
        {children}
      </span>

      {/* Subtle accent glow */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r
          from-transparent
          via-blue-500/10
          to-transparent
          opacity-0
          hover:opacity-100
          transition-opacity duration-500
        "
      />
    </div>
  );
}

function BackgroundLayer() {
  return (
    <>
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none
        bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)]
        [background-size:42px_42px]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[900px] h-[900px] rounded-full
        bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent
        blur-3xl opacity-70 pointer-events-none" />

      {/* Light Strip */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full
          bg-[linear-gradient(to_right,transparent_96%,rgba(59,130,246,0.12)_100%)]
          [background-size:33%_100%]" />
      </div>
    </>
  );
}