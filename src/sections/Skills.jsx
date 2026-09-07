const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Vite",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "npm/yarn", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-xl">02.</span> Keahlian &
        Tooling
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl"
          >
            <h3 className="text-slate-200 font-semibold mb-4 text-sm font-mono tracking-wider uppercase text-cyan-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-slate-800 text-slate-300 border border-slate-700 px-3.5 py-1.5 rounded-lg text-sm font-medium"
                >
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
