import { useContext } from "react";
import { PixiTreeContext } from "@/context/PixiTreeContext";
import { useFitViewAnimation } from "./useFitViewAnimation";
import { useFocusNodeAnimation } from "./useFocusNodeAnimation";

export const useViewportAnimation = () => {
  const context = useContext(PixiTreeContext);

  if (!context) {
    throw new Error(
      "useViewportAnimation must be used within a PixiTreeProvider",
    );
  }

  const fitView = useFitViewAnimation(context);
  const focusNode = useFocusNodeAnimation(context);

  return {
    fitView,
    focusNode,
  };
};
