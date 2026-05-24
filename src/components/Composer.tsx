import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn, FOCUS_RING_BUTTON } from "./cn";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

// Intake #623: shared composer pattern for the Reject / Flag / Mark-
// duplicate reason forms across the three architect queues. The minimal
// shape is a section header + textarea + confirm button; an optional
// `search` prop layers in a search-as-you-type picker (used by the
// SAPPS intake Mark-duplicate composer).
//
// Confirm-button tones map to kit semantics:
//   - danger  → reject (orange brand)
//   - warning → flag for rework (gold/warning-fg)
//   - orange  → mark-duplicate / promote-to-canonical
//   - muted   → reclassify / neutral confirm
//
// Cancel is optional; many call sites already use the outer toggle
// button to close the composer.

export type ComposerConfirmTone = "danger" | "warning" | "orange" | "muted";

export type ComposerSearchResult = {
  id: string;
  /** Right-rail meta line above the title (e.g. similarity %). */
  meta?: ReactNode;
  /** Top-left pill / lozenge in the result card. */
  badge?: ReactNode;
  /** Main result text. */
  text: ReactNode;
};

export type ComposerSearchProps = {
  label?: React.ReactNode;
  placeholder?: string;
  query: string;
  onQueryChange: (q: string) => void;
  loading: boolean;
  results: ComposerSearchResult[];
  /** Optional empty-state message (default: "No matches."). */
  emptyMessage?: ReactNode;
  selectedId: string | null;
  selectedText?: ReactNode;
  selectedLabel?: string;
  onSelect: (id: string, text: string) => void;
  onClearSelection: () => void;
};

export type ComposerProps = {
  /** Section header (mono-uppercase). Default: "Reason". */
  title?: string;
  /** Optional search step rendered above the textarea. */
  search?: ComposerSearchProps;
  textareaLabel?: string;
  textareaPlaceholder?: string;
  textareaValue: string;
  onTextareaChange: (v: string) => void;
  textareaRows?: number;
  /** Cancel handler — when omitted, no Cancel button renders. */
  onCancel?: () => void;
  cancelLabel?: string;
  onConfirm: () => void;
  confirmLabel: string;
  confirmTone?: ComposerConfirmTone;
  confirmIcon?: ReactNode;
  confirmDisabled?: boolean;
  busy?: boolean;
  /** Footer note rendered below the confirm row (small mono caption). */
  footerNote?: ReactNode;
  className?: string;
};

const confirmToneClasses: Record<ComposerConfirmTone, string> = {
  // Brand orange — per CLAUDE.md "danger=orange". Replaces legacy
  // deep-red (#7a1f1f) call-sites that this primitive supersedes.
  danger: "bg-orange text-cream border-orange hover:opacity-90",
  warning: "bg-warning-fg text-cream border-warning-fg hover:opacity-90",
  orange: "bg-orange text-cream border-orange hover:opacity-90",
  muted: "bg-ink text-cream border-ink hover:opacity-90",
};

export function Composer({
  title = "Reason",
  search,
  textareaLabel,
  textareaPlaceholder,
  textareaValue,
  onTextareaChange,
  textareaRows = 3,
  onCancel,
  cancelLabel = "Cancel",
  onConfirm,
  confirmLabel,
  confirmTone = "danger",
  confirmIcon,
  confirmDisabled,
  busy,
  footerNote,
  className,
}: ComposerProps) {
  return (
    <div className={cn("flex flex-col gap-3 font-sans", className)}>
      <div className="font-mono text-[11px] uppercase tracking-kicker text-ink/55">{title}</div>

      {search && (
        <div>
          {search.label && (
            <div className="font-mono text-[10px] uppercase tracking-kicker text-ink/60 mb-1.5 flex items-center justify-between gap-2">
              {search.label}
            </div>
          )}
          {search.selectedId ? (
            <div className="flex items-baseline gap-2 px-3 py-2 rounded-kit bg-success/10 border border-success/30">
              <span className="text-success flex-shrink-0">✓</span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-kicker text-success">
                  {search.selectedLabel ?? "Selected"}
                </div>
                <div className="text-sm text-ink truncate">{search.selectedText}</div>
              </div>
              <button
                type="button"
                onClick={search.onClearSelection}
                className={cn(
                  "font-mono text-[10px] uppercase tracking-kicker text-ink/55 hover:text-ink transition-colors rounded-kit-sm px-1 -mx-1",
                  FOCUS_RING_BUTTON,
                )}
              >
                Change
              </button>
            </div>
          ) : (
            <>
              <Input
                value={search.query}
                onChange={(e) => search.onQueryChange(e.target.value)}
                placeholder={search.placeholder}
                className="w-full"
              />
              <div className="mt-2 flex flex-col gap-1.5 max-h-[260px] overflow-y-auto">
                {search.loading ? (
                  <div className="font-mono text-[11px] text-ink/55 px-2 py-1">searching…</div>
                ) : search.results.length === 0 ? (
                  <div className="font-mono text-[11px] text-ink/55 px-2 py-1">
                    {search.emptyMessage ?? "No matches."}
                  </div>
                ) : (
                  search.results.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => search.onSelect(r.id, typeof r.text === "string" ? r.text : "")}
                      className={cn(
                        "text-left px-3 py-2 rounded-kit border border-hair hover:border-ink/40 hover:bg-ink/[0.02] transition-colors",
                        FOCUS_RING_BUTTON,
                      )}
                    >
                      {(r.badge || r.meta) && (
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          {r.badge ?? <span />}
                          {r.meta && <span className="font-mono text-[10px] text-ink/55">{r.meta}</span>}
                        </div>
                      )}
                      <div className="text-[13px] leading-snug text-ink">{r.text}</div>
                    </button>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}

      {textareaLabel && (
        <div className="font-mono text-[10px] uppercase tracking-kicker text-ink/60 -mb-1.5">{textareaLabel}</div>
      )}
      <Textarea
        value={textareaValue}
        onChange={(e) => onTextareaChange(e.target.value)}
        placeholder={textareaPlaceholder}
        rows={textareaRows}
        className="w-full"
      />

      <div className="flex items-center gap-3 justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className={cn(
              "inline-flex items-center px-3 py-2 rounded-kit font-sans text-[13px] font-medium text-ink/70 hover:text-ink transition-colors disabled:opacity-50",
              FOCUS_RING_BUTTON,
            )}
          >
            {cancelLabel}
          </button>
        )}
        <button
          type="button"
          onClick={onConfirm}
          disabled={busy || confirmDisabled}
          className={cn(
            "inline-flex items-center gap-1.5 px-4 py-2 rounded-kit border font-mono text-[11px] uppercase tracking-kicker transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
            FOCUS_RING_BUTTON,
            confirmToneClasses[confirmTone],
          )}
        >
          {busy ? <Loader2 size={12} className="animate-spin" /> : confirmIcon}
          {confirmLabel}
        </button>
      </div>

      {footerNote && <p className="font-mono text-[10px] text-ink/50 m-0">{footerNote}</p>}
    </div>
  );
}
