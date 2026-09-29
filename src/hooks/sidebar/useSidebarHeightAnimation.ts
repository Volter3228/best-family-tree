import gsap from "gsap";
import { useEffect, useRef } from "react";

export function useSidebarHeightAnimation(
  outerRef: React.RefObject<HTMLDivElement | null>,
  innerRef: React.RefObject<HTMLDivElement | null>,
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

      lastHeightRef.current = height;

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
  }, [innerRef, outerRef]);
}
