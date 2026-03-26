"use client";
import dynamic from "next/dynamic";
const NoiseBg = dynamic(() => import("./NoiseBg"), { ssr: false });
export default function NoiseBgLoader() { return <NoiseBg />; }
