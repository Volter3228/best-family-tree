import { MembersContext } from "@/context/MembersContext";
import fetchMentorsList from "@/api/fetchMentorsList";
import { useCallback, useContext } from "react";
import type { Member as MemberType } from "@/types";
import Member from "@/models/Member";

export const useMembers = () => {
  const context = useContext(MembersContext);
  if (!context) {
    throw new Error("useMembers must be used within a MembersProvider");
  }

  const {
    membersTree,
    setMembersTree,
    mentorsList,
    setMentorsList,
    flatMembersList,
    membersMap,
    selectedMember,
    setSelectedMember,
  } = context;

  const setMembers = useCallback(
    (members: MemberType[]) => {
      setMembersTree(members.map((m) => new Member(m)));
    },
    [setMembersTree],
  );

  const getMentorsList = useCallback(async () => {
    const list = await fetchMentorsList();
    setMentorsList(list);
  }, [setMentorsList]);

  const addMember = useCallback(
    (newMember: MemberType) => {
      const newMemberInstance = new Member(newMember);

      setMembersTree((prevTree) => {
        if (!newMember.mentorId) {
          return [...(prevTree || []), newMemberInstance];
        }

        const addToTree = (members: Member[]): Member[] => {
          let hasChanged = false;
          const newMembers = members.map((member) => {
            if (member.id === newMember.mentorId) {
              hasChanged = true;
              return member.clone({
                mentees: [...member.mentees, newMemberInstance],
              });
            }
            if (member.mentees.length) {
              const updatedMentees = addToTree(member.mentees);
              if (updatedMentees !== member.mentees) {
                hasChanged = true;
                return member.clone({
                  mentees: updatedMentees,
                });
              }
            }
            return member;
          });
          return hasChanged ? newMembers : members;
        };

        return addToTree(prevTree || []);
      });
    },
    [setMembersTree],
  );

  const updateMember = useCallback(
    (updatedMemberData: MemberType) => {
      setMembersTree((prevTree) => {
        const updateInTree = (members: Member[]): Member[] => {
          let hasChanged = false;
          const newMembers = members.map((member) => {
            if (member.id === updatedMemberData.id) {
              hasChanged = true;
              return member.clone({
                ...updatedMemberData,
                mentees: member.mentees,
              });
            }
            if (member.mentees.length) {
              const updatedMentees = updateInTree(member.mentees);
              if (updatedMentees !== member.mentees) {
                hasChanged = true;
                return member.clone({
                  mentees: updatedMentees,
                });
              }
            }
            return member;
          });
          return hasChanged ? newMembers : members;
        };
        return updateInTree(prevTree || []);
      });

      setSelectedMember((prev) => {
        if (prev?.id !== updatedMemberData.id) return prev;
        return prev.clone(updatedMemberData);
      });
    },
    [setMembersTree, setSelectedMember],
  );

  const getMemberById = useCallback(
    (id: string) => membersMap.get(id),
    [membersMap],
  );

  return {
    membersTree,
    flatMembersList,
    selectedMember,
    setSelectedMember,
    mentorsList,
    getMemberById,
    getMentorsList,
    setMembers,
    addMember,
    updateMember,
  };
};
