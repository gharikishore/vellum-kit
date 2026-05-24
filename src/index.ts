// @gharikishore/vellum-kit — public barrel.
//
// v0.1 — tokens + Tailwind preset (scaffold)
// v0.2 — 17 UI primitives ported from specforge (this version)
// v0.3 (next) — specforge fully migrated to consume this kit; smoke harness
//
// Most consumers will deep-import for tree-shaking:
//
//   import { Button, Lozenge, Card } from "@local/vellum-kit/components";
//   import { colors } from "@local/vellum-kit/tokens";
//
// The barrel here re-exports both for one-stop convenience.

export {
  colors,
  fontFamilies,
  radii,
  shadows,
  letterSpacing,
} from "./tokens";

// UI primitives. Deep-import path (@local/vellum-kit/components) stays
// the recommended adoption pattern; the barrel re-export here is for
// convenience.
export {
  Button,
  IconButton,
  Lozenge,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  ListRow,
  SummaryTile,
  Tabs,
  Banner,
  Crumb,
  CrumbSep,
  Eyebrow,
  StateFilterChips,
  AsideActionButton,
  Composer,
  cn,
  FOCUS_RING_BUTTON,
  FOCUS_RING_INPUT,
} from "./components";

export type {
  ButtonKind,
  ButtonProps,
  IconButtonProps,
  LozengeProps,
  LozengeTone,
  CardProps,
  FieldProps,
  InputProps,
  TextareaProps,
  SelectProps,
  ListRowProps,
  SummaryTileProps,
  TabsProps,
  TabItem,
  BannerProps,
  CrumbProps,
  EyebrowProps,
  StateFilterChipsProps,
  StateFilterChipItem,
  AsideActionButtonProps,
  AsideActionButtonTone,
  ComposerProps,
  ComposerConfirmTone,
  ComposerSearchProps,
  ComposerSearchResult,
} from "./components";
