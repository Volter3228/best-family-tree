import { useEffect } from "react";
import { useMembersActions } from "../data/useMembers";
import { useMembersStore } from "@/store/membersStore";
import type { Member as MemberType } from "@/types";

/**
 * Syncs the initial server-provided members array into the members context
 * once, when the context tree is still empty.
 */
export const useSyncMembers = (members: MemberType[]) => {
  const { setMembers } = useMembersActions();

  useEffect(() => {
    if (!useMembersStore.getState().members.length) {
      setMembers(members);
    }
  }, [members, setMembers]);
};
