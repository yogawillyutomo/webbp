"use client";

import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function PortfolioFilter({
    categories,
    categoryCounts,
    activeCategory,
    setActiveCategory
}) {

    const containerRef = useRef(null);
    const indicatorRef = useRef(null);
    const buttonRefs = useRef([]);
    const shouldReduceMotion = useReducedMotion();

    useLayoutEffect(() => {
        const index = categories.indexOf(activeCategory);
        const button = buttonRefs.current[index];
        const container = containerRef.current;
        const indicator = indicatorRef.current;

        if (!button || !container || !indicator) return;

        const newLeft = button.offsetLeft;
        const newWidth = button.offsetWidth;

        requestAnimationFrame(() => {
            indicator.style.width = `${newWidth}px`;
            indicator.style.transform = `translate3d(${newLeft}px,0,0)`;
        });

        const scrollPosition =
            newLeft - container.offsetWidth / 2 + newWidth / 2;

        const isMobile = window.innerWidth < 768;

        container.scrollTo({
            left: scrollPosition,
            behavior: isMobile || shouldReduceMotion ? "auto" : "smooth"
        });
    }, [activeCategory, categories, shouldReduceMotion]);

    const handleMouseMove = (e, index) => {
        if (shouldReduceMotion) return;

        const button = buttonRefs.current[index];
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const resetMagnet = (index) => {
        const button = buttonRefs.current[index];
        if (!button) return;

        button.style.transform = "translate(0px,0px)";
    };

    return (
        <div className="flex justify-center mt-16 mb-24">
            <div
                role="group"
                aria-label="Filter produk berdasarkan kategori"
                className="relative portfolio-scroll-mask max-w-full"
            >
                <div
                    ref={containerRef}
                    className="
                        relative z-20 flex flex-nowrap
                        overflow-x-auto no-scrollbar
                        pt-2 px-2 pb-3 rounded-full
                        bg-white/5 backdrop-blur-2xl
                        border border-white/10
                        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                        scroll-smooth
                    "
                >
                    <div
                        ref={indicatorRef}
                        aria-hidden="true"
                        className="
                            absolute top-2 bottom-2 left-0
                            rounded-full
                            bg-white/90 dark:bg-white
                            backdrop-blur-md
                            shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                            transition-[transform,width]
                            duration-300
                            ease-[cubic-bezier(.16,1,.3,1)]
                            will-change-transform
                            transform-gpu
                        "
                    />

                    {categories.map((cat, index) => {
                        const count = categoryCounts?.[cat] ?? 0;
                        const isActive = activeCategory === cat;

                        return (
                            <button
                                type="button"
                                key={cat}
                                ref={(el) => (buttonRefs.current[index] = el)}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => resetMagnet(index)}
                                onClick={() => setActiveCategory(cat)}
                                aria-pressed={isActive}
                                aria-label={`${cat}: ${count} produk`}
                                className={`
                                    relative z-10 flex items-center gap-2
                                    px-6 py-3
                                    text-[15px]
                                    font-black
                                    tracking-wide
                                    whitespace-nowrap
                                    transition-[color,transform]
                                    duration-200
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                                    ${isActive
                                        ? "text-black dark:text-black"
                                        : "text-gray-700 hover:text-black dark:text-white/70 dark:hover:text-white"}
                                `}
                            >
                                <span>{cat}</span>
                                <span
                                    aria-hidden="true"
                                    className={`
                                        inline-flex min-w-6 items-center justify-center rounded-full px-1.5 py-0.5
                                        text-[11px] leading-none
                                        ${isActive
                                            ? "bg-black/10 text-black/70"
                                            : "bg-slate-500/10 text-[var(--muted-text)]"}
                                    `}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
