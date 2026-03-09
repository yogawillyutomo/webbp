"use client";

import { useRef, useEffect, useState } from "react";

export default function PortfolioFilter({
    categories,
    activeCategory,
    setActiveCategory
}) {

    const containerRef = useRef(null);
    const buttonRefs = useRef([]);

    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);


    /*
    ===================================
    UPDATE SLIDING INDICATOR
    ===================================
    */

    useEffect(() => {

        const index = categories.indexOf(activeCategory);

        const button = buttonRefs.current[index];
        const container = containerRef.current;

        if (!button || !container) return;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const newLeft = buttonRect.left - containerRect.left;
        const newWidth = buttonRect.width;

        setIsAnimating(true);

        setIndicatorStyle({
            width: newWidth,
            transform: `translateX(${newLeft}px)`
        });


        /*
        ===================================
        AUTO SCROLL ACTIVE BUTTON
        ===================================
        */

        const scrollPosition =
            newLeft - containerRect.width / 2 + newWidth / 2;

        container.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });


        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 450);

        return () => clearTimeout(timeout);

    }, [activeCategory, categories]);


    return (

        <div className="flex justify-center mt-16 mb-24">

            <div
                ref={containerRef}
                className="
        relative flex overflow-x-auto no-scrollbar
        p-2 rounded-full

        bg-white/5 backdrop-blur-2xl
        border border-white/10

        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        scroll-smooth
        "
            >

                {/* SLIDING INDICATOR */}

                <div
                    className={`
          absolute top-2 bottom-2 left-0
          rounded-full bg-white

          shadow-[0_8px_25px_rgba(0,0,0,0.18)]

          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${isAnimating ? "scale-[1.04]" : "scale-100"}
          `}
                    style={indicatorStyle}
                />



                {/* CATEGORY BUTTON */}

                {categories.map((cat, index) => (

                    <button
                        key={cat}
                        ref={(el) => (buttonRefs.current[index] = el)}
                        onClick={() => setActiveCategory(cat)}

                        className={`
            relative z-10
            px-8 py-3

            text-[15px]
            font-black
            tracking-wide

            whitespace-nowrap

            transition-all duration-300
            active:scale-95

            ${activeCategory === cat
                                ? "text-black"
                                : "text-white/70 hover:text-white"
                            }
            `}
                    >
                        {cat}
                    </button>

                ))}

            </div>

        </div>

    );

}