"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { subjects, subjectList, BUNDLE_PRICE } from "@/lib/data";
import { useApp } from "@/lib/store";

export default function Checkout() {
  const { subject } = useParams();
  const { unlock } = useApp();
  const [paid, setPaid] = useState(false);
  const isBundle = subject === "bundle";
  const items = isBundle ? subjectList : subjects[subject] ? [subjects[subject]] : [];
  if (!items.length) return <p>ไม่พบรายการสินค้า</p>;
  const total = isBundle ? BUNDLE_PRICE : items[0].price;

  const pay = () => { unlock(items.map((i) => i.slug)); setPaid(true); };

  return (
    <div className="mx-auto max-w-md space-y-5">
      <h1 className="text-2xl font-bold text-navy dark:text-white">ชำระเงิน (จำลอง)</h1>
      <div className="card space-y-2">
        {items.map((i) => <p key={i.slug} className="flex justify-between"><span>{i.title}</span><span>{i.price}.-</span></p>)}
        <p className="flex justify-between border-t border-navy/10 pt-2 text-lg font-bold dark:border-white/10"><span>รวม</span><span>{total}.-</span></p>
      </div>
      {paid ? (
        <div className="card space-y-3 border-green-600">
          <p className="font-semibold">ปลดล็อกเรียบร้อย (Unlocked)</p>
          <div className="flex flex-wrap gap-2">
            {items.map((i) => <Link key={i.slug} href={`/course/${i.slug}`} className="btn-gold">เข้าเรียน{i.title}</Link>)}
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm text-slate-500">นี่คือหน้าจำลอง ไม่มีการเรียกเก็บเงินจริง ในระบบจริงให้เชื่อมต่อ PromptPay QR หรือ Stripe/Omise แล้วปลดล็อกจากฝั่งเซิร์ฟเวอร์</p>
          <button onClick={pay} className="btn-gold w-full">จำลองการจ่าย {total} บาท</button>
        </>
      )}
    </div>
  );
}
