import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Strategy() {
  const { strategy } = campaign;

  return (
    <section id="strategy" className="scroll-mt-20 bg-paper py-16 text-ink md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="합격 전략" />
        <h2 className="mb-4 max-w-[640px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[44px]">
          {strategy.title}
        </h2>
        <p className="mb-12 max-w-[560px] text-[15px] leading-[1.75] text-paper-ink">{strategy.lead}</p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {strategy.items.map((item) => (
            <article key={item.n} className="overflow-hidden rounded-xl bg-ink text-paper">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover brightness-[0.68] contrast-110 ${item.pos}`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink from-10% to-transparent" />
                <p className="absolute top-4 left-5 tabular text-[12px] font-bold tracking-[0.16em] text-accent">
                  {item.n}
                </p>
              </div>
              <div className="px-6 pt-2 pb-7">
                <h3 className="mb-3 text-[22px] font-black tracking-tight">{item.title}</h3>
                <p className="text-[15px] leading-[1.75] text-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
