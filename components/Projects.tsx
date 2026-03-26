"use client";

const projects = [
  {
    num: "01",
    title: "DevFlow",
    tag: "featured",
    desc: "Full-stack platform for engineering teams — sprint tracking, PR reviews, deployment monitoring. All in one dashboard. No more 47-tab Jira nightmares. 🙏",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    num: "02",
    title: "SwiftStore API",
    desc: "E-commerce REST API pulling 10k+ req/sec. Redis caching, JWT auth, Stripe integration. Built because slow checkout pages are a crime against humanity.",
    stack: ["Python", "FastAPI", "Redis", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    num: "03",
    title: "Realtime Chat Engine",
    desc: "WebSocket chat with rooms, presence, message history, and e2e encryption. Because reading 'message deleted' is always suspicious. 👀",
    stack: ["TypeScript", "Socket.io", "MongoDB", "React"],
    github: "#",
    demo: "#",
  },
  {
    num: "04",
    title: "CLI Task Manager",
    desc: "Blazing-fast terminal task manager with tagging, priorities, deadlines, and cloud sync. For devs who think GUIs are overrated. (They're not. But still.)",
    stack: ["Go", "SQLite", "REST", "CLI"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-fira text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-2">things i built</p>
          <h2 className="font-syne font-extrabold tracking-tight" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-1.5px" }}>
            Selected Work
            <span className="text-[#ff3cac] animate-pulse">_</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#2a2a2a] overflow-hidden">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`bg-[#141414] px-8 py-7 grid grid-cols-[56px_1fr_auto] gap-6 items-center hover:bg-[#1a1a1a] transition-colors ${
                i < projects.length - 1 ? "border-b border-[#2a2a2a]" : ""
              }`}
            >
              <span className="font-fira text-xs text-[#555]">{p.num}</span>

              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-syne font-extrabold text-lg tracking-tight">{p.title}</h3>
                  {p.tag && (
                    <span className="text-[0.65rem] uppercase tracking-wide px-2 py-0.5 rounded-full font-semibold bg-[rgba(255,60,172,0.15)] text-[#ff3cac] border border-[rgba(255,60,172,0.3)]">
                      {p.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#888] leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-fira text-[0.7rem] text-[#555] bg-[#0d0d0d] border border-[#2a2a2a] px-2.5 py-0.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end shrink-0">
                <a href={p.github} className="text-xs font-semibold text-[#555] hover:text-white transition-colors">GitHub →</a>
                <a href={p.demo} className="text-xs font-semibold text-[#ff3cac] hover:underline">Live Demo ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
