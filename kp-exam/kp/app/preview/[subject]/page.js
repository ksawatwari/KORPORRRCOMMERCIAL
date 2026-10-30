"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { subjects } from "@/lib/data";
import { useApp } from "@/lib/store";
import LockIcon from "@/components/LockIcon";

const layers = [
  { blur: 2, from: 0, to: 35 },
  { blur: 5, from: 25, to: 60 },
  { blur: 10, from: 50, to: 85 },
];
const mask = (f, t) => `linear-gradient(to bottom, transparent ${f}%, #000 ${t}%)`;

export default function Preview() {
  const { subject } = useParams();
  const s = subjects[subject];
  const { unlocked, ready } = useApp();
  if (!s) return <p>ไม่พบวิชานี้</p>;
  const c = s.chapters[0];
  const open = ready && unlocked[subject];

  return (
    <article className="mx-auto max-w-2xl space-y-5">
      <Link href="/#courses" className="text-sm underline">กลับหน้าแรก</Link>
      <p className="text-sm text-slate-500">ตัวอย่างเนื้อหา • {s.title}</p>
      <h1 className="text-2xl font-bold text-navy dark:text-white">บทที่ {c.id}: {c.title}</h1>

      <div className="relative">
        <div className={`space-y-3 ${open ? "" : "max-h-[560px] select-none overflow-hidden"}`}>
          {c.cheat.map((x, i) => (
            <div key={i} className="card space-y-2">
              <h2 className="font-semibold">{x.h}</h2>
              {x.en && <pre className="en whitespace-pre-wrap rounded-lg bg-navy-soft p-3 dark:bg-white/10">{x.en}</pre>}
              <p className="whitespace-pre-line">{x.body}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-gold/20 p-4"><b>เทคนิคจำ:</b> {c.mnemonic}</div>
          {c.questions.map((q, i) => (
            <div key={i} className="card space-y-2" aria-hidden={!open}>
              <p className="whitespace-pre-line font-medium">{q.q}</p>
              {q.choices.map((ch, j) => <p key={j} className="rounded-xl border border-navy/15 px-4 py-2 dark:border-white/15">{String.fromCharCode(65 + j)}. {ch}</p>)}
              <p className="rounded-xl bg-navy-soft p-3 text-sm dark:bg-white/10"><b>เฉลย:</b> {q.why}</p>
            </div>
          ))}
        </div>

        {!open && (
          <div className="absolute inset-x-0 bottom-0 h-[75%]">
            {layers.map((l) => (
              <div key={l.blur} className="absolute inset-0" style={{
                backdropFilter: `blur(${l.blur}px)`, WebkitBackdropFilter: `blur(${l.blur}px)`,
                maskImage: mask(l.from, l.to), WebkitMaskImage: mask(l.from, l.to),
              }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/60 to-paper dark:via-night/60 dark:to-night" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-6 text-center">
              <span className="text-gold-deep dark:text-gold"><LockIcon /></span>
              <p className="mt-2 text-lg font-bold text-navy dark:text-white">ปลดล็อกเพื่ออ่านต่อ</p>
              <p className="mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-300">
                อ่านครบทุกบทของ{s.title} พร้อมข้อสอบและเฉลยละเอียด เพียง {s.price} บาท
              </p>
              <Link href={`/checkout/${s.slug}`} className="btn-gold mt-4">ปลดล็อก {s.price}.-</Link>
            </div>
          </div>
        )}
      </div>

      {open && <Link href={`/course/${s.slug}`} className="btn-gold">เข้าเรียนฉบับเต็ม</Link>}
    </article>
  );
}
