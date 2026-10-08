"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PencilIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"; // Tailwind Heroicons
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { SidebarMode, AccentColor } from "@/types";
import { useSidebarHeightAnimation } from "@/hooks";
import { SidebarFooterContext } from "./SidebarFooterContext";
import "./styles/sidebar.css";

interface Props {
  id?: string;
  mode?: SidebarMode;
  headerTitle?: React.ReactNode;
  isOpen: boolean;
  color?: AccentColor;
  onClose: () => void;
  onEditClick?: () => void;
  onBackClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Sidebar = ({
  id,
  mode,
  isOpen,
  headerTitle = "Sidebar Header",
  color = "blue",
  onClose,
  onEditClick,
  onBackClick,
  className = "",
  children,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  const cardRef = useRef<HTMLDivElement>(null);
  const contentOuterRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const [footerElement, setFooterElement] = useState<HTMLDivElement | null>(
    null,
  );

  const contentStyle = useMemo(
    () =>
      ({
        ["--sidebar-scroll-color"]: `var(--accent-${color})`,
      }) as React.CSSProperties,
    [color],
  );

  useSidebarHeightAnimation(contentOuterRef, contentInnerRef);

  // The scrollable area gives up the room the footer takes.
  useEffect(() => {
    const card = cardRef.current;
    if (!footerElement || !card) return;
    const observer = new ResizeObserver(() =>
      card.style.setProperty(
        "--sidebar-footer-height",
        `${footerElement.offsetHeight}px`,
      ),
    );
    observer.observe(footerElement);
    return () => observer.disconnect();
  }, [footerElement]);

  return (
    <div
      id={id}
      className={twMerge(
        "fixed inset-y-0 right-0 flex w-dvw justify-end p-2 pb-24 items-end pointer-events-none md:items-center md:min-w-[35rem] md:w-2/3 md:p-4 md:pb-4 lg:w-1/3 xl:w-1/4 transform transition-transform duration-300 z-50",
        isOpen ? "translate-x-0" : "translate-x-full",
        className,
      )}
    >
      <div
        ref={cardRef}
        className="flex max-h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-surface/80 shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)] backdrop-blur-xl pointer-events-auto"
      >
        <div className="flex shrink-0 justify-between items-center rounded-t-2xl px-4 pt-4 pb-2">
          <h2
            className={`text-xl font-bold ${colorClasses.text} flex items-center`}
          >
            {mode === "edit" && (
              <button
                onClick={onBackClick}
                className={twMerge(
                  colorClasses.text,
                  "transition-transform duration-200 ease-out hover:scale-[1.3]",
                )}
                title="Назад"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
            )}
            <span className="ml-2 pointer-events-none">{headerTitle}</span>
          </h2>
          <div className="flex gap-2">
            {mode === "info" && (
              <button
                onClick={onEditClick}
                className={`${colorClasses.text} transition-transform duration-200 ease-out hover:scale-[1.3]`}
                title="Редагувати"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className={`${colorClasses.text} transition-all duration-200 ease-out hover:scale-[1.3]`}
              title="Закрити"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="sidebar-scroll-wrapper min-h-0 flex-1 overflow-hidden">
          <div
            ref={contentOuterRef}
            className="sidebar-content h-full min-h-0 overflow-y-auto"
            style={contentStyle}
          >
            <SidebarFooterContext.Provider value={footerElement}>
              <div ref={contentInnerRef} className="px-6 pb-6 pt-0">
                {children}
              </div>
            </SidebarFooterContext.Provider>
          </div>
        </div>
        <div
          ref={setFooterElement}
          className="flex shrink-0 flex-col items-center gap-3 px-6 pb-4 empty:hidden"
        />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
