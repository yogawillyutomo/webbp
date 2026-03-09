export default function ProjectCard({ project, onClick }) {

    return (

        <div
            onClick={onClick}
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

            {/* IMAGE */}

            <div className="
        relative h-44 overflow-hidden bg-black
        group-hover:scale-[1.06]
        transition-transform duration-700
      ">

                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="
          absolute inset-0
          w-full h-full
          object-cover
          block
          "
                />

                <div
                    className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60
          via-black/20
          to-transparent

          opacity-0
          group-hover:opacity-100
          transition-all duration-500
          "
                />

            </div>



            {/* CONTENT */}

            <div className="p-6">

                <h3 className="font-orbitron text-lg font-bold mb-1">
                    {project.title}
                </h3>

                <div className="text-sm text-[var(--brand-color)] mb-3">
                    {project.category}
                </div>

                <p className="text-sm text-[var(--muted-text)] mb-4">
                    {project.description}
                </p>

            </div>

        </div>

    );

}