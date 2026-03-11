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
    const [pulse, setPulse] = useState(false);

    return (
        <div className="relative flex items-center justify-center">

            <div className="relative w-[clamp(140px,50vw,420px)] h-[clamp(140px,50vw,420px)]">

                <div className="hidden lg:block">
                    <HeroBadges
                        showBadges={showBadges}
                        isMobile={isMobile}
                    />
                </div>

                <div className="flex items-center justify-center cursor-pointer">

                    <div className="
                        flex items-center justify-center
                        -translate-y-6
                        sm:translate-y-6
                        xl:translate-y-14
                        mb-6 xl:mb-0
                    ">

                        <HeroCube
                            pulse={pulse}
                            onClick={() => {
                                setShowBadges(prev => !prev);
                                setPulse(true);

                                setTimeout(() => setPulse(false), 400);
                            }}
                            cubeStyle={
                                isMobile
                                    ? {}
                                    : {
                                        transform: `
                                        translateY(${mouse.current.y * 4}px)
                                        rotateX(${mouse.current.y * 4 + Math.sin(time.current) * 2}deg)
                                        rotateY(${mouse.current.x * 4 + Math.cos(time.current) * 2}deg)
                                        `
                                    }
                            }
                            mouse={isMobile ? { x: 0, y: 0 } : mouse.current}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}