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
        <p className="mb-10 max-w-[640px] whitespace-pre-line text-[15px] leading-[1.75] text-paper-ink">{strategy.lead}</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {strategy.items.map((item) => (
            <article key={item.n} className="group overflow-hidden rounded-xl bg-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover origin-center transition duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:motion-safe:group-hover:scale-[1.04] ${item.pos}`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="px-5 py-5 md:px-6 md:py-6">
                <p className="mb-2 tabular text-[16px] font-black tracking-[0.14em] text-accent">{item.n}</p>
                <h3 className="mb-2 text-[20px] font-black tracking-tight md:text-[22px]">{item.title}</h3>
                <p className="text-[14px] leading-[1.75] text-paper-ink md:text-[15px]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
