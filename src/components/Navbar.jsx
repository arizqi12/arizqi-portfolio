export default function Navbar() {
  return (
    <header className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-slate-100">
          Arizqi<span className="text-cyan-400">.dev</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm text-slate-400">
            <li>
              <a href="#hero" className="hover:text-cyan-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Proyek
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Keahlian
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Kontak
              </a>
            </li>
          </ul>
          <a
            href="/CV_Arizqi.pdf"
            download
            className="text-xs font-semibold text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 px-3.5 py-2 rounded-md transition"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
