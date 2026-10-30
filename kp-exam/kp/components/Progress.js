export default function Progress({ value, total }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm"><span>ความคืบหน้า</span><span>{value}/{total} บท ({pct}%)</span></div>
      <div className="h-2.5 overflow-hidden rounded-full bg-navy/10 dark:bg-white/10" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-gold transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
