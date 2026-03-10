import { badges } from "../hero.data";
import FloatingBadge from "@/shared/ui/FloatingBadge";
import RevealSection from "@/shared/ui/RevealSection";
import { motion } from "framer-motion";
export default function HeroBadges({
    showBadges,
    isMobile
}) {
    const radius = isMobile ? 120 : 230;

    return (
        <div
            className={`
        hidden xl:block absolute inset-0
        transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
        ${showBadges
                    ? "opacity-100 scale-100 blur-0"
                    : "opacity-0 scale-95 blur-sm pointer-events-none"}
      `}
        >
            <div className="absolute inset-0 flex items-center justify-center">

                {badges.map((badge, i) => {

                    const angle = (360 / badges.length) * i;

                    return (
                        <BadgeOrbit
                            key={i}
                            badge={badge}
                            angle={angle}
                            radius={radius}
                            delay={i * 0.1}
                        />
                    );
                })}

            </div>
        </div>
    );
}

function BadgeOrbit({
    badge,
    angle,
    radius,
    delay
}) {
    const offsetY = badge.offsetY ?? 0;

    return (
        <div
            className="absolute"
            style={{
                transform: `
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(-${angle}deg)
        `
            }}
        >
            <div style={{ transform: `translateY(${offsetY}px)` }}>

                <RevealSection delay={delay}>
                    <FloatingBadge
                        title={badge.title}
                        subtitle={badge.subtitle}
                        icon={badge.icon}
                    />
                </RevealSection>

            </div>
        </div>
    );
}