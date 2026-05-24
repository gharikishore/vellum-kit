import { cn } from "./cn";
import type { LozengeTone } from "./Lozenge";

export type SummaryTileProps = {
  label: string;
  value: React.ReactNode;
  delta?: React.ReactNode;
  tone?: LozengeTone;
  className?: string;
};

const toneClasses: Record<LozengeTone, string> = {
  success: "text-success",
  warning: "text-warning-fg",
  info: "text-navy",
  danger: "text-orange",
  muted: "text-ink/70",
};

// Top-of-page KPI tile. Use a Row of these for dashboard summaries.
export function SummaryTile({ label, value, delta, tone = "muted", className }: SummaryTileProps) {
  return (
    <div
      className={cn(
        "bg-card border border-hair-strong rounded-kit-lg px-4 py-3.5 flex-1 min-w-[180px]",
        className,
      )}
    >
      <div className="text-[11px] uppercase tracking-kicker text-ink/60 mb-1 font-sans">
        {label}
      </div>
      <div className="text-2xl font-semibold text-ink leading-none mb-1.5 font-sans">{value}</div>
      {delta && (
        <div className={cn("text-[11px] font-sans", toneClasses[tone])}>{delta}</div>
      )}
    </div>
  );
}
