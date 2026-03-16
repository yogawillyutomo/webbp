import { useRef, useEffect, useState } from "react";

export default function ImageCarousel({
    images,
    currentImageIndex,
    nextImage,
    prevImage,
    isVisible,
    setCurrentImageIndex
}) {

    const touchStartX = useRef(null);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (!touchStartX.current) return;

        const deltaX = e.changedTouches[0].clientX - touchStartX.current;

        if (deltaX > 50) {
            prevImage();
        } else if (deltaX < -50) {
            nextImage();
        }

        touchStartX.current = null;
    };


    useEffect(() => {

        if (isPaused) return;

        intervalRef.current = setInterval(() => {
            setProgress(prev => prev + 1);
        }, 40);

        return () => clearInterval(intervalRef.current);

    }, [currentImageIndex, isPaused]);

    useEffect(() => {

        if (progress >= 100) {
            nextImage();
            setProgress(0);
        }

    }, [progress, nextImage]);

    return (

        <div
            className="relative h-[380px]"
            onTouchStart={(e) => {
                handleTouchStart(e);
                setIsPaused(true);
            }}
            onTouchEnd={(e) => {
                handleTouchEnd(e);
                setIsPaused(false);
            }}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* PROGRESS BAR */}
            <div className="absolute top-3 left-6 right-6 h-1 bg-white/30 rounded-full overflow-hidden z-30">
                <div
                    className="h-full bg-white transition-all duration-100 z-40"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* IMAGE */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    key={images[currentImageIndex]}
                    src={images[currentImageIndex]}
                    alt=""
                    className={`
                w-full h-full object-cover
block
translate-y-[0.5px]
                transition-transform duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${isVisible ? "scale-100" : "scale-[1.08]"}
                `}
                />
            </div>

            {/* GRADIENT OVERLAY */}

            <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black/70
                via-black/30
                to-transparent
                z-10
                "
            />


            {/* PREV BUTTON */}
            <button
                onClick={prevImage}
                className="
                absolute left-6 top-1/2 -translate-y-1/2
                z-40

                w-10 h-10 rounded-full
                bg-black/50 hover:bg-black

                text-white
                flex items-center justify-center

                transition-all duration-300
                hover:scale-110 active:scale-95
                "
            >
                ◀
            </button>


            {/* NEXT BUTTON */}
            <button
                onClick={nextImage}
                className="
                absolute right-6 top-1/2 -translate-y-1/2
                z-40

                w-10 h-10 rounded-full
                bg-black/50 hover:bg-black

                text-white
                flex items-center justify-center

                transition-all duration-300 hover:scale-110 active:scale-95
                "
            >
                ▶
            </button>

            {/* DOTS INDICATOR */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`
        w-2.5 h-2.5 rounded-full transition-all duration-300
        ${currentImageIndex === index
                                ? "bg-white scale-125"
                                : "bg-white/40 hover:bg-white/70"}
      `}
                    />
                ))}
            </div>

        </div>

    );

}