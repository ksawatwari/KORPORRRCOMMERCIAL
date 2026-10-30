export const pct = (original, price) => Math.round(((original - price) / original) * 100);

export default function Price({ original, price, big = false }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className={`${big ? "text-5xl" : "text-3xl"} font-bold text-navy dark:text-white`}>
        {price}<span className="text-lg font-semibold"> บาท</span>
      </span>
      <span className="text-lg text-slate-400 line-through decoration-red-500 decoration-2" aria-label={`ราคาปกติ ${original} บาท`}>
        {original}.-
      </span>
      <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-sm font-bold text-white">ลด {pct(original, price)}%</span>
    </div>
  );
}
