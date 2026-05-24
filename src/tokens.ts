// @gharikishore/vellum-kit/tokens — TypeScript exports of every visual
// token. Use these for ad-hoc JS reference (inline styles, CSS-in-JS,
// chart libraries) where the Tailwind utilities aren't accessible.
//
// Single source of truth: this file mirrors tailwind-preset.js +
// default-theme.css. Keep all three in sync when adding a token.

export const colors = {
  // Surfaces
  cream: "#F2EDE4",
  card: "#FAF6EE",
  // Foreground
  ink: "#1A1814",
  textMuted: "#3A3934",
  textSoft: "#5A5750",
  // Hairlines
  hair: "rgba(26,24,20,0.12)",
  hairStrong: "rgba(26,24,20,0.2)",
  // Accents
  orange: "#C5421B",
  orangeRing: "rgba(197,66,27,0.3)",
  navy: "#1F3A5C",
  navySoft: "#3A6E9C",
  gold: "#B8964F",
  dust: "#A05A5A",
  // Status
  success: "#226633",
  successOn: "#FFFFFF",
  warningFg: "#7A6638",
  errorBg: "#FDE7E7",
  errorFg: "#7A1F1F",
} as const;

export const fontFamilies = {
  sans: ['"Geist"', "system-ui", "sans-serif"].join(", "),
  display: ['"Fraunces"', "serif"].join(", "),
  mono: ['"JetBrains Mono"', "monospace"].join(", "),
} as const;

export const radii = {
  kitSm: "4px",
  kit: "6px",
  kitLg: "8px",
} as const;

export const shadows = {
  kitSoft: "0 1px 0 rgba(26,24,20,0.04)",
  kit: "0 1px 2px rgba(26,24,20,0.06), 0 8px 24px rgba(26,24,20,0.10)",
  modal: "0 24px 60px rgba(0,0,0,0.35)",
} as const;

export const letterSpacing = {
  kicker: "0.18em",
} as const;
