"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { subjects } from "@/lib/data";
import { useApp } from "@/lib/store";
import Progress from "@/components/Progress";

export default function Course() {
  const { subject } = useParams();
  const s = subjects[subject];
  const { unlocked, done, ready } = useApp();
  if (!s) return <p>ไม่พบวิชานี้</p>;
  const open = unlocked[subject];
  const count = s.chapters.filter((c) => done[`${subject}-${c.id}`]).length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-navy dark:text-white">{s.title}</h1>
      {!ready ? null : open ? <Progress value={count} total={s.chapters.length} /> : (
        <div className="card flex flex-wrap items-center justify-between gap-3 border-gold">
          <p>วิชานี้ยังล็อกอยู่ ปลดล็อกทุกบทในราคา {s.price} บาท</p>
          <Link href={`/checkout/${subject}`} className="btn-gold">ปลดล็อก {s.price}.-</Link>
        </div>
      )}
      <ul className="space-y-3">
        {s.chapters.map((c) => {
          const isDone = done[`${subject}-${c.id}`];
          const body = (
            <div className="card flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">บทที่ {c.id}: {c.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{c.desc}</p>
              </div>
              <span className="shrink-0 text-sm">{!open ? "ล็อก" : isDone ? "อ่านแล้ว" : "ยังไม่อ่าน"}</span>
            </div>
          );
          return <li key={c.id}>{open ? <Link href={`/course/${subject}/${c.id}`}>{body}</Link> : <div className="opacity-60">{body}</div>}</li>;
        })}
      </ul>
    </div>
  );
}
