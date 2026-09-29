import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/80 py-8 px-6 text-center text-slate-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <div className="flex gap-6 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
