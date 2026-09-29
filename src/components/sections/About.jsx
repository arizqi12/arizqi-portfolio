export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <p className="text-slate-400 mt-2">
          A combination of visual aesthetics and programming logic precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/50 transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Background
            </span>
            <p className="text-slate-300 text-base md:text-lg mt-4 leading-relaxed">
              I believe that great digital products are born from mature user
              research in <strong className="text-white">Figma</strong>, then
              executed with clean, modular, and high-performance frontend code
              using <strong className="text-white">React & Tailwind</strong>.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            Available for remote & onsite collaborations
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between hover:border-violet-500/50 transition-all">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
              Working Principle
            </span>
            <h3 className="text-xl font-bold text-white mt-3">
              Clean & Scalable
            </h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Prioritizing component structures that are easy to develop and web
              accessibility that is friendly to all users.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 font-mono">
            // UI/UX + Code Synergy
          </div>
        </div>
      </div>
    </section>
  );
}
