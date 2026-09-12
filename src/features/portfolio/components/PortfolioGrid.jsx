import ProjectCard from "./ProjectCard";

export default function PortfolioGrid({ projects, openModal, isModalOpen }) {
    return (
        <div className="grid auto-rows-fr items-stretch gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.code || index}
                    project={project}
                    isModalOpen={isModalOpen}
                    onClick={(event) => openModal(event, project)}
                />
            ))}
        </div>
    );
}
