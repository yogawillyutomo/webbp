import RevealSection from "@/shared/ui/RevealSection";
import CyberBadge from "./CyberBadge";

export default function ServicesHeader({ content }) {
  return (
    <RevealSection direction="up" duration={0.9}>
      <div className="text-center mb-20 space-y-6">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
          {content.eyebrow}
        </div>

        <h2
          className="
            font-orbitron
            text-4xl lg:text-5xl
            font-bold
            leading-[1.2]
            pb-2
            bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
            bg-clip-text text-transparent animate-gradient
          "
        >
          {content.title}
        </h2>

        <p className="text-lg muted-text max-w-3xl mx-auto">
          {content.description}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {content.badges.map((item, index) => (
            <RevealSection
              key={item}
              delay={index * 0.12}
              duration={0.7}
              direction="up"
            >
              <CyberBadge>{item}</CyberBadge>
            </RevealSection>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
