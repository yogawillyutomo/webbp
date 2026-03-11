import Link from "next/link";
import { EyeIcon } from "@/shared/icons/TechIcons";
import RevealSection from "@/shared/ui/RevealSection";
import { useEffect, useRef } from "react";

export default function HeroContent({ onWrapChange }) {

    const buttonRef = useRef(null);

    useEffect(() => {

        const checkWrap = () => {

            const el = buttonRef.current;
            if (!el) return;

            const children = el.children;
            if (children.length < 2) return;

            const firstTop = children[0].offsetTop;
            const secondTop = children[1].offsetTop;

            const wrapped = secondTop > firstTop;

            onWrapChange?.(wrapped);
        };

        // delay sedikit agar layout selesai render
        const timer = setTimeout(checkWrap, 100);

        // resize window
        window.addEventListener("resize", checkWrap);

        // observer jika ukuran container berubah
        const observer = new ResizeObserver(checkWrap);
        if (buttonRef.current) observer.observe(buttonRef.current);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", checkWrap);
            observer.disconnect();
        };

    }, [onWrapChange]);

    return (
        <RevealSection disableInitial>
            <div className="space-y-6 text-center xl:text-left pt-8 xl:pt-0">

                {/* BADGE */}
                <div className="cyber-badge mt-6 xl:mt-0 mx-auto xl:mx-0 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-[var(--brand-color)] bg-blue-500/15 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.25)] xl:bg-transparent xl:border-[rgba(59,130,246,0.3)] xl:shadow-none">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>

                    <span className="text-sm font-medium tracking-wide">
                        Innovative App Development
                    </span>
                </div>

                {/* TITLE */}
                <h1 className="font-orbitron font-bold tracking-tight leading-[1.25] pb-1 hero-title">

                    <span className="block text-3xl md:text-5xl xl:text-6xl text-slate-900 hero-main-title">
                        Bakaran Project
                    </span>

                    <span className="block mt-3 text-lg md:text-3xl xl:text-4xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                        Solusi Teknologi Terdepan
                    </span>

                </h1>

                {/* DESCRIPTION */}
                <p className="text-base md:text-lg muted-text leading-relaxed max-w-xl xl:max-w-2xl mx-auto xl:mx-0">
                    Mengubah ide menjadi pengalaman digital yang powerful.
                    Kami membangun aplikasi cutting-edge yang mendorong
                    inovasi dan akselerasi pertumbuhan bisnis Anda.
                </p>

                {/* BUTTONS */}
                <div
                    ref={buttonRef}
                    className="flex flex-wrap gap-4 justify-center xl:justify-start"
                >
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
    );
}