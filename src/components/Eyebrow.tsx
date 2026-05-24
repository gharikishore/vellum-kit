import { cn } from "./cn";

export type EyebrowProps = {
  className?: string;
  children: React.ReactNode;
};

// Small uppercase kicker label, accent-orange. Pair above a page or section title.
export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        "text-[11px] uppercase tracking-kicker text-orange font-semibold font-sans",
        className,
      )}
    >
      {children}
    </span>
  );
}
