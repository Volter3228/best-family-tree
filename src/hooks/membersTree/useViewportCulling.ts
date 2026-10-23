import { useEffect } from "react";
import { Culler, UPDATE_PRIORITY } from "pixi.js";
import { useApplication } from "@pixi/react";
import { useTreeStore } from "@/store/treeStore";

// Culls the viewport's contents against the part of the world on screen.
// Pixi's Culler compares a node's `cullArea` with the view rectangle as is
// (no transform), so node cull areas must be in world coordinates, the same
// space as `getVisibleBounds()`. Runs before the render (low priority).
export const useViewportCulling = () => {
  const { app, isInitialised } = useApplication();

  useEffect(() => {
    if (!isInitialised) return;

    const cull = () => {
      const viewport = useTreeStore.getState().viewport;
      if (!viewport || viewport.destroyed) return;
      Culler.shared.cull(viewport, viewport.getVisibleBounds(), true);
    };

    app.ticker.add(cull, undefined, UPDATE_PRIORITY.HIGH);
    return () => {
      app.ticker.remove(cull);
    };
  }, [app, isInitialised]);
};
