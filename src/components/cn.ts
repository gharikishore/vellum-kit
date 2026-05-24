// Minimal class-name concatenator. Avoids adding clsx/classnames as a dep
// for the handful of conditional classes the kit primitives need.
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

// ---------------------------------------------------------------------------
// Focus-ring recipes (intake #917, META #911)
// ---------------------------------------------------------------------------
// Standardized focus-visible treatment across every interactive primitive.
// Keyboard users must always see where they are; without these, tabbing
// through admin queues / signup wizards / curation surfaces silently
// loses the focus indicator.
//
// Two recipes — apply ONE per primitive:
//
//   FOCUS_RING_BUTTON  → buttons, chips, tabs, action menu items, lozenge
//                        actions. Outline-none + 2-px ink ring at 30%
//                        opacity, offset by 1 px against the cream page
//                        background so the ring reads on every surface.
//
//   FOCUS_RING_INPUT   → inputs, selects, textareas. Subtler ring (15%
//                        opacity, no offset) because these primitives ALSO
//                        change their border to `focus:border-ink` — the
//                        ring is just a supporting halo, not the primary
//                        signal.
//
// Both use `focus-visible` so mouse clicks don't trigger the ring (Chrome
// + Firefox + Safari all support :focus-visible since 2021).
export const FOCUS_RING_BUTTON =
  "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-1 focus-visible:ring-offset-cream";

export const FOCUS_RING_INPUT =
  "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15";
