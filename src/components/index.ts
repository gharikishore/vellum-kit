// Vellum design-kit primitives.
//
// Import from "@local/vellum-kit/components" everywhere (or wire your
// own path alias to whichever submodule path you used).
//
// All primitives ship with:
//   - Hard-baked accessible focus rings (FOCUS_RING_BUTTON / FOCUS_RING_INPUT)
//   - Vellum token-only colors (bg-cream / text-ink / border-hair-strong / etc.)
//   - font-sans default; explicit font-mono for kicker / metadata strips
//
// They require the kit's tailwind-preset to be applied + the consumer's
// Tailwind `content` to include the kit path so utility classes are
// generated. See README.md for the 5-step setup.

export { Button } from "./Button";
export type { ButtonKind, ButtonProps } from "./Button";

export { IconButton } from "./IconButton";
export type { IconButtonProps } from "./IconButton";

export { Lozenge } from "./Lozenge";
export type { LozengeProps, LozengeTone } from "./Lozenge";

export { Card } from "./Card";
export type { CardProps } from "./Card";

export { Field } from "./Field";
export type { FieldProps } from "./Field";

export { Input } from "./Input";
export type { InputProps } from "./Input";

export { Textarea } from "./Textarea";
export type { TextareaProps } from "./Textarea";

export { Select } from "./Select";
export type { SelectProps } from "./Select";

export { ListRow } from "./ListRow";
export type { ListRowProps } from "./ListRow";

export { SummaryTile } from "./SummaryTile";
export type { SummaryTileProps } from "./SummaryTile";

export { Tabs } from "./Tabs";
export type { TabsProps, TabItem } from "./Tabs";

export { Banner } from "./Banner";
export type { BannerProps } from "./Banner";

export { Crumb, CrumbSep } from "./Crumb";
export type { CrumbProps } from "./Crumb";

export { Eyebrow } from "./Eyebrow";
export type { EyebrowProps } from "./Eyebrow";

export { StateFilterChips } from "./StateFilterChips";
export type {
  StateFilterChipsProps,
  StateFilterChipItem,
} from "./StateFilterChips";

export { AsideActionButton } from "./AsideActionButton";
export type {
  AsideActionButtonProps,
  AsideActionButtonTone,
} from "./AsideActionButton";

export { Composer } from "./Composer";
export type {
  ComposerProps,
  ComposerConfirmTone,
  ComposerSearchProps,
  ComposerSearchResult,
} from "./Composer";

export { cn, FOCUS_RING_BUTTON, FOCUS_RING_INPUT } from "./cn";
