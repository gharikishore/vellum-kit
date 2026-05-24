import { forwardRef } from "react";
import { cn, FOCUS_RING_INPUT } from "./cn";

// Textarea primitive — visual parity with Input.tsx. Use whenever a
// form needs multi-line text (Composer reason fields, intake notes,
// rule descriptions, etc.).
//
// Defaults to rows=3, vertical-only resize (resize-y). Same border/
// focus pattern as Input so Form composition reads as a coherent kit.
//
// Intake #919 (META #911) — extracted from inline duplicates in
// Composer.tsx so the kit has a real primitive for the multi-line
// input case.
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, rows = 3, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "bg-card text-ink border border-hair-strong rounded-kit px-2.5 py-2 text-[13px] font-sans",
        "placeholder:text-ink/40 outline-none transition-colors resize-y",
        "focus:border-ink",
        FOCUS_RING_INPUT,
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...rest}
    />
  );
});
