"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(interval.current!);
    interval.current = setInterval(() => {
      setDisplay(
        text.split("").map((char, idx) => {
          if (char === " ") return " ";
          if (idx < iteration) return text[idx];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval.current!);
      iteration += 0.5;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(interval.current!);
  }, [text]);

  return (
    <span className={className} onMouseEnter={scramble} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
    </span>
  );
}
