import { useContext } from "react";
import { TreeDataContext } from "@/context/pixi/TreeDataContext";

export const useTreeData = () => {
  const context = useContext(TreeDataContext);
  if (!context) {
    throw new Error("useTreeData must be used within TreeProvider");
  }
  return context;
};
