"use client";
import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-4 py-2.5 rounded-full border transition-all duration-500 ${
        scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-2xl border-[#333]" : "bg-[#141414]/60 backdrop-blur-xl border-[#222]"
      }`}>
        <span className="font-syne font-extrabold text-sm tracking-tight whitespace-nowrap">
          <ScrambleText text="ansh" /><span className="text-[#ff3cac]">.</span>dev
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-0.5">
          {[["about","#about"],["work","#work"],["contact","#contact"]].map(([label, href]) => (
            <a key={href} href={href}
              className="font-fira text-[0.75rem] text-[#666] px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>

        {/* Status — hidden on very small screens */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse shrink-0" />
          <span className="font-fira text-[0.7rem] text-[#39ff14] whitespace-nowrap">open to work</span>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0d0d0d]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 sm:hidden" onClick={close}>
          {[["about","#about"],["work","#work"],["contact","#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={close}
              className="font-syne font-extrabold text-4xl text-white hover:text-[#ff3cac] transition-colors">
              {label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
            <span className="font-fira text-sm text-[#39ff14]">open to work</span>
          </div>
        </div>
      )}
    </>
  );
}
