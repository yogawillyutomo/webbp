import { useState, useMemo } from "react";

const getProjectFilterTags = (project) => {
    if (Array.isArray(project.filterTags) && project.filterTags.length > 0) {
        return project.filterTags;
    }

    return [project.category];
};

export default function usePortfolioFilter(projects) {
    const categories = useMemo(() => {
        const uniqueCategories = new Set(
            projects.flatMap((project) => getProjectFilterTags(project))
        );

        return ["All", ...uniqueCategories];
    }, [projects]);

    const categoryCounts = useMemo(() => {
        return Object.fromEntries(
            categories.map((category) => {
                if (category === "All") {
                    return [category, projects.length];
                }

                const count = projects.filter((project) =>
                    getProjectFilterTags(project).includes(category)
                ).length;

                return [category, count];
            })
        );
    }, [categories, projects]);

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter((project) =>
            getProjectFilterTags(project).includes(activeCategory)
        );
    }, [projects, activeCategory]);

    return {
        categories,
        categoryCounts,
        activeCategory,
        setActiveCategory,
        filteredProjects,
    };
}
