import { useCallback, useContext } from "react";
import { MembersContext } from "@/context/MembersContext";
import fetchMentorsList from "@/api/fetchMentorsList";
import type { Member as MemberType } from "@/types";
import { Member } from "@/models";

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
        if (!prevTree) return prevTree;

        const findNode = (members: Member[]): Member | null => {
          for (const member of members) {
            if (member.id === updatedMemberData.id) return member;
            if (member.mentees.length) {
              const found = findNode(member.mentees);
              if (found) return found;
            }
          }
          return null;
        };

        const existingNode = findNode(prevTree);
        if (!existingNode) return prevTree;

        const mentorChanged =
          existingNode.mentorId !== updatedMemberData.mentorId;

        // Simple in-place update when mentor hasn't changed
        if (!mentorChanged) {
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
                  return member.clone({ mentees: updatedMentees });
                }
              }
              return member;
            });
            return hasChanged ? newMembers : members;
          };
          return updateInTree(prevTree);
        }

        // Mentor changed: relocate the member in the tree
        const updatedNode = existingNode.clone({
          ...updatedMemberData,
          mentees: existingNode.mentees,
        });

        // Remove from current position
        const removeFromTree = (members: Member[]): Member[] => {
          const result: Member[] = [];
          let hasChanged = false;
          for (const member of members) {
            if (member.id === updatedMemberData.id) {
              hasChanged = true;
              continue;
            }
            if (member.mentees.length) {
              const updatedMentees = removeFromTree(member.mentees);
              if (updatedMentees !== member.mentees) {
                hasChanged = true;
                result.push(member.clone({ mentees: updatedMentees }));
                continue;
              }
            }
            result.push(member);
          }
          return hasChanged ? result : members;
        };

        let tree = removeFromTree(prevTree);

        // Insert under new mentor (or at root if no mentor)
        if (!updatedMemberData.mentorId) {
          tree = [...tree, updatedNode];
        } else {
          const insertInTree = (members: Member[]): Member[] => {
            let hasChanged = false;
            const newMembers = members.map((member) => {
              if (member.id === updatedMemberData.mentorId) {
                hasChanged = true;
                return member.clone({
                  mentees: [...member.mentees, updatedNode],
                });
              }
              if (member.mentees.length) {
                const updatedMentees = insertInTree(member.mentees);
                if (updatedMentees !== member.mentees) {
                  hasChanged = true;
                  return member.clone({ mentees: updatedMentees });
                }
              }
              return member;
            });
            return hasChanged ? newMembers : members;
          };
          tree = insertInTree(tree);
        }

        return tree;
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
