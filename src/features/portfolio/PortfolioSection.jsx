"use client";

import { getProducts } from "@/content/repository";

import usePortfolioFilter from "./hooks/usePortfolioFilter";
import usePortfolioModal from "./hooks/usePortfolioModal";

import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFilter from "./components/PortfolioFilter";
import PortfolioGrid from "./components/PortfolioGrid";
import PortfolioModal from "./components/PortfolioModal";

const projects = getProducts();

export default function PortfolioSection() {
    const {
        categories,
        categoryCounts,
        activeCategory,
        setActiveCategory,
        filteredProjects,
    } = usePortfolioFilter(projects);

    const {
        selectedProject,
        isVisible,
        dialogRef,
        openModal,
        closeModal,
        getFlipTransform,
    } = usePortfolioModal();

    return (
        <section
            id="portfolio"
            className={`
                relative py-28
                transition-transform duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isVisible ? "scale-[0.98]" : "scale-100"}
            `}
        >
            <div className="mx-auto max-w-7xl px-6">
                <PortfolioHeader />

                <PortfolioFilter
                    categories={categories}
                    categoryCounts={categoryCounts}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <PortfolioGrid
                    projects={filteredProjects}
                    openModal={openModal}
                    isModalOpen={isVisible}
                />

                <PortfolioModal
                    selectedProject={selectedProject}
                    isVisible={isVisible}
                    dialogRef={dialogRef}
                    closeModal={closeModal}
                    getFlipTransform={getFlipTransform}
                />
            </div>
        </section>
    );
}
