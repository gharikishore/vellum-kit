import { ArrowRight } from "lucide-react";
import { cn, FOCUS_RING_BUTTON } from "./cn";
import type { LozengeTone } from "./Lozenge";

export type BannerProps = {
  tone?: LozengeTone;
  icon?: React.ReactNode;
  message: React.ReactNode;
  action?: { label: string; onClick?: () => void; href?: string };
  className?: string;
};

const toneClasses: Record<LozengeTone, { container: string; fg: string }> = {
  success: { container: "bg-success/5 border-success/25", fg: "text-success" },
  warning: { container: "bg-gold/10 border-gold/35", fg: "text-warning-fg" },
  info: { container: "bg-navy/5 border-navy/25", fg: "text-navy" },
  danger: { container: "bg-orange/5 border-orange/30", fg: "text-orange" },
  muted: { container: "bg-ink/5 border-hair-strong", fg: "text-ink" },
};

// Inline alert/notice. Quiet tone, restrained iconography, optional action on the right.
export function Banner({ tone = "info", icon, message, action, className }: BannerProps) {
  const t = toneClasses[tone];
  const Action = action?.href ? "a" : "button";
  // Intake #915 (META #911): map tone → ARIA role per WAI-ARIA convention:
  //   danger/warning → role="alert" — interrupts assistive tech, used for
  //     conditions a user must respond to (errors, risk flags).
  //   success/info/muted → role="status" — polite; announced after the
  //     user pauses, appropriate for confirmations and ambient updates.
  const role = tone === "danger" || tone === "warning" ? "alert" : "status";
  return (
    <div
      role={role}
      className={cn(
        "flex items-center gap-3 px-3.5 py-2.5 rounded-kit border text-[13px] font-sans",
        t.container,
        className,
      )}
    >
      {icon && <span className={cn("flex flex-shrink-0", t.fg)}>{icon}</span>}
      <span className="flex-1 text-ink">{message}</span>
      {action && (
        <Action
          type={action.href ? undefined : "button"}
          onClick={action.onClick}
          href={action.href}
          className={cn(
            "inline-flex items-center gap-1 font-semibold text-[13px] cursor-pointer hover:opacity-80 rounded-kit-sm px-1 -mx-1",
            FOCUS_RING_BUTTON,
            t.fg,
          )}
        >
          {action.label}
          <ArrowRight size={12} />
        </Action>
      )}
    </div>
  );
}
