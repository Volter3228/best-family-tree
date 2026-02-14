import { useTreeData } from "./useTreeData";
import { useViewport } from "./useViewport";

export const useTree = () => {
  const data = useTreeData();
  const viewport = useViewport();
  return { ...data, ...viewport };
};
