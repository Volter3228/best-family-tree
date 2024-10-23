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
      (member) => new Member(member)
    );
    setMembersTree(memberInstances);
    setFlatMembersList(flattenTree(memberInstances));
  };

  const handleGetMentorsList = useCallback(async () => {
    const mentorsList = await getMentorsList();
    if (setMentorsList) {
      setMentorsList(mentorsList);
    }
  }, [setMentorsList]);

  // Add a new member
  const handleAddMember = useCallback(
    async (newMember: MemberType) => {
      const newMemberInstance = new Member(newMember);
      if (newMember?.mentorId) {
        // Find mentor in flatMembersList
        const mentor = flatMembersList.find(
          (member) => member.id === newMemberInstance.mentorId
        );

        if (mentor) {
          mentor.addMentee(newMemberInstance); // Add mentee to the mentor
        }
      } else {
        setMembersTree((prevTree) => [...(prevTree || []), newMemberInstance]);
      }

      setFlatMembersList([...flatMembersList, newMemberInstance]);
    },
    [setMembersTree, flatMembersList, setFlatMembersList]
  );

  return {
    ...context,
    getMentorsList: handleGetMentorsList,
    setMembers: handleSetMembers,
    addMember: handleAddMember,
  };
};
