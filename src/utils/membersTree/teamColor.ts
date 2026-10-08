import { Color } from "pixi.js";
import type { TeamFrame } from "@/types";
import { hashString } from "../strings";

export const mixColors = (a: string, b: string, weightA: number) => {
  const [ar, ag, ab] = new Color(a).toRgbArray();
  const [br, bg, bb] = new Color(b).toRgbArray();
  const w = weightA;
  return new Color([
    ar * w + br * (1 - w),
    ag * w + bg * (1 - w),
    ab * w + bb * (1 - w),
  ]).toHex();
};

const linearize = (channel: number) =>
  channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;

const getRelativeLuminance = (color: string) => {
  const [r, g, b] = new Color(color).toRgbArray().map(linearize);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// WCAG contrast ratio between two colours (1..21).
export const getContrastRatio = (a: string, b: string) => {
  const [hi, lo] = [getRelativeLuminance(a), getRelativeLuminance(b)].sort(
    (x, y) => y - x,
  );
  return (hi + 0.05) / (lo + 0.05);
};

// Team type colour, or a stable accent fallback when it is missing/invalid.
export const resolveTeamColor = (
  frame: Pick<TeamFrame, "color" | "teamTypeId" | "teamId">,
  accentColors: readonly string[],
) =>
  frame.color && Color.isColorLike(frame.color)
    ? frame.color
    : accentColors[
    hashString(frame.teamTypeId ?? frame.teamId) % accentColors.length
    ];

// Same tinted background PositionBadge uses in the sidebar.
export const getTeamBadgeBackground = (color: string, isDark: boolean) =>
  mixColors(color, isDark ? "#1f2937" : "#ffffff", isDark ? 0.28 : 0.14);

// Text colour for badges: accent pulled toward the foreground.
export const getTeamBadgeText = (color: string, foreground: string) =>
  mixColors(color, foreground, 0.3);

// Keep `color` if it reads on `background`, else blend it toward `foreground`
// just enough to reach `minContrast`.
export const getReadableColor = (
  color: string,
  background: string,
  foreground: string,
  minContrast = 4.5,
) => {
  for (const weight of [1, 0.8, 0.6, 0.4, 0.2, 0]) {
    const candidate =
      weight === 1 ? color : mixColors(color, foreground, weight);
    if (getContrastRatio(candidate, background) >= minContrast) {
      return candidate;
    }
  }
  return foreground;
};
