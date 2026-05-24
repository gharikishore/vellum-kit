"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn, FOCUS_RING_BUTTON } from "./cn";

export type TabItem = {
  id: string;
  label: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
};

// Hairline-underline tabs. Active tab gets the orange accent + bolder weight.
// Quiet by design — Atlassian's tabs aren't loud.
//
// Intake #918 (META #911): keyboard nav per WAI-ARIA APG tablist pattern
// using the "automatic activation" model — Left/Right cycles between tabs
// and immediately activates, Home/End jump to first/last. Roving tabindex
// (`tabIndex={isActive ? 0 : -1}`) keeps the tab order clean: one Tab
// keystroke lands on the active tab, arrows take it from there.
export function Tabs({ items, activeId, onChange, className }: TabsProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusAndActivate = (nextIdx: number) => {
    const clamped = ((nextIdx % items.length) + items.length) % items.length;
    const next = items[clamped];
    if (!next) return;
    onChange?.(next.id);
    buttonRefs.current[clamped]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusAndActivate(idx + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusAndActivate(idx - 1);
        break;
      case "Home":
        e.preventDefault();
        focusAndActivate(0);
        break;
      case "End":
        e.preventDefault();
        focusAndActivate(items.length - 1);
        break;
    }
  };

  return (
    <div className={cn("flex gap-1 border-b border-hair", className)} role="tablist">
      {items.map((item, idx) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            ref={(el) => {
              buttonRefs.current[idx] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange?.(item.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              "px-3.5 py-2 text-[13px] font-sans cursor-pointer transition-colors -mb-px",
              "border-b-2 hover:text-ink",
              FOCUS_RING_BUTTON,
              "rounded-kit-sm",
              isActive
                ? "font-semibold text-ink border-orange"
                : "font-medium text-ink/60 border-transparent",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
