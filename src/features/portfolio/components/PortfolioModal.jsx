import { createPortal } from "react-dom";

const STATUS_STYLES = {
    "Pre-production": "border-amber-400/30 bg-amber-400/10 text-amber-300",
    Prototype: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    "In Development": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
};

export default function PortfolioModal({
    selectedProject,
    isVisible,
    dialogRef,
    closeModal,
    getFlipTransform,
}) {
    if (!selectedProject) return null;

    const statusStyle =
        STATUS_STYLES[selectedProject.status] ??
        "border-slate-400/30 bg-slate-400/10 text-slate-300";

    return createPortal(
        <>
            <div
                aria-hidden="true"
                onClick={closeModal}
                className={`
                    fixed inset-0 z-40
                    transition-all duration-300
                    ${
                        isVisible
                            ? "pointer-events-auto bg-black/60 backdrop-blur-xl opacity-100"
                            : "pointer-events-none bg-black/0 backdrop-blur-0 opacity-0"
                    }
                `}
            />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isVisible}
                aria-labelledby={`portfolio-title-${selectedProject.code}`}
                tabIndex={-1}
                onClick={(event) => event.stopPropagation()}
                style={getFlipTransform()}
                className={`
                    fixed left-1/2 top-1/2 z-50
                    w-[min(900px,92vw)] max-h-[86vh]
                    overflow-hidden rounded-2xl
                    border border-blue-500/30
                    bg-[var(--card-bg)]
                    shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]
                    origin-center transform-gpu will-change-transform
                    transition-all duration-300
                    ease-[cubic-bezier(.16,1,.3,1)]
                    ${isVisible ? "pointer-events-auto" : "pointer-events-none"}
                `}
            >
                <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Tutup detail produk"
                    className="
                        absolute right-5 top-5 z-20
                        flex h-11 w-11 items-center justify-center rounded-full
                        bg-black/40 text-white backdrop-blur-lg
                        transition-all duration-300
                        hover:scale-110 hover:bg-black/60 active:scale-95
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
                    "
                >
                    ✕
                </button>

                <div className="
                    relative overflow-hidden
                    bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.30),transparent_42%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(3,105,161,0.42))]
                    px-8 py-10 md:px-10
                ">
                    <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-cyan-200/15" />
                    <div className="absolute right-10 top-8 h-28 w-28 rounded-full border border-blue-200/15" />

                    <div className="relative z-10 pr-14">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                                Bakaran Project
                            </span>
                            <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${statusStyle}`}>
                                {selectedProject.status}
                            </span>
                        </div>

                        <div className="mb-2 font-orbitron text-sm font-semibold tracking-[0.22em] text-cyan-300">
                            {selectedProject.code}
                        </div>
                        <h3
                            id={`portfolio-title-${selectedProject.code}`}
                            className="font-orbitron text-3xl font-bold text-white md:text-4xl"
                        >
                            {selectedProject.title}
                        </h3>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                            {selectedProject.statusDetail}
                        </p>
                    </div>
                </div>

                <div className="max-h-[52vh] overflow-y-auto p-8 md:p-10">
                    <div className="mb-8">
                        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-color)]">
                            {selectedProject.primaryCategory}
                        </div>
                        <p className="text-base leading-relaxed text-[var(--muted-text)]">
                            {selectedProject.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h4 className="mb-4 font-orbitron text-base font-semibold">
                            Evidence yang dapat diklaim
                        </h4>
                        <ul className="space-y-3">
                            {selectedProject.proof.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm leading-relaxed text-[var(--muted-text)]"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-orbitron text-base font-semibold">
                            Technology
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {selectedProject.technology.map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                        rounded-full border border-cyan-400/30
                                        bg-cyan-500/10 px-4 py-1.5
                                        text-xs text-cyan-700
                                        dark:text-cyan-300
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
}
