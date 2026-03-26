"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16 px-10"
      style={{ maxWidth: "55vw" }}
    >
      {/* Floating tags */}
      <div className="absolute top-[22%] left-[8%] bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-2 text-xs font-semibold text-[#22d3ee] animate-bounce hidden lg:block">
        React ⚛
      </div>
      <div className="absolute top-[40%] right-[-30%] bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-2 text-xs font-semibold text-[#39ff14] animate-bounce hidden lg:block" style={{ animationDelay: "0.5s" }}>
        Node.js 🟢
      </div>
      <div className="absolute bottom-[28%] left-[10%] bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-2 text-xs font-semibold text-[#3b82f6] animate-bounce hidden lg:block" style={{ animationDelay: "1s" }}>
        TypeScript 💙
      </div>

      <div className="relative z-10 max-w-xl">
        <p className="text-xs tracking-[3px] uppercase text-[#888] mb-6">✦ software engineer ✦</p>

        <h1 className="font-syne font-extrabold leading-none tracking-tight mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", letterSpacing: "-3px" }}>
          I build stuff<br />
          that{" "}
          <em className="text-[#ff3cac] not-italic">actually</em>
          <br />
          <span
            className="not-italic"
            style={{ WebkitTextStroke: "2px #f9f002", color: "transparent" }}
          >
            works.
          </span>
        </h1>

        <p className="text-[#888] text-base leading-relaxed mb-10">
          not just &ldquo;it works on my machine&rdquo; works.<br />
          like,{" "}
          <strong className="text-white">production works.</strong> 🚀
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#work"
            className="px-7 py-3 rounded-full bg-[#ff3cac] text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,60,172,0.5)]"
          >
            see my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-[#2a2a2a] text-white font-semibold text-sm transition-all hover:border-[#ff3cac] hover:text-[#ff3cac]"
          >
            let&apos;s collab
          </a>
        </div>
      </div>
    </section>
  );
}
