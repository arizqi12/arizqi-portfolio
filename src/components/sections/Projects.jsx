import { projectsData } from "../../data/portfolioData";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900/80"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Featured Projects
        </h2>
        <p className="text-slate-400 mt-2">
          Selected works combining UI/UX design and code implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
