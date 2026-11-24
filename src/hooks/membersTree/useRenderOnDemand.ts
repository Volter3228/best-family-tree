import { useEffect } from "react";
import { Culler, UPDATE_PRIORITY } from "pixi.js";
import { useApplication } from "@pixi/react";
import gsap from "gsap";
import { useTreeStore } from "@/store/treeStore";
import { useMembersStore } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useSettingsStore } from "@/store/settingsStore";
import { requestCanvasRender, shouldRenderFrame } from "@/utils";

const WAKE_EVENTS = [
  "pointerdown",
  "pointermove",
  "pointerup",
  "wheel",
  "keydown",
  "resize",
  "focus",
] as const;

const hasRunningTween = () =>
  gsap.globalTimeline
    .getChildren(false, true, true)
    .some((animation) => animation.isActive());

const wake = () => requestCanvasRender();

// Replaces Pixi's every-frame render with one that draws only while the scene
// may change (see renderDemand), and culls the viewport's contents on the
// frames it draws. Pixi's Culler compares a node's `cullArea` with the view
// rectangle as is (no transform), so node cull areas must be in world
// coordinates, the same space as `getVisibleBounds()`.
export const useRenderOnDemand = () => {
  const { app, isInitialised } = useApplication();

  useEffect(() => {
    if (!isInitialised) return;
    const { ticker } = app;

    const callbacks = ticker.count;
    ticker.remove(app.render, app);
    // Pixi's render callback not found: leave its loop as is, only cull.
    const ownsRender = ticker.count < callbacks;

    let lastRenderAt = -Infinity;
    let renderThisFrame = true;
    let lastX = NaN;
    let lastY = NaN;
    let lastScale = NaN;

    // High priority: the scene's own tickers read `culled`.
    const beforeFrame = () => {
      const now = performance.now();
      const { viewport } = useTreeStore.getState();
      const live = viewport && !viewport.destroyed ? viewport : null;
      if (
        live &&
        (live.x !== lastX || live.y !== lastY || live.scale.x !== lastScale)
      ) {
        lastX = live.x;
        lastY = live.y;
        lastScale = live.scale.x;
        requestCanvasRender(now);
      }
      if (hasRunningTween()) requestCanvasRender(now);

      renderThisFrame = !ownsRender || shouldRenderFrame(now, lastRenderAt);
      if (!renderThisFrame) return;
      lastRenderAt = now;
      if (live) Culler.shared.cull(live, live.getVisibleBounds(), true);
    };
    const render = () => {
      if (renderThisFrame) app.render();
    };

    ticker.add(beforeFrame, undefined, UPDATE_PRIORITY.HIGH);
    if (ownsRender) ticker.add(render, undefined, UPDATE_PRIORITY.LOW);

    WAKE_EVENTS.forEach((type) =>
      window.addEventListener(type, wake, { passive: true }),
    );
    const unsubscribes = [
      useTreeStore.subscribe(wake),
      useMembersStore.subscribe(wake),
      useFiltersStore.subscribe(wake),
      useSettingsStore.subscribe(wake),
    ];
    wake();

    return () => {
      ticker.remove(beforeFrame);
      if (ownsRender) {
        ticker.remove(render);
        ticker.add(app.render, app, UPDATE_PRIORITY.LOW);
      }
      WAKE_EVENTS.forEach((type) => window.removeEventListener(type, wake));
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [app, isInitialised]);
};
