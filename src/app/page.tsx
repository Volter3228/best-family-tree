import { ReactNode } from "react";
import MemberNode from "@/components/MemberNode";
import getFamilyTree from "@/libs/getFamilyTree";
import { isMentor } from "@/server/src/utils";
import { Member, Mentor } from "@/types";

export default async function Home() {
  const familyTree = await getFamilyTree();
  const printedFamilyTree: ReactNode[] = [];
  const renderTree = (members: (Member | Mentor)[]) => {
    printedFamilyTree.push(
      <>
        {members.map((member) => (
          <MemberNode key={member.id} member={member} />
        ))}
      </>,
    );

    members.forEach((member) => {
      if (isMentor(member) && member.mentees && member.mentees.length) {
        renderTree(member.mentees);
      }
    });

    return printedFamilyTree;
  };

  return (
    <div className="container mx-auto grid grid-cols-5 gap-3 pt-6">
      {renderTree(familyTree)}
    </div>
  );
}
