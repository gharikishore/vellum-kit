import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn, FOCUS_RING_INPUT } from "./cn";

// Display-only Select trigger — pair with a real dropdown impl downstream
// (Radix, Headless UI, or hand-rolled). Visual parity with Input.
export type SelectProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  placeholder?: string;
  value?: string;
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  { value, placeholder = "Select…", className, type = "button", children, ...rest },
  ref,
) {
  const displayed = children ?? value;
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "bg-card text-ink border border-hair-strong rounded-kit px-2.5 py-2 text-[13px] font-sans text-left",
        "flex items-center justify-between gap-2 outline-none transition-colors",
        "focus:border-ink",
        FOCUS_RING_INPUT,
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...rest}
    >
      <span className={cn(!displayed && "text-ink/40")}>{displayed ?? placeholder}</span>
      <ChevronDown size={14} className="opacity-50 flex-shrink-0" />
    </button>
  );
});
