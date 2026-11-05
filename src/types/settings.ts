import type { ThemeId } from "./theme";

// What the user picked in settings; "system" resolves via prefers-color-scheme.
export type ThemePreference = "system" | ThemeId;

// "auto" follows the screen: narrow screens lay trees out left-to-right.
export type OrientationSetting = "auto" | "tb" | "lr";

// How family-mode edges are drawn. Fan edges and the lineage dash are
// always bezier — they were designed around curved paths.
export type EdgeStyle = "bezier" | "straight" | "orthogonal";
