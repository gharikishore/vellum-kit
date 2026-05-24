import { cn } from "./cn";

export type FieldProps = {
  label: string;
  hint?: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Field({ label, hint, htmlFor, required, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor={htmlFor} className="text-[12px] font-medium font-sans text-ink">
        {label}
        {required && <span className="text-orange ml-0.5">*</span>}
      </label>
      {children}
      {hint && <span className="text-[11px] text-ink/60 font-sans">{hint}</span>}
    </div>
  );
}
