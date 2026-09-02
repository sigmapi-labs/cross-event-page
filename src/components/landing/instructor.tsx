import { campaign } from "@/content/campaign";
import Image from "next/image";
import type { ReactNode } from "react";
import { Kicker } from "./kicker";

function StatCard({
  children,
  alt,
}: {
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <div
      className={`stat-card rounded-lg border border-hairline bg-[#111] px-5 py-5 ${alt ? "stat-card-alt" : ""}`}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

export function Instructor() {
  const { instructor } = campaign;

  return (
    <section id="instructor" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[42%_1fr] md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#111]">
            <Image
              src="/images/hero.jpg"
              alt={`${instructor.channel} ${instructor.name}`}
              fill
              className="object-cover object-[center_18%] brightness-[0.7] contrast-110 grayscale"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink from-5% via-ink/20 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5">
              <p className="text-[11px] font-bold tracking-[0.18em] text-accent">{instructor.channel}</p>
              <p className="mt-1 text-[32px] font-black tracking-tight text-paper">{instructor.name}</p>
            </div>
          </div>

          <div>
            <Kicker text={instructor.kicker} />
            <h2 className="mb-6 max-w-[560px] text-[28px] font-black leading-[1.12] tracking-[-0.03em] md:text-[44px]">
              {instructor.title}
            </h2>
            <p className="mb-4 max-w-[520px] text-[15px] leading-[1.75] text-muted">{instructor.body}</p>
            <p className="mb-10 max-w-[520px] text-[15px] leading-[1.75] text-muted">{instructor.body2}</p>
            <div className="grid max-w-[480px] grid-cols-2 gap-3">
              <StatCard>
                <p className="tabular text-[32px] font-black leading-none tracking-tight">
                  {instructor.years}
                  <span className="ml-0.5 text-[18px] font-bold">년</span>
                </p>
                <p className="mt-2 text-[13px] text-muted">체대 입시 경력</p>
              </StatCard>
              <StatCard alt>
                <p className="text-[18px] font-black leading-snug tracking-tight">{instructor.focus}</p>
                <p className="mt-2 text-[13px] text-muted">KBS스포츠월드점에서 직접</p>
              </StatCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
