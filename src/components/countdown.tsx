"use client";

import { daysUntil } from "@/lib/format";
import { useEffect, useState } from "react";

export function Countdown({ deadline }: { deadline: string }) {
  const [days, setDays] = useState(() => daysUntil(deadline));

  useEffect(() => {
    const tick = () => setDays(daysUntil(deadline));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [deadline]);
  if (days < 0) return <span>신청 마감</span>;
  if (days === 0) return <span>오늘 마감</span>;
  return <span className="tabular">D-{days}</span>;
}
