import { useState } from "react";
import HeroCube from "./HeroCube";
import HeroBadges from "./HeroBadges";

export default function HeroVisual({
    mouse,
    time,
    isMobile
}) {
    const [showBadges, setShowBadges] = useState(true);
    const [pulse, setPulse] = useState(false);

    const handleClick = () => {
        setShowBadges(prev => !prev);
        setPulse(true);

        setTimeout(() => {
            setPulse(false);
        }, 350);
    };

    const cubeStyle =
        isMobile
            ? {}
            : {
                transform: `
          translateY(${mouse.current.y * 2}px)
          rotateX(${mouse.current.y * 2 + Math.sin(time.current) * 1.5}deg)
          rotateY(${mouse.current.x * 2 + Math.cos(time.current) * 1.5}deg)
        `
            };

    return (
        <div className="relative flex items-center justify-center">

            <div className="relative w-[clamp(140px,50vw,420px)] h-[clamp(140px,50vw,420px)]">

                <div className="hidden 2xl:block">
                    <HeroBadges
                        showBadges={showBadges}
                        isMobile={isMobile}
                    />
                </div>

                <div className="flex items-center justify-center cursor-pointer">

                    <div
                        className="
            flex items-center justify-center
            -translate-y-10
            lg:-translate-y-6
            xl:translate-y-10
          "
                    >

                        <HeroCube
                            pulse={pulse}
                            onClick={handleClick}
                            cubeStyle={cubeStyle}
                            mouse={isMobile ? { x: 0, y: 0 } : mouse.current}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}