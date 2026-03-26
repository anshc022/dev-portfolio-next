"use client";
import { useEffect, useRef } from "react";

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -200, y: -200 });
  const blob    = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      blob.current.x = lerp(blob.current.x, pos.current.x, 0.07);
      blob.current.y = lerp(blob.current.y, pos.current.y, 0.07);
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${blob.current.x}px, ${blob.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large slow blob */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed top-0 left-0 z-[1] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,60,172,0.09) 0%, transparent 70%)", filter: "blur(0px)" }}
      />
      {/* Small crisp dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }}
      />
    </>
  );
}
