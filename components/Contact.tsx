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
    }, { threshold: 0.15 });
    if (ref.current) {
      ref.current.style.cssText += "opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease";
      obs.observe(ref.current);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-syne font-extrabold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 20vw, 18rem)" }}>
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <p className="font-fira text-[0.7rem] sm:text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-4">03 / contact</p>

        <h2
          className="font-syne font-extrabold leading-none tracking-tight mb-5 sm:mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", letterSpacing: "clamp(-2px, -0.04em, -3px)" }}
        >
          Let&apos;s build<br />
          something{" "}
          <em className="not-italic" style={{ WebkitTextStroke: "2px #ff3cac", color: "transparent" }}>wild.</em>
        </h2>

        <p className="text-[#666] text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-md">
          Got a project idea? Want to collab? Or just want to argue about tabs vs spaces?
          Hit me up. 📩
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {[
            { href: "mailto:ansh@example.com", label: "ansh@example.com →", bg: "#ff3cac", color: "#fff", shadow: "#fff" },
            { href: "https://github.com/anshc022", label: "GitHub ↗", bg: "#f9f002", color: "#000", shadow: "#ff3cac" },
            { href: "#", label: "LinkedIn ↗", bg: "#0d0d0d", color: "#fff", shadow: "#a855f7" },
          ].map((b) => (
            <a key={b.label} href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="flex items-center justify-center px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-wide transition-all"
              style={{ background: b.bg, color: b.color, border: "2px solid #fff", boxShadow: `4px 4px 0px ${b.shadow}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(2px,2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `2px 2px 0px ${b.shadow}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0px ${b.shadow}`; }}
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
