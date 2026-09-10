const STATUS_STYLES = {
    "Pre-production": "border-amber-400/30 bg-amber-400/10 text-amber-300",
    Prototype: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    "In Development": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
};

export default function ProjectCard({ project, onClick, isModalOpen }) {
    const statusStyle =
        STATUS_STYLES[project.status] ??
        "border-slate-400/30 bg-slate-400/10 text-slate-300";

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Lihat detail ${project.title}`}
            aria-haspopup="dialog"
            className={`
                group relative w-full overflow-hidden rounded-2xl text-left
                border border-[var(--card-border)]
                bg-[var(--card-bg)]
                before:absolute before:inset-0
                before:bg-cyan-500/5
                before:opacity-0
                before:transition-opacity before:duration-500
                hover:before:opacity-100
                transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                ${!isModalOpen ? "hover:-translate-y-3" : ""}
                ${!isModalOpen ? "hover:border-cyan-400/50" : ""}
                ${!isModalOpen ? "hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)]" : ""}
                active:scale-[0.97]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-400
                focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
            `}
        >
            <div
                data-project-image={project.code}
                className="
                    relative flex h-44 items-end overflow-hidden
                    bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.28),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,132,199,0.28))]
                    p-6
                "
            >
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-cyan-300/20" />
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-blue-300/20" />

                <div className="relative z-10 flex w-full items-end justify-between gap-4">
                    <div>
                        <div className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                            Bakaran Project
                        </div>
                        <div className="font-orbitron text-3xl font-bold text-white">
                            {project.code}
                        </div>
                    </div>

                    <span
                        className={`
                            rounded-full border px-3 py-1 text-[11px] font-semibold
                            uppercase tracking-wider backdrop-blur-sm
                            ${statusStyle}
                        `}
                    >
                        {project.status}
                    </span>
                </div>
            </div>

            <div className="relative z-10 p-6">
                <h3 className="mb-1 font-orbitron text-lg font-bold">
                    {project.title}
                </h3>

                <div className="mb-3 text-sm text-[var(--brand-color)]">
                    {project.category}
                </div>

                <p className="mb-5 text-sm leading-relaxed text-[var(--muted-text)]">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="
                                rounded-full border border-cyan-400/20
                                bg-cyan-500/5 px-3 py-1
                                text-xs text-[var(--muted-text)]
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </button>
    );
}
