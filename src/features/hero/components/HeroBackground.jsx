import RevealSection from "@/shared/ui/RevealSection";

export default function HeroBackground({ mouse, isMobile }) {
    return (
        <RevealSection disableInitial duration={1200} direction="none">
            <div className="absolute inset-0 overflow-hidden">

                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    style={{
                        transform: isMobile
                            ? "translate(0px,0px)"
                            : `translate(${(mouse?.current?.x ?? 0) * 20}px, ${(mouse?.current?.y ?? 0) * 20}px)`
                    }}
                />

                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                    style={{
                        transform: isMobile
                            ? "translate(0px,0px)"
                            : `translate(${mouse.current.x * -15}px, ${mouse.current.y * -15}px)`
                    }}
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,60vw,600px)] h-[clamp(300px,60vw,600px)] border border-blue-500/10 rounded-full"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,75vw,800px)] h-[clamp(400px,75vw,800px)] border border-blue-500/5 rounded-full"></div>

            </div>
        </RevealSection>
    );
}