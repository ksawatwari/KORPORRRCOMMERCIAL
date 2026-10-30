"use client";
import Link from "next/link";
import { subjectList, BUNDLE_PRICE, BUNDLE_ORIGINAL } from "@/lib/data";
import { useApp } from "@/lib/store";
import Price from "@/components/Price";
import GirlHero from "@/components/GirlHero";

const features = [
  { t: "สรุปสั้น อ่านจบในบทเดียว", d: "ตัดส่วนที่ไม่ออกสอบ เหลือเฉพาะประเด็นที่ต้องจำ อ่านบนมือถือได้สบาย" },
  { t: "เทคนิคจำง่าย (Mnemonic)", d: "ทุกบทมีวิธีจำสั้นๆ ให้ติดหัวโดยไม่ต้องท่องซ้ำหลายรอบ" },
  { t: "ข้อสอบพร้อมเฉลยละเอียด", d: "ไม่ได้บอกแค่ข้อไหนถูก แต่อธิบายว่าทำไมถึงตอบข้อนั้น" },
  { t: "ติดตามความคืบหน้า", d: "เห็นชัดว่าอ่านไปกี่บทแล้ว เหลืออีกเท่าไรก่อนวันสอบ" },
];

const steps = [
  { t: "เลือกวิชาที่ต้องการ", d: "ลองอ่านตัวอย่างบทแรกฟรีก่อนตัดสินใจ" },
  { t: "ชำระวิชาละ 99 บาท", d: "ซื้อเฉพาะวิชาที่ต้องการ หรือซื้อแพ็กคู่ให้คุ้มกว่า" },
  { t: "อ่านสรุป ทำข้อสอบ", d: "ไล่ทีละบท ทำเครื่องหมายว่าอ่านแล้ว แล้วดูแถบความคืบหน้าขยับ" },
];

const faqs = [
  { q: "ตัวอย่างเนื้อหาให้อ่านได้แค่ไหน?", a: "บทแรกของแต่ละวิชาเปิดให้ดูฟรีบางส่วน ส่วนที่เหลือจะปลดล็อกเมื่อซื้อวิชานั้น" },
  { q: "อ่านบนมือถือได้ไหม?", a: "ได้ ออกแบบให้อ่านบนมือถือและแท็บเล็ตเป็นหลัก และมีโหมดมืดสำหรับอ่านตอนกลางคืน" },
  { q: "เนื้อหากฎหมายเป็นฉบับล่าสุดหรือไม่?", a: "เราสรุปเพื่อเตรียมสอบ แต่กฎหมายแก้ไขได้เสมอ ควรเช็กตัวบทฉบับล่าสุดก่อนสอบอีกครั้ง" },
  { q: "ซื้อทีละวิชาหรือแพ็กคู่ดีกว่า?", a: `ถ้าอ่านครบทั้งสองวิชา แพ็กคู่ ${BUNDLE_PRICE} บาท ถูกกว่าซื้อแยก 2 วิชา (${99 * 2} บาท) อยู่ ${99 * 2 - BUNDLE_PRICE} บาท` },
];

export default function Landing() {
  const { unlocked } = useApp();
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Hero */}
      <section className="grid items-center gap-8 rounded-3xl bg-navy p-6 text-white sm:p-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-sm font-bold text-navy-deep">โปรโมชันราคาพิเศษ</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">เลือกซื้อเฉพาะวิชา ที่คุณยังอ่านไม่ทัน</h1>
          <p className="mt-4 max-w-md text-white/80">
            ภาษาอังกฤษและกฎหมาย สรุปเป็นภาษาคน มีเทคนิคจำ และข้อสอบที่อธิบายว่าทำไมถึงตอบข้อนี้
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#pricing" className="btn-gold">ดูราคาและโปรโมชัน</Link>
            <Link href="/preview/english" className="btn border border-white/30 hover:bg-white/10">อ่านตัวอย่างฟรี</Link>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <GirlHero />
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="max-w-xl text-2xl font-bold text-navy sm:text-3xl dark:text-white">อ่านน้อยลง แต่จำได้ตรงจุดที่ออกสอบ</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="card">
              <h3 className="font-bold text-navy dark:text-white">{f.t}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl dark:text-white">คอร์สเรียน</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {subjectList.map((s) => (
            <article key={s.slug} className="card flex flex-col">
              <h3 className="text-xl font-bold text-navy dark:text-white">{s.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{s.blurb}</p>
              <ul className="mt-3 flex-1 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                {s.chapters.map((c) => <li key={c.id}>บทที่ {c.id}: {c.title}</li>)}
              </ul>
              <div className="mt-5"><Price original={s.originalPrice} price={s.price} /></div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Link href={`/preview/${s.slug}`} className="btn-navy">ตัวอย่างเนื้อหา</Link>
                {unlocked[s.slug] ? (
                  <Link href={`/course/${s.slug}`} className="btn-gold">เข้าเรียน</Link>
                ) : (
                  <Link href={`/checkout/${s.slug}`} className="btn-gold">ซื้อวิชานี้</Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl dark:text-white">เริ่มเรียนใน 3 ขั้นตอน</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="card">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-bold text-navy-deep">{i + 1}</span>
              <h3 className="mt-3 font-bold text-navy dark:text-white">{s.t}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl dark:text-white">ราคาโปรโมชัน จ่ายครั้งเดียว</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {subjectList.map((s) => (
            <div key={s.slug} className="card flex flex-col">
              <h3 className="font-bold">{s.title}</h3>
              <div className="my-3"><Price original={s.originalPrice} price={s.price} /></div>
              <p className="flex-1 text-sm text-slate-500 dark:text-slate-400">{s.chapters.length} บท พร้อมข้อสอบและเฉลย</p>
              <Link href={`/checkout/${s.slug}`} className="btn-navy mt-4">ซื้อวิชานี้</Link>
            </div>
          ))}
          <div className="relative flex flex-col rounded-2xl border-2 border-gold bg-white p-5 dark:bg-navy-deep">
            <span className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-0.5 text-sm font-bold text-navy-deep">คุ้มที่สุด</span>
            <h3 className="font-bold">แพ็กคู่ ครบทั้งสองวิชา</h3>
            <div className="my-3"><Price original={BUNDLE_ORIGINAL} price={BUNDLE_PRICE} /></div>
            <p className="flex-1 text-sm text-slate-500 dark:text-slate-400">ถูกกว่าซื้อแยกอีก {99 * 2 - BUNDLE_PRICE} บาท</p>
            <Link href="/checkout/bundle" className="btn-gold mt-4">ซื้อแพ็กคู่</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl dark:text-white">คำถามที่พบบ่อย</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl bg-navy p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">ลองอ่านบทแรกก่อน แล้วค่อยตัดสินใจ</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/preview/english" className="btn-gold">ตัวอย่างวิชาภาษาอังกฤษ</Link>
          <Link href="/preview/law" className="btn border border-white/30 hover:bg-white/10">ตัวอย่างวิชากฎหมาย</Link>
        </div>
      </section>
    </div>
  );
}
