import gsap from "gsap";
import { useEffect, useRef } from "react";

export function useSidebarHeightAnimation(
  outerRef: React.RefObject<HTMLDivElement | null>,
  innerRef: React.RefObject<HTMLDivElement | null>,
  // Height changes only animate while this is true (the sidebar is settled
  // open); while it slides in or out the height follows the content instantly.
  canAnimateRef: React.RefObject<boolean>,
) {
  const hasMountedRef = useRef(false);
  const heightTweenRef = useRef<gsap.core.Tween | null>(null);
  const lastHeightRef = useRef<number | null>(null);

  useEffect(() => {
    if (!innerRef.current || !outerRef.current) return;
    const inner = innerRef.current;
    const outer = outerRef.current;

    const clampScrollTop = () => {
      const maxScroll = Math.max(0, outer.scrollHeight - outer.clientHeight);
      if (outer.scrollTop > maxScroll) outer.scrollTop = maxScroll;
    };

    const ro = new ResizeObserver(() => {
      const height = inner.offsetHeight;
      clampScrollTop();

      if (!hasMountedRef.current) {
        gsap.set(outer, { height });
        hasMountedRef.current = true;
        lastHeightRef.current = height;
        return;
      }

      if (
        lastHeightRef.current !== null &&
        Math.abs(lastHeightRef.current - height) < 1
      ) {
        return;
      }

      // Content appearing in an empty card, or any change while the sidebar
      // slides, takes its full height at once.
      const instant = (lastHeightRef.current ?? 0) < 1 || !canAnimateRef.current;
      lastHeightRef.current = height;
      if (instant) {
        heightTweenRef.current?.kill();
        gsap.set(outer, { height });
        return;
      }

      heightTweenRef.current?.kill();
      outer.classList.add("sidebar-height-animating");
      heightTweenRef.current = gsap.to(outer, {
        height,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          outer.classList.remove("sidebar-height-animating");
          heightTweenRef.current = null;
          const settled = inner.offsetHeight;
          if (Math.abs(settled - height) >= 1) {
            lastHeightRef.current = settled;
            gsap.set(outer, { height: settled });
          }
          clampScrollTop();
        },
      });
    });

    ro.observe(inner);

    return () => {
      ro.disconnect();
      heightTweenRef.current?.kill();
      heightTweenRef.current = null;
      outer.classList.remove("sidebar-height-animating");
    };
  }, [innerRef, outerRef, canAnimateRef]);
}
