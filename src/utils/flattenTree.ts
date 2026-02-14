import Member from "@/models/Member";

export const flattenTree = (tree: Member[]): Member[] => {
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
