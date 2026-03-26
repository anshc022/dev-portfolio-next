"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap ${
        scrolled
          ? "bg-[#141414]/95 backdrop-blur-xl border-[#3a3a3a]"
          : "bg-[#141414]/80 backdrop-blur-xl border-[#2a2a2a]"
      }`}
    >
      <span className="font-syne font-extrabold text-base tracking-tight">
        ansh<span className="text-[#ff3cac]">.</span>dev
      </span>

      <div className="flex gap-1">
        {["about", "work", "contact"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className="text-xs font-medium text-[#888] px-3 py-1.5 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            {s}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-[#39ff14]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
        open to work
      </div>
    </nav>
  );
}
