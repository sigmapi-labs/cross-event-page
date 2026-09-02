import { ApplyForm } from "@/components/apply-form";
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function ApplySection() {
  const { apply } = campaign;

  return (
    <section id="apply" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Kicker text={apply.kicker} />
            <h2 className="mb-5 text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[44px]">
              {apply.headline}
            </h2>
            <p className="mb-7 max-w-[440px] text-[15px] leading-[1.75] text-muted">{apply.body}</p>
            <div className="mb-9 flex flex-wrap gap-2">
              {apply.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-hairline bg-[#1A1A1A] px-3.5 py-1.5 text-[12px] font-bold text-paper"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mb-9">
              <p className="mb-2 text-[12px] font-bold tracking-[0.12em] text-muted">{apply.inquiry}</p>
              <a href={campaign.phoneHref} className="tabular text-[28px] font-black tracking-tight md:text-[38px]">
                {campaign.phone}
              </a>
            </div>
            <a
              href={campaign.googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-[15px] font-bold text-white hover:bg-accent-hover"
            >
              {campaign.cta}
            </a>
          </div>

          <div id="apply-form" className="glow-orange relative scroll-mt-24 rounded-xl bg-paper p-7 text-ink md:p-11">
            <div className="absolute top-0 right-6 left-6 h-0.5 rounded bg-accent" />
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
