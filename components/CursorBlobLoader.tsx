"use client";
import dynamic from "next/dynamic";
const CursorBlob = dynamic(() => import("./CursorBlob"), { ssr: false });
export default function CursorBlobLoader() { return <CursorBlob />; }
