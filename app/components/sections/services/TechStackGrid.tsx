const techData = [
  { group: "Frontend", techs: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { group: "Backend", techs: ["Node.js", "PostgreSQL", "Redis", "GraphQL"] },
  { group: "Cloud", techs: ["AWS", "Docker", "Kubernetes"] },
];

export default function TechStackGrid() {
  return (
    <section className="py-32 bg-[#FBFBFC]">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-[900] text-slate-900 mb-16 text-center">Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techData.map((item, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-[11px] font-black tracking-[0.2em] text-blue-600 uppercase text-center">{item.group}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {item.techs.map((tech) => (
                  <div key={tech} className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-700 hover:shadow-md transition-all">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}