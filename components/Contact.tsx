export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-lg">
          <p className="font-fira text-[0.75rem] text-[#ff3cac] uppercase tracking-[2px] mb-3">don&apos;t be shy</p>
          <h2
            className="font-syne font-extrabold leading-none tracking-tight mb-5"
            style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", letterSpacing: "-1.5px" }}
          >
            Let&apos;s build<br />
            something{" "}
            <em className="text-[#ff3cac] not-italic">wild.</em>
          </h2>
          <p className="text-[#888] text-base leading-relaxed mb-8">
            Got a project? A collab idea? Just want to talk about why async/await is beautiful? I&apos;m in. 📩
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ansh@example.com"
              className="px-8 py-4 rounded-full bg-[#ff3cac] text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,60,172,0.5)] transition-all"
            >
              ansh@example.com
            </a>
            <a
              href="https://github.com/anshc022"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-[#2a2a2a] text-white font-semibold hover:border-[#ff3cac] hover:text-[#ff3cac] transition-all"
            >
              GitHub ↗
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-[#2a2a2a] text-white font-semibold hover:border-[#ff3cac] hover:text-[#ff3cac] transition-all"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
