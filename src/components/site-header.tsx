"use client";

import { campaign } from "@/content/campaign";
import { Countdown } from "./countdown";
import { useEffect, useState } from "react";

const NAV = [
  { label: "대상", href: "#tracks" },
  { label: "오퍼", href: "#offer" },
  { label: "시설", href: "#facilities" },
  { label: "26년", href: "#history" },
  { label: "위치", href: "#campus" },
  { label: "신청", href: "#apply" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ink/95 text-paper backdrop-blur">
        <div className="mx-auto flex h-14 items-center justify-between gap-4 px-5 md:h-16 md:max-w-[1200px] md:px-6">
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
            <span className="h-[22px] w-[3px] rounded-sm bg-accent" />
            <span className="text-[15px] font-extrabold tracking-tight">{campaign.brand}</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-paper"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 md:flex">
            <a
              href="#apply"
              className="inline-flex h-10 items-center rounded-lg bg-accent px-5 text-[13px] font-bold text-white hover:bg-accent-hover"
            >
              10월 무료 신청
            </a>
            <span className="rounded-full bg-danger px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
              <Countdown deadline={campaign.offer.applyDeadline} />
            </span>
          </div>

          <div className="flex items-center gap-2.5 md:hidden">
            <span className="rounded-full bg-danger px-2.5 py-1 text-[11px] font-bold text-white">
              <Countdown deadline={campaign.offer.applyDeadline} />
            </span>
            <button
              type="button"
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-1 text-paper"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
                {open ? (
                  <>
                    <line x1="1" y1="1" x2="21" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="21" y1="1" x2="1" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="0" y1="2" x2="22" y2="2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="0" y1="14" x2="22" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-10 pt-24 md:hidden">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 text-[36px] font-black tracking-tight"
              style={{ opacity: 1 - i * 0.05 }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-12 flex h-12 items-center justify-center rounded-lg bg-accent text-[15px] font-bold text-white"
          >
            10월 무료 신청
          </a>
        </div>
      ) : null}
    </>
  );
}
