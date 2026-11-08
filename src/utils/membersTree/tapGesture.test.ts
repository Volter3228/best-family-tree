import { describe, expect, it } from "vitest";
import {
  ACCIDENTAL_DRAG_MAX_DISTANCE,
  ACCIDENTAL_DRAG_MAX_MS,
  TAP_MOVE_TOLERANCE,
} from "@/constants/canvas";
import { isTapGesture } from "./tapGesture";

describe("isTapGesture", () => {
  it("accepts a press that barely moved, however long", () => {
    expect(isTapGesture(0, 5000)).toBe(true);
    expect(isTapGesture(TAP_MOVE_TOLERANCE, 5000)).toBe(true);
  });

  it("accepts a short, quick drag", () => {
    expect(isTapGesture(15, 100)).toBe(true);
    expect(
      isTapGesture(ACCIDENTAL_DRAG_MAX_DISTANCE, ACCIDENTAL_DRAG_MAX_MS),
    ).toBe(true);
  });

  it("rejects a short but slow drag", () => {
    expect(isTapGesture(15, ACCIDENTAL_DRAG_MAX_MS + 1)).toBe(false);
  });

  it("rejects a quick but long drag", () => {
    expect(isTapGesture(ACCIDENTAL_DRAG_MAX_DISTANCE + 1, 50)).toBe(false);
  });

  it("rejects a long, slow drag", () => {
    expect(isTapGesture(300, 1500)).toBe(false);
  });
});
