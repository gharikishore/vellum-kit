# Adopting vellum-kit in a fresh project

**v0.2.1 — tokens + Tailwind preset + 17 UI primitives.** Specforge is the canonical consumer (`src/components/ui/*` re-export shims); hmbr-starter consumes for its admin chrome.

The 5-step quick start in the [README](../README.md#quick-start) is the complete adoption guide:

1. `git submodule add`
2. Wire the `@local/vellum-kit` tsconfig path alias
3. Apply `vellumPreset` in `tailwind.config.js`
4. `@import "@local/vellum-kit/default-theme.css"` in your `globals.css`
5. Use the tokens via Tailwind utilities, CSS vars, or JS constants

## Naming convention (Vellum is the platform default)

This kit is the **default platform feel** in the HmBr kit family, so it owns the unprefixed Tailwind utilities — `font-display`, `font-sans`, `font-mono`. Every other brand kit (`hmbropen-kit`, future `hmbrclubs-kit`, etc.) namespaces its fonts under its own slug to avoid colliding with vellum's defaults.

Full convention codified in `~/.claude/CLAUDE.md` → "Naming convention for multi-kit coexistence." Originating intake: `hmbr-starter#86 KIT-NAMING-CONVENTION`.

### What THIS kit owns

| Layer | Namespace | Examples |
|---|---|---|
| **Font slug** | (unprefixed — Vellum is the default) | `font-display` (Fraunces), `font-sans` (Geist), `font-mono` (JetBrains) |
| **Colors** | (specific names) | `bg-cream`, `text-ink`, `bg-card`, `border-hair`, `border-hair-strong`, `bg-orange`, `bg-navy`, `bg-gold`, `bg-dust`, `text-success`, `text-warning-fg` |
| **CSS variables** | `--vellum-*` | `--vellum-cream`, `--vellum-ink`, `--vellum-orange`, `--vellum-shadow-kit`, etc. |
| **Radii / shadows / letter-spacing** | (unprefixed) | `rounded-kit-sm` / `rounded-kit` / `rounded-kit-lg`, `shadow-kit-soft` / `shadow-kit`, `tracking-kicker` |

When a consumer loads vellum-kit alongside another brand kit (e.g. hmbr-starter loads both vellum + hmbropen), every other kit's tokens are namespaced — so vellum's defaults always win for unprefixed names.

### Updating after upstream changes

```bash
git -C .claude/kits/vellum fetch origin main
git -C .claude/kits/vellum checkout main
git -C .claude/kits/vellum pull
git add .claude/kits/vellum
git commit -m "bump vellum-kit submodule to <sha>"
```

Vercel deploys auto-clone submodules at build time. No extra config.
