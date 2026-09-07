import { personalInfo } from "../data/portfolioData";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      {/* Teks & Deskripsi */}
      <div className="flex-1 flex flex-col items-start">
        <div className="inline-block px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full text-xs font-mono mb-4">
          Available for work
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-2">
          {personalInfo.name}.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Social Links & CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            Lihat Proyek <ArrowUpRight size={18} />
          </a>
          <div className="flex gap-3 text-slate-400">
            {/* SVG GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition border border-slate-700"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* SVG LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition border border-slate-700"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Icon Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-slate-800 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition border border-slate-700"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Frame Foto Profil */}
      <div className="relative group flex-shrink-0">
        {/* Glow effect di belakang foto */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

        {/* Container Foto Bulat */}
        <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-cyan-400/30 bg-slate-800">
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
