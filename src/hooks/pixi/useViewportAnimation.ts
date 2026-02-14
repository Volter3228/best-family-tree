import { useTree } from "./useTree";
import { useFitViewAnimation } from "./useFitViewAnimation";
import { useFocusNodeAnimation } from "./useFocusNodeAnimation";

export const useViewportAnimation = () => {
  const context = useTree();

  const fitView = useFitViewAnimation(context);
  const focusNode = useFocusNodeAnimation(context);

  return {
    fitView,
    focusNode,
  };
};
