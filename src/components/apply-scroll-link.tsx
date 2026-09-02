"use client";

export function ApplyScrollLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#apply"
      className={className}
      onClick={(e) => {
        const el = document.getElementById("apply");
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#apply");
      }}
    >
      {children}
    </a>
  );
}
