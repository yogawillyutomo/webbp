import HeroCube from "./components/HeroCube";
import FloatingBadge from "@/shared/ui/FloatingBadge";
import SectionDivider from "@/shared/ui/SectionDivider";
import Link from "next/link";
import { badges } from "./hero.data";
import { EyeIcon } from "@/shared/icons/TechIcons";
import { useState } from "react";
import RevealSection from "@/shared/ui/RevealSection";

export default function HeroView({
    mouse,
    time,
    isMobile,
    hideScroll
}) {
    const [showBadges, setShowBadges] = useState(true);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative"
        >
            {/* BACKGROUND */}
            <RevealSection duration={1200} direction="none">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        style={{
                            transform: isMobile
                                ? "translate(0px,0px)"
                                : `translate(${mouse.current.x * 20}px, ${mouse.current.y * 20}px)`,
                        }}
                    />

                    <div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                        style={{
                            transform: isMobile
                                ? "translate(0px,0px)"
                                : `translate(${mouse.current.x * -15}px, ${mouse.current.y * -15}px)`,
                        }}
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,60vw,600px)] h-[clamp(300px,60vw,600px)] border border-blue-500/10 rounded-full"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,75vw,800px)] h-[clamp(400px,75vw,800px)] border border-blue-500/5 rounded-full"></div>
                </div>
            </RevealSection>
            <div
                className="max-w-7xl mx-auto px-6 py-10 pt-16 relative z-10"
            >
                {/* ⬇️ GRID FIX: pakai xl bukan lg */}
                <div className="grid xl:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <RevealSection duration={1000}>
                        <div className="space-y-8 text-center xl:text-left">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-(--brand-color)/30 bg-(--brand-color)/10">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-(--brand-color)">
                                    Innovative App Development
                                </span>
                            </div>

                            <h1 className="font-orbitron text-4xl md:text-6xl xl:text-7xl font-bold leading-tight hero-title">
                                <span className="block">Bakaran Project</span>
                                <span className="block bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
                bg-clip-text text-transparent animate-gradient tracking-tight">
                                    Solusi Teknologi Terdepan
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl muted-text leading-relaxed max-w-lg mx-auto xl:mx-0">
                                Mengubah ide menjadi pengalaman digital yang powerful.
                                Kami membangun aplikasi cutting-edge yang mendorong inovasi
                                dan akselerasi pertumbuhan bisnis Anda.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center xl:justify-start">

                                <Link
                                    href="#contact"
                                    className="btn-cyber animate-pulse-glow px-8 py-4 rounded-lg font-semibold text-lg bg-linear-to-r from-blue-600 to-cyan-500 inline-block"
                                >
                                    Free Consultation
                                </Link>

                                <Link
                                    href="#portfolio"
                                    className="btn-cyber px-8 py-4 rounded-lg font-semibold text-lg border border-blue-500/50 hover:bg-blue-500/10 flex items-center gap-3"
                                >
                                    <EyeIcon />
                                    Watch Demo
                                </Link>

                            </div>
                        </div>
                    </RevealSection>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex items-center justify-center">
                        <div className="
                                relative
                                w-[clamp(220px,35vw,420px)]
                                h-[clamp(220px,35vw,420px)]
                        ">

                            {/* BADGES desktop only */}

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
                                        const radius = isMobile ? 120 : 230;
                                        let extraY = badge.offsetY ?? 0;


                                        return (
                                            <div
                                                key={i}
                                                className="absolute"
                                                style={{
                                                    transform: `
                                                    rotate(${angle}deg)
                                                    translate(${radius}px)
                                                    rotate(-${angle}deg)
                                                    `,
                                                }}
                                            >
                                                {/* OFFSET DI SINI (vertical murni) */}
                                                <div
                                                    style={{
                                                        transform: `translateY(${extraY}px)`
                                                    }}
                                                >
                                                    <RevealSection key={i} delay={i * 0.1}>
                                                        <FloatingBadge
                                                            title={badge.title}
                                                            subtitle={badge.subtitle}
                                                            icon={badge.icon}
                                                        />
                                                    </RevealSection>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <RevealSection duration={1200} delay={20} subtle>
                                <div className="flex items-center justify-center h-full cursor-pointer will-change-transform">
                                    <div className="flex items-center justify-center translate-y-14">
                                        <HeroCube
                                            className={showBadges ? "" : "drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-80 lg:scale-90 xl:scale-100"}
                                            onClick={() => setShowBadges(prev => !prev)}
                                            cubeStyle={
                                                isMobile
                                                    ? {}
                                                    : {
                                                        transform: `
                                                        translateY(${mouse.current.y * 4}px)
                                                        rotateX(${mouse.current.y * 4 + Math.sin(time.current) * 2}deg)
                                                        rotateY(${mouse.current.x * 4 + Math.cos(time.current) * 2}deg)
                                                        rotateZ(${Math.sin(time.current * 0.5) * 1.2}deg)
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
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <RevealSection delay={800} direction="none">
                    <div
                        className={`
                                flex flex-col items-center gap-4 z-20
                                transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]
                                ${hideScroll
                                ? "opacity-0 translate-y-4 pointer-events-none"
                                : "opacity-100 translate-y-0"}
                                  `}
                    >

                        <span className="text-xs tracking-[0.25em] uppercase text-gray-400/80">
                            Scroll Down
                        </span>

                        <div className="relative w-7 h-12 rounded-full border border-white/20 backdrop-blur-sm flex justify-center overflow-hidden">

                            <div className="absolute top-2 w-1.5 h-3 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500 animate-scroll-dot" />

                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]" />
                        </div>
                    </div>
                </RevealSection>
            </div>
            {/* Bottom Divider */}
            <SectionDivider />

        </section>
    );
}