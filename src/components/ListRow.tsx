import { MoreHorizontal } from "lucide-react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

export type ListRowProps = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  meta?: React.ReactNode;
  trailing?: React.ReactNode;
  onAction?: () => void;
  actionLabel?: string;
  isLast?: boolean;
  className?: string;
};

// Dense Jira-style row: leading icon, title + meta, trailing (lozenges or buttons), action menu.
// Designed to live inside <Card> — borders cascade row-to-row, last row drops bottom border.
export function ListRow({
  icon,
  title,
  meta,
  trailing,
  onAction,
  actionLabel = "Row actions",
  isLast,
  className,
}: ListRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-4 py-3",
        !isLast && "border-b border-hair",
        className,
      )}
    >
      {icon && (
        <div className="w-[22px] h-[22px] rounded-kit-sm bg-ink/5 grid place-items-center flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium text-ink font-sans leading-snug">{title}</div>
        {meta && <div className="text-[11px] text-ink/60 mt-0.5 font-sans">{meta}</div>}
      </div>
      {trailing && <div className="flex gap-1.5 flex-shrink-0">{trailing}</div>}
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          aria-label={actionLabel}
          className={cn(
            "w-6 h-6 rounded-kit-sm text-ink/60 hover:bg-ink/5 grid place-items-center flex-shrink-0",
            FOCUS_RING_BUTTON,
          )}
        >
          <MoreHorizontal size={14} />
        </button>
      )}
    </div>
  );
}
