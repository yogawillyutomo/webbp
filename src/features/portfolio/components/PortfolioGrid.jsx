import ProjectCard from "./ProjectCard";

export default function PortfolioGrid({ projects, openModal, isModalOpen }) {

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (

                <ProjectCard
                    key={project.code || index}
                    project={project}
                    isModalOpen={isModalOpen}
                    onClick={(e) => openModal(e, project)}
                />

            ))}

        </div>

    );

}