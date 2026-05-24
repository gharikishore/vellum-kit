# vellum-kit API reference

**v0.1 — tokens only.** Component primitives ship in v0.2.

## Tokens (JS)

```ts
import {
  colors,
  fontFamilies,
  radii,
  shadows,
  letterSpacing,
} from "@local/vellum-kit";
```

### `colors`

| Token | Value | Use for |
|---|---|---|
| `cream` | `#F2EDE4` | Page background (Vellum default) |
| `card` | `#FAF6EE` | Card / aside container background |
| `ink` | `#1A1814` | Body text, headings |
| `textMuted` | `#3A3934` | Secondary text |
| `textSoft` | `#5A5750` | Tertiary / hint text |
| `hair` | `rgba(26,24,20,0.12)` | Soft divider borders |
| `hairStrong` | `rgba(26,24,20,0.2)` | Input borders, structural divides |
| `orange` | `#C5421B` | Primary action / CTA |
| `orangeRing` | `rgba(197,66,27,0.3)` | Focus rings, drop targets |
| `navy` | `#1F3A5C` | Info / secondary accent |
| `navySoft` | `#3A6E9C` | "In progress" / "being built" states |
| `gold` | `#B8964F` | Highlight / warning-soft |
| `dust` | `#A05A5A` | Disabled / "not applicable" markers |
| `success` | `#226633` | Confirmed / shipped |
| `successOn` | `#FFFFFF` | Text on success backgrounds |
| `warningFg` | `#7A6638` | Warning advisory text |
| `errorBg` | `#FDE7E7` | Error banner backgrounds |
| `errorFg` | `#7A1F1F` | Error banner text |

### `fontFamilies`

| Token | Value | Use for |
|---|---|---|
| `sans` | Geist, system-ui, sans-serif | Default body (working surfaces) |
| `display` | Fraunces, serif | Marketing/editorial (homepage, landing) |
| `mono` | JetBrains Mono, monospace | Metadata, kickers, numbers |

### `radii`

| Token | Value |
|---|---|
| `kitSm` | `4px` |
| `kit` | `6px` |
| `kitLg` | `8px` |

### `shadows`

| Token | Value |
|---|---|
| `kitSoft` | `0 1px 0 rgba(26,24,20,0.04)` |
| `kit` | `0 1px 2px rgba(26,24,20,0.06), 0 8px 24px rgba(26,24,20,0.10)` |
| `modal` | `0 24px 60px rgba(0,0,0,0.35)` |

### `letterSpacing`

| Token | Value | Use for |
|---|---|---|
| `kicker` | `0.18em` | Small uppercase mono labels (eyebrows, kickers, lozenges, action chips) |

## Tokens (CSS variables)

Every JS token above is also a `--vellum-*` CSS variable in
`default-theme.css`. The naming maps:

- `colors.cream` → `var(--vellum-cream)`
- `colors.textMuted` → `var(--vellum-text-muted)` (kebab-case)
- `shadows.kit` → `var(--vellum-shadow-kit)`
- etc.

See `src/default-theme.css` for the full list.

## Tailwind utilities

When the preset is applied, every color / font-family / radius /
shadow / tracking token becomes a Tailwind utility class. Examples:

- `bg-cream`, `bg-card`, `text-ink`, `text-orange`, `border-hair`
- `font-sans`, `font-display`, `font-mono`
- `rounded-kit`, `rounded-kit-lg`, `rounded-kit-sm`
- `shadow-kit`, `shadow-kit-soft`
- `tracking-kicker`

Use the utility when class composition is cleaner; use the CSS
variable when you need an arbitrary inline style or a third-party
component that takes a string.

## Components

⏳ **v0.2** — Button, Lozenge, Card, ListRow, SummaryTile, Tabs,
Banner, Field, Input, Eyebrow, IconBtn, ProgressBar, …
