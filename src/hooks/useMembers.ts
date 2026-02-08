import { MembersContext } from "@/context/MembersContext";
import getMentorsList from "@/api/getMentorsList";
import { useCallback, useContext } from "react";
import type { Member as MemberType } from "@/types";
import Member from "@/models/Member";

export const useMembers = () => {
  const context = useContext(MembersContext);
  if (!context) {
    throw new Error("useMembers must be used within a MembersProvider");
  }

  const {
    setMentorsList,
    setMembersTree,
    flatMembersList,
    setFlatMembersList,
    setSelectedMember,
  } = context;

  // Helper to flatten the tree structure
  const flattenTree = (tree: Member[]): Member[] => {
    const flatList: Member[] = [];
    const recurse = (members: Member[]) => {
      members.forEach((member) => {
        flatList.push(member);
        if (member.mentees.length) {
          recurse(member.mentees);
        }
      });
    };
    recurse(tree);
    return flatList;
  };

  const handleSetMembers = (members: MemberType[]) => {
    const memberInstances: Member[] = members.map(
      (member) => new Member(member),
    );
    setMembersTree(memberInstances);
    setFlatMembersList(flattenTree(memberInstances));
  };

  const handleGetMentorsList = useCallback(async () => {
    const mentorsList = await getMentorsList();
    setMentorsList(mentorsList);
  }, [setMentorsList]);

  const handleAddMember = useCallback(
    (newMember: MemberType) => {
      const newMemberInstance = new Member(newMember);

      setFlatMembersList((prevFlatList) => [
        ...prevFlatList,
        newMemberInstance,
      ]);

      setMembersTree((prevTree) => {
        if (!newMember.mentorId) {
          return [...(prevTree || []), newMemberInstance];
        }

        const addToTree = (members: Member[]): Member[] => {
          let hasChanged = false;
          const newMembers = members.map((member) => {
            if (member.id === newMember.mentorId) {
              hasChanged = true;
              return new Member({
                ...member,
                mentees: [...member.mentees, newMemberInstance],
              });
            }
            if (member.mentees.length) {
              const updatedMentees = addToTree(member.mentees);
              if (updatedMentees !== member.mentees) {
                hasChanged = true;
                return new Member({
                  ...member,
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
    [setMembersTree, setFlatMembersList],
  );

  const handleUpdateMember = useCallback(
    (updatedMemberData: MemberType) => {
      const updatedMemberInstance = new Member(updatedMemberData);

      const updatedFlatList = flatMembersList.map((member) =>
        member.id === updatedMemberInstance.id ? updatedMemberInstance : member,
      );
      setFlatMembersList(updatedFlatList);

      setMembersTree((prevTree) => {
        const updateInTree = (members: Member[]): Member[] => {
          let hasChanged = false;
          const newMembers = members.map((member) => {
            if (member.id === updatedMemberInstance.id) {
              hasChanged = true;
              // Preserve mentees from the old member
              updatedMemberInstance.mentees = member.mentees;
              return updatedMemberInstance;
            }
            if (member.mentees.length) {
              const updatedMentees = updateInTree(member.mentees);
              if (updatedMentees !== member.mentees) {
                hasChanged = true;
                const updatedMember = new Member({
                  ...member,
                  mentees: [],
                } as unknown as MemberType);
                updatedMember.mentees = updatedMentees;
                return updatedMember;
              }
            }
            return member;
          });
          return hasChanged ? newMembers : members;
        };
        return updateInTree(prevTree || []);
      });

      setSelectedMember((prev) =>
        prev?.id === updatedMemberInstance.id ? updatedMemberInstance : prev,
      );
    },
    [flatMembersList, setFlatMembersList, setMembersTree, setSelectedMember],
  );

  const getMemberById = (mentorId: string) =>
    flatMembersList.find(({ id }) => id === mentorId);

  return {
    ...context,
    getMemberById,
    getMentorsList: handleGetMentorsList,
    setMembers: handleSetMembers,
    addMember: handleAddMember,
    updateMember: handleUpdateMember,
  };
};
