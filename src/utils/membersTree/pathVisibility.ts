import { useTreeStore } from "@/store/treeStore";
import type { PathData } from "@/types";

// World-unit slack around the path bounds for stroke width and dash caps.
const VISIBLE_MARGIN = 24;

interface Bounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}
const boundsCache = new WeakMap<PathData, Bounds>();

const pathBounds = (path: PathData): Bounds => {
  let b = boundsCache.get(path);
  if (b) return b;
  b = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  for (const seg of path.segments) {
    for (const p of seg.points) {
      if (p.x < b.minX) b.minX = p.x;
      if (p.y < b.minY) b.minY = p.y;
      if (p.x > b.maxX) b.maxX = p.x;
      if (p.y > b.maxY) b.maxY = p.y;
    }
  }
  boundsCache.set(path, b);
  return b;
};

/** True when the whole path (plus stroke slack) is outside the viewport. */
export const isPathOffScreen = (path: PathData): boolean => {
  const viewport = useTreeStore.getState().viewport;
  if (!viewport || viewport.destroyed) return false;
  const v = viewport.getVisibleBounds();
  const b = pathBounds(path);
  return (
    b.maxX + VISIBLE_MARGIN < v.x ||
    b.minX - VISIBLE_MARGIN > v.x + v.width ||
    b.maxY + VISIBLE_MARGIN < v.y ||
    b.minY - VISIBLE_MARGIN > v.y + v.height
  );
};
