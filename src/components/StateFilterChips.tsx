import { Fragment } from "react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

// Intake #621: state-filter chip row primitive. Repeats across the three
// architect queues (Verify, SAPPS Intake, Submissions) + the backlog
// filter rows. The chip is a mono-uppercase pill with the state name +
// inline count; an optional `pseudo` flag (e.g. parked/blocked) renders
// after a "·" divider so the approver sees the lane exists even when
// the count is 0.
//
// Visual contract:
//   - Active = filled ink/cream (admin "heavy" tone).
//   - Inactive = bg-card outline with hover ramp.
//   - Label is rendered exactly as passed; trailing count auto-formatted.
//   - Pseudo divider is a small mono "·" at text-[10px] text-ink/40.
//   - Optional `labelPrefix` (default "State:") sits before the chips
//     as a mono kicker.
//
// Future `tone` variant could swap the active class for the softer
// studio tone (see FilterChip from #597). For now this is admin-heavy
// only — call sites that want the soft variant should keep using
// FilterChip until the unification intake.

export type StateFilterChipItem<K extends string = string> = {
  key: K;
  label: string;
  count?: number | string;
  pseudo?: boolean;
};

export type StateFilterChipsProps<K extends string = string> = {
  items: Array<StateFilterChipItem<K>>;
  value: K;
  onChange: (key: K) => void;
  labelPrefix?: string | null;
  className?: string;
};

export function StateFilterChips<K extends string = string>({
  items,
  value,
  onChange,
  labelPrefix = "State:",
  className,
}: StateFilterChipsProps<K>) {
  // Insert a separator before the first pseudo item — only once, between
  // real and pseudo groups. Callers can mix freely in `items`; the divider
  // appears wherever the first `pseudo: true` row sits.
  let pseudoBoundaryRendered = false;
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {labelPrefix && (
        <span className="font-mono text-[11px] uppercase tracking-kicker text-ink/50 mr-2">
          {labelPrefix}
        </span>
      )}
      {items.map((item) => {
        const showDivider = item.pseudo && !pseudoBoundaryRendered;
        if (showDivider) pseudoBoundaryRendered = true;
        return (
          <Fragment key={item.key}>
            {showDivider && (
              <span className="font-mono text-[10px] text-ink/40 mx-1 select-none">
                ·
              </span>
            )}
            <button
              type="button"
              onClick={() => onChange(item.key)}
              className={cn(
                "font-mono text-[11px] uppercase tracking-kicker px-3 py-1 rounded-kit border transition-colors",
                FOCUS_RING_BUTTON,
                value === item.key
                  ? "bg-ink text-cream border-ink"
                  : "bg-card text-ink/70 border-hair-strong hover:text-ink hover:border-ink/40",
              )}
            >
              {item.label}
              {item.count !== undefined && item.count !== "" && (
                <span className="opacity-60 ml-1">{item.count}</span>
              )}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
