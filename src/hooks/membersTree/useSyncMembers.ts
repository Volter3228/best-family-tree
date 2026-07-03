import { useEffect } from "react";
import { useMembers } from "../useMembers";
import type { Member as MemberType } from "@/types";

/**
 * Syncs the initial server-provided members array into the members context
 * once, when the context tree is still empty.
 */
export const useSyncMembers = (members: MemberType[]) => {
  const { membersTree, setMembers } = useMembers();

  useEffect(() => {
    if (!membersTree.length) {
      setMembers(members);
    }
  }, [membersTree, members]);
};
