"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/Spinner";
import { useT } from "@/i18n/useT";
import { useTreeLoadingStore } from "@/store/treeLoadingStore";

// Shown when the server could not fetch the tree (API down, database waking
// up too slowly). Retry re-runs the page's server fetch.
const TreeLoadError = () => {
  const t = useT().errors;
  const router = useRouter();
  const [isRetrying, startRetry] = useTransition();

  // No spinner over the error; a successful retry brings it back until the
  // tree is drawn.
  useEffect(() => {
    const { setPhase } = useTreeLoadingStore.getState();
    setPhase("done");
    return () => setPhase("loading");
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div
        role="alert"
        className="flex max-w-sm flex-col items-center gap-2 text-center text-foreground"
      >
        <h1 className="text-lg font-semibold">{t.treeLoadFailed}</h1>
        <p className="text-sm text-placeholder">{t.treeLoadHint}</p>
        <button
          type="button"
          onClick={() => startRetry(() => router.refresh())}
          disabled={isRetrying}
          className="mt-3 flex h-11 min-w-36 touch-manipulation items-center justify-center rounded-full bg-accent-green px-6 text-sm font-semibold text-white shadow-sm transition-[background-color,box-shadow,scale] duration-200 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-default disabled:bg-accent-green/60 disabled:shadow-none disabled:active:scale-100"
        >
          {isRetrying ? <Spinner className="h-5 w-5" /> : t.retry}
        </button>
      </div>
    </div>
  );
};

export default TreeLoadError;
