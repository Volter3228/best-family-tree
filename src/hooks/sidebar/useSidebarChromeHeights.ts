import { useEffect } from "react";

/**
 * Publishes the heights of the card's header and footer as CSS variables
 * (--sidebar-header-height, --sidebar-footer-height) on the card, so the
 * scrollable area gives up exactly the room they take.
 */
export const useSidebarChromeHeights = (
  card: HTMLElement | null,
  header: HTMLElement | null,
  footer: HTMLElement | null,
) => {
  useEffect(() => {
    if (!card) return;
    const publish = (name: string, element: HTMLElement | null) => {
      if (!element) return undefined;
      const observer = new ResizeObserver(() =>
        card.style.setProperty(name, `${element.offsetHeight}px`),
      );
      observer.observe(element);
      return observer;
    };
    const observers = [
      publish("--sidebar-header-height", header),
      publish("--sidebar-footer-height", footer),
    ];
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [card, header, footer]);
};
