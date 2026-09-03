import { CountUp } from "@/components/count-up";
import { AdmitMarquee } from "@/components/landing/admit-marquee";
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Results() {
  const { results } = campaign;

  return (
    <section id="results" className="scroll-mt-20 overflow-hidden bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text={results.kicker} />
        <h2 className="mb-8 max-w-[640px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">
          {results.title}
        </h2>
        <p className="tabular text-[96px] font-black leading-none tracking-[-0.06em] text-accent md:text-[140px]">
          <CountUp to={Number(results.n)} duration={1600} unit={results.suffix} />
          <span className="ml-2 text-[28px] font-bold text-paper md:text-[36px]">{results.unit}</span>
        </p>
        <p className="mt-5 text-[22px] font-black tracking-tight md:text-[26px]">{results.line}</p>
        <div className="mt-8 flex gap-2">
          {results.years.map((y) => (
            <span
              key={y}
              className="rounded-full border border-hairline px-3.5 py-1.5 text-[12px] font-bold tracking-wide text-muted"
            >
              {y}
            </span>
          ))}
        </div>
        <p className="mt-5 mb-6 text-[16px] font-black tracking-tight md:text-[18px]">{results.recentLine}</p>
        <p className="max-w-[560px] text-[15px] leading-[1.75] text-muted">{results.body}</p>
      </div>
      <AdmitMarquee />
    </section>
  );
}
