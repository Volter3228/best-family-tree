import gsap from "gsap";
import { findCommonLen, animDuration } from "@/utils";
import {
  EMPTY_PATH,
  RETRACT_BASE,
  DRAW_IN_BASE,
} from "@/constants/canvas/lineageEdgePath";
import type { PathData } from "@/types";

interface Transition {
  anim: { visibleLen: number };
  prevId: string | null;
  newId: string | null;
  oldPath: PathData;
  newPath: PathData;
  // Called when the drawn path switches to the new target.
  onSwap: (path: PathData, id: string | null) => void;
}

// The timeline that moves a dashed path from one target to another: retracts
// the old path (to the prefix both share, if any), then draws the new one in.
export const buildPathTransition = ({
  anim,
  prevId,
  newId,
  oldPath,
  newPath,
  onSwap,
}: Transition): gsap.core.Timeline => {
  const tl = gsap.timeline();
  const hasOld = prevId !== null && anim.visibleLen > 0;
  const hasNew = newId !== null;

  if (hasOld && hasNew) {
    // A -> B: retract to common prefix, swap path, draw in
    const commonLen = findCommonLen(oldPath, newPath);
    const retractDist = anim.visibleLen - commonLen;

    if (retractDist > 0) {
      tl.to(anim, {
        visibleLen: commonLen,
        duration: animDuration(retractDist, oldPath.totalLen, RETRACT_BASE),
        ease: "power2.inOut",
        onComplete: () => onSwap(newPath, newId),
      });
    } else {
      onSwap(newPath, newId);
    }

    const drawInDist = newPath.totalLen - commonLen;
    if (drawInDist > 0) {
      tl.to(anim, {
        visibleLen: newPath.totalLen,
        duration: animDuration(drawInDist, newPath.totalLen, DRAW_IN_BASE),
        ease: "power2.out",
      });
    }
  } else if (hasOld && !hasNew) {
    // Target -> null: retract fully
    tl.to(anim, {
      visibleLen: 0,
      duration: RETRACT_BASE,
      ease: "power2.inOut",
      onComplete: () => onSwap(EMPTY_PATH, null),
    });
  } else if (!hasOld && hasNew) {
    // null -> Target: draw in fully
    onSwap(newPath, newId);
    tl.to(anim, {
      visibleLen: newPath.totalLen,
      duration: DRAW_IN_BASE,
      ease: "power2.out",
    });
  }

  return tl;
};
