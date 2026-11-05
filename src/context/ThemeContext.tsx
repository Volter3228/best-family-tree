"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { THEMES } from "@/constants/theme";
import { useMediaQuery } from "@/hooks";
import { useSettingsStore } from "@/store/settingsStore";
import type {
  ThemeId,
  ThemePreference,
  CanvasThemeTokens,
  ThemeDefinition,
} from "@/types";
import { camelToCssVar } from "@/utils";

interface ThemeContextValue {
  themePreference: ThemePreference;
  themeId: ThemeId;
  canvas: CanvasThemeTokens;
  setTheme: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";

const applyCssTokens = (theme: ThemeDefinition) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme.id);

  const { css } = theme;
  for (const [key, value] of Object.entries(css)) {
    root.style.setProperty(camelToCssVar(key), value);
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themePreference = useSettingsStore((s) => s.theme);
  const setTheme = useSettingsStore((s) => s.setTheme);
  const systemDark = useMediaQuery(SYSTEM_DARK_QUERY);

  // "system" follows the OS; without matchMedia it resolves to light.
  const themeId: ThemeId =
    themePreference === "system"
      ? systemDark
        ? "dark"
        : "light"
      : themePreference;

  const isFirstRender = useRef(true);
  useEffect(() => {
    const apply = () => applyCssTokens(THEMES[themeId]);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      apply();
      return;
    }
    // View Transitions cross-fade the whole page (canvas included); browsers
    // without the API just swap the tokens instantly. A hidden tab can make
    // the API throw or abort the transition mid-flight — the tokens still
    // apply, only the animation is skipped, so rejections are swallowed.
    if ("startViewTransition" in document) {
      try {
        const transition = document.startViewTransition(apply);
        transition.ready.catch(() => {});
        transition.finished.catch(() => {});
      } catch {
        apply();
      }
    } else {
      apply();
    }
  }, [themeId]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      themePreference,
      themeId,
      canvas: THEMES[themeId].canvas,
      setTheme,
    }),
    [themePreference, themeId, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
