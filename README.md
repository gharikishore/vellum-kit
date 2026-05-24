# @gharikishore/vellum-kit

Vellum — specforge's cream + ink + orange design system, packaged for
reuse. Color/typography/radius/shadow tokens + (in v1.x) UI primitives.
Themable via `--vellum-*` CSS variables. Drop into any Next.js +
Tailwind app.

**v0.1 — scaffold + tokens.** UI primitives land in v0.2. See
`docs/adoption.md` for the roadmap.

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

## What you get (v0.1)

| Layer | Provided |
|---|---|
| **Tokens (JS)** | `colors`, `fontFamilies`, `radii`, `shadows`, `letterSpacing` constants via `@gharikishore/vellum-kit/tokens` |
| **Tokens (CSS)** | Same values as `--vellum-*` CSS variables in `default-theme.css` |
| **Tailwind preset** | `tailwind-preset.js` — extends consumer's `tailwind.config.js` with cream / card / ink / orange / navy / gold / dust palette + `font-sans` (Geist) / `font-display` (Fraunces) / `font-mono` (JetBrains Mono) + `rounded-kit{,-sm,-lg}` + `shadow-kit{,-soft}` + `tracking-kicker` |
| **UI primitives** | ⏳ v0.2 — Button, Lozenge, Card, ListRow, SummaryTile, Tabs, Banner, Field, Input, Eyebrow, IconBtn, ProgressBar, etc. |

## Peer dependencies

```json
{
  "react": ">=18",
  "tailwindcss": ">=3.4"
}
```

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

### 5. Use the tokens

```tsx
// Tailwind utility (preferred when class composition is cleaner)
<div className="bg-cream text-ink rounded-kit shadow-kit p-6">
  <h2 className="font-display text-3xl">Hello.</h2>
</div>

// CSS variable (preferred for arbitrary inline styles)
<div style={{ background: "var(--vellum-card)", color: "var(--vellum-ink)" }}>
  …
</div>

// JS constant (preferred when JS context owns the value)
import { colors } from "@local/vellum-kit";
const chartTheme = { axis: colors.ink, grid: colors.hair };
```

## Roadmap

| Status | What |
|---|---|
| ✅ v0.1 | Tokens (JS + CSS) + Tailwind preset + scaffolding |
| ⏳ v0.2 | UI primitives — Button, Lozenge, Card, ListRow, SummaryTile, Tabs, Banner, Field, Input, Eyebrow, IconBtn, ProgressBar |
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
    components/                 # ⏳ v0.2: UI primitives
  docs/                         # adoption / migration / api / design-history
```
