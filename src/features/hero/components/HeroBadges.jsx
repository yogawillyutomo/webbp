import { badges } from "../hero.data";
import FloatingBadge from "@/shared/ui/FloatingBadge";
import RevealSection from "@/shared/ui/RevealSection";
import { motion } from "framer-motion";


export default function HeroBadges({
    showBadges,
    isMobile
}) {

    const radius = isMobile ? 140 : 260;

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            {badges.map((badge, i) => {

                const angle = (360 / badges.length) * i;

                return (
                    <BadgeOrbit
                        key={i}
                        badge={badge}
                        angle={angle}
                        radius={radius}
                        delay={i * 0.06}
                        showBadges={showBadges}
                    />
                );

            })}

        </div>
    );
}


function BadgeOrbit({
    badge,
    angle,
    radius,
    delay,
    showBadges
}) {

    const offsetY = badge.offsetY ?? 0;

    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius + offsetY;

    return (
        <motion.div
            className="absolute"
            animate={{
                x: showBadges ? x : 0,
                y: showBadges ? y : 0,
                scale: showBadges ? 1 : 0.3,
                opacity: showBadges ? 1 : 0
            }}
            transition={{
                delay,
                type: "spring",
                stiffness: 120,
                damping: 18
            }}
        >
            <FloatingBadge
                title={badge.title}
                subtitle={badge.subtitle}
                icon={badge.icon}
            />
        </motion.div>
    );
}