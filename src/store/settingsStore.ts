import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type {
  EdgeStyle,
  OrientationSetting,
  ThemePreference,
} from "@/types";

export const SETTINGS_STORAGE_KEY = "best-family-tree-settings";

// The theme used to live under its own key before settings existed.
const LEGACY_THEME_KEY = "best-family-tree-theme";

interface SettingsState {
  theme: ThemePreference;
  orientation: OrientationSetting;
  edgeStyle: EdgeStyle;
}

interface SettingsActions {
  setTheme: (theme: ThemePreference) => void;
  setOrientation: (orientation: OrientationSetting) => void;
  setEdgeStyle: (edgeStyle: EdgeStyle) => void;
  resetSettings: () => void;
}

export const DEFAULT_SETTINGS: SettingsState = {
  theme: "system",
  orientation: "auto",
  edgeStyle: "bezier",
};

const readLegacyTheme = (): ThemePreference | null => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(LEGACY_THEME_KEY);
  if (stored === "light" || stored === "dark") {
    localStorage.removeItem(LEGACY_THEME_KEY);
    return stored;
  }
  return null;
};

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,

      setTheme: (theme) => set({ theme }),
      setOrientation: (orientation) => set({ orientation }),
      setEdgeStyle: (edgeStyle) => set({ edgeStyle }),
      resetSettings: () => set(DEFAULT_SETTINGS),
    }),
    {
      name: SETTINGS_STORAGE_KEY,
      version: 1,
      // Explicit so the store does not depend on `window` existing.
      storage: createJSONStorage(() => localStorage),
      partialize: ({ theme, orientation, edgeStyle }) => ({
        theme,
        orientation,
        edgeStyle,
      }),
      merge: (persisted, current) => {
        const stored = (persisted ?? {}) as Partial<SettingsState>;
        const state = { ...current, ...stored };
        if (!stored.theme) {
          state.theme = readLegacyTheme() ?? state.theme;
        }
        return state;
      },
    },
  ),
);
