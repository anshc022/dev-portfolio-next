export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-6 sm:py-7">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-[0.7rem] sm:text-xs text-[#555] text-center sm:text-left">
        <span>ansh<b className="text-[#ff3cac]">.</b>dev — 2024</span>
        <span>made with ❤️ and too much coffee</span>
        <span className="hidden sm:block">no AI was harmed<span className="italic text-[#333]"> *heavily used</span></span>
      </div>
    </footer>
  );
}
