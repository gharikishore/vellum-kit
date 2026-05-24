import { forwardRef } from "react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

export type ButtonKind = "primary" | "secondary" | "subtle" | "danger";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: ButtonKind;
};

const kindClasses: Record<ButtonKind, string> = {
  primary: "bg-ink text-cream border border-ink hover:opacity-90",
  secondary: "bg-card text-ink border border-hair-strong hover:bg-cream",
  subtle: "bg-transparent text-ink border border-transparent hover:bg-ink/5",
  danger: "bg-orange text-cream border border-orange hover:opacity-90",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { kind = "primary", className, type = "button", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-2 rounded-kit text-[13px] font-medium font-sans transition-all whitespace-nowrap",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        FOCUS_RING_BUTTON,
        kindClasses[kind],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
