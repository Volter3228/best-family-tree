import { useMembersTree } from "./useMembersTree";
import { useFitViewAnimation } from "./useFitViewAnimation";
import { useFocusNodeAnimation } from "./useFocusNodeAnimation";

export const useViewportAnimation = () => {
  const context = useMembersTree();

  const fitView = useFitViewAnimation(context);
  const focusNode = useFocusNodeAnimation(context);

  return {
    fitView,
    focusNode,
  };
};
