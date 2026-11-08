"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import type { SidebarMode, AccentColor } from "@/types";
import { useSidebarHeightAnimation, useSidebarChromeHeights } from "@/hooks";
import { SidebarFooterContext } from "./SidebarFooterContext";
import SidebarHandle from "./SidebarHandle";
import SidebarHeader from "./SidebarHeader";
import "./styles/sidebar.css";

// Matches the slide transition (duration-300) of the root.
const SLIDE_MS = 350;

interface Props {
  id?: string;
  mode?: SidebarMode;
  headerTitle?: React.ReactNode;
  isOpen: boolean;
  color?: AccentColor;
  onClose: () => void;
  onEditClick?: () => void;
  onBackClick?: () => void;
  // Mobile only: lets the user collapse the card to a bar above the toolbar.
  // Without a handler (and in edit mode) the card cannot be minimized.
  isMinimized?: boolean;
  onMinimizedChange?: (minimized: boolean) => void;
  minimizedSummary?: React.ReactNode;
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
  isMinimized: minimizedRequested = false,
  onMinimizedChange,
  minimizedSummary,
  className = "",
  children,
}: Props) => {
  const canMinimize = !!onMinimizedChange && mode === "info";
  const isMinimized = canMinimize && minimizedRequested;

  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);
  const [headerElement, setHeaderElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [footerElement, setFooterElement] = useState<HTMLDivElement | null>(
    null,
  );
  const contentOuterRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  const contentStyle = useMemo(
    () =>
      ({
        ["--sidebar-scroll-color"]: `var(--accent-${color})`,
      }) as React.CSSProperties,
    [color],
  );

  // Height animation waits until the slide-in has finished.
  const canAnimateHeightRef = useRef(false);
  useEffect(() => {
    canAnimateHeightRef.current = false;
    if (!isOpen) return;
    const timer = setTimeout(() => {
      canAnimateHeightRef.current = true;
    }, SLIDE_MS);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useSidebarHeightAnimation(
    contentOuterRef,
    contentInnerRef,
    canAnimateHeightRef,
  );
  useSidebarChromeHeights(cardElement, headerElement, footerElement);

  const expand = useCallback(() => onMinimizedChange?.(false), [onMinimizedChange]);

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
        ref={setCardElement}
        className={`flex max-h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-surface/80 backdrop-blur-xl pointer-events-auto ${isOpen ? "shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)]" : "shadow-none"}`}
      >
        <div ref={setHeaderElement} className="shrink-0">
          {canMinimize && (
            <SidebarHandle
              isMinimized={isMinimized}
              onMinimizedChange={onMinimizedChange}
              className="pt-1"
            />
          )}
          <SidebarHeader
            mode={mode}
            title={headerTitle}
            color={color}
            hasHandle={canMinimize}
            isMinimized={isMinimized}
            minimizedSummary={minimizedSummary}
            onExpand={expand}
            onClose={onClose}
            onEditClick={onEditClick}
            onBackClick={onBackClick}
          />
        </div>
        <div
          className={twMerge(
            "grid min-h-0 flex-1 grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out",
            isMinimized && "max-md:grid-rows-[0fr]",
          )}
        >
          <div className="flex min-h-0 flex-col overflow-hidden">
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
              className="flex shrink-0 flex-col items-center gap-3 px-6 py-4 empty:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
