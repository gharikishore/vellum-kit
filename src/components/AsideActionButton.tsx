import { forwardRef } from "react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

// Intake #622: small mono-uppercase outline action button used in the
// architect aside (Approve / Confirm / Reject / Flag / Mark canonical /
// etc). Outline by default, semantic tone via the `tone` prop, filled
// hover-bg in the same tone family. Visually distinct from the kit's
// main <Button> primitive — this one's a chip-style action sized for
// stacked verdict columns.
//
// Tones map to kit semantic palette (success/warning/danger/info/muted).
// Danger renders as brand orange per the kit convention (CLAUDE.md:
// "danger=orange"). Call sites with a legacy deep-red treatment have
// been normalized to `tone="danger"` in the lift.

export type AsideActionButtonTone = "success" | "warning" | "danger" | "info" | "muted";

export type AsideActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: AsideActionButtonTone;
  icon?: React.ReactNode;
};

const toneClasses: Record<AsideActionButtonTone, string> = {
  success: "border-success/45 text-success hover:bg-success/10",
  warning: "border-gold/50 text-warning-fg hover:bg-gold/10",
  danger: "border-orange/40 text-orange hover:bg-orange/5",
  info: "border-navy/30 text-navy hover:bg-navy/5",
  muted: "border-ink/30 text-ink hover:bg-ink/5",
};

export const AsideActionButton = forwardRef<HTMLButtonElement, AsideActionButtonProps>(
  function AsideActionButton({ tone = "muted", icon, className, type = "button", children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-kit border font-mono text-[11px] uppercase tracking-kicker transition-colors whitespace-nowrap",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          FOCUS_RING_BUTTON,
          toneClasses[tone],
          className,
        )}
        {...rest}
      >
        {icon}
        {children}
      </button>
    );
  },
);
