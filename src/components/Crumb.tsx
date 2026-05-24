import Link from "next/link";
import { cn } from "./cn";

export type CrumbProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

// Single breadcrumb segment. Compose with separators handled by the parent.
export function Crumb({ href, className, children }: CrumbProps) {
  const base = cn("text-[13px] text-ink/60 font-sans hover:text-ink transition-colors", className);
  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return <span className={base}>{children}</span>;
}

export function CrumbSep() {
  return <span className="text-ink/40 text-[12px] font-sans">/</span>;
}
