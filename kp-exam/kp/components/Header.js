"use client";
import Link from "next/link";
import { useApp } from "@/lib/store";

export default function Header() {
  const { theme, toggleTheme } = useApp();
  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-night/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-navy dark:text-white">
          ติว ก.พ. <span className="text-gold">รายวิชา</span>
        </Link>
        <button onClick={toggleTheme} aria-label="สลับโหมดสว่าง/มืด" className="rounded-lg border border-navy/20 px-3 py-1.5 text-sm dark:border-white/20">
          {theme === "dark" ? "โหมดสว่าง" : "โหมดมืด"}
        </button>
      </div>
    </header>
  );
}
