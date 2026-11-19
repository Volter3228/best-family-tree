import type { Ref } from "react";
import CloseButton from "@/components/ui/CloseButton";
import {
  ArrowsPointingInIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/16/solid";
import { useT } from "@/i18n/useT";

// Theme tokens: dark glass on dark themes, light glass with dark text on light ones.
export const GLASS =
  "bg-surface/75 backdrop-blur-xl ring-1 ring-foreground/15 text-foreground shadow-lg shadow-black/20";
export const BUTTON =
  "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-foreground/60 cursor-pointer";

interface HeaderProps {
  alt: string;
  closeBtnRef: Ref<HTMLButtonElement>;
  onClose: () => void;
}

export const ViewerHeader = ({ alt, closeBtnRef, onClose }: HeaderProps) => {
  const t = useT().photoViewer;
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <span className={`rounded-full px-3 py-1.5 text-sm ${GLASS}`}>{alt}</span>
      <div className="pointer-events-auto">
        <CloseButton
          ref={closeBtnRef}
          label={t.close}
          onClick={onClose}
          className={`${BUTTON} ${GLASS}`}
        />
      </div>
    </div>
  );
};

interface ToolbarProps {
  toolbarRef: Ref<HTMLDivElement>;
  scale: number;
  scaled: boolean;
  // False while the viewer is closing: the pill must not take clicks mid-morph.
  interactive: boolean;
  onStep: (dir: 1 | -1) => void;
  onReset: () => void;
}

export const ViewerToolbar = ({
  toolbarRef,
  scale,
  scaled,
  interactive,
  onStep,
  onReset,
}: ToolbarProps) => {
  const t = useT().photoViewer;
  return (
    <div
      ref={toolbarRef}
      className="pointer-events-none absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] flex justify-center"
    >
      <div
        className={`flex items-center gap-1 rounded-full p-1 ${GLASS} ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label={t.zoomOut}
          onClick={() => onStep(-1)}
          className={BUTTON}
        >
          <MagnifyingGlassMinusIcon className="h-5 w-5" />
        </button>
        <span className="min-w-12 text-center text-sm tabular-nums">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          aria-label={t.zoomIn}
          onClick={() => onStep(1)}
          className={BUTTON}
        >
          <MagnifyingGlassPlusIcon className="h-5 w-5" />
        </button>
        {scaled && (
          <button
            type="button"
            aria-label={t.resetZoom}
            onClick={onReset}
            className={BUTTON}
          >
            <ArrowsPointingInIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};
