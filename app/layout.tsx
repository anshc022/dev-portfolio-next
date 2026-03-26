import type { Metadata } from "next";
import { Inter, Syne, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: "Ansh — Software Engineer",
  description: "Full-stack software engineer who builds stuff that actually works.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
