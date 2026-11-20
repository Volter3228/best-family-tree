import React from "react";
import CloseButton from "@/components/ui/CloseButton";
import {
  PencilIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { useT } from "@/i18n/useT";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { SidebarMode, AccentColor } from "@/types";

interface Props {
  mode?: SidebarMode;
  title: React.ReactNode;
  color: AccentColor;
  hasHandle: boolean;
  // Mobile only: the card is collapsed to this bar and shows the summary.
  isMinimized: boolean;
  minimizedSummary?: React.ReactNode;
  onExpand: () => void;
  onClose: () => void;
  onEditClick?: () => void;
  // Takes the edit button's slot for viewers who may only suggest changes.
  onSuggestClick?: () => void;
  onBackClick?: () => void;
  // Shows the back arrow outside edit mode (e.g. back to where we came from).
  canGoBack?: boolean;
}

// Soft round chip: stays readable over a cover image and the plain card alike.
const iconButton =
  "pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-surface/70 backdrop-blur transition-colors duration-200 hover:bg-surface";

const SidebarHeader = ({
  mode,
  title,
  color,
  hasHandle,
  isMinimized,
  minimizedSummary,
  onExpand,
  onClose,
  onEditClick,
  onSuggestClick,
  onBackClick,
  canGoBack = false,
}: Props) => {
  const t = useT().sidebar;
  const tSuggest = useT().suggest;
  const colorClasses = COLOR_CLASSES[color];
  const hasBack = mode === "edit" || canGoBack;

  return (
    <div
      className={twMerge(
        "flex items-center justify-between gap-3 px-4 pb-2 pt-4",
        // The handle above already gives the top room on mobile.
        hasHandle && "max-md:pt-1",
        isMinimized && "max-md:pb-3",
      )}
    >
      <h2
        className={twMerge(
          "flex min-w-0 items-center gap-2 text-xl font-bold",
          colorClasses.text,
          isMinimized && "max-md:hidden",
        )}
      >
        {hasBack && (
          <button
            onClick={onBackClick}
            className={twMerge(colorClasses.text, iconButton)}
            title={t.back}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
        )}
        <span
          className={twMerge(
            "pointer-events-none flex min-w-0",
            // The back button's gap already spaces it.
            typeof title === "string" && !hasBack && "ml-2",
          )}
        >
          {title}
        </span>
      </h2>
      {isMinimized && (
        <button
          type="button"
          onClick={onExpand}
          className="min-w-0 flex-1 text-left md:hidden"
          aria-label={t.expand}
        >
          {minimizedSummary}
        </button>
      )}
      <div className="flex shrink-0 gap-2">
        {isMinimized && (
          <button
            onClick={onExpand}
            className={twMerge(colorClasses.text, iconButton, "md:hidden")}
            title={t.expand}
          >
            <ChevronUpIcon className="h-5 w-5" />
          </button>
        )}
        {mode === "info" && onEditClick && (
          <button
            onClick={onEditClick}
            className={twMerge(
              colorClasses.text,
              iconButton,
              isMinimized && "max-md:hidden",
            )}
            title={t.edit}
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        )}
        {mode === "info" && !onEditClick && onSuggestClick && (
          <button
            onClick={onSuggestClick}
            className={twMerge(
              colorClasses.text,
              iconButton,
              isMinimized && "max-md:hidden",
            )}
            title={tSuggest.action}
            aria-label={tSuggest.action}
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        )}
        <CloseButton
          label={t.close}
          onClick={onClose}
          className={twMerge(colorClasses.text, iconButton)}
          title={t.close}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
