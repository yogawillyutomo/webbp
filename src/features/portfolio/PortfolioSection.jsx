"use client";

import { useRef, useState, useEffect } from "react";

const projects = [
    {
        code: "SPMB",
        title: "Portal Pendaftaran",
        category: "Web App",
        tech: ["Laravel"],
        description:
            "Sistem Portal Penerimaan Mahasiswa Baru yang terintegrasi.",
        images: [
            "https://picsum.photos/seed/spmb1/800/600",
            "https://picsum.photos/seed/spmb2/800/600",
            "https://picsum.photos/seed/spmb3/800/600",
        ],
    },
    {
        code: "BFS",
        title: "Backend System",
        category: "API",
        tech: ["Node.js"],
        description:
            "Backend Financial System untuk manajemen keuangan terintegrasi.",
        images: [
            "https://picsum.photos/seed/bfs1/800/600",
            "https://picsum.photos/seed/bfs2/800/600",
            "https://picsum.photos/seed/bfs3/800/600",
        ],
    },
    {
        code: "POS",
        title: "Seragam SMK",
        category: "POS",
        tech: ["React"],
        description:
            "Point of Sale untuk penjualan seragam SMK dengan inventory tracking.",
        images: [
            "https://picsum.photos/seed/pos1/800/600",
            "https://picsum.photos/seed/pos2/800/600",
            "https://picsum.photos/seed/pos3/800/600",
        ],
    },
    {
        code: "INV",
        title: "Management System",
        category: "Inventory",
        tech: ["Database"],
        description:
            "Sistem manajemen inventori dengan real-time monitoring dan laporan.",
        images: [
            "https://picsum.photos/seed/inv1/800/600",
            "https://picsum.photos/seed/inv2/800/600",
            "https://picsum.photos/seed/inv3/800/600",
        ],
    },
    {
        code: "OCVS",
        title: "Verification System",
        category: "Security",
        tech: ["AI"],
        description:
            "Optical Character & Vision System untuk verifikasi dokumen otomatis.",
        images: [
            "https://picsum.photos/seed/ocvs1/800/600",
            "https://picsum.photos/seed/ocvs2/800/600",
            "https://picsum.photos/seed/ocvs3/800/600",
        ],
    },
    {
        code: "BASECAMP",
        title: "anakalam.com",
        category: "Website",
        tech: ["Community"],
        description:
            "Platform komunitas untuk berbagi cerita dan pengalaman anak alam.",
        images: [
            "https://picsum.photos/seed/basecamp1/800/600",
            "https://picsum.photos/seed/basecamp2/800/600",
            "https://picsum.photos/seed/basecamp3/800/600",
        ],
    },
    {
        code: "CODEX",
        title: "Learning Platform",
        category: "EdTech",
        tech: ["Coding"],
        description:
            "Platform pembelajaran coding intensif dengan mentoring personal.",
        images: [
            "https://picsum.photos/seed/codex1/800/600",
            "https://picsum.photos/seed/codex2/800/600",
            "https://picsum.photos/seed/codex3/800/600",
        ],
    },
    {
        code: "LKS",
        title: "Competition Prep",
        category: "Mentoring",
        tech: ["LKS"],
        description:
            "Program persiapan lomba teknologi dengan pelatihan intensif dan simulasi.",
        images: [
            "https://picsum.photos/seed/lks1/800/600",
            "https://picsum.photos/seed/lks2/800/600",
            "https://picsum.photos/seed/lks3/800/600",
        ],
    },
];

