import { CountUp } from "@/components/count-up";
import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Why() {
  const { why } = campaign;

  return (
    <section id="why" className="scroll-mt-20 bg-paper py-16 text-ink md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="mb-10 grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_min(46%,520px)] md:gap-16">
          <div>
            <Kicker text="CROSS" />
            <h2 className="mb-5 max-w-[640px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">
              {why.title}
            </h2>
            <p className="mb-4 text-[18px] font-bold leading-snug tracking-tight md:text-[22px]">{why.body}</p>
            <p className="max-w-[520px] text-[15px] leading-[1.75] text-paper-ink">{why.lead}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-[5/4]">
            <Image
              src="/images/facility/court.png"
              alt="KBS스포츠월드점 실내 체육관"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 520px, 100vw"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-ink text-paper md:grid-cols-3">
          {why.stats.map((s, i) => (
            <div
              key={s.label}
              className={`@container min-w-0 px-5 py-8 md:px-5 md:py-10 lg:px-8 lg:py-12 ${i > 0 ? "border-t border-hairline md:border-t-0 md:border-l" : ""}`}
            >
              <p className="tabular max-w-full overflow-hidden text-[clamp(2.75rem,20cqi,4.5rem)] font-black leading-none tracking-[-0.05em] whitespace-nowrap text-accent">
                <CountUp
                  to={Number(s.n)}
                  duration={1500}
                  delay={i * 160}
                  unit={s.unit}
                  floatDelay={i * 0.55}
                  floatDur={5.4 + i * 0.5}
                />
              </p>
              <p className="mt-5 text-[16px] font-black tracking-tight md:text-[18px]">{s.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
