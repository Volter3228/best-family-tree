"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import Member from "@/models/Member";
import { MentorsListItem } from "@/types/members";

interface IMembersContext {
  membersTree: Member[];
  setMembersTree: Dispatch<SetStateAction<Member[]>>;
  mentorsList: MentorsListItem[];
  setMentorsList: Dispatch<SetStateAction<MentorsListItem[]>>;
  flatMembersList: Member[];
  setFlatMembersList: Dispatch<SetStateAction<Member[]>>;
  selectedMember: Member | null;
  setSelectedMember: Dispatch<SetStateAction<Member | null>>;
}

export const MembersContext = createContext<IMembersContext | undefined>(
  undefined
);

// Members Provider component
export const MembersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [membersTree, setMembersTree] = useState<Member[]>([]);
  const [mentorsList, setMentorsList] = useState<MentorsListItem[]>([]);
  const [flatMembersList, setFlatMembersList] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const value = useMemo(
    () => ({
      membersTree,
      setMembersTree,
      mentorsList,
      setMentorsList,
      flatMembersList,
      setFlatMembersList,
      selectedMember,
      setSelectedMember,
    }),
    [membersTree, mentorsList, flatMembersList, selectedMember]
  );

  return (
    <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
  );
};
