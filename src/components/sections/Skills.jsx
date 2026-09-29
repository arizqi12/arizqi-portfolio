import { skillsData } from "../../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          Tools and languages I use on a daily basis.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-indigo-500 hover:text-indigo-400 transition-all cursor-default"
          >
            {skill.name}{" "}
            <span className="text-xs text-slate-500 ml-1.5 font-normal">
              ({skill.category})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
