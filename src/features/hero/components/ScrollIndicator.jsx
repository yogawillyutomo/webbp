import RevealSection from "@/shared/ui/RevealSection";

export default function ScrollIndicator({ hideScroll }) {
    return (
        <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">

            <RevealSection delay={800} direction="none">

                <div
                    className={`
                    flex flex-col items-center gap-4
                    transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]
                    ${hideScroll
                            ? "opacity-0 translate-y-4 pointer-events-none"
                            : "opacity-100 translate-y-0"}
                    `}
                >

                    <span className="text-xs tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        Scroll Down
                    </span>

                    <div className="relative w-7 h-12 rounded-full border border-gray-400/40 dark:border-white/20 backdrop-blur-sm flex justify-center overflow-hidden">
                        <div className="absolute top-2 w-1.5 h-3 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500 animate-scroll-dot" />
                    </div>

                </div>

            </RevealSection>

        </div>
    );
}