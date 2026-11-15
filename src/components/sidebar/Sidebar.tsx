"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
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
  // The header overlays the top of the content (e.g. a cover) instead of
  // taking its own row. Ignored while the mobile card is minimized.
  floatingHeader?: boolean;
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
  floatingHeader = false,
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
  const headerFloats = floatingHeader && !isMinimized;

  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);
  const [headerElement, setHeaderElement] = useState<HTMLDivElement | null>(
    null,
  );
  // The footer wrapper animates its height; the slot inside it receives the
  // portaled form actions.
  const [footerElement, setFooterElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [footerSlotElement, setFooterSlotElement] =
    useState<HTMLDivElement | null>(null);
  const contentOuterRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const coverTintRef = useRef<HTMLDivElement | null>(null);
  // Starts at the current scroll offset, so a remounted tint does not jump to the top.
  const setCoverTint = useCallback((el: HTMLDivElement | null) => {
    coverTintRef.current = el;
    if (el) {
      el.style.transform = `translateY(${-(contentOuterRef.current?.scrollTop ?? 0)}px)`;
    }
  }, []);

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
        className={`relative flex max-h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-surface/80 backdrop-blur-xl pointer-events-auto ${isOpen ? "shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)]" : "shadow-none"}`}
      >
        {headerFloats && (
          // The cover's tint, painted here rather than inside the scroller:
          // content cannot paint under the scrollbar gutter, which left a
          // seam at the right edge. Follows the scroll like the content.
          <div
            ref={setCoverTint}
            aria-hidden
            className={twMerge(
              "pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--sidebar-header-height,3.5rem)+4.5rem)] bg-linear-to-b from-current/20 to-transparent [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",
              COLOR_CLASSES[color].text,
            )}
          />
        )}
        <div
          ref={setHeaderElement}
          className={twMerge(
            "shrink-0",
            // Only the buttons catch the pointer, so the scroller below
            // keeps the wheel and the scrollbar.
            headerFloats && "pointer-events-none absolute inset-x-0 top-0 z-10",
          )}
        >
          {canMinimize && (
            <SidebarHandle
              isMinimized={isMinimized}
              onMinimizedChange={onMinimizedChange}
              className="pointer-events-auto pt-1"
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
            <div className="sidebar-scroll-wrapper relative z-[1] min-h-0 flex-1 overflow-hidden">
              <div
                ref={contentOuterRef}
                className={twMerge(
                  "sidebar-content h-full min-h-0 overflow-y-auto",
                  headerFloats && "sidebar-content--under-header",
                )}
                style={contentStyle}
                onScroll={(e) => {
                  if (coverTintRef.current) {
                    coverTintRef.current.style.transform = `translateY(${-e.currentTarget.scrollTop}px)`;
                  }
                }}
              >
                <SidebarFooterContext.Provider value={footerSlotElement}>
                  <div ref={contentInnerRef} className="px-6 pb-6 pt-0">
                    {children}
                  </div>
                </SidebarFooterContext.Provider>
              </div>
            </div>
            {/* Collapsed to 0 while the slot is empty; animates like the content. */}
            <div
              ref={setFooterElement}
              className="grid shrink-0 grid-rows-[0fr] transition-[grid-template-rows] duration-[400ms] ease-out has-[.sidebar-footer-slot:not(:empty)]:grid-rows-[1fr]"
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  ref={setFooterSlotElement}
                  className="sidebar-footer-slot flex flex-col items-center gap-3 px-6 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
