"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { THEMES, DEFAULT_THEME } from "@/constants/theme";
import type { ThemeId, CanvasThemeTokens, ThemeDefinition } from "@/types";
import { camelToCssVar } from "@/utils";

interface ThemeContextValue {
  themeId: ThemeId;
  canvas: CanvasThemeTokens;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "best-family-tree-theme";

const applyCssTokens = (theme: ThemeDefinition) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme.id);

  const { css } = theme;
  for (const [key, value] of Object.entries(css)) {
    root.style.setProperty(camelToCssVar(key), value);
  }
};

const getStoredTheme = (): ThemeId => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored in THEMES) return stored as ThemeId;
  return DEFAULT_THEME;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStoredTheme();
    setThemeId(stored);
    applyCssTokens(THEMES[stored]);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
    localStorage.setItem(STORAGE_KEY, id);
    applyCssTokens(THEMES[id]);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      themeId,
      canvas: THEMES[themeId].canvas,
      setTheme,
    }),
    [themeId, setTheme],
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
