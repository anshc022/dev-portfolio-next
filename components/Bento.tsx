"use client";
import { useEffect, useRef } from "react";

const skills = [
  { label: "React",       color: "#ff3cac", bg: "rgba(255,60,172,0.12)",  border: "rgba(255,60,172,0.3)" },
  { label: "TypeScript",  color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.3)" },
  { label: "Node.js",     color: "#f9f002", bg: "rgba(249,240,2,0.1)",    border: "rgba(249,240,2,0.25)" },
  { label: "Python",      color: "#39ff14", bg: "rgba(57,255,20,0.1)",    border: "rgba(57,255,20,0.25)" },
  { label: "PostgreSQL",  color: "#ff6b35", bg: "rgba(255,107,53,0.12)",  border: "rgba(255,107,53,0.3)" },
  { label: "Docker",      color: "#a855f7", bg: "rgba(168,85,247,0.12)",  border: "rgba(168,85,247,0.3)" },
  { label: "Next.js",     color: "#ff3cac", bg: "rgba(255,60,172,0.12)",  border: "rgba(255,60,172,0.3)" },
  { label: "Redis",       color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.3)" },
  { label: "AWS",         color: "#f9f002", bg: "rgba(249,240,2,0.1)",    border: "rgba(249,240,2,0.25)" },
  { label: "FastAPI",     color: "#39ff14", bg: "rgba(57,255,20,0.1)",    border: "rgba(57,255,20,0.25)" },
  { label: "GraphQL",     color: "#ff6b35", bg: "rgba(255,107,53,0.12)",  border: "rgba(255,107,53,0.3)" },
  { label: "Kubernetes",  color: "#a855f7", bg: "rgba(168,85,247,0.12)",  border: "rgba(168,85,247,0.3)" },
];

const vibes = [
  "🎧 coding playlist: lo-fi beats",
  "☕ fuel: oat milk latte",
  "📍 location: earth (remote)",
  "🛠 building: something cool",
];

const socials = [
  { label: "github.com/anshc022", href: "https://github.com/anshc022", icon: "⌥" },
  { label: "linkedin.com/in/ansh", href: "#", icon: "in" },
  { label: "ansh@example.com", href: "mailto:ansh@example.com", icon: "✉" },
];

export default function Bento() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".bcard");
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 60);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    cards.forEach((c) => { c.classList.add("reveal"); obs.observe(c); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-3.5">

          {/* Bio */}
          <div className="bcard col-span-12 lg:col-span-7 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all">
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">who dis</span>
            <h2 className="font-syne font-extrabold text-3xl tracking-tight mb-3">Hi, I&apos;m Ansh.</h2>
            <p className="text-[#888] text-sm leading-relaxed mb-5">
              3+ years turning coffee ☕ into code. I love clean architecture, fast APIs, and UIs that don&apos;t make users cry.
              Also I have strong opinions about tabs vs spaces (spaces, fight me).
            </p>
            <div className="flex gap-6 mb-2">
              {[["3+", "yrs exp"], ["20+", "projects"], ["0", "bugs*"]].map(([n, l]) => (
                <div key={l}>
                  <span className="block font-syne font-extrabold text-3xl gradient-text">{n}</span>
                  <span className="text-[0.7rem] text-[#888] uppercase tracking-wide">{l}</span>
                </div>
              ))}
            </div>
            <p className="text-[0.7rem] text-[#444] italic">*in production. probably.</p>
          </div>

          {/* Vibe */}
          <div className="bcard col-span-12 lg:col-span-5 bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all">
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">current vibe</span>
            <div className="flex flex-col gap-2.5">
              {vibes.map((v) => (
                <div key={v} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3.5 py-2.5 text-sm hover:border-[#ff3cac] transition-colors">
                  {v}
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="bcard col-span-12 lg:col-span-8 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all">
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">tech stack</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-default hover:scale-105 hover:-rotate-1 transition-transform"
                  style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Fact */}
          <div className="bcard col-span-12 lg:col-span-4 rounded-2xl p-7 hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg,rgba(255,60,172,0.08),rgba(168,85,247,0.08))", border: "1px solid rgba(255,60,172,0.2)" }}>
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">fun fact</span>
            <p className="text-sm leading-relaxed italic">
              &ldquo;I once fixed a production bug at 2am in my pajamas. The client never knew. That&apos;s the job.&rdquo; 💀
            </p>
          </div>

          {/* Metrics */}
          <div className="bcard col-span-12 lg:col-span-7 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all">
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">by the numbers</span>
            <div className="flex gap-8 flex-wrap">
              {[["99%", "uptime goal"], ["<100ms", "API response"], ["10k+", "req/sec handled"]].map(([n, l]) => (
                <div key={l}>
                  <span className="block font-syne font-extrabold text-4xl text-[#f9f002] tracking-tight">{n}</span>
                  <span className="text-[0.7rem] text-[#888] uppercase tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="bcard col-span-12 lg:col-span-5 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3a3a3a] hover:-translate-y-0.5 transition-all">
            <span className="font-fira text-[0.7rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">find me</span>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-sm font-medium text-[#888] hover:border-[#ff3cac] hover:text-white hover:translate-x-1 transition-all"
                >
                  <span className="w-8 h-8 bg-[#141414] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
