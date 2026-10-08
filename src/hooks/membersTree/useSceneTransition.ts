import { useCallback } from "react";
import gsap from "gsap";
import { useMembersTreeData } from "./useMembersTreeData";

const FADE_OUT_SECONDS = 0.2;
const FADE_IN_SECONDS = 0.45;

/**
 * Returns a function that fades the scene out, runs `swap` (which replaces
 * nodes/edges/frames) and fades the new scene in, so switching tree modes
 * cross-fades instead of popping.
 */
export const useSceneTransition = () => {
  const { sceneRef } = useMembersTreeData();

  return useCallback(
    (swap: () => void) => {
      const scene = sceneRef.current;
      if (!scene || scene.destroyed) {
        swap();
        return;
      }

      gsap.killTweensOf(scene);
      gsap.to(scene, {
        alpha: 0,
        duration: FADE_OUT_SECONDS,
        ease: "power1.in",
        onComplete: () => {
          swap();
          gsap.to(scene, {
            alpha: 1,
            duration: FADE_IN_SECONDS,
            delay: 0.05,
            ease: "power2.out",
          });
        },
      });
    },
    [sceneRef],
  );
};
