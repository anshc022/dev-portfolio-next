"use client";
import { useEffect, useRef } from "react";
import ScrambleText from "./ScrambleText";

const ticker = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Next.js", "Redis", "AWS", "GraphQL", "Go", "Kubernetes"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section ref={ref} id="home" className="min-h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-0 overflow-hidden">

      {/* Main content */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse shrink-0" />
          <span className="font-fira text-[0.65rem] sm:text-xs text-[#39ff14] tracking-widest uppercase">available for work</span>
        </div>

        <h1
          className="font-syne font-extrabold leading-[0.92] mb-6 sm:mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)", letterSpacing: "clamp(-2px, -0.04em, -4px)" }}
        >
          I build<br />
          stuff that<br />
          <span style={{ WebkitTextStroke: "2px #f9f002", color: "transparent" }}>
            <ScrambleText text="actually" />
          </span>{" "}
          <span className="text-[#ff3cac]">works.</span>
        </h1>

        <div className="flex flex-col gap-5 sm:gap-8 mb-10 sm:mb-16">
          <p className="text-[#888] text-base sm:text-lg leading-relaxed max-w-sm">
            Full-stack engineer. 3+ years. Ships things people actually use — not just localhost:3000.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#work"
              className="group relative px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#ff3cac] text-white font-semibold text-sm overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,60,172,0.4)]"
            >
              <span className="relative z-10">see my work →</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#2a2a2a] text-white font-semibold text-sm hover:border-[#ff3cac] hover:text-[#ff3cac] transition-all"
            >
              let&apos;s talk
            </a>
          </div>
        </div>

        {/* Stats row — 2x2 on mobile, 4 across on desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-10 mb-12 sm:mb-16">
          {[["3+", "years exp"], ["20+", "projects shipped"], ["10k+", "req/sec handled"], ["0", "bugs* in prod"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-syne font-extrabold text-3xl sm:text-4xl gradient-text leading-none">{n}</div>
              <div className="font-fira text-[0.65rem] sm:text-[0.7rem] text-[#555] mt-1 uppercase tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative border-t border-b border-[#1e1e1e] py-3 sm:py-4 overflow-hidden bg-[#0a0a0a]/50">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 font-fira text-[0.65rem] sm:text-xs text-[#444] uppercase tracking-widest">
              {t}
              <span className="text-[#ff3cac]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
