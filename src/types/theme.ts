export type ThemeId = "light" | "dark";

export type AccentColor = "blue" | "green" | "orange";

// CSS-side theme tokens (applied as CSS custom properties on :root / [data-theme])
export interface CssThemeTokens {
  foreground: string;
  surface: string;
  backgroundBase: string;
  placeholder: string;
  primaryGradientStart: string;
  primaryGradientMiddle: string;
  primaryGradientEnd: string;
  accentBlue: string;
  accentGreen: string;
  accentOrange: string;
  surfaceBlue: string;
  surfaceGreen: string;
  surfaceOrange: string;
}

// Canvas-side theme tokens (consumed by PixiJS via React context)
export interface CanvasThemeTokens {
  accent: { blue: string; green: string; orange: string };
  surfaceAccent: { blue: string; green: string; orange: string };
  surface: string;
  text: { title: string; subtitle: string; tooltip: string };
  placeholder: { initials: string };
  cardStroke: string;
  cardStrokeAlpha: number;
  edgeColor: string;
  edgeAlpha: number;
}

export interface ThemeDefinition {
  id: ThemeId;
  css: CssThemeTokens;
  canvas: CanvasThemeTokens;
}
