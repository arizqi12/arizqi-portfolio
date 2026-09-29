export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
      {/* Garis Cahaya Menyala di Atas Kartu Saat Hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Bagian Gambar / Preview Proyek */}
      <div className="relative overflow-hidden aspect-video bg-slate-950 border-b border-slate-800/80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

        <div className="absolute top-4 left-4">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-indigo-400 border border-indigo-500/30 shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      {/* Bagian Konten Teks */}
      <div className="p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-slate-950/80 text-slate-300 border border-slate-800/80 px-3 py-1 rounded-lg group-hover:border-indigo-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Live Preview</span>
                <span className="group-hover/link:translate-x-1.5 transition-transform duration-300">
                  &rarr;
                </span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
