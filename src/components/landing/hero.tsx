import { ApplyScrollLink } from "@/components/apply-scroll-link";
import { campaign } from "@/content/campaign";
import Image from "next/image";

export function Hero() {
  const { hero } = campaign;

  return (
    <section id="top" className="relative min-h-[520px] overflow-hidden bg-ink md:min-h-[800px]">
      <Image
        src="/images/facility/kbs-hall.jpg"
        alt="KBS스포츠월드점 실기 훈련장"
        fill
        priority
        className="object-cover object-center brightness-[0.72] contrast-110"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-[12%] via-ink/80 to-ink/25 md:via-ink/70 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1200px] flex-col justify-end px-5 pt-24 pb-12 md:min-h-[800px] md:justify-center md:px-6 md:pt-[88px] md:pb-16">
        <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-accent md:text-[12px]">{hero.kicker}</p>
        <p className="mb-4 text-[15px] tracking-wide text-paper/80 md:text-[16px]">{hero.line}</p>
        <h1 className="mb-5 text-[40px] font-black leading-[1.06] tracking-[-0.04em] md:text-[60px] lg:text-[68px]">
          10월 한 달,
          <br />
          전 수업 <span className="text-accent">무료</span>
        </h1>
        <p className="mb-8 max-w-[460px] text-[14px] leading-[1.7] text-paper/75 md:text-[16px]">{hero.support}</p>
        <ApplyScrollLink className="inline-flex h-12 w-fit items-center justify-center rounded-lg bg-accent px-8 text-[15px] font-bold tracking-wide text-white hover:bg-accent-hover">
          {campaign.cta}
        </ApplyScrollLink>
      </div>
    </section>
  );
}
