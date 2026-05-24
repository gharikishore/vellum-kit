import { forwardRef } from "react";
import { cn, FOCUS_RING_INPUT } from "./cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "bg-card text-ink border border-hair-strong rounded-kit px-2.5 py-2 text-[13px] font-sans",
        "placeholder:text-ink/40 outline-none transition-colors",
        "focus:border-ink",
        FOCUS_RING_INPUT,
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...rest}
    />
  );
});
