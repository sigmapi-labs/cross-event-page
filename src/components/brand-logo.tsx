import Image from "next/image";

const SRC = {
  orange: "/images/logo/cross-orange.svg",
  white: "/images/logo/cross-white.svg",
  black: "/images/logo/cross-black.svg",
  gnb: "/images/logo/white-logo.svg",
} as const;

const SIZE = {
  orange: { width: 826, height: 227 },
  white: { width: 826, height: 227 },
  black: { width: 826, height: 227 },
  gnb: { width: 824, height: 143 },
} as const;

export function BrandLogo({
  variant,
  className,
}: {
  variant: keyof typeof SRC;
  className?: string;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt="CROSS SPORTS ACADEMY — 대한민국 체대입시의 표준"
      width={SIZE[variant].width}
      height={SIZE[variant].height}
      className={className ?? "h-9 w-auto md:h-10"}
      priority={variant !== "black"}
    />
  );
}
