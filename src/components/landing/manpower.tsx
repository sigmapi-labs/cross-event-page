"use client";

import { campaign } from "@/content/campaign";
import { useCallback, useRef, type PointerEvent } from "react";
import { Kicker } from "./kicker";

function PointCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const t = e.currentTarget;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--lx", `${e.clientX - r.left}px`);
    t.style.setProperty("--ly", `${e.clientY - r.top}px`);
  };

  return (
    <article
      onPointerMove={onMove}
      className="manpower-card relative overflow-hidden rounded-xl border border-hairline bg-[#111]/80 px-6 py-7"
    >
      <p className="mb-3 tabular text-[12px] font-bold tracking-[0.16em] text-accent">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mb-3 text-[20px] font-black tracking-tight">{title}</h3>
      <p className="text-[15px] leading-[1.75] text-muted">{body}</p>
    </article>
  );
}

export function Manpower() {
  const { manpower } = campaign;
  const sectionRef = useRef<HTMLElement>(null);

  const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <section
      id="manpower"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="manpower-stage relative scroll-mt-20 overflow-hidden bg-ink py-16 md:scroll-mt-24 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 manpower-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 manpower-spot" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="mb-10 grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_min(40%,440px)]">
          <div>
            <Kicker text={manpower.kicker} />
            <h2 className="mb-5 text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[44px]">
              {manpower.title}
            </h2>
            <p className="max-w-[540px] text-[16px] leading-[1.75] text-muted">{manpower.lead}</p>
          </div>
          <div className="flex gap-2">
            {manpower.campuses.map((c) => (
              <div
                key={c.name}
                className={`flex-1 rounded-xl border px-4 py-4 ${
                  c.tag === "신규" ? "border-accent bg-[#1A0E00]/80" : "border-hairline bg-[#111]/70"
                }`}
              >
                <p className={`text-[10px] font-bold tracking-[0.14em] ${c.tag === "신규" ? "text-accent" : "text-muted"}`}>
                  {c.tag}
                </p>
                <p className="mt-2 text-[14px] font-black tracking-tight md:text-[16px]">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {manpower.points.map((point, i) => (
            <PointCard key={point.title} index={i + 1} title={point.title} body={point.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
