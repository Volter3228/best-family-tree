import type { ThemeId, ThemeDefinition } from "@/types";

const ACCENT_BLUE = "hsl(203 100% 43%)";
const ACCENT_GREEN = "hsl(87 75% 38%)";
const ACCENT_ORANGE = "hsl(33 100% 47%)";
const LIGHT_SURFACE_BLUE = "hsl(203 100% 97.5%)";
const LIGHT_SURFACE_GREEN = "hsl(87 74% 96.5%)";
const LIGHT_SURFACE_ORANGE = "hsl(33 99% 97.5%)";
const DARK_SURFACE_BLUE = "hsl(203 30% 18%)";
const DARK_SURFACE_GREEN = "hsl(87 20% 18%)";
const DARK_SURFACE_ORANGE = "hsl(37 25% 18%)";

// Default theme
const lightTheme: ThemeDefinition = {
  id: "light",
  css: {
    foreground: "hsl(220 39% 11%)",
    surface: "hsl(0 0% 98%)",
    backgroundBase: "hsl(210, 20%, 85%)",
    placeholder: "hsl(220 13% 65%)",
    primaryGradientStart: ACCENT_BLUE,
    primaryGradientMiddle: ACCENT_GREEN,
    primaryGradientEnd: ACCENT_ORANGE,
    accentBlue: ACCENT_BLUE,
    accentGreen: ACCENT_GREEN,
    accentOrange: ACCENT_ORANGE,
    surfaceBlue: LIGHT_SURFACE_BLUE,
    surfaceGreen: LIGHT_SURFACE_GREEN,
    surfaceOrange: LIGHT_SURFACE_ORANGE,
  },
  canvas: {
    accent: {
      blue: ACCENT_BLUE,
      green: ACCENT_GREEN,
      orange: ACCENT_ORANGE,
    },
    surfaceAccent: {
      blue: LIGHT_SURFACE_BLUE,
      green: LIGHT_SURFACE_GREEN,
      orange: LIGHT_SURFACE_ORANGE,
    },
    surface: "hsl(0, 0%, 98%)",
    text: {
      title: "#000",
      subtitle: "#666",
      tooltip: "#fafafa",
    },
    placeholder: {
      initials: "#fafafa",
    },
    cardStroke: "hsl(0, 0%, 98%)",
    cardStrokeAlpha: 0.25,
    edgeColor: "#fafafa",
    edgeAlpha: 0.7,
  },
};

// TODO: Implement dark theme
// Dark theme (placeholder — fill in real values later)

const darkTheme: ThemeDefinition = {
  id: "dark",
  css: {
    foreground: "hsl(220, 20%, 90%)",
    surface: "hsl(0, 0%, 7%)",
    backgroundBase: "hsl(257.1 87.5% 3.1%)",
    placeholder: "hsl(220, 15%, 50%)",
    primaryGradientStart: ACCENT_BLUE,
    primaryGradientMiddle: ACCENT_GREEN,
    primaryGradientEnd: ACCENT_ORANGE,
    accentBlue: ACCENT_BLUE,
    accentGreen: ACCENT_GREEN,
    accentOrange: ACCENT_ORANGE,
    surfaceBlue: DARK_SURFACE_BLUE,
    surfaceGreen: DARK_SURFACE_GREEN,
    surfaceOrange: DARK_SURFACE_ORANGE,
  },
  canvas: {
    accent: {
      blue: ACCENT_BLUE,
      green: ACCENT_GREEN,
      orange: ACCENT_ORANGE,
    },
    surfaceAccent: {
      blue: DARK_SURFACE_BLUE,
      green: DARK_SURFACE_GREEN,
      orange: DARK_SURFACE_ORANGE,
    },
    surface: "hsl(220 15% 20%)",
    text: {
      title: "#e2e8f0",
      subtitle: "#e2e8f0",
      tooltip: "#e2e8f0",
    },
    placeholder: {
      initials: "#e2e8f0",
    },
    cardStroke: "hsl(220 15% 25%)",
    cardStrokeAlpha: 0.4,
    edgeColor: "#fafafa",
    edgeAlpha: 0.7,
  },
};

export const THEMES: Record<ThemeId, ThemeDefinition> = {
  light: lightTheme,
  dark: darkTheme,
};

export const DEFAULT_THEME: ThemeId = "dark";
