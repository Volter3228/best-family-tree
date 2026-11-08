import React from "react";
import {
  PencilIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
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
  onBackClick?: () => void;
}

const iconButton = "transition-transform duration-200 ease-out hover:scale-[1.3]";

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
  onBackClick,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

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
          "flex min-w-0 items-center text-xl font-bold",
          colorClasses.text,
          isMinimized && "max-md:hidden",
        )}
      >
        {mode === "edit" && (
          <button
            onClick={onBackClick}
            className={twMerge(colorClasses.text, iconButton)}
            title="Назад"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
        <span className="ml-2 pointer-events-none">{title}</span>
      </h2>
      {isMinimized && (
        <button
          type="button"
          onClick={onExpand}
          className="min-w-0 flex-1 text-left md:hidden"
          aria-label="Розгорнути"
        >
          {minimizedSummary}
        </button>
      )}
      <div className="flex shrink-0 gap-2">
        {isMinimized && (
          <button
            onClick={onExpand}
            className={twMerge(colorClasses.text, iconButton, "md:hidden")}
            title="Розгорнути"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
        )}
        {mode === "info" && (
          <button
            onClick={onEditClick}
            className={twMerge(
              colorClasses.text,
              iconButton,
              isMinimized && "max-md:hidden",
            )}
            title="Редагувати"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        )}
        <button
          onClick={onClose}
          className={twMerge(colorClasses.text, "transition-all duration-200 ease-out hover:scale-[1.3]")}
          title="Закрити"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
