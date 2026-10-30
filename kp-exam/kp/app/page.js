"use client";
import Link from "next/link";
import { subjectList, BUNDLE_PRICE } from "@/lib/data";
import { useApp } from "@/lib/store";

export default function Landing() {
  const { unlocked } = useApp();
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-navy p-8 text-white sm:p-12">
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl">สอบ ก.พ. แบบเลือกซื้อเฉพาะวิชาที่คุณอ่านไม่ทัน</h1>
        <p className="mt-4 max-w-xl text-white/80">
          สรุปสั้น เข้าใจง่าย มีเทคนิคจำ และข้อสอบพร้อมเฉลยที่อธิบายว่าทำไมถึงตอบข้อนี้ วิชาละ 99 บาท จ่ายครั้งเดียว
        </p>
        <Link href="/checkout/bundle" className="btn-gold mt-6">ซื้อแพ็กคู่ {BUNDLE_PRICE} บาท</Link>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        {subjectList.map((s) => (
          <article key={s.slug} className="card flex flex-col">
            <h2 className="text-xl font-bold text-navy dark:text-white">{s.title}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{s.blurb}</p>
            <ul className="mt-3 flex-1 space-y-1 text-sm text-slate-500 dark:text-slate-400">
              {s.chapters.map((c) => <li key={c.id}>บทที่ {c.id}: {c.title}</li>)}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-bold text-gold-deep dark:text-gold">{s.price}.-</span>
              {unlocked[s.slug] ? (
                <Link href={`/course/${s.slug}`} className="btn-navy">เข้าเรียน</Link>
              ) : (
                <Link href={`/checkout/${s.slug}`} className="btn-gold">ซื้อ{s.title}</Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
