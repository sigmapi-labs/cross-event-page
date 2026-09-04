type SocialIconName = "instagram" | "youtube" | "kakao";

export function SocialIcon({ name, className }: { name: SocialIconName; className?: string }) {
  const iconClass = className ?? "size-3.5 shrink-0";

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <rect x="2.2" y="5.5" width="19.6" height="13" rx="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 9.4v5.2l5.2-2.6L10 9.4Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M12 3.2C6.7 3.2 2.4 6.6 2.4 10.8c0 2.7 1.8 5.1 4.6 6.5l-.9 3.3 3.6-2c.7.1 1.5.2 2.3.2 5.3 0 9.6-3.4 9.6-7.6S17.3 3.2 12 3.2Z" />
    </svg>
  );
}
