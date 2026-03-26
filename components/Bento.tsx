"use client";
import { useEffect, useRef, useState } from "react";

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

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-2px)`;
    el.style.boxShadow = `${-x * 10}px ${-y * 10}px 30px rgba(255,60,172,0.08)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease", ...style }}
    >
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(to / 40);
        if (start >= to) { setVal(to); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Bento() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".bcard");
    if (!cards) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => (e.target as HTMLElement).style.cssText += "opacity:1;transform:translateY(0)", i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    cards.forEach((c) => {
      (c as HTMLElement).style.cssText += "opacity:0;transform:translateY(24px);transition:opacity 0.6s ease,transform 0.6s ease";
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-fira text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-2">01 / about</p>
          <h2 className="font-syne font-extrabold tracking-tight" style={{ fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-1.5px" }}>
            Who I Am
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-12 gap-3.5">

          {/* Bio */}
          <TiltCard className="bcard col-span-12 lg:col-span-7 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#ff3cac]/40 transition-colors cursor-default">
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">who dis</span>
            <h3 className="font-syne font-extrabold text-2xl tracking-tight mb-3">Hi, I&apos;m Ansh.</h3>
            <p className="text-[#777] text-sm leading-relaxed mb-6">
              3+ years turning coffee ☕ into code. I love clean architecture, fast APIs, and UIs that don&apos;t make users cry.
              Strong opinions about tabs vs spaces (spaces, fight me 🥊).
            </p>
            <div className="flex gap-8">
              {[["3", "+", "yrs exp"], ["20", "+", "projects"], ["0", "*", "bugs in prod"]].map(([n, s, l]) => (
                <div key={l}>
                  <div className="font-syne font-extrabold text-3xl gradient-text leading-none">
                    <CountUp to={parseInt(n)} suffix={s} />
                  </div>
                  <div className="font-fira text-[0.65rem] text-[#555] uppercase tracking-wide mt-1">{l}</div>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Vibe */}
          <TiltCard className="bcard col-span-12 lg:col-span-5 bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#a855f7]/30 transition-colors cursor-default">
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">current vibe</span>
            <div className="flex flex-col gap-2">
              {["🎧 coding playlist: lo-fi beats","☕ fuel: oat milk latte","📍 location: earth (remote)","🛠 building: something cool"].map((v) => (
                <div key={v} className="bg-[#141414] border border-[#232323] rounded-xl px-4 py-3 text-sm text-[#aaa] hover:border-[#ff3cac]/50 hover:text-white transition-all cursor-default">{v}</div>
              ))}
            </div>
          </TiltCard>

          {/* Stack */}
          <TiltCard className="bcard col-span-12 lg:col-span-8 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#3b82f6]/30 transition-colors cursor-default">
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">tech stack</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s.label} className="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-default transition-transform hover:scale-110 hover:-rotate-1"
                  style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
                  {s.label}
                </span>
              ))}
            </div>
          </TiltCard>

          {/* Fact */}
          <TiltCard className="bcard col-span-12 lg:col-span-4 rounded-2xl p-7 cursor-default"
            style={{ background: "linear-gradient(135deg,rgba(255,60,172,0.08),rgba(168,85,247,0.08))", border: "1px solid rgba(255,60,172,0.2)" }}>
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">fun fact</span>
            <p className="text-sm leading-relaxed italic text-[#ccc]">
              &ldquo;I once fixed a production bug at 2am in my pajamas. The client never knew. That&apos;s the job.&rdquo; 💀
            </p>
          </TiltCard>

          {/* Metrics */}
          <TiltCard className="bcard col-span-12 lg:col-span-6 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#f9f002]/20 transition-colors cursor-default">
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">by the numbers</span>
            <div className="flex gap-8 flex-wrap">
              {[["99", "%", "uptime goal"], ["100", "ms", "API response"], ["10000", "+req/s", "handled"]].map(([n, s, l]) => (
                <div key={l}>
                  <div className="font-syne font-extrabold text-4xl text-[#f9f002] leading-none tracking-tight">
                    <CountUp to={parseInt(n)} suffix={s} />
                  </div>
                  <div className="font-fira text-[0.65rem] text-[#555] uppercase tracking-wide mt-1">{l}</div>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Socials */}
          <TiltCard className="bcard col-span-12 lg:col-span-6 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#39ff14]/20 transition-colors cursor-default">
            <span className="font-fira text-[0.65rem] text-[#888] uppercase tracking-widest bg-[#1a1a1a] px-2.5 py-1 rounded-full mb-4 inline-block">find me</span>
            <div className="flex flex-col gap-2">
              {[
                { label: "github.com/anshc022", href: "https://github.com/anshc022", icon: "⌥" },
                { label: "linkedin.com/in/ansh", href: "#", icon: "in" },
                { label: "ansh@example.com", href: "mailto:ansh@example.com", icon: "✉" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-[#232323] rounded-xl text-sm font-medium text-[#888] hover:border-[#ff3cac]/50 hover:text-white hover:translate-x-1 transition-all">
                  <span className="w-8 h-8 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-xs font-bold shrink-0">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
