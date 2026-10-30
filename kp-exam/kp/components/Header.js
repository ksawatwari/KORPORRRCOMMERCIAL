"use client";
import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/lib/store";

const links = [
  { href: "/#courses", label: "คอร์สเรียน" },
  { href: "/#how", label: "วิธีเรียน" },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#faq", label: "คำถามที่พบบ่อย" },
];

export default function Header() {
  const { theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-night/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-navy dark:text-white">
          ติว ก.พ. <span className="text-gold">รายวิชา</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="เมนูหลัก">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-600 hover:text-navy dark:text-slate-300 dark:hover:text-white">{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="สลับโหมดสว่าง/มืด" className="rounded-lg border border-navy/20 px-3 py-1.5 text-sm dark:border-white/20">
            {theme === "dark" ? "สว่าง" : "มืด"}
          </button>
          <Link href="/checkout/bundle" className="btn-gold hidden !px-4 !py-2 text-sm sm:inline-flex">ซื้อแพ็กคู่</Link>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="เปิดเมนู" className="rounded-lg border border-navy/20 p-2 md:hidden dark:border-white/20">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-navy/10 px-4 py-3 md:hidden dark:border-white/10" aria-label="เมนูมือถือ">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-navy-soft dark:hover:bg-white/10">{l.label}</Link></li>
            ))}
            <li><Link href="/checkout/bundle" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">ซื้อแพ็กคู่</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
