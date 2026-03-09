"use client";

import { projects } from "./portfolio.data";

import usePortfolioFilter from "./hooks/usePortfolioFilter";
import usePortfolioModal from "./hooks/usePortfolioModal";

import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFilter from "./components/PortfolioFilter";
import PortfolioGrid from "./components/PortfolioGrid";
import PortfolioModal from "./components/PortfolioModal";

export default function PortfolioSection() {

    /*
    ===============================
    FILTER HOOK
    ===============================
    */

    const {
        categories,
        activeCategory,
        setActiveCategory,
        filteredProjects
    } = usePortfolioFilter(projects);



    /*
    ===============================
    MODAL HOOK
    ===============================
    */

    const {
        selectedProject,
        currentImageIndex,
        isVisible,
        openModal,
        closeModal,
        nextImage,
        prevImage,
        getMorphStyle,
        setCurrentImageIndex
    } = usePortfolioModal();



    return (
        <section
            id="portfolio"
            className={`
      relative py-28
      transition-transform duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      ${selectedProject ? "scale-[0.98]" : "scale-100"}
      `}
        >

            <div className="max-w-7xl mx-auto px-6">


                {/* HEADER */}

                <PortfolioHeader />


                {/* FILTER */}

                <PortfolioFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />


                {/* GRID */}

                <PortfolioGrid
                    projects={filteredProjects}
                    openModal={openModal}
                />


                {/* MODAL */}

                <PortfolioModal
                    selectedProject={selectedProject}
                    isVisible={isVisible}
                    closeModal={closeModal}
                    getMorphStyle={getMorphStyle}
                    currentImageIndex={currentImageIndex}
                    nextImage={nextImage}
                    prevImage={prevImage}
                    setCurrentImageIndex={setCurrentImageIndex}
                />

            </div>

        </section>
    );

}