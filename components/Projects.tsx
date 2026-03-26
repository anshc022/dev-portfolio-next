"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01", title: "DevFlow", tag: "featured",
    desc: "Full-stack platform for engineering teams — sprint tracking, PR reviews, deployment monitoring. No more 47-tab Jira nightmares. 🙏",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"], github: "#", demo: "#", year: "2024",
  },
  {
    num: "02", title: "SwiftStore API",
    desc: "E-commerce REST API pulling 10k+ req/sec. Redis caching, JWT auth, Stripe integration. Because slow checkout is a crime.",
    stack: ["Python", "FastAPI", "Redis", "AWS"], github: "#", demo: "#", year: "2024",
  },
  {
    num: "03", title: "Realtime Chat Engine",
    desc: "WebSocket chat with rooms, presence, message history, e2e encryption. 'Message deleted' is always suspicious. 👀",
    stack: ["TypeScript", "Socket.io", "MongoDB", "React"], github: "#", demo: "#", year: "2023",
  },
  {
    num: "04", title: "CLI Task Manager",
    desc: "Blazing-fast terminal task manager with tagging, priorities, deadlines, cloud sync. For devs who think GUIs are overrated.",
    stack: ["Go", "SQLite", "REST", "CLI"], github: "#", demo: "#", year: "2023",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".pcard");
    if (!cards) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateX(0)";
          }, i * 100);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    cards.forEach((c) => {
      (c as HTMLElement).style.cssText += "opacity:0;transform:translateX(-20px);transition:opacity 0.5s ease,transform 0.5s ease";
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <p className="font-fira text-[0.7rem] sm:text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-2">02 / work</p>
          <h2 className="font-syne font-extrabold tracking-tight" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", letterSpacing: "-1.5px" }}>
            Selected Projects<span className="text-[#ff3cac] animate-pulse">_</span>
          </h2>
        </div>

        <div ref={ref} className="flex flex-col gap-0" style={{ border: "2px solid #2a2a2a", boxShadow: "6px 6px 0px #ff3cac" }}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="pcard relative cursor-default transition-colors"
              style={{ background: hovered === i ? "#161616" : "#111" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                style={{ background: "linear-gradient(#ff3cac,#a855f7)", opacity: hovered === i ? 1 : 0 }} />

              <div className="px-5 sm:px-8 py-5 sm:py-7">
                {/* Top row: number + title + tag + year */}
                <div className="flex items-start gap-3 sm:gap-6 mb-3">
                  <span className="font-fira text-[0.65rem] text-[#333] mt-1.5 shrink-0 hidden sm:block">{p.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="font-syne font-extrabold text-lg sm:text-xl tracking-tight">{p.title}</h3>
                      {p.tag && (
                        <span className="font-fira text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wide px-2 py-0.5 rounded-full font-semibold bg-[rgba(255,60,172,0.15)] text-[#ff3cac] border border-[rgba(255,60,172,0.3)]">
                          {p.tag}
                        </span>
                      )}
                      <span className="font-fira text-[0.6rem] text-[#333] ml-auto">{p.year}</span>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-0">
                      {p.stack.map((s) => (
                        <span key={s} className="font-fira text-[0.6rem] sm:text-[0.65rem] text-[#444] bg-[#0d0d0d] border border-[#1e1e1e] px-2 sm:px-2.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links row — always visible on mobile */}
                <div className="flex gap-4 sm:gap-0 sm:absolute sm:right-8 sm:top-7 items-center">
                  <a href={p.github} className="font-fira text-xs text-[#444] hover:text-white transition-colors sm:block sm:mb-2">GitHub →</a>
                  <a href={p.demo} className="font-fira text-xs text-[#ff3cac] hover:underline">Demo ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
