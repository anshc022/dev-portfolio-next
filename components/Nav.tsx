"use client";
import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-5 px-5 py-2.5 rounded-full border transition-all duration-500 whitespace-nowrap ${
      scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-2xl border-[#333]" : "bg-[#141414]/60 backdrop-blur-xl border-[#222]"
    }`}>
      <span className="font-syne font-extrabold text-sm tracking-tight">
        <ScrambleText text="ansh" /><span className="text-[#ff3cac]">.</span>dev
      </span>

      <div className="flex gap-0.5">
        {[["about","#about"],["work","#work"],["contact","#contact"]].map(([label, href]) => (
          <a key={href} href={href}
            className="font-fira text-[0.75rem] text-[#666] px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
        <span className="font-fira text-[0.7rem] text-[#39ff14]">open to work</span>
      </div>
    </nav>
  );
}
