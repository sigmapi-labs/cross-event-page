import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

function Dots({ count, tone }: { count: number; tone: "ink" | "muted" }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 shrink-0 rounded-full md:h-3.5 md:w-3.5 ${tone === "ink" ? "bg-ink" : "bg-[#C8C2B6]"}`}
        />
      ))}
      <span className="mx-1 text-[12px] font-bold text-muted">:</span>
      <span className="h-3 w-3 shrink-0 rounded-full bg-accent md:h-3.5 md:w-3.5" />
    </div>
  );
}

export function Elite() {
  const { elite } = campaign;

  return (
    <section id="elite" className="scroll-mt-20 bg-paper py-16 text-ink md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="수업 규모" />
        <h2 className="mb-4 text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">{elite.title}</h2>
        <p className="mb-3 max-w-[560px] whitespace-pre-line text-[16px] font-bold leading-snug tracking-tight md:text-[18px]">{elite.lead}</p>
        <p className="mb-12 max-w-[560px] whitespace-pre-line text-[15px] leading-[1.75] text-paper-ink">{elite.body}</p>

        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-3">
          {elite.items.map((item) => (
            <div key={item.label} className="flex flex-col rounded-xl border border-line bg-white px-6 py-8">
              <p className="tabular text-[48px] font-black leading-none tracking-tight text-accent md:text-[56px]">
                {item.n}
              </p>
              <p className="mt-4 text-[16px] font-black">{item.label}</p>
              <p className="mt-2 mb-6 text-[14px] leading-relaxed text-paper-ink">{item.body}</p>
              <div className="mt-auto">
                <Dots count={item.count} tone="ink" />
              </div>
            </div>
          ))}
          <div className="flex flex-col rounded-xl border border-dashed border-line bg-[#EFEBE3] px-6 py-8">
            <p className="tabular text-[48px] font-black leading-none tracking-tight text-[#B8B2A6] line-through md:text-[56px]">
              {elite.reject.n}
            </p>
            <p className="mt-4 text-[16px] font-black text-muted">{elite.reject.label}</p>
            <p className="mt-2 mb-6 text-[14px] leading-relaxed text-paper-ink">{elite.reject.body}</p>
            <div className="mt-auto">
              <Dots count={elite.reject.count} tone="muted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
