import gsap from "gsap";
import type { Viewport } from "pixi-viewport";

// Single slot shared by every viewport animation (fit view, focus node, focus
// frame), so a new one always kills the previous, whichever hook started it.
let current: { timeline: gsap.core.Timeline; onKill?: () => void } | null =
  null;

export const killViewportAnimation = (viewport: Viewport) => {
  const prev = current;
  current = null;
  if (prev) {
    prev.timeline.kill();
    prev.onKill?.();
  }
  gsap.killTweensOf([viewport, viewport.scale]);
  // A fling keeps writing viewport.x/y and would fight the new tween.
  viewport.plugins.get("decelerate")?.reset();
};

export const setViewportTimeline = (
  timeline: gsap.core.Timeline,
  onKill?: () => void,
) => {
  current = { timeline, onKill };
};

export const clearViewportTimeline = (timeline: gsap.core.Timeline) => {
  if (current?.timeline === timeline) current = null;
};
