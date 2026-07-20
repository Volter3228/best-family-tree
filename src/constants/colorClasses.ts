import type { AccentColor } from "@/types";

interface ColorClasses {
  text: string;
  afterText: string;
  hoverText: string;
  hoverTextAccent: string;
  accentBg: string;
  surfaceBg: string;
  hoverAccentBg: string;
  hoverSurfaceBg: string;
  border: string;
  accentRing: string;
  surfaceRing: string;
  caret: string;
  fill: string;
  dropShadow: string;
}

// NOTE: Tailwind's JIT scanner only picks up class names it can see as
// literal strings in source, so every value below must be spelled out in
// full (no `text-accent-${color}` interpolation). This record is the single
// source of truth — access it via `COLOR_CLASSES[color].bg`, `COLOR_CLASSES[color].text`, etc.
export const COLOR_CLASSES: Record<AccentColor, ColorClasses> = {
  blue: {
    text: "text-accent-blue",
    afterText: "after:text-accent-blue",
    hoverText: "hover:text-surface-blue",
    hoverTextAccent: "hover:text-accent-blue",
    accentBg: "bg-accent-blue",
    hoverAccentBg: "hover:bg-accent-blue/80",
    hoverSurfaceBg: "hover:bg-accent-blue/10",
    border: "border-accent-blue",
    surfaceBg: "bg-surface-blue",
    accentRing: "focus:ring-accent-blue",
    surfaceRing: "focus:ring-surface-blue",
    caret: "caret-accent-blue",
    fill: "fill-accent-blue",
    dropShadow: "drop-shadow-accent-blue",
  },
  green: {
    text: "text-accent-green",
    afterText: "after:text-accent-green",
    hoverText: "hover:text-surface-green",
    hoverTextAccent: "hover:text-accent-green",
    accentBg: "bg-accent-green",
    hoverAccentBg: "hover:bg-accent-green/50",
    hoverSurfaceBg: "hover:bg-accent-green/10",
    border: "border-accent-green",
    surfaceBg: "bg-surface-green",
    accentRing: "focus:ring-accent-green",
    surfaceRing: "focus:ring-surface-green",
    caret: "caret-accent-green",
    fill: "fill-accent-green",
    dropShadow: "drop-shadow-accent-green",
  },
  orange: {
    text: "text-accent-orange",
    afterText: "after:text-accent-orange",
    hoverText: "hover:text-surface-orange",
    hoverTextAccent: "hover:text-accent-orange",
    accentBg: "bg-accent-orange",
    hoverAccentBg: "hover:bg-accent-orange/50",
    hoverSurfaceBg: "hover:bg-accent-orange/10",
    border: "border-accent-orange",
    surfaceBg: "bg-surface-orange",
    accentRing: "focus:ring-accent-orange",
    surfaceRing: "focus:ring-surface-orange",
    caret: "caret-accent-orange",
    fill: "fill-accent-orange",
    dropShadow: "drop-shadow-accent-orange",
  },
};
