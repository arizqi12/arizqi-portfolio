import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-xl"></span> Keahlian &
        Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 hover:border-cyan-400/40 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {skillGroup.category}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {skillGroup.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-slate-900/80 text-slate-200 text-sm font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-1.5"
                >
                  <span className="text-cyan-400">#</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
