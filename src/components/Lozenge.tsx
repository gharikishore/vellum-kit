import { cn } from "./cn";

export type LozengeTone = "success" | "warning" | "info" | "danger" | "muted";

export type LozengeProps = {
  tone?: LozengeTone;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

// Atlassian-flavour status pill. Soft washed background + matching border + dark fg.
// Recoloured to brand palette: success=green, warning=gold, info=navy, danger=orange.
const toneClasses: Record<LozengeTone, string> = {
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-gold/15 text-warning-fg border-gold/40",
  info: "bg-navy/10 text-navy border-navy/30",
  danger: "bg-orange/10 text-orange border-orange/30",
  muted: "bg-ink/5 text-ink border-hair-strong",
};

export function Lozenge({ tone = "muted", icon, children, className }: LozengeProps) {
  // Intake #915 (META #911): role="status" so screen readers announce the
  // tone change when a lozenge updates (e.g. "Pending" → "Accepted").
  // Polite by default — screen readers wait for the user to pause before
  // reading the new value, which matches lozenges' passive nature.
  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium tracking-[0.02em] whitespace-nowrap font-sans",
        toneClasses[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
