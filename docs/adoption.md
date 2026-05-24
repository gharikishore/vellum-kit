# Adopting vellum-kit in a fresh project

**v0.1 — tokens + Tailwind preset only.** UI primitives ship in v0.2;
this doc will grow as features land.

For now, the 5-step quick start in the [README](../README.md#quick-start)
is the complete adoption guide:

1. `git submodule add`
2. Wire the `@local/vellum-kit` tsconfig path alias
3. Apply `vellumPreset` in `tailwind.config.js`
4. `@import "@local/vellum-kit/default-theme.css"` in your `globals.css`
5. Use the tokens via Tailwind utilities, CSS vars, or JS constants

### Updating after upstream changes

```bash
git -C .claude/kits/vellum fetch origin main
git -C .claude/kits/vellum checkout main
git -C .claude/kits/vellum pull
git add .claude/kits/vellum
git commit -m "bump vellum-kit submodule to <sha>"
```

Vercel deploys auto-clone submodules at build time. No extra config.

### Coming in v0.2 (UI primitives)

This section will document mounting `<Button>`, `<Lozenge>`, `<Card>`,
etc. once they ship.
