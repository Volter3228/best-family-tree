import FamilyMemberNode from "@/components/FamilyMemberNode";
import { FamilyMember } from "@/types/FamilyMember";
import { getAllFamilyMembers } from "@/utils/getAllFamilyMembers";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-5 gap-3 pt-6">
      {getAllFamilyMembers().map((familyMember: FamilyMember) => (
        <FamilyMemberNode key={familyMember.id} familyMember={familyMember} />
      ))}
    </div>
  );
}
