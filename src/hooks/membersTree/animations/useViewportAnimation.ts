import { useMembersTree } from "../useMembersTree";
import { useFitViewAnimation } from "./useFitViewAnimation";
import { useFocusNodeAnimation } from "./useFocusNodeAnimation";
import { useFocusFrameAnimation } from "./useFocusFrameAnimation";

export const useViewportAnimation = () => {
  const context = useMembersTree();

  const fitView = useFitViewAnimation(context);
  const focusNode = useFocusNodeAnimation(context);
  const focusFrame = useFocusFrameAnimation(context);

  return {
    fitView,
    focusNode,
    focusFrame,
  };
};