export default function Portfolio() {



    const categories = ["All", ...new Set(projects.map(p => p.category))];
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [originRect, setOriginRect] = useState(null);
    const containerRef = useRef(null);
    const buttonRefs = useRef([]);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);



    useEffect(() => {
        const updateIndicator = () => {
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

            const scrollPosition =
                newLeft - containerRect.width / 2 + newWidth / 2;

            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });

            const timeout = setTimeout(() => setIsAnimating(false), 450);
            return () => clearTimeout(timeout);
        };

        updateIndicator();
    }, [activeCategory]);

    useEffect(() => {
        if (!selectedProject) return;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0px";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [selectedProject]);


    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(p => p.category === activeCategory);

    useEffect(() => {
        if (selectedProject) {
            setTimeout(() => setIsVisible(true), 20);
        }
    }, [selectedProject]);


    const getMorphStyle = () => {
        if (!originRect) return {};

        return isVisible
            ? {
                top: "50%",
                left: "50%",
                width: "min(900px, 92vw)",
                maxHeight: "90vh",
                transform: "translate(-50%, -50%)",
            }
            : {
                top: originRect.top + window.scrollY + "px",
                left: originRect.left + window.scrollX + "px",
                width: originRect.width + "px",
                height: originRect.height + "px",
                transform: "translate(0,0)",
            };
    };



    const closeModal = () => {
        setIsVisible(false);

        setTimeout(() => {
            setSelectedProject(null);
            setOriginRect(null);
        }, 700);
    };

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
                <div className="text-center mb-20">
                    <h2 className="font-orbitron text-4xl lg:text-5xl font-bold
            bg-[linear-gradient(120deg,#3b82f6,#06b6d4,#3b82f6)]
            bg-clip-text text-transparent animate-gradient">
                        Featured Projects
                    </h2>

                    <p className="text-lg text-[var(--muted-text)] mt-6 max-w-2xl mx-auto">
                        Discover our latest work and see how we bring ideas to life.
                    </p>
                </div>

                {/* FILTER */}
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
                        {/* ULTRA SLIDING INDICATOR */}
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

                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                ref={(el) => (buttonRefs.current[index] = el)}
                                onClick={() => setActiveCategory(cat)}
                                className={`
          relative z-10 px-8 py-3
          text-[15px] font-black tracking-wide
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


                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, i) => (
                        <div
                            key={i}
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();

                                setOriginRect(rect);
                                setSelectedProject(project);
                                setCurrentImageIndex(0);
                            }}
                            className={`
                                    group cursor-pointer relative rounded-2xl overflow-hidden
                                    border border-[var(--card-border)]
                                    bg-[var(--card-bg)]

                                    before:absolute before:inset-0
                                    before:bg-cyan-500/5
                                    before:opacity-0
                                    before:transition-opacity before:duration-500
                                    hover:before:opacity-100

                                    transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]

                                    hover:-translate-y-3
                                    hover:border-cyan-400/50
                                    hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)]

                                    active:scale-[0.97]
                                    `}
                        >
                            <div className="relative h-44 overflow-hidden bg-black group-hover:scale-[1.06] transition-transform duration-700">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover block"
                                />
                                <div className="
                                absolute inset-0
                                bg-gradient-to-t from-black/60 via-black/20 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500
                            "/>
                            </div>

                            <div className="p-6">
                                <h3 className="font-orbitron text-lg font-bold mb-1">{project.title}</h3>
                                <div className="text-sm text-[var(--brand-color)] mb-3">{project.category}</div>
                                <p className="text-sm text-[var(--muted-text)] mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                {selectedProject && (
                    <>
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

                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={getMorphStyle()}
                            className={`
                                fixed z-50
                                rounded-2xl overflow-hidden overflow-y-auto
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
                                className="absolute top-4 right-4 z-20
                                w-9 h-9 rounded-full
                                bg-black/60 hover:bg-black
                                text-white flex items-center justify-center
                                transition-all"
                            >
                                ✕
                            </button>

                            {/* IMAGE CAROUSEL */}
                            <div className="relative h-[380px]">

                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt=""
                                    className={`
                                        w-full h-full object-cover
                                        transition-transform duration-[900ms]
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        ${isVisible ? "scale-100" : "scale-[1.08]"}
                                    `}
                                />

                                <div className="absolute inset-0
                                bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                {/* NAVIGATION */}
                                <button
                                    onClick={() =>
                                        setCurrentImageIndex(
                                            (prev) =>
                                                (prev - 1 + selectedProject.images.length) %
                                                selectedProject.images.length
                                        )
                                    }
                                    className="absolute left-6 top-1/2 -translate-y-1/2
                                    w-10 h-10 rounded-full bg-black/50 hover:bg-black
                                    text-white flex items-center justify-center
                                    transition-all"
                                >
                                    ◀
                                </button>

                                <button
                                    onClick={() =>
                                        setCurrentImageIndex(
                                            (prev) =>
                                                (prev + 1) %
                                                selectedProject.images.length
                                        )
                                    }
                                    className="absolute right-6 top-1/2 -translate-y-1/2
                                    w-10 h-10 rounded-full bg-black/50 hover:bg-black
                                    text-white flex items-center justify-center
                                    transition-all"
                                >
                                    ▶
                                </button>

                            </div>

                            {/* CONTENT */}
                            <div
                                className={`
                                    p-8
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
                                    {selectedProject.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="
                                            px-4 py-1.5 text-xs rounded-full
                                            bg-cyan-500/10
                                            border border-cyan-400/30
                                            text-cyan-300
                                            hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]
                                            transition-all duration-300
                                            "
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </>
                )}

            </div>
        </section>
    );
}