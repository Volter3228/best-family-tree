"use client";

import { useMemo } from "react";
import { FillGradient, TextStyleOptions } from "pixi.js";
import { useTheme } from "@/context/ThemeContext";
import type { CanvasThemeTokens } from "@/types";
import {
  NODE_TITLE_STYLE,
  NODE_SUBTITLE_STYLE,
  NODE_TOOLTIP_TEXT_STYLE,
} from "@/constants/canvas";

export interface CanvasTextStyles {
  title: TextStyleOptions;
  subtitle: TextStyleOptions;
  tooltip: TextStyleOptions;
  placeholderInitials: TextStyleOptions;
}

export interface CanvasColors {
  surface: string;
  accent: CanvasThemeTokens["accent"];
  surfaceAccent: CanvasThemeTokens["surfaceAccent"];
  accentColors: readonly [string, string, string];
  surfaceAccentColors: readonly [string, string, string];
  primaryGradient: FillGradient;
  primaryGradientToTopRight: FillGradient;
  text: CanvasThemeTokens["text"];
  placeholder: CanvasThemeTokens["placeholder"];
  textStyles: CanvasTextStyles;
  cardStroke: string;
  cardStrokeAlpha: number;
  edgeColor: string;
  edgeAlpha: number;
}

const buildCanvasColors = (canvas: CanvasThemeTokens): CanvasColors => {
  const { accent, surfaceAccent, text, placeholder } = canvas;

  const accentColors = [accent.blue, accent.green, accent.orange] as const;

  const surfaceAccentColors = [
    surfaceAccent.blue,
    surfaceAccent.green,
    surfaceAccent.orange,
  ] as const;

  const colorStops = [
    { offset: 0, color: accent.blue },
    { offset: 0.5, color: accent.green },
    { offset: 1, color: accent.orange },
  ];

  const primaryGradient = new FillGradient({
    type: "linear",
    colorStops,
  });

  const primaryGradientToTopRight = new FillGradient({
    type: "linear",
    colorStops,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  });

  const textStyles: CanvasTextStyles = {
    title: { ...NODE_TITLE_STYLE, fill: text.title },
    subtitle: { ...NODE_SUBTITLE_STYLE, fill: text.subtitle },
    tooltip: { ...NODE_TOOLTIP_TEXT_STYLE, fill: text.tooltip },
    placeholderInitials: {
      fontFamily: "Nunito",
      fontSize: 64,
      fill: placeholder.initials,
    },
  };

  return {
    surface: canvas.surface,
    accent,
    surfaceAccent,
    accentColors,
    surfaceAccentColors,
    primaryGradient,
    primaryGradientToTopRight,
    text,
    placeholder,
    textStyles,
    cardStroke: canvas.cardStroke,
    cardStrokeAlpha: canvas.cardStrokeAlpha,
    edgeColor: canvas.edgeColor,
    edgeAlpha: canvas.edgeAlpha,
  };
};

export const useCanvasTheme = (): CanvasColors => {
  const { canvas } = useTheme();
  return useMemo(() => buildCanvasColors(canvas), [canvas]);
};
