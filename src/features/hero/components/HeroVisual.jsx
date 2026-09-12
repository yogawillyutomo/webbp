"use client";

import { useState } from "react";
import HeroCube from "./HeroCube";
import HeroBadges from "./HeroBadges";

export default function HeroVisual({ mouse, isMobile }) {
    const [showBadges, setShowBadges] = useState(true);

    const cubeStyle = isMobile
        ? {}
        : {
            transform: `
                translateY(${mouse.y * 2}px)
                rotateX(${mouse.y * 3}deg)
                rotateY(${mouse.x * 3}deg)
            `,
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

                <div className="flex items-center justify-center">
                    <div
                        className="
                            flex items-center justify-center
                            -translate-y-10
                            lg:-translate-y-6
                            xl:translate-y-10
                        "
                    >
                        <button
                            type="button"
                            aria-pressed={showBadges}
                            aria-label={
                                showBadges
                                    ? "Sembunyikan kapabilitas Bakaran Project"
                                    : "Tampilkan kapabilitas Bakaran Project"
                            }
                            onClick={() => setShowBadges((prev) => !prev)}
                            className="rounded-[2rem] cursor-pointer transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                        >
                            <HeroCube
                                cubeStyle={cubeStyle}
                                mouse={isMobile ? { x: 0, y: 0 } : mouse}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
