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
            initial={{
                x: 0,
                y: 0,
                scale: 0.2,
                opacity: 0
            }}
            animate={{
                x: showBadges ? x : 0,
                y: showBadges ? y : 0,
                scale: showBadges ? 1 : 0.2,
                opacity: showBadges ? 1 : 0
            }}
            transition={{
                delay,
                type: "spring",
                stiffness: 140,
                damping: 16
            }}
            style={{
                transformOrigin: "center"
            }}
        >
            <motion.div
                animate={{
                    scale: showBadges ? [0.2, 1.15, 1] : 0.2
                }}
                transition={{
                    delay,
                    duration: 0.45,
                    ease: "easeOut"
                }}
            >
                <FloatingBadge
                    title={badge.title}
                    subtitle={badge.subtitle}
                    icon={badge.icon}
                />
            </motion.div>
        </motion.div>
    );
}