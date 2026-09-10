import HeroCube from "./HeroCube";
import HeroBadges from "./HeroBadges";

export default function HeroVisual({ mouse, isMobile }) {
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
                        showBadges
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
                        <HeroCube
                            cubeStyle={cubeStyle}
                            mouse={isMobile ? { x: 0, y: 0 } : mouse}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
