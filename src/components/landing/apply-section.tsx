import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function ApplySection() {
  const { apply } = campaign;

  return (
    <section id="apply" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[720px] px-5 text-center md:px-6">
        <Kicker text={apply.kicker} className="mb-5" />
        <h2 className="mb-6 whitespace-pre-line break-keep text-[26px] font-black leading-[1.2] tracking-[-0.03em] md:text-[44px]">
          {apply.headline}
        </h2>
        <p className="mb-10 break-keep text-[18px] font-bold leading-snug tracking-tight md:text-[22px]">
          선착순 {campaign.offer.seats}명 모집 중
        </p>

        <a
          id="apply-form"
          href={campaign.googleFormUrl}
          target="_blank"
          rel="noreferrer"
          className="mb-12 inline-flex h-14 w-full max-w-[320px] scroll-mt-24 items-center justify-center rounded-lg bg-accent text-[16px] font-bold text-white hover:bg-accent-hover md:h-16 md:text-[18px]"
        >
          {campaign.cta}
        </a>

        <div>
          <p className="mb-2 text-[16px] font-bold tracking-[0.12em] text-muted">{apply.inquiry}</p>
          <a href={campaign.phoneHref} className="tabular text-[28px] font-black tracking-tight md:text-[38px]">
            {campaign.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
