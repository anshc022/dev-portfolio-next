"use client";
import { useEffect, useRef } from "react";

export default function NoiseBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = canvas.width  = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const onResize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Animated gradient orbs
    const orbs = [
      { x: 0.25, y: 0.3,  r: 0.35, color: "rgba(255,60,172,0.07)",  vx: 0.00015, vy: 0.0001  },
      { x: 0.75, y: 0.65, r: 0.3,  color: "rgba(168,85,247,0.06)",  vx: -0.00012, vy: 0.00008 },
      { x: 0.5,  y: 0.8,  r: 0.25, color: "rgba(59,130,246,0.05)",  vx: 0.0001,  vy: -0.00015 },
    ];

    let frame = 0;
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < 0.1 || o.x > 0.9) o.vx *= -1;
        if (o.y < 0.1 || o.y > 0.9) o.vy *= -1;
        const grd = ctx.createRadialGradient(o.x*w, o.y*h, 0, o.x*w, o.y*h, o.r*Math.max(w,h));
        grd.addColorStop(0, o.color);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      });

      // Subtle grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      const gs = 60;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      frame++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
