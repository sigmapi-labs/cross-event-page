"use client";

import { campaign } from "@/content/campaign";
import { useState } from "react";
import { Kicker } from "./kicker";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full min-h-12 cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[14px] font-bold leading-snug md:text-[16px]">{q}</span>
        <span
          className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full text-[20px] font-light transition-colors duration-300 ${
            open ? "bg-accent text-white" : "bg-[#E8E4DC] text-muted"
          }`}
        >
          <span className={`leading-none transition-transform duration-300 ease-out ${open ? "rotate-45" : ""}`}>+</span>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 text-[14px] leading-[1.75] text-paper-ink transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-16 text-ink md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[720px] px-5 md:px-6">
        <Kicker text="FAQ" />
        <h2 className="mb-12 text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[44px]">
          자주 묻는 질문
        </h2>
        <div className="border-t border-line">
          {campaign.faq.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
