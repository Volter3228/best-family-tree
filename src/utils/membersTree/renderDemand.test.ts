import { beforeEach, describe, expect, it } from "vitest";
import {
  IDLE_RENDER_INTERVAL_MS,
  RENDER_ACTIVE_MS,
  requestCanvasRender,
  resetRenderDemand,
  shouldRenderFrame,
} from "./renderDemand";

describe("render demand", () => {
  beforeEach(resetRenderDemand);

  it("renders every frame for a while after a request", () => {
    requestCanvasRender(1000);
    expect(shouldRenderFrame(1000, 999)).toBe(true);
    expect(
      shouldRenderFrame(
        1000 + RENDER_ACTIVE_MS - 1,
        1000 + RENDER_ACTIVE_MS - 2,
      ),
    ).toBe(true);
  });

  it("skips frames once idle, except for the periodic safety render", () => {
    requestCanvasRender(1000);
    const idle = 1000 + RENDER_ACTIVE_MS;
    expect(shouldRenderFrame(idle, idle - 16)).toBe(false);
    expect(shouldRenderFrame(idle + IDLE_RENDER_INTERVAL_MS, idle)).toBe(true);
  });

  it("an earlier request never shortens a later one", () => {
    requestCanvasRender(5000);
    requestCanvasRender(1000);
    expect(
      shouldRenderFrame(
        5000 + RENDER_ACTIVE_MS - 1,
        5000 + RENDER_ACTIVE_MS - 2,
      ),
    ).toBe(true);
  });
});
