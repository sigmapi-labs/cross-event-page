"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function FacilitySlider({
  images,
  title,
  sub,
}: {
  images: readonly string[];
  title: string;
  sub: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1000);
    return () => window.clearInterval(id);
  }, [images.length, paused]);

  return (
    <div
      className="relative mt-4 overflow-hidden rounded-xl md:mt-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[220px] md:min-h-[320px]">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover object-center transition-opacity duration-300 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="1200px"
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-[1] flex min-h-[220px] flex-col justify-end px-6 py-8 md:min-h-[320px] md:px-10 md:py-11">
          <p className="break-keep text-[22px] font-black leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_4px_18px_rgba(0,0,0,0.6)] md:text-[28px]">
            {title}
          </p>
          <p className="mt-3 break-keep text-[15px] leading-relaxed font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_3px_14px_rgba(0,0,0,0.55)] md:text-[17px]">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}
