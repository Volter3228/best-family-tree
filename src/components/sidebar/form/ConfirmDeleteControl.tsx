import { useEffect, useId, useRef } from "react";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";
import { useT } from "@/i18n/useT";

interface Props {
  label: string;
  // Question in the popover header; defaults to "<label>?". A blocked state
  // always says "Can't delete" (formCommon.cantDelete).
  title?: string;
  message: string;
  isConfirming: boolean;
  isSubmitting: boolean;
  // When set, deletion is not allowed: the button still opens the panel, but
  // it only explains what has to happen first.
  blockedReason?: string | null;
  onAsk: (isConfirming: boolean) => void;
  onConfirm: () => void;
}

// Two-step destructive action. The trigger is a round trash button that sits
// at the left of a footer row and never leaves it. The confirmation floats
// above the footer (anchored to the sidebar's footer slot), so asking does not
// resize the card or move the content.
const ConfirmDeleteControl = ({
  label,
  title,
  message,
  isConfirming,
  isSubmitting,
  blockedReason,
  onAsk,
  onConfirm,
}: Props) => {
  const titleId = useId();
  const descriptionId = useId();
  const secondaryRef = useRef<HTMLButtonElement>(null);
  const t = useT().formCommon;

  useEffect(() => {
    if (isConfirming) secondaryRef.current?.focus();
  }, [isConfirming]);

  const heading = blockedReason ? t.cantDelete : (title ?? `${label}?`);

  return (
    <>
      <button
        type="button"
        onClick={() => onAsk(!isConfirming)}
        disabled={isSubmitting}
        aria-label={label}
        title={label}
        aria-expanded={isConfirming}
        className={twMerge(
          "flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-red-500 transition-colors hover:bg-red-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 disabled:opacity-50",
          isConfirming && "bg-red-500/10",
          blockedReason && "opacity-50",
        )}
      >
        <TrashIcon className="h-4 w-4" />
      </button>
      {isConfirming && (
        <div
          role="alertdialog"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onKeyDown={(event) => {
            if (event.key !== "Escape" || isSubmitting) return;
            event.stopPropagation();
            onAsk(false);
          }}
          className="absolute inset-x-4 bottom-full z-20 mb-2 animate-rise-in rounded-2xl origin-bottom bg-surface/80 p-4 shadow-2xl ring-1 ring-foreground/10 backdrop-blur-xl motion-reduce:animate-none"
        >
          <div className="flex items-start gap-3">
            <span
              className={twMerge(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                blockedReason
                  ? "bg-foreground/5 text-foreground/60"
                  : "bg-red-500/10 text-red-500",
              )}
            >
              {blockedReason ? (
                <InformationCircleIcon className="h-5 w-5" />
              ) : (
                <TrashIcon className="h-5 w-5" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p id={titleId} className="text-sm font-semibold text-foreground">
                {heading}
              </p>
              <p
                id={descriptionId}
                className="mt-0.5 text-sm text-foreground/60"
              >
                {blockedReason ?? message}
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              ref={secondaryRef}
              type="button"
              onClick={() => onAsk(false)}
              disabled={isSubmitting}
              className="h-10 flex-1 rounded-full bg-foreground/5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:opacity-50"
            >
              {blockedReason ? t.gotIt : t.cancel}
            </button>
            {!blockedReason && (
              <button
                type="button"
                onClick={onConfirm}
                disabled={isSubmitting}
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-red-500 text-sm font-semibold text-white shadow-sm transition-[background-color,box-shadow,scale] hover:bg-red-600 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="h-4 w-4" />
                    {t.deleting}
                  </>
                ) : (
                  <>
                    <TrashIcon className="h-4 w-4" />
                    {t.delete}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDeleteControl;
