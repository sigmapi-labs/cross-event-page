"use client";

import { campaign } from "@/content/campaign";
import { emptyUtm, readUtm, type Utm } from "@/lib/utm";
import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ApplyForm() {
  const [utm, setUtm] = useState<Utm>(emptyUtm);
  const [channel, setChannel] = useState("etc");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const next = readUtm(window.location.search);
    setUtm(next);
    setChannel(guessChannel(next.source));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utm, page: window.location.href }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("접수가 저장되지 않았습니다. 카카오 상담으로 이어서 보내 주세요.");
    }
  }

  if (status === "ok") {
    return (
      <div className="py-4">
        <p className="text-[12px] font-bold tracking-[0.14em] text-accent">신청 완료</p>
        <h3 className="mt-2 text-[22px] font-extrabold tracking-tight">접수했습니다.</h3>
        <p className="mt-2 text-[15px] text-paper-ink">
          하루 안에 연락드립니다. 바로 상담이 필요하면 카카오로 이어서 보내 주세요.
        </p>
        <a
          href={campaign.kakaoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-[#FEE500] px-5 text-[14px] font-bold text-[#191919]"
        >
          카카오 상담 열기
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="utm_source" value={utm.source} />
      <input type="hidden" name="utm_medium" value={utm.medium} />
      <input type="hidden" name="utm_campaign" value={utm.campaign} />
      <input type="hidden" name="utm_content" value={utm.content} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이름" htmlFor="name">
          <input id="name" name="name" required placeholder="학생 이름" />
        </Field>
        <Field label="연락처" htmlFor="phone">
          <input id="phone" name="phone" required inputMode="tel" placeholder="010-0000-0000" />
        </Field>
      </div>
      <Field label="학년" htmlFor="grade">
        <select id="grade" name="grade" required defaultValue="">
          <option value="" disabled>
            학년 선택
          </option>
          {campaign.grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>
      <Field label="주 종목" htmlFor="event">
        <select id="event" name="event" required defaultValue="">
          <option value="" disabled>
            종목 선택
          </option>
          {campaign.events.map((ev) => (
            <option key={ev} value={ev}>
              {ev}
            </option>
          ))}
        </select>
      </Field>
      <Field label="유입 경로" htmlFor="channel">
        <select
          id="channel"
          name="channel"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
        >
          <option value="instagram">인스타그램</option>
          <option value="kakao">카카오</option>
          <option value="youtube">유튜브</option>
          <option value="local">당근·지역</option>
          <option value="friend">지인 소개</option>
          <option value="etc">기타</option>
        </select>
      </Field>
      <Field label="메모 (선택)" htmlFor="memo">
        <textarea id="memo" name="memo" rows={3} placeholder="희망 시간대, 본점 전환 여부 등" />
      </Field>
      <label className="flex min-h-11 cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-paper-ink">
        <input type="checkbox" name="consent" required className="mt-0.5 accent-accent" />
        상담을 위해 이름·연락처를 수집하는 데 동의합니다. 목적 달성 후 삭제합니다.
      </label>
      {message ? <p className="text-[13px] text-danger">{message}</p> : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-lg bg-accent text-[15px] font-bold text-white hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "sending" ? "보내는 중…" : "10월 무료 수업 신청"}
      </button>
    </form>
  );
}

function guessChannel(source: string) {
  if (source.includes("kakao")) return "kakao";
  if (source.includes("youtube") || source.includes("yt")) return "youtube";
  if (source.includes("local") || source.includes("dangi") || source.includes("carrot")) return "local";
  if (source.includes("instagram") || source.includes("ig")) return "instagram";
  return "etc";
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-[12px] font-bold tracking-wide text-paper-ink" htmlFor={htmlFor}>
      {label}
      <span className="[&>input]:min-h-12 [&>select]:min-h-12 [&>textarea]:min-h-[72px] [&>input]:w-full [&>select]:w-full [&>textarea]:w-full [&>input]:rounded-lg [&>select]:rounded-lg [&>textarea]:rounded-lg [&>input]:border [&>select]:border [&>textarea]:border [&>input]:border-line [&>select]:border-line [&>textarea]:border-line [&>input]:bg-paper [&>select]:bg-paper [&>textarea]:bg-paper [&>input]:px-4 [&>select]:px-4 [&>textarea]:px-4 [&>input]:py-3 [&>select]:py-3 [&>textarea]:py-3 [&>input]:text-[14px] [&>select]:text-[14px] [&>textarea]:text-[14px] [&>input]:font-normal [&>select]:font-normal [&>textarea]:font-normal [&>input]:text-ink [&>select]:text-ink [&>textarea]:text-ink [&>input]:outline-none [&>select]:outline-none [&>textarea]:outline-none [&>select]:cursor-pointer [&>select]:appearance-none focus-within:[&>input]:border-accent focus-within:[&>select]:border-accent focus-within:[&>textarea]:border-accent">
        {children}
      </span>
    </label>
  );
}
