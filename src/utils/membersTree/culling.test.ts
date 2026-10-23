import { describe, expect, it } from "vitest";
import { Container, Culler, Rectangle } from "pixi.js";

// The app relies on Pixi comparing `cullArea` with the view as is, so cull
// areas are world-space. If a Pixi upgrade changes that, this fails.
describe("Pixi Culler contract", () => {
  const view = new Rectangle(0, 0, 1000, 800);

  const cullNodeAt = (x: number, area: Rectangle) => {
    const stage = new Container();
    const node = new Container({ x, y: 0 });
    node.cullable = true;
    node.cullArea = area;
    stage.addChild(node);
    Culler.shared.cull(stage, view, true);
    return node.culled;
  };

  it("culls a far-away node whose cullArea is in world space", () => {
    expect(cullNodeAt(50000, new Rectangle(50000, 0, 240, 300))).toBe(true);
  });

  it("keeps an on-screen node visible", () => {
    expect(cullNodeAt(100, new Rectangle(100, 0, 240, 300))).toBe(false);
  });

  it("does not transform cullArea by the node position", () => {
    expect(cullNodeAt(50000, new Rectangle(0, 0, 240, 300))).toBe(false);
  });
});
