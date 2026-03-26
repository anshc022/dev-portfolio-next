"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    if (ref.current) {
      ref.current.style.cssText += "opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease";
      obs.observe(ref.current);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-syne font-extrabold text-[clamp(6rem,20vw,18rem)] text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p className="font-fira text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-4">03 / contact</p>

        <h2
          className="font-syne font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-3px" }}
        >
          Let&apos;s build<br />
          something{" "}
          <em className="not-italic" style={{ WebkitTextStroke: "2px #ff3cac", color: "transparent" }}>wild.</em>
        </h2>

        <p className="text-[#666] text-lg leading-relaxed mb-12 max-w-md">
          Got a project idea? Want to collab? Or just want to argue about whether tabs or spaces are better?
          Hit me up. 📩
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="mailto:ansh@example.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff3cac] text-white font-semibold text-sm hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,60,172,0.4)] transition-all">
            <span>ansh@example.com</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://github.com/anshc022" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#2a2a2a] text-white font-semibold text-sm hover:border-[#ff3cac] hover:text-[#ff3cac] transition-all">
            GitHub ↗
          </a>
          <a href="#" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#2a2a2a] text-white font-semibold text-sm hover:border-[#ff3cac] hover:text-[#ff3cac] transition-all">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
