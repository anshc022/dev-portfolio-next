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

      <div className="px-5 sm:px-8 md:px-16 lg:px-24 w-full max-w-4xl">

        {/* Neo-brutal status badge */}
        <div className="inline-flex items-center gap-2 mb-7 sm:mb-8 px-4 py-2 bg-[#39ff14] text-black font-fira font-bold text-[0.7rem] uppercase tracking-widest"
          style={{ border: "2px solid #fff", boxShadow: "3px 3px 0px #fff" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse shrink-0" />
          available for work
        </div>

        <h1
          className="font-syne font-extrabold leading-[0.92] mb-7 sm:mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)", letterSpacing: "clamp(-2px, -0.04em, -4px)" }}
        >
          I build<br />
          stuff that<br />
          <span style={{ WebkitTextStroke: "2px #f9f002", color: "transparent" }}>
            <ScrambleText text="actually" />
          </span>{" "}
          <span className="text-[#ff3cac]">works.</span>
        </h1>

        <p className="text-[#888] text-base sm:text-lg leading-relaxed max-w-sm mb-7 sm:mb-8">
          Full-stack engineer. 3+ years. Ships things people actually use — not just localhost:3000.
        </p>

        {/* Neo-brutal buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap mb-10 sm:mb-14">
          <a href="#work"
            className="group px-6 sm:px-7 py-3 sm:py-3.5 bg-[#ff3cac] text-white font-bold text-sm uppercase tracking-wide transition-all active:translate-x-[3px] active:translate-y-[3px]"
            style={{ border: "2px solid #fff", boxShadow: "4px 4px 0px #fff" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(2px,2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "2px 2px 0px #fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #fff"; }}
          >
            see my work →
          </a>
          <a href="#contact"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent text-white font-bold text-sm uppercase tracking-wide transition-all"
            style={{ border: "2px solid #fff", boxShadow: "4px 4px 0px #ff3cac" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(2px,2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "2px 2px 0px #ff3cac"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #ff3cac"; }}
          >
            let&apos;s talk
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-0 mb-12 sm:mb-16">
          {[["3+", "years exp", "#ff3cac"], ["20+", "projects shipped", "#f9f002"], ["10k+", "req/sec handled", "#39ff14"], ["0", "bugs* in prod", "#a855f7"]].map(([n, l, c]) => (
            <div key={l} className="px-4 sm:px-6 py-3 sm:border-r border-[#222] last:border-r-0 first:pl-0">
              <div className="font-syne font-extrabold text-2xl sm:text-3xl leading-none" style={{ color: c as string }}>{n}</div>
              <div className="font-fira text-[0.6rem] text-[#555] mt-1 uppercase tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative py-3 sm:py-4 overflow-hidden" style={{ borderTop: "2px solid #1e1e1e", borderBottom: "2px solid #1e1e1e", background: "rgba(0,0,0,0.5)" }}>
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 font-fira text-[0.65rem] sm:text-xs text-[#444] uppercase tracking-widest">
              {t}<span className="text-[#ff3cac]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
