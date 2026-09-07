import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center"
    >
      <h2 className="text-2xl font-bold text-slate-100 mb-4 flex justify-center gap-2">
        <span className="text-cyan-400 font-mono text-xl">02.</span> Hubungi
        Saya
      </h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8">
        Saya selalu terbuka untuk diskusi proyek baru, peluang kerja, atau
        sekadar menyapa.
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-block border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-6 py-3 rounded-lg transition"
      >
        Kirim Email
      </a>

      <footer className="mt-24 pt-6 border-t border-slate-800 text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React &
          Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
