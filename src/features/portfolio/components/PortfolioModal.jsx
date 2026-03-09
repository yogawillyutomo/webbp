import ImageCarousel from "./ImageCarousel";
import { createPortal } from "react-dom";

export default function PortfolioModal({
    selectedProject,
    isVisible,
    closeModal,
    getMorphStyle,
    currentImageIndex,
    nextImage,
    prevImage,
    setCurrentImageIndex
}) {

    if (!selectedProject) return null;

    return createPortal(
        <>
            {/* OVERLAY */}
            <div
                onClick={closeModal}
                className={`
                fixed inset-0 z-40
                transition-all duration-700
                ${isVisible
                        ? "bg-black/40 backdrop-blur-xl opacity-100"
                        : "bg-black/0 backdrop-blur-0 opacity-0"}
                `}
            />

            {/* MODAL */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={getMorphStyle()}
                className={`
                fixed z-50
                rounded-2xl overflow-hidden
                bg-[var(--card-bg)]
                border border-blue-500/30
                shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]
                transition-all duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isVisible ? "opacity-100" : "opacity-90"}
                `}
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={closeModal}
                    className="
  absolute top-6 right-6 z-50
  w-11 h-11 rounded-full

  bg-white/10
  hover:bg-white/20
  backdrop-blur-lg

  text-white
  flex items-center justify-center

  transition-all duration-300
  shadow-[0_8px_25px_rgba(0,0,0,0.35)]

  hover:scale-110
  active:scale-95
  "
                >
                    ✕
                </button>


                {/* IMAGE CAROUSEL */}
                <ImageCarousel
                    images={selectedProject.images}
                    currentImageIndex={currentImageIndex}
                    nextImage={nextImage}
                    prevImage={prevImage}
                    isVisible={isVisible}
                    setCurrentImageIndex={setCurrentImageIndex}
                />


                {/* CONTENT */}
                <div
                    className={`
    p-8
    max-h-[50vh]
    overflow-y-auto

    transition-all duration-700 delay-150
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
    `}
                >

                    <h3 className="font-orbitron text-3xl mb-3">
                        {selectedProject.title}
                    </h3>

                    <div className="text-[var(--brand-color)] mb-4 text-sm tracking-wide">
                        {selectedProject.category}
                    </div>

                    <p className="text-[var(--muted-text)] leading-relaxed mb-6">
                        {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {selectedProject.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="
                                    px-4 py-1.5 text-xs rounded-full

                                    bg-cyan-100
                                    border border-cyan-300
                                    text-cyan-700

                                    dark:bg-cyan-500/10
                                    dark:border-cyan-400/30
                                    dark:text-cyan-300

                                    transition-all duration-300
                                    "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </>,
        document.body
    );
}