import { beforeEach, describe, expect, it, vi } from "vitest";

const { storageMock } = vi.hoisted(() => {
  const data = new Map<string, string>();
  const storageMock = {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, String(v)),
    removeItem: (k: string) => void data.delete(k),
    clear: () => data.clear(),
    get length() {
      return data.size;
    },
    key: (i: number) => [...data.keys()][i] ?? null,
  };
  Object.defineProperty(globalThis, "localStorage", {
    value: storageMock,
    writable: true,
  });
  return { storageMock };
});

import {
  DEFAULT_SETTINGS,
  SETTINGS_STORAGE_KEY,
  useSettingsStore,
} from "./settingsStore";

const initialState = useSettingsStore.getState();

beforeEach(() => {
  useSettingsStore.setState(initialState, true);
  storageMock.clear();
});

describe("settingsStore", () => {
  it("starts with default settings", () => {
    const state = useSettingsStore.getState();
    expect(state.theme).toBe(DEFAULT_SETTINGS.theme);
    expect(state.orientation).toBe(DEFAULT_SETTINGS.orientation);
    expect(state.edgeStyle).toBe(DEFAULT_SETTINGS.edgeStyle);
  });

  it("updates individual settings", () => {
    useSettingsStore.getState().setTheme("dark");
    useSettingsStore.getState().setOrientation("lr");
    useSettingsStore.getState().setEdgeStyle("orthogonal");

    const state = useSettingsStore.getState();
    expect(state.theme).toBe("dark");
    expect(state.orientation).toBe("lr");
    expect(state.edgeStyle).toBe("orthogonal");
  });

  it("resets all settings to defaults", () => {
    useSettingsStore.getState().setTheme("dark");
    useSettingsStore.getState().setEdgeStyle("straight");

    useSettingsStore.getState().resetSettings();

    const state = useSettingsStore.getState();
    expect(state.theme).toBe("system");
    expect(state.orientation).toBe("auto");
    expect(state.edgeStyle).toBe("bezier");
  });

  it("persists settings to localStorage", () => {
    useSettingsStore.getState().setTheme("dark");
    useSettingsStore.getState().setOrientation("lr");

    const raw = storageMock.getItem(SETTINGS_STORAGE_KEY);
    expect(raw).not.toBeNull();
    const persisted = JSON.parse(raw!);
    expect(persisted.state.theme).toBe("dark");
    expect(persisted.state.orientation).toBe("lr");
    // Actions must never be persisted.
    expect(persisted.state.setTheme).toBeUndefined();
    expect(persisted.version).toBe(1);
  });
});
