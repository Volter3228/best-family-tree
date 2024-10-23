"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Member from "@/models/Member";
import { MentorsListItem } from "@/types/members";

interface IMembersContext {
  membersTree: Member[] | null;
  setMembersTree: Dispatch<SetStateAction<Member[] | null>>;
  mentorsList: MentorsListItem[];
  setMentorsList: Dispatch<SetStateAction<MentorsListItem[]>>;
  flatMembersList: Member[];
  setFlatMembersList: Dispatch<SetStateAction<Member[]>>;
}

export const MembersContext = createContext<IMembersContext | undefined>(
  undefined
);

// Members Provider component
export const MembersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [membersTree, setMembersTree] = useState<Member[] | null>(null);
  const [mentorsList, setMentorsList] = useState<MentorsListItem[]>([]);
  const [flatMembersList, setFlatMembersList] = useState<Member[]>([]);

  return (
    <MembersContext.Provider
      value={{
        membersTree,
        setMembersTree,
        mentorsList,
        setMentorsList,
        flatMembersList,
        setFlatMembersList,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};
