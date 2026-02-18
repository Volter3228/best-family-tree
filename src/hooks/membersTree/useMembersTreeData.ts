import { useContext } from "react";
import { MembersTreeDataContext } from "@/context/membersTree";

export const useMembersTreeData = () => {
  const context = useContext(MembersTreeDataContext);
  if (!context) {
    throw new Error("useMembersTreeData must be used within TreeProvider");
  }
  return context;
};
