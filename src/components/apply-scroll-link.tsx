import { campaign } from "@/content/campaign";

export function ApplyScrollLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={campaign.googleFormUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
