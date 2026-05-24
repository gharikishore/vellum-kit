import { cn } from "./cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export function Card({ padded = false, className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-hair-strong rounded-kit-lg shadow-kit overflow-hidden",
        padded && "p-5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
