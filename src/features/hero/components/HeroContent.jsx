import Link from "next/link";
import { EyeIcon } from "@/shared/icons/TechIcons";
import RevealSection from "@/shared/ui/RevealSection";

export default function HeroContent() {
    return (
        <RevealSection duration={1000}>
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
    );
}