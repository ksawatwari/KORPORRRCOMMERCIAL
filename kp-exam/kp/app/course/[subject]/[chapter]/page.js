"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { subjects } from "@/lib/data";
import { useApp } from "@/lib/store";

const hasThai = (t) => /[\u0E00-\u0E7F]/.test(t);

function Quiz({ q }) {
  const [pick, setPick] = useState(null);
  const en = !hasThai(q.q);
  return (
    <div className="card space-y-3">
      <p className={`whitespace-pre-line font-medium ${en ? "en" : ""}`}>{q.q}</p>
      <div className="grid gap-2">
        {q.choices.map((c, i) => {
          const chosen = pick === i;
          const right = pick !== null && i === q.answer;
          return (
            <button key={i} disabled={pick !== null} onClick={() => setPick(i)}
              className={`rounded-xl border px-4 py-3 text-left transition ${en ? "en" : ""} ${right ? "border-green-600 bg-green-50 text-green-900 dark:bg-green-900/30 dark:text-green-100" : chosen ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-100" : "border-navy/15 dark:border-white/15"}`}>
              {String.fromCharCode(65 + i)}. {c}
            </button>
          );
        })}
      </div>
      {pick !== null && (
        <p className="rounded-xl bg-navy-soft p-4 text-sm text-navy-deep dark:bg-white/10 dark:text-slate-100">
          <b>{pick === q.answer ? "ถูกต้อง" : `เฉลย: ข้อ ${String.fromCharCode(65 + q.answer)}`}</b> {q.why}
        </p>
      )}
    </div>
  );
}

export default function Lesson() {
  const { subject, chapter } = useParams();
  const s = subjects[subject];
  const idx = s ? s.chapters.findIndex((c) => c.id === chapter) : -1;
  const { unlocked, done, toggleDone, ready } = useApp();
  if (!s || idx < 0) return <p>ไม่พบบทเรียน</p>;
  if (!ready) return null;
  if (!unlocked[subject])
    return <div className="card">บทนี้ยังล็อกอยู่ <Link className="font-semibold text-gold-deep underline" href={`/checkout/${subject}`}>ปลดล็อกวิชานี้</Link></div>;

  const c = s.chapters[idx];
  const key = `${subject}-${c.id}`;
  const next = s.chapters[idx + 1];

  return (
    <article className="space-y-6">
      <Link href={`/course/${subject}`} className="text-sm underline">กลับไปที่{s.title}</Link>
      <h1 className="text-2xl font-bold text-navy dark:text-white">บทที่ {c.id}: {c.title}</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">สรุปเนื้อหา (Cheat Sheet)</h2>
        {c.cheat.map((x, i) => (
          <div key={i} className="card space-y-2">
            <h3 className="font-semibold">{x.h}</h3>
            {x.en && <pre className="en whitespace-pre-wrap rounded-lg bg-navy-soft p-3 dark:bg-white/10">{x.en}</pre>}
            <p className="whitespace-pre-line">{x.body}</p>
          </div>
        ))}
        <div className="rounded-2xl bg-gold/20 p-4"><b>เทคนิคจำ:</b> {c.mnemonic}</div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">ลองทำข้อสอบ</h2>
        {c.questions.map((q, i) => <Quiz key={i} q={q} />)}
      </section>

      <div className="flex flex-wrap gap-3">
        <button onClick={() => toggleDone(key)} className={done[key] ? "btn-navy" : "btn-gold"}>
          {done[key] ? "ยกเลิกการอ่านแล้ว" : "ทำเครื่องหมายว่าอ่านแล้ว"}
        </button>
        {next && <Link href={`/course/${subject}/${next.id}`} className="btn-navy">บทถัดไป</Link>}
      </div>
    </article>
  );
}
