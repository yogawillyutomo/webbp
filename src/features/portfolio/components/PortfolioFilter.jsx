"use client";

import { useRef, useLayoutEffect } from "react";

export default function PortfolioFilter({
    categories,
    activeCategory,
    setActiveCategory
}) {

    const containerRef = useRef(null);
    const indicatorRef = useRef(null);
    const buttonRefs = useRef([]);

    /*
    =========================
    UPDATE INDICATOR
    =========================
    */

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

        /*
        =========================
        AUTO SCROLL
        =========================
        */

        const scrollPosition =
            newLeft - container.offsetWidth / 2 + newWidth / 2;

        const isMobile = window.innerWidth < 768;

        container.scrollTo({
            left: scrollPosition,
            behavior: isMobile ? "auto" : "smooth"
        });

    }, [activeCategory, categories]);



    /*
    =========================
    MAGNETIC HOVER
    =========================
    */

    const handleMouseMove = (e, index) => {

        const button = buttonRefs.current[index];
        if (!button) return;

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;

    };

    const resetMagnet = (index) => {

        const button = buttonRefs.current[index];
        if (!button) return;

        button.style.transform = "translate(0px,0px)";

    };



    return (

        <div className="flex justify-center mt-16 mb-24">

            <div className="relative portfolio-scroll-mask max-w-full">

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

                    {/* INDICATOR */}

                    <div
                        ref={indicatorRef}
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

                    {/* BUTTONS */}

                    {categories.map((cat, index) => (

                        <button
                            key={cat}
                            ref={(el) => (buttonRefs.current[index] = el)}

                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => resetMagnet(index)}

                            onClick={() => setActiveCategory(cat)}

                            className={`
                relative z-10
                px-8 py-3
                text-[15px]
                font-black
                tracking-wide
                whitespace-nowrap
                transition-colors duration-200
                active:scale-95
                ${activeCategory === cat
                                    ? "text-black dark:text-black"
                                    : "text-gray-700 hover:text-black dark:text-white/70 dark:hover:text-white"}
              `}
                        >
                            {cat}
                        </button>

                    ))}

                </div>

            </div>

        </div>

    );

}