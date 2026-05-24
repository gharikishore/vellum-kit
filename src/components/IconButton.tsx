import { forwardRef } from "react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel: string;
  variant?: "outlined" | "ghost";
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { ariaLabel, variant = "outlined", className, type = "button", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      className={cn(
        "w-[30px] h-[30px] grid place-items-center rounded-kit text-ink transition-colors",
        variant === "outlined" ? "border border-hair-strong hover:bg-ink/5" : "hover:bg-ink/5",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        FOCUS_RING_BUTTON,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
