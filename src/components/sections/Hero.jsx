import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Konten Kiri (Teks Utama & Sapaan) */}
      <div className="relative z-10 max-w-xl animate-fade-in text-left">
        {/* Badge Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-lg shadow-indigo-500/10">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></span>
          Available for new projects & UI/UX Design
        </div>

        {/* Tulisan Biasa Sapaan */}
        <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide mb-2">
          Hi there, 👋
        </p>

        {/* Tulisan Besar Nama */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            {personalInfo.name}
          </span>
        </h1>

        {/* Bio Singkat */}
        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
          {personalInfo.bio}
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap gap-4">
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
            href="/.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium px-7 py-3.5 rounded-2xl transition-all text-sm md:text-base backdrop-blur-md hover:-translate-y-1 hover:border-slate-700"
          >
            <span>Get CV</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center animate-fade-in">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Efek Bingkai Glow di Belakang Foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl group">
            <img
              src={personalInfo.avatarUrl || "/profile.jpg"}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-500 p-6 text-center">
                    <span class="text-4xl font-bold text-indigo-400 mb-2">AR</span>
                    <span class="text-xs">Add your photo to public/profile.jpg</span>
                  </div>
                `;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
