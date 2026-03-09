import { useState } from "react";
import HeroCube from "./HeroCube";
import HeroBadges from "./HeroBadges";
import RevealSection from "@/shared/ui/RevealSection";

export default function HeroVisual({
    mouse,
    time,
    isMobile
}) {
    const [showBadges, setShowBadges] = useState(true);

    return (
        <div className="relative flex items-center justify-center">

            <div className="relative w-[clamp(140px,50vw,420px)] h-[clamp(140px,50vw,420px)]">

                <HeroBadges
                    showBadges={showBadges}
                    isMobile={isMobile}
                />

                <RevealSection duration={1200} delay={20} subtle>
                    <div className="flex items-center justify-center cursor-pointer will-change-transform">

                        <div className="
                        flex items-center justify-center
                        -translate-y-6
                        sm:translate-y-6
                        xl:translate-y-14
                        mb-6 xl:mb-0
                        ">

                            <HeroCube
                                className={showBadges ? "" : "drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"}
                                onClick={() => setShowBadges(prev => !prev)}
                                cubeStyle={
                                    isMobile
                                        ? {}
                                        : {
                                            transform: `
                                            translateY(${mouse.current.y * 4}px)
                                            rotateX(${mouse.current.y * 4 + Math.sin(time.current) * 2}deg)
                                            rotateY(${mouse.current.x * 4 + Math.cos(time.current) * 2}deg)
                                            `,
                                        }
                                }
                                mouse={isMobile ? { x: 0, y: 0 } : mouse.current}
                            />

                        </div>

                    </div>
                </RevealSection>

            </div>

        </div>
    );
}