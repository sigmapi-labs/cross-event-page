import { campaign } from "@/content/campaign";
import Image from "next/image";

export function Hero() {
  const { offer, branch } = campaign;

  return (
    <section id="top" className="relative bg-ink pt-14 md:pt-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid min-h-[auto] grid-cols-1 md:grid-cols-[55%_45%] md:min-h-[calc(100vh-64px-140px)]">
          <div className="relative h-[260px] md:hidden">
            <Image
              src="/images/hero.jpg"
              alt="체대입시 실기 훈련"
              fill
              priority
              className="object-cover object-[center_20%] brightness-50 contrast-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-ink" />
          </div>

          <div className="flex flex-col justify-center px-5 py-12 md:px-6 md:pr-12 lg:pr-16">
            <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-accent">
              {campaign.brandEn} · {campaign.admissionYear} 입시
            </p>
            <p className="mb-5 text-[13px] tracking-wide text-muted">
              {campaign.existingBranches.join(" · ")} 다음 · {branch.name} 오픈
            </p>
            <h1 className="mb-6 whitespace-pre-line text-[44px] font-black leading-[1.08] tracking-[-0.04em] md:text-[72px] lg:text-[96px]">
              10월 수업,{"\n"}
              <span className="text-accent">전부</span> 무료입니다.
            </h1>
            <p className="mb-9 max-w-[480px] text-[14px] leading-[1.7] text-muted md:text-[16px]">{offer.subhead}</p>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-[15px] font-bold tracking-wide text-white hover:bg-accent-hover"
              >
                10월 무료 신청
              </a>
              <a
                href={campaign.kakaoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#FEE500] px-8 text-[15px] font-bold tracking-wide text-[#1A1A1A]"
              >
                카카오 상담
              </a>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-md border border-danger bg-[#1A0000] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-danger" />
              <span className="text-[13px] font-bold text-danger">
                선착순 {offer.seats}명 · 9.12 마감
              </span>
            </div>
          </div>

          <div className="relative hidden overflow-hidden md:block">
            <p
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-[-20px] z-[2] -translate-y-1/2 select-none text-[220px] font-black leading-none tracking-[-0.06em] text-accent/12 blur-[2px] lg:text-[320px]"
            >
              10
            </p>
            <Image
              src="/images/hero.jpg"
              alt="체대입시 실기 훈련"
              fill
              priority
              className="object-cover object-[center_20%] brightness-[0.6] contrast-125"
              sizes="45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% to-transparent to-25%" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(255,92,0,0.25)_0%,transparent_70%)]" />
          </div>
        </div>
      </div>

      <div className="border-t border-hairline bg-[#0D0D0D]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "10월 전면 무료", value: "100%" },
              { label: "26년 운영", value: "26년" },
              { label: "최신 실기 기기", value: "신규" },
              { label: "수업 비율", value: offer.ratio },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`px-5 py-6 ${i % 2 === 0 ? "border-r border-hairline" : ""} ${i < 2 ? "border-b border-hairline md:border-b-0" : ""} ${i === 2 ? "md:border-r" : ""}`}
              >
                <dt className="mb-1.5 text-[11px] tracking-[0.1em] text-muted">{s.label}</dt>
                <dd className="tabular text-[20px] font-black tracking-tight md:text-[28px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
