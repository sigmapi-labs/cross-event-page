"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function CountUp({
  to,
  duration = 1400,
  delay = 0,
  unit,
  floatDelay = 0,
  floatDur = 5.6,
}: {
  to: number;
  duration?: number;
  delay?: number;
  unit?: string;
  floatDelay?: number;
  floatDur?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let started = false;

    const play = () => {
      if (started) return;
      started = true;
      const startAt = performance.now() + delay;

      const tick = (now: number) => {
        if (now < startAt) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }
        const t = Math.min(1, (now - startAt) / duration);
        setValue(Math.round(easeOutCubic(t) * to));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDone(true);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration, delay]);

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline ${done ? "animate-float-soft" : ""}`}
      style={
        done
          ? ({
              "--float-delay": `${floatDelay}s`,
              "--float-dur": `${floatDur}s`,
            } as CSSProperties)
          : undefined
      }
    >
      <span className="inline-block text-left tabular-nums">
        {value.toLocaleString("en-US")}
        {unit === "+" ? "+" : null}
      </span>
      {unit && unit !== "+" ? (
        <span className="ml-1 text-[20px] font-bold text-paper md:text-[24px]">{unit}</span>
      ) : null}
    </span>
  );
}
