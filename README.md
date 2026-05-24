# @gharikishore/vellum-kit

Vellum — specforge's cream + ink + orange design system, packaged for
reuse. Color/typography/radius/shadow tokens + (in v1.x) UI primitives.
Themable via `--vellum-*` CSS variables. Drop into any Next.js +
Tailwind app.

**v0.2 — 17 UI primitives now shipping.** Specforge migration lands in v0.3.
See `docs/adoption.md` for the roadmap.

## Heritage

Extracted from [`gharikishore/specforge`](https://github.com/gharikishore/specforge)
where Vellum originated (intake #176 — "Vellum design kit anchor doc"
and onward through ~50 follow-ups). The token values in this kit are
the canonical specforge values as of 2026-05-24. See
`docs/design-history.md` for the value provenance.

Sibling kits in the same `gharikishore/<name>-kit` pattern:
- [`backlog-kit`](https://github.com/gharikishore/backlog-kit) —
  bug/feedback capture + triage + sign-in + admin chrome
- [`impersonation-kit`](https://github.com/gharikishore/impersonation-kit) —
  admin transparently acts as any user with audit auto-stamping

## What you get

| Layer | Provided |
|---|---|
| **Tokens (JS)** | `colors`, `fontFamilies`, `radii`, `shadows`, `letterSpacing` constants via `@gharikishore/vellum-kit/tokens` |
| **Tokens (CSS)** | Same values as `--vellum-*` CSS variables in `default-theme.css` |
| **Tailwind preset** | `tailwind-preset.js` — extends consumer's `tailwind.config.js` with cream / card / ink / orange / navy / gold / dust palette + `font-sans` (Geist) / `font-display` (Fraunces) / `font-mono` (JetBrains Mono) + `rounded-kit{,-sm,-lg}` + `shadow-kit{,-soft}` + `tracking-kicker` |
| **UI primitives** (v0.2) | 17 React components ported from specforge: `Button`, `IconButton`, `Lozenge`, `Card`, `Field`, `Input`, `Textarea`, `Select`, `ListRow`, `SummaryTile`, `Tabs`, `Banner`, `Crumb`/`CrumbSep`, `Eyebrow`, `StateFilterChips`, `AsideActionButton`, `Composer`. Plus `cn` + `FOCUS_RING_BUTTON` / `FOCUS_RING_INPUT` helpers |

## Peer dependencies

```json
{
  "react": ">=18",
  "tailwindcss": ">=3.4",
  "next": ">=14",
  "lucide-react": ">=0.300.0"
}
```

`next` is required for `<Crumb>` (uses `next/link`). `lucide-react`
ships the icons that `IconButton` / `ListRow` / `Select` / `Banner` /
`Composer` render in their defaults — consumers can swap them via the
icon-slot props.

## Quick start

### 1. Add the submodule

```bash
git submodule add https://github.com/gharikishore/vellum-kit.git .claude/kits/vellum
```

### 2. Wire the path alias

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@local/vellum-kit": ["./.claude/kits/vellum/src/index.ts"],
      "@local/vellum-kit/*": ["./.claude/kits/vellum/src/*"]
    }
  }
}
```

### 3. Apply the Tailwind preset

```js
// tailwind.config.js
import vellumPreset from "./.claude/kits/vellum/tailwind-preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [vellumPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.claude/kits/vellum/src/**/*.{js,ts,jsx,tsx}",
  ],
};
```

### 4. Import the default theme

```css
/* src/app/globals.css */
@import "@local/vellum-kit/default-theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Use the tokens + primitives

```tsx
// Tokens via Tailwind utility (preferred when class composition is cleaner)
<div className="bg-cream text-ink rounded-kit shadow-kit p-6">
  <h2 className="font-display text-3xl">Hello.</h2>
</div>

// Tokens via CSS variable (preferred for arbitrary inline styles)
<div style={{ background: "var(--vellum-card)", color: "var(--vellum-ink)" }}>
  …
</div>

// Tokens via JS constant
import { colors } from "@local/vellum-kit";
const chartTheme = { axis: colors.ink, grid: colors.hair };

// UI primitives (v0.2)
import { Button, Lozenge, Card, Eyebrow } from "@local/vellum-kit/components";

<Card padded>
  <Eyebrow>Status</Eyebrow>
  <h2 className="font-sans text-xl mt-2 mb-3">Deploying.</h2>
  <Lozenge tone="info">In progress</Lozenge>
  <div className="mt-4 flex gap-2">
    <Button kind="primary">Approve</Button>
    <Button kind="secondary">Hold</Button>
  </div>
</Card>
```

## Roadmap

| Status | What |
|---|---|
| ✅ v0.1 | Tokens (JS + CSS) + Tailwind preset + scaffolding |
| ✅ v0.2 | 17 UI primitives ported from specforge: Button, IconButton, Lozenge, Card, Field, Input, Textarea, Select, ListRow, SummaryTile, Tabs, Banner, Crumb/CrumbSep, Eyebrow, StateFilterChips, AsideActionButton, Composer |
| ⏳ v0.3 | specforge migration — collapse `src/components/ui/*` to thin re-exports; kit catalog update; smoke harness |

## Repo layout

```
vellum-kit/
  README.md
  package.json                  # @gharikishore/vellum-kit
  tsconfig.json
  tailwind-preset.js            # Tailwind preset (consumer applies via presets: [...])
  src/
    index.ts                    # barrel (tokens for now; components in v0.2)
    tokens.ts                   # JS constants
    default-theme.css           # --vellum-* CSS variables
    components/                 # 17 UI primitives + cn / focus-ring helpers
      Button.tsx                # primary / secondary / subtle / danger
      IconButton.tsx            # 30×30 icon-only outlined or ghost
      Lozenge.tsx               # status pill (success/warning/info/danger/muted)
      Card.tsx                  # container shell + optional padded
      Field.tsx                 # label + hint wrapper for form inputs
      Input.tsx                 # text input
      Textarea.tsx              # multi-line input
      Select.tsx                # display trigger for downstream dropdowns
      ListRow.tsx               # dense Jira-style row inside a Card
      SummaryTile.tsx           # top-of-page KPI tile
      Tabs.tsx                  # hairline-underline tabs with WAI-ARIA keyboard nav
      Banner.tsx                # inline alert/notice with optional action
      Crumb.tsx                 # breadcrumb segment + CrumbSep
      Eyebrow.tsx               # small uppercase orange kicker label
      StateFilterChips.tsx      # mono-uppercase state-filter chip row
      AsideActionButton.tsx     # chip-style verdict action (success/warning/danger/info/muted)
      Composer.tsx              # text composer with reason + confirm/cancel
      cn.ts                     # classname combiner + FOCUS_RING_* recipes
      index.ts                  # barrel
  docs/                         # adoption / migration / api / design-history
```
