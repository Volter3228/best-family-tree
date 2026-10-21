import { useMemo } from "react";
import { useFitViewAnimation } from "./useFitViewAnimation";
import { useFocusNodeAnimation } from "./useFocusNodeAnimation";
import { useFocusFrameAnimation } from "./useFocusFrameAnimation";

export const useViewportAnimation = () => {
  const fitView = useFitViewAnimation();
  const focusNode = useFocusNodeAnimation();
  const focusFrame = useFocusFrameAnimation();

  return useMemo(
    () => ({ fitView, focusNode, focusFrame }),
    [fitView, focusNode, focusFrame],
  );
};
