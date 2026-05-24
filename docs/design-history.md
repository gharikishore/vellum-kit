# Vellum design history + token provenance

The "why" behind every token in vellum-kit. Read this when porting and
you hit a value that doesn't immediately make sense, or when proposing
a new token + want to understand the existing taxonomy.

## Genesis (specforge)

Vellum was extracted from `gharikishore/specforge`'s `src/components/ui/`
+ `tailwind.config.js` + `src/app/globals.css`. The design system grew
incrementally over ~50 specforge intakes; the canonical anchor is
intake #176 ("Vellum design kit anchor doc"), with `/studio/kit` as
the live reference page (preserved specforge-side as the live showcase
— not extracted into the kit).

The name "Vellum" — cream parchment + ink line work + editorial mono
kickers — is the design language's identity, distinct from individual
brand instances. Specforge applies Vellum. Future consumers (HmBr,
hmbrimpact-site) also apply Vellum.

## Token decisions

### Colors

- **`cream` (`#F2EDE4`)** — Vellum's signature surface. Slightly
  warmer than off-white; reads as parchment rather than paper.
  Specforge intake #133 settled this value after ruling out `#F7F3EA`
  (too yellow) and `#EEE9DD` (too gray).

- **`card` (`#FAF6EE`)** — One step lighter than `cream`. Cards lift
  off the page surface without needing a heavy border. Used together
  with `shadow-kit` for the default raised state.

- **`ink` (`#1A1814`)** — Dark warm-neutral. NOT pure black — pure
  black on cream reads harsh. The warm bias keeps it cohesive with
  the orange + gold accents.

- **`orange` (`#C5421B`)** — Vellum's single action accent. Saturated
  but not loud. Specforge intake #176 — the original Vellum spec —
  ruled out a brighter orange (`#E04E20`) for being too aggressive on
  cream.

- **`navy` / `navy-soft` (`#1F3A5C` / `#3A6E9C`)** — Info / secondary.
  Navy-soft (specforge intake #781) was added later to distinguish
  "in-progress" / "being built" states from the deep navy used for
  "info" lozenges; without the second tone, pulse animations on
  built-tile hexes were unreadable against `navy` itself.

- **`gold` (`#B8964F`)** — Warning-soft / highlight. Distinct from
  `warning-fg` (`#7A6638`) which is text-on-washed-bg only.

- **`dust` (`#A05A5A`)** — Disabled / "not applicable" markers.
  Specforge intake #781 also added this to distinguish "doesn't
  apply" (dust, dimmed) from "warning" (gold, advisory) from "action"
  (orange, do-this). Three tones for three semantically different
  signals.

- **Hairlines (`hair` 12% / `hair-strong` 20% ink alpha)** — Soft
  dividers + structural borders. The 12%/20% split is the readable
  minimum on cream — anything fainter disappears, anything heavier
  looks like a fault line.

### Typography

- **`sans` = Geist** — Default for every working surface. Specforge
  rules: `font-sans` on `/admin/*`, `/studio/*`, `/signup`,
  `/profile`. Picked for x-height + screen rendering at 13-15px body.

- **`display` = Fraunces** — Marketing/editorial only (homepage,
  `/handbook`). Used sparingly; never on working surfaces.

- **`mono` = JetBrains Mono** — Metadata strips, kickers, numbers,
  and the canonical small-uppercase label voice.

### Radii

- **`kit` (`6px`)** — Default for buttons, inputs, lozenges.
- **`kit-lg` (`8px`)** — Cards + raised containers.
- **`kit-sm` (`4px`)** — Inline chips + small badges.

Picked to feel "structural-warm" — sharp enough to read as
intentional, round enough to soften against the cream surface.
Strictly less round than Tailwind's stock `rounded-md` (`8px`) for
the default tier — Vellum's 6px reads as more precise.

### Shadows

- **`kit-soft`** — 1px-hairline shadow. Rarely needed since `kit`
  reads as the default raised state.
- **`kit`** — Two-layer Atlassian/Linear-style shadow (crisp close
  shadow + soft ambient). Default for every `<Card>` and any other
  raised box. Stacks WITH a hairline border, not in place of one.

### Letter spacing

- **`kicker` (`0.18em`)** — Single canonical tracking for ALL
  small-uppercase mono labels. Specforge intake #922 (META #911)
  reconciled an earlier `kicker` / `eyebrow` token split (0.18em vs
  0.25em); the 0.18em value won everywhere except 2 lines on
  `/studio/kit`, so the team dropped the `eyebrow` token entirely.

  The `<Eyebrow>` primitive uses this token — the token name doesn't
  match the primitive name on purpose; primitives express intent,
  tokens express the visual atom.

## Anti-patterns (avoid)

1. **Don't inline raw hex.** Write `bg-cream` or
   `var(--vellum-cream)`, never `style={{ backgroundColor: "#F2EDE4" }}`.
   Inline hex disconnects from the token system + breaks consumer
   theming.

2. **Don't mix `font-display` (Fraunces) into working surfaces.**
   It's reserved for marketing. Working surfaces stay sans-only —
   that consistency IS the Vellum voice.

3. **Don't use Tailwind's stock `rounded-md` / `rounded-lg`.** Use
   `rounded-kit{,-sm,-lg}`. The kit values are intentionally
   different from stock for the Vellum precision look.

4. **Don't add a new color without filing a token intake first.**
   The taxonomy is tight on purpose; ad-hoc additions create the
   exact tone-drift Vellum was built to prevent.

5. **Don't fork the kit's `default-theme.css` to a project-local
   copy and edit it.** Override individual `--vellum-*` vars in your
   own `globals.css` AFTER the import instead. Forks bit-rot vs the
   kit's evolution.

## Specforge intakes that built this kit

For the original design discussions (read when porting and you hit a
confusing edge case):

- **#133** — Cream value settled (`#F2EDE4`).
- **#176** — Vellum design kit anchor doc; orange accent + sans-only
  working-surface rule.
- **#781** — `navy-soft` + `dust` added for in-progress vs
  not-applicable state distinction.
- **#911 META → #922** — `kicker` / `eyebrow` token consolidation.
- **#1015 META** — extraction into this kit (META + 3 children: scaffold
  / primitives / specforge migration).
