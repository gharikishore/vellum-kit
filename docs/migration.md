# Migrating an existing inline Vellum implementation to vellum-kit

For projects (like specforge) that already have Vellum tokens inlined
in their own `tailwind.config.js` + `globals.css`.

**Goal:** consume the same token values from the kit instead of
maintaining a local copy.

### Step-by-step

1. **Add the kit as a submodule** (see [adoption.md](./adoption.md)
   for the full Quick Start).

2. **Replace your inline `theme.extend.colors` / `fontFamily` /
   `borderRadius` / `boxShadow` / `letterSpacing` blocks** with the
   kit preset:

   ```js
   // tailwind.config.js — before
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     theme: {
       extend: {
         colors: { cream: "#F2EDE4", /* … */ },
         fontFamily: { sans: ["Geist", /* … */] },
         /* etc. */
       },
     },
   };

   // tailwind.config.js — after
   import vellumPreset from "./.claude/kits/vellum/tailwind-preset.js";
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     presets: [vellumPreset],
     content: [
       "./src/**/*.{js,ts,jsx,tsx,mdx}",
       "./.claude/kits/vellum/src/**/*.{js,ts,jsx,tsx}",
     ],
     // Only project-specific extensions stay here — anything that
     // matches the kit defaults is removed.
   };
   ```

3. **Replace inline `--vellum-*` (or `--ft-*`) CSS variable
   definitions** in your `globals.css` with the kit's default-theme
   import:

   ```css
   /* globals.css — before */
   :root {
     --vellum-cream: #f2ede4;
     /* … */
   }

   /* globals.css — after */
   @import "@local/vellum-kit/default-theme.css";
   ```

   Override individual vars after the import if you need a different
   brand color.

4. **In v0.3 (forthcoming):** collapse `src/components/ui/*` to thin
   re-exports from `@local/vellum-kit/components/*`. Specforge's
   migration will land first and serves as the worked example.

### Mapping table — old token names → new

The kit's CSS variables use the `--vellum-*` prefix to disambiguate
from other kits' tokens (`--ft-*` for backlog-kit, etc.). If your
project already uses a different prefix (e.g. specforge uses `--ft-*`
for the overlap with backlog-kit), keep both prefixes side-by-side
during the migration window:

```css
@import "@local/vellum-kit/default-theme.css";

/* Bridge: alias old --ft-* names to the new --vellum-* canonical
 * values until every call site is migrated. */
:root {
  --ft-surface: var(--vellum-cream);
  --ft-card: var(--vellum-card);
  --ft-ink: var(--vellum-ink);
  --ft-accent: var(--vellum-orange);
  /* etc. */
}
```
