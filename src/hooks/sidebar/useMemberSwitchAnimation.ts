import gsap from "gsap";
import { useEffect, useRef } from "react";
import type { SidebarMode } from "@/types";

/**
 * Animates a staggered fade-in when the selected member changes
 * while in info mode. The container's first child is expected to
 * have `.member-info-avatar`, `.member-info-header`, and
 * `.member-info-row` elements.
 */
export function useMemberSwitchAnimation(
  containerRef: React.RefObject<HTMLDivElement | null>,
  memberId: string,
  sidebarMode: SidebarMode,
) {
  const prevMemberIdRef = useRef<string>(memberId);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (prevMemberIdRef.current === memberId) return;
    if (sidebarMode !== "info") {
      prevMemberIdRef.current = memberId;
      return;
    }
    if (!containerRef.current) return;
    const target = containerRef.current.children[0] as HTMLElement;
    if (!target) return;

    const avatar = target.querySelector(".member-info-avatar");
    const header = target.querySelector(".member-info-header");
    const rows = target.querySelectorAll(".member-info-row");

    tlRef.current?.kill();
    gsap.killTweensOf([avatar, header, ...Array.from(rows)]);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tlRef.current = tl;

    tl.fromTo(
      avatar,
      { opacity: 0.5, y: 6 },
      { opacity: 1, y: 0, duration: 1 },
      0,
    )
      .fromTo(
        header,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.32 },
        0.08,
      )
      .fromTo(
        rows,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.28, stagger: 0.035 },
        0.16,
      );

    prevMemberIdRef.current = memberId;

    return () => {
      tl.kill();
    };
  }, [memberId, sidebarMode, containerRef]);
}
