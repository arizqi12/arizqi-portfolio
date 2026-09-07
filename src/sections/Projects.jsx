import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-xl">01.</span> Proyek Saya
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition duration-300"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-900 text-cyan-400 font-mono text-xs px-2.5 py-1 rounded border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 text-sm font-medium pt-4 border-t border-slate-700/50">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo ↗
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
