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
import SidebarBehindCover from "./SidebarBehindCover";
import SidebarFooter from "./SidebarFooter";
import SidebarHandle from "./SidebarHandle";
import SidebarCoverTint from "./SidebarCoverTint";
import SidebarHeader from "./SidebarHeader";
import { useFrontSheetWidth } from "./useFrontSheetWidth";
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
  // Content always takes the full available height instead of following its
  // own, so switching views inside it never resizes the card.
  fillHeight?: boolean;
  isOpen: boolean;
  color?: AccentColor;
  onClose: () => void;
  onEditClick?: () => void;
  onSuggestClick?: () => void;
  onBackClick?: () => void;
  canGoBack?: boolean;
  // Mobile only: lets the user collapse the card to a bar above the toolbar.
  // Without a handler (and in edit mode) the card cannot be minimized.
  isMinimized?: boolean;
  onMinimizedChange?: (minimized: boolean) => void;
  minimizedSummary?: React.ReactNode;
  // Two open sidebars stack: the one behind steps aside so its edge stays
  // visible (fully hidden on mobile), and that edge brings it forward.
  stack?: "front" | "behind";
  onBringForward?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Sidebar = ({
  id,
  mode,
  isOpen,
  headerTitle = "Sidebar Header",
  floatingHeader = false,
  fillHeight = false,
  color = "blue",
  onClose,
  onEditClick,
  onSuggestClick,
  onBackClick,
  canGoBack,
  isMinimized: minimizedRequested = false,
  onMinimizedChange,
  minimizedSummary,
  stack,
  onBringForward,
  className = "",
  children,
}: Props) => {
  const canMinimize = !!onMinimizedChange && mode === "info";
  const isMinimized = canMinimize && minimizedRequested;
  const headerFloats = floatingHeader && !isMinimized;
  const isBehind = isOpen && stack === "behind";

  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);
  useFrontSheetWidth(rootElement, isOpen && stack === "front");
  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);
  const [headerElement, setHeaderElement] = useState<HTMLDivElement | null>(
    null,
  );
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
    !fillHeight,
  );
  useSidebarChromeHeights(cardElement, headerElement, footerElement);

  const expand = useCallback(
    () => onMinimizedChange?.(false),
    [onMinimizedChange],
  );

  return (
    <div
      id={id}
      ref={setRootElement}
      className={twMerge(
        "fixed inset-y-0 right-0 flex w-dvw justify-end p-2 pb-24 items-end pointer-events-none md:items-center md:min-w-[35rem] md:w-2/3 md:p-4 md:pb-4 lg:w-1/3 xl:w-1/4 transform transition-transform duration-300 z-50",
        !isOpen
          ? "translate-x-full"
          : isBehind
            ? "max-md:translate-x-full md:translate-x-[calc(100%-var(--front-sheet-width,0px)-2.5rem)]"
            : "translate-x-0",
        className,
        stack === "front" && "z-50",
        stack === "behind" && "z-[5]",
      )}
    >
      <div
        ref={setCardElement}
        className={twMerge(
          "relative flex max-h-full min-h-0 w-full origin-left flex-col overflow-hidden rounded-2xl bg-surface/80 backdrop-blur-xl pointer-events-auto transition-[scale] duration-300",
          isOpen ? "shadow-[-15px_0_36px_2px_rgba(0,0,0,0.2)]" : "shadow-none",
          isBehind && "md:scale-[.96]",
        )}
      >
        {isBehind && onBringForward && (
          <SidebarBehindCover onClick={onBringForward} />
        )}
        {headerFloats && (
          <SidebarCoverTint tintRef={setCoverTint} color={color} />
        )}
        <div
          ref={setHeaderElement}
          inert={isBehind}
          className={twMerge(
            "shrink-0 transition-[opacity,filter] duration-300",
            // Blurred and dimmed, so the card shows only as a hint at its edge
            // and through the sidebar in front.
            isBehind && "opacity-50 blur-[3px]",
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
            onSuggestClick={onSuggestClick}
            onBackClick={onBackClick}
            canGoBack={canGoBack}
          />
        </div>
        <div
          className={twMerge(
            "grid min-h-0 flex-1 grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out",
            isMinimized && "max-md:grid-rows-[0fr]",
          )}
        >
          <div
            inert={isBehind}
            className={twMerge(
              "flex min-h-0 flex-col overflow-hidden transition-[opacity,filter] duration-300",
              isBehind && "opacity-50 blur-[3px]",
            )}
          >
            <div className="sidebar-scroll-wrapper relative z-[1] min-h-0 flex-1 overflow-hidden">
              <div
                ref={contentOuterRef}
                className={twMerge(
                  "sidebar-content min-h-0 overflow-y-auto",
                  fillHeight ? "sidebar-content--fill" : "h-full",
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
            <SidebarFooter
              wrapperRef={setFooterElement}
              slotRef={setFooterSlotElement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
