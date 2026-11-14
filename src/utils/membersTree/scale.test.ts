import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  AVATAR_LOW_RES_SIZE,
  NODE_AVATAR_SIZE,
} from "@/constants/canvas";
import { shouldKeepSharpAvatars, shouldUpgradeAvatars } from "./scale";

const originalWindow = globalThis.window;

beforeEach(() => {
  Object.defineProperty(globalThis, "window", {
    value: { devicePixelRatio: 1 },
    configurable: true,
  });
});

afterEach(() => {
  Object.defineProperty(globalThis, "window", {
    value: originalWindow,
    configurable: true,
  });
});

describe("sharp avatar thresholds", () => {
  const upgradeScale = AVATAR_LOW_RES_SIZE / NODE_AVATAR_SIZE;

  it("upgrades only once the small texture would be upscaled", () => {
    expect(shouldUpgradeAvatars(upgradeScale * 0.99)).toBe(false);
    expect(shouldUpgradeAvatars(upgradeScale * 1.01)).toBe(true);
  });

  it("keeps sharp avatars below the upgrade point, down to half of it", () => {
    expect(shouldKeepSharpAvatars(upgradeScale * 0.75)).toBe(true);
    expect(shouldKeepSharpAvatars(upgradeScale * 0.49)).toBe(false);
  });

  it("never upgrades where it would not keep", () => {
    for (const s of [0.1, 0.3, 0.5, 0.7, 1, 2]) {
      if (shouldUpgradeAvatars(s)) expect(shouldKeepSharpAvatars(s)).toBe(true);
    }
  });
});
