import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-36 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center overflow-hidden">
      {/* Efek Cahaya Latar Belakang Berdenyut */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 animate-fade-in">
        {/* Badge Mengambang */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-lg shadow-indigo-500/10 animate-bounce duration-1000">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></span>
          Available for new projects & UI/UX Design
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
            Experiences & Code
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-xl mt-6 max-w-2xl leading-relaxed">
          Hi, I'm{" "}
          <strong className="text-slate-200">{personalInfo.name}</strong>.{" "}
          {personalInfo.bio}
        </p>

        {/* Tombol Interaktif dengan Efek Ripple/Glow */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-7 py-3.5 rounded-2xl transition-all shadow-xl shadow-indigo-600/30 text-sm md:text-base hover:-translate-y-1 hover:shadow-indigo-500/50"
          >
            <span>Explore Projects</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium px-7 py-3.5 rounded-2xl transition-all text-sm md:text-base backdrop-blur-md hover:-translate-y-1 hover:border-slate-700"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
