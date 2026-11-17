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
  softBg: string;
  softBgHover: string;
  softRing: string;
  rowHoverBg: string;
  selectedBg: string;
  selectedHoverBg: string;
  activeBg: string;
  border: string;
  accentRing: string;
  focusVisibleRing: string;
  surfaceRing: string;
  caret: string;
  fill: string;
  dropShadow: string;
  softBorder: string;
  softBorderHover: string;
  focusBorder: string;
  focusRingSoft: string;
  focusVisibleRingSoft: string;
  softBgStrongHover: string;
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
    hoverAccentBg: "hover:bg-accent-blue/50",
    hoverSurfaceBg: "hover:bg-accent-blue/10",
    softBg: "bg-accent-blue/10",
    softBgHover: "hover:bg-accent-blue/15",
    softRing: "ring-accent-blue/40",
    rowHoverBg: "hover:bg-accent-blue/10",
    selectedBg: "bg-accent-blue/15",
    selectedHoverBg: "hover:bg-accent-blue/25",
    activeBg: "bg-accent-blue/10",
    border: "border-accent-blue",
    surfaceBg: "bg-surface-blue",
    accentRing: "focus:ring-accent-blue",
    focusVisibleRing: "focus-visible:ring-accent-blue",
    surfaceRing: "focus:ring-surface-blue",
    caret: "caret-accent-blue",
    fill: "fill-accent-blue",
    dropShadow: "drop-shadow-accent-blue",
    softBorder: "border-accent-blue/30",
    softBorderHover: "hover:border-accent-blue/60",
    focusBorder: "focus:border-accent-blue",
    focusRingSoft: "focus:ring-accent-blue/20",
    focusVisibleRingSoft: "focus-visible:ring-accent-blue/60",
    softBgStrongHover: "hover:bg-accent-blue/20",
  },
  green: {
    text: "text-accent-green",
    afterText: "after:text-accent-green",
    hoverText: "hover:text-surface-green",
    hoverTextAccent: "hover:text-accent-green",
    accentBg: "bg-accent-green",
    hoverAccentBg: "hover:bg-accent-green/50",
    hoverSurfaceBg: "hover:bg-accent-green/10",
    softBg: "bg-accent-green/10",
    softBgHover: "hover:bg-accent-green/15",
    softRing: "ring-accent-green/40",
    rowHoverBg: "hover:bg-accent-green/10",
    selectedBg: "bg-accent-green/15",
    selectedHoverBg: "hover:bg-accent-green/25",
    activeBg: "bg-accent-green/10",
    border: "border-accent-green",
    surfaceBg: "bg-surface-green",
    accentRing: "focus:ring-accent-green",
    focusVisibleRing: "focus-visible:ring-accent-green",
    surfaceRing: "focus:ring-surface-green",
    caret: "caret-accent-green",
    fill: "fill-accent-green",
    dropShadow: "drop-shadow-accent-green",
    softBorder: "border-accent-green/30",
    softBorderHover: "hover:border-accent-green/60",
    focusBorder: "focus:border-accent-green",
    focusRingSoft: "focus:ring-accent-green/20",
    focusVisibleRingSoft: "focus-visible:ring-accent-green/60",
    softBgStrongHover: "hover:bg-accent-green/20",
  },
  orange: {
    text: "text-accent-orange",
    afterText: "after:text-accent-orange",
    hoverText: "hover:text-surface-orange",
    hoverTextAccent: "hover:text-accent-orange",
    accentBg: "bg-accent-orange",
    hoverAccentBg: "hover:bg-accent-orange/50",
    hoverSurfaceBg: "hover:bg-accent-orange/10",
    softBg: "bg-accent-orange/10",
    softBgHover: "hover:bg-accent-orange/15",
    softRing: "ring-accent-orange/40",
    rowHoverBg: "hover:bg-accent-orange/10",
    selectedBg: "bg-accent-orange/15",
    selectedHoverBg: "hover:bg-accent-orange/25",
    activeBg: "bg-accent-orange/10",
    border: "border-accent-orange",
    surfaceBg: "bg-surface-orange",
    accentRing: "focus:ring-accent-orange",
    focusVisibleRing: "focus-visible:ring-accent-orange",
    surfaceRing: "focus:ring-surface-orange",
    caret: "caret-accent-orange",
    fill: "fill-accent-orange",
    dropShadow: "drop-shadow-accent-orange",
    softBorder: "border-accent-orange/30",
    softBorderHover: "hover:border-accent-orange/60",
    focusBorder: "focus:border-accent-orange",
    focusRingSoft: "focus:ring-accent-orange/20",
    focusVisibleRingSoft: "focus-visible:ring-accent-orange/60",
    softBgStrongHover: "hover:bg-accent-orange/20",
  },
};
