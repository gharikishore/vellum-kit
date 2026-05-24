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

## Components (v0.2)

All primitives import from `@local/vellum-kit/components`. They expect
the Tailwind preset + default-theme.css to be wired (see README quick
start). Helpers `cn`, `FOCUS_RING_BUTTON`, `FOCUS_RING_INPUT` are also
exported for consumers building their own primitives that share the
focus-ring discipline.

| Primitive | Default usage | Key prop(s) |
|---|---|---|
| `<Button>` | `<Button kind="primary">Save</Button>` | `kind`: `primary` (ink fill) · `secondary` (card fill) · `subtle` (transparent) · `danger` (orange fill) |
| `<IconButton>` | `<IconButton ariaLabel="More"><MoreHorizontal /></IconButton>` | `variant`: `outlined` (default) · `ghost`; `ariaLabel` required |
| `<Lozenge>` | `<Lozenge tone="success">Shipped</Lozenge>` | `tone`: `success` · `warning` · `info` · `danger` · `muted`; `icon` slot |
| `<Card>` | `<Card padded>…</Card>` | `padded`: applies p-5 |
| `<Field>` | `<Field label="Email" hint="..."><Input/></Field>` | `label`, `hint`, `htmlFor`, `required` |
| `<Input>` | `<Input placeholder="Search" />` | All native `<input>` props |
| `<Textarea>` | `<Textarea rows={5} />` | Defaults to `rows=3`, `resize-y` |
| `<Select>` | `<Select value="Q4">Q4 2026</Select>` | Display trigger only — pair with Radix/Headless for the dropdown |
| `<ListRow>` | `<ListRow title="…" meta="…" trailing={<Lozenge/>} />` | `icon`, `title`, `meta`, `trailing`, `onAction`, `isLast` |
| `<SummaryTile>` | `<SummaryTile label="Open" value={42} delta="+12%" tone="success" />` | `tone` shares Lozenge's tone vocabulary |
| `<Tabs>` | `<Tabs items={tabs} activeId={id} onChange={setId} />` | WAI-ARIA keyboard nav (Arrow/Home/End) baked in |
| `<Banner>` | `<Banner tone="warning" message="…" action={{label:'Fix', onClick}} />` | `tone` mirrors Lozenge; `role=alert` for warning/danger |
| `<Crumb>` + `<CrumbSep>` | `<Crumb href="/x">Home</Crumb><CrumbSep/><Crumb>Detail</Crumb>` | `next/link`-backed; href omitted for the current segment |
| `<Eyebrow>` | `<Eyebrow>Section</Eyebrow>` | Orange uppercase mono kicker |
| `<StateFilterChips>` | `<StateFilterChips items={[…]} value={s} onChange={setS} />` | Generic `<K extends string>`; supports `pseudo: true` divider |
| `<AsideActionButton>` | `<AsideActionButton tone="success">Approve</AsideActionButton>` | Mono-uppercase outline action chip for stacked verdict columns |
| `<Composer>` | See specforge intake #919 + the source for the full prop list | Text composer with reason field + confirm/cancel |

### Focus-ring helpers

Apply the recipe matching your primitive's input/non-input nature:

```tsx
import { cn, FOCUS_RING_BUTTON, FOCUS_RING_INPUT } from "@local/vellum-kit/components";

// Buttons, chips, tabs, lozenge actions
<button className={cn("…", FOCUS_RING_BUTTON)}>…</button>

// Inputs, selects, textareas
<input className={cn("…", FOCUS_RING_INPUT)} />
```

Both use `:focus-visible` so mouse clicks don't trigger the ring.
