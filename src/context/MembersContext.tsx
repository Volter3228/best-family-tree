"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { Member } from "@/models";
import { flattenTree } from "@/utils";
import { MentorsListItem } from "@/types/members";

interface IMembersContext {
  membersTree: Member[];
  setMembersTree: Dispatch<SetStateAction<Member[]>>;
  mentorsList: MentorsListItem[];
  setMentorsList: Dispatch<SetStateAction<MentorsListItem[]>>;
  flatMembersList: Member[];
  membersMap: Map<string, Member>;
  selectedMember: Member | null;
  setSelectedMember: Dispatch<SetStateAction<Member | null>>;
}

interface Props {
  children: React.ReactNode;
}

export const MembersContext = createContext<IMembersContext | undefined>(
  undefined,
);

export const MembersProvider = ({ children }: Props) => {
  const [membersTree, setMembersTree] = useState<Member[]>([]);
  const [mentorsList, setMentorsList] = useState<MentorsListItem[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const flatMembersList = useMemo(
    () => flattenTree(membersTree),
    [membersTree],
  );

  const membersMap = useMemo(
    () => new Map(flatMembersList.map((m) => [m.id, m])),
    [flatMembersList],
  );

  const value = useMemo(
    () => ({
      membersTree,
      setMembersTree,
      mentorsList,
      setMentorsList,
      flatMembersList,
      membersMap,
      selectedMember,
      setSelectedMember,
    }),
    [membersTree, mentorsList, flatMembersList, membersMap, selectedMember],
  );

  return (
    <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
  );
};
