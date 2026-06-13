// @gharikishore/vellum-kit — Tailwind preset (CommonJS).
//
// CJS so legacy `tailwind.config.js` files (module.exports = …) can
// require() it directly. ESM consumers can dynamic-import or use the
// `tailwind-preset` package export.
//
// Consumers wire this in their tailwind.config.js:
//
//   const vellumPreset = require("./.claude/kits/vellum/tailwind-preset.cjs");
//   /** @type {import('tailwindcss').Config} */
//   module.exports = {
//     presets: [vellumPreset],
//     content: [
//       "./src/**/*.{js,ts,jsx,tsx,mdx}",
//       "./.claude/kits/vellum/src/**/*.{js,ts,jsx,tsx}",
//       // …plus any other kits' content paths
//     ],
//   };
//
// What you get:
//   - cream / card / ink / orange / navy / gold / dust palette
//   - hair / hair-strong hairline borders for soft dividers
//   - kit-sm / kit / kit-lg border-radius scale
//   - kit-soft / kit box-shadow scale
//   - sans (Geist) / display (Fraunces) / mono (JetBrains Mono) font families
//   - kicker letter-spacing token for small uppercase mono labels
//
// All tokens map 1:1 to specforge's pre-extraction tailwind.config.js
// (see docs/design-history.md for the value provenance).

/** @type {Partial<import('tailwindcss').Config>} */
const preset = {
  theme: {
    extend: {
      colors: {
        // ── Brand surface + ink ────────────────────────────────
        cream: "#F2EDE4",
        card: "#FAF6EE",
        ink: "#1A1814",
        // ── Accents ──────────────────────────────────────────
        orange: "#C5421B",
        navy: "#1F3A5C",
        // Lighter navy for in-progress / "being built" states.
        // Distinct from navy so pulse animations read cleanly.
        "navy-soft": "#3A6E9C",
        gold: "#B8964F",
        // Dusty red-brown for "not applicable" / disabled states.
        // Distinct from `orange` (action) and `warning-fg` (advisory).
        dust: "#A05A5A",
        // ── Status tones ────────────────────────────────────
        // Use with opacity modifiers (e.g. bg-success/10).
        // fg variants are pre-darkened for readable text on washed bgs.
        success: "#226633",
        "warning-fg": "#7a6638",
        // ── Hairlines ───────────────────────────────────────
        hair: "rgba(26,24,20,0.12)",
        "hair-strong": "rgba(26,24,20,0.2)",
      },
      fontFamily: {
        // Default body for working surfaces.
        sans: ["Geist", "system-ui", "sans-serif"],
        // Marketing/editorial only (homepage, /handbook, landing).
        display: ["Fraunces", "serif"],
        // Metadata strips, eyebrows, numbers.
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        // Vellum defaults — use these instead of Tailwind's stock rounded-md/lg.
        "kit-sm": "4px",
        kit: "6px",
        "kit-lg": "8px",
      },
      boxShadow: {
        // Ultra-quiet 1px-hairline — rarely needed since `shadow-kit` reads
        // as the default raised state for boxes.
        "kit-soft": "0 1px 0 rgba(26,24,20,0.04)",
        // Two-layer "Atlassian/Linear" shadow: crisp close shadow + soft
        // ambient. Default for every <Card>.
        kit: "0 1px 2px rgba(26,24,20,0.06), 0 8px 24px rgba(26,24,20,0.10)",
      },
      letterSpacing: {
        // Single canonical tracking for ALL small-uppercase mono labels
        // (eyebrows, kickers, lozenges, action chips, breadcrumbs).
        // See docs/design-history.md for the kicker/eyebrow reconciliation
        // (specforge intake #922). Tightened 0.18 -> 0.10em in #1364 to match
        // the homepage hero kicker treatment app-wide.
        kicker: "0.10em",
      },
    },
  },
};

module.exports = preset;
