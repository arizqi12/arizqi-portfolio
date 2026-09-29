import { personalInfo } from "../../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-slate-900/80"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        Let's Collaborate!
      </h2>
      <p className="text-slate-400 mt-3 max-w-xl mx-auto">
        I am always open to discussing new projects, creative ideas, or
        collaboration opportunities in frontend development and product design.
      </p>
      <div className="mt-8">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
