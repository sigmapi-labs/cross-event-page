import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Network() {
  const { network } = campaign;
  const featured = network.campuses.find((c) => c.featured)!;
  const rest = network.campuses.filter((c) => !c.featured);

  return (
    <section id="network" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text={network.title} />
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-white">
            {network.badge}
          </span>
          <h2 className="text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">{network.headline}</h2>
        </div>
        <p className="mb-10 max-w-[580px] text-[16px] leading-[1.75] text-muted">{network.body}</p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <article className="relative min-h-[280px] overflow-hidden rounded-xl md:col-span-2 md:min-h-[340px]">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className={`object-cover brightness-[0.55] contrast-110 ${featured.pos}`}
              sizes="(min-width: 768px) 66vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink from-10% via-ink/30 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-white">
                {featured.tag}
              </span>
            </div>
            <div className="absolute right-5 bottom-5 left-5">
              <h3 className="text-[28px] font-black tracking-tight md:text-[36px]">{featured.name}</h3>
              <p className="mt-2 text-[14px] text-paper/85">{featured.note}</p>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-3">
            {rest.map((c) => (
              <article key={c.name} className="relative min-h-[132px] overflow-hidden rounded-xl md:min-h-[164px]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className={`object-cover brightness-[0.45] contrast-110 ${c.pos}`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink from-20% to-ink/20" />
                <div className="absolute right-5 bottom-5 left-5">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-muted">{c.tag}</p>
                  <h3 className="mt-1 text-[20px] font-black tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-[13px] text-paper/80">{c.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="network-closer mt-8 text-[15px] leading-[1.75] text-muted">{network.closer}</p>
      </div>
    </section>
  );
}
