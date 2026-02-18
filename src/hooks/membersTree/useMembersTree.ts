import { useMembersTreeData } from "./useMembersTreeData";
import { useViewport } from "./useViewport";

export const useMembersTree = () => {
  const data = useMembersTreeData();
  const viewport = useViewport();
  return { ...data, ...viewport };
};
