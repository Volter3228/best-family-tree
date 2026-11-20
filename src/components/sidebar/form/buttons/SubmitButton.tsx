import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "@/components/ui/Spinner";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  isSubmitting?: boolean;
  // Id of the form to submit when the button is rendered outside of it.
  form?: string;
  children: Readonly<React.ReactNode>;
  color?: AccentColor;
  disabled?: boolean;
  // Shown inside the button (green, with a tick) after a successful save.
  message?: string | null;
}

const SubmitButton = ({
  isSubmitting = false,
  form,
  children,
  color = "blue",
  disabled = false,
  message,
}: Props) => {
  const isDone = !!message && !isSubmitting;
  // Keeps the text while the button fades back, so it doesn't blink empty.
  const [shownMessage, setShownMessage] = useState(message);
  if (message && message !== shownMessage) setShownMessage(message);

  return (
    <div className="relative flex-1">
      <button
        className={twMerge(
          "flex h-11 w-full touch-manipulation items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold text-white shadow-sm transition-[background-color,color,box-shadow,scale,filter] duration-200 enabled:hover:shadow-lg enabled:hover:brightness-110 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-default disabled:shadow-none disabled:active:scale-100",
          COLOR_CLASSES[color].accentBg,
          COLOR_CLASSES[color].focusVisibleRing,
          "disabled:opacity-40",
        )}
        type="submit"
        form={form}
        disabled={isSubmitting || disabled}
      >
        {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
        {children}
      </button>
      {/* Green layer wiped in diagonally with a soft edge, and back out. */}
      <span
        aria-hidden
        data-active={isDone}
        className="success-wipe pointer-events-none absolute inset-0 flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-accent-green px-3 text-sm font-semibold text-white"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0"
        >
          <path d="M4 10.5l4 4 8-9" />
        </svg>
        <span className="truncate">{shownMessage}</span>
      </span>
      {/* Always mounted: screen readers announce a live region only on change. */}
      <span role="status" className="sr-only">
        {isDone ? message : ""}
      </span>
    </div>
  );
};

export default SubmitButton;
