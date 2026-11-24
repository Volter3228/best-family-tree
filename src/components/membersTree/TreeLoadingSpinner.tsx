"use client";

import { useEffect } from "react";
import BrandSpinner from "@/components/ui/BrandSpinner";
import { useTreeStore } from "@/store/treeStore";
import { useTreeLoadingStore } from "@/store/treeLoadingStore";

const EXIT_DELAY_MS = 400;
const EXIT_MS = 1100;

type TreeState = ReturnType<typeof useTreeStore.getState>;

const isTreeReady = (s: TreeState) =>
  s.layoutMode !== null || s.nodes.length > 0;

// Lives outside the tree's Suspense boundary, so the same spinner keeps
// playing from the first paint until the tree is drawn (a spinner swapped in
// with the data would restart its animation).
const TreeLoadingSpinner = () => {
  const phase = useTreeLoadingStore((s) => s.phase);
  const setPhase = useTreeLoadingStore((s) => s.setPhase);

  useEffect(() => {
    if (phase !== "loading") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const exitWhenReady = () => {
      if (!isTreeReady(useTreeStore.getState())) return;
      unsubscribe();
      timers.push(setTimeout(() => setPhase("exiting"), EXIT_DELAY_MS));
      timers.push(setTimeout(() => setPhase("done"), EXIT_DELAY_MS + EXIT_MS));
    };
    const unsubscribe = useTreeStore.subscribe(exitWhenReady);
    exitWhenReady();
    return () => {
      unsubscribe();
      timers.forEach(clearTimeout);
    };
  }, [phase, setPhase]);

  if (phase === "done") return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
      <BrandSpinner
        exiting={phase === "exiting"}
        className="aspect-square w-[min(70vw,30rem)]"
      />
    </div>
  );
};

export default TreeLoadingSpinner;
