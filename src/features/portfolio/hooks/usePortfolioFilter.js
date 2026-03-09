import { useState, useMemo } from "react";

export default function usePortfolioFilter(projects) {

    /*
    ================================
    CATEGORY LIST
    ================================
    Mengambil semua category dari project
    lalu membuat list unik
    */

    const categories = useMemo(() => {
        return ["All", ...new Set(projects.map(p => p.category))];
    }, [projects]);


    /*
    ================================
    ACTIVE CATEGORY
    ================================
    */

    const [activeCategory, setActiveCategory] = useState("All");


    /*
    ================================
    FILTERED PROJECTS
    ================================
    */

    const filteredProjects = useMemo(() => {

        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter(
            project => project.category === activeCategory
        );

    }, [projects, activeCategory]);


    /*
    ================================
    RETURN
    ================================
    */

    return {
        categories,
        activeCategory,
        setActiveCategory,
        filteredProjects
    };

}