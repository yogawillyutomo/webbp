import { getSiteSettings } from "@/content/repository";

const site = getSiteSettings();

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
        <div className="group relative h-full w-full rounded-2xl">
            <div
                aria-hidden="true"
                className={`
                    pointer-events-none relative flex h-full min-h-[29rem] flex-col overflow-hidden rounded-2xl
                    border border-[var(--card-border)] bg-[var(--card-bg)]
                    transform-gpu
                    transition-transform duration-200 ease-out
                    group-focus-within:border-cyan-400/60
                    ${!isModalOpen ? "group-hover:-translate-y-1 group-hover:scale-[1.005]" : ""}
                `}
            >
                <div
                    className={`
                        pointer-events-none absolute inset-0 rounded-2xl
                        opacity-0 transition-opacity duration-200
                        ${!isModalOpen ? "group-hover:opacity-100" : ""}
                        bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_58%)]
                    `}
                />

                <div
                    className={`
                        pointer-events-none absolute inset-0 rounded-2xl
                        opacity-0 transition-opacity duration-200
                        ${!isModalOpen ? "group-hover:opacity-100" : ""}
                        shadow-[0_18px_45px_rgba(6,182,212,0.18)]
                    `}
                />

                <div
                    data-project-image={project.code}
                    className="
                        relative flex h-44 shrink-0 items-end overflow-hidden
                        bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.28),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,132,199,0.28))]
                        p-6
                    "
                >
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-cyan-300/20" />
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-blue-300/20" />

                    <div className="relative z-10 flex w-full items-end justify-between gap-4">
                        <div className="min-w-0">
                            <div className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                                {site.siteName}
                            </div>
                            <div className="truncate font-orbitron text-3xl font-bold text-white">
                                {project.code}
                            </div>
                        </div>

                        <span
                            className={`
                                shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-semibold
                                uppercase tracking-wider backdrop-blur-sm
                                ${statusStyle}
                            `}
                        >
                            {project.status}
                        </span>
                    </div>
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-6">
                    <h3 className="mb-1 min-h-7 font-orbitron text-lg font-bold">
                        {project.title}
                    </h3>

                    <div className="mb-3 min-h-5 text-sm text-[var(--brand-color)]">
                        {project.primaryCategory}
                    </div>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--muted-text)]">
                        {project.description}
                    </p>

                    <div className="mt-auto flex min-h-8 flex-wrap content-end gap-2">
                        {project.technology.slice(0, 3).map((tech) => (
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
            </div>

            <button
                type="button"
                onClick={onClick}
                aria-label={`Lihat detail ${project.title}`}
                aria-haspopup="dialog"
                className="
                    absolute inset-0 z-30 rounded-2xl cursor-pointer
                    bg-transparent
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-cyan-400
                    focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                "
            >
                <span className="sr-only">Lihat detail {project.title}</span>
            </button>
        </div>
    );
}
