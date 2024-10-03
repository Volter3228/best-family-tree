import { FamilyMember } from "@/types/FamilyMember";

interface IFamilyMemberNodeProps {
  familyMember: FamilyMember;
}

export default function FamilyMemberNode({
  familyMember: { id, name, birthday, joinDate },
}: IFamilyMemberNodeProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded border border-gray-200 bg-white shadow-lg">
      <div className="bg-gray-800 px-6 py-4 text-gray-100">
        <h2 className="text-xl font-bold">
          {id}: {name}
        </h2>
      </div>
      <div className="px-6 py-4 text-gray-800">
        <div>Birthday: {birthday.toLocaleDateString()}</div>
        <div>Join Date: {joinDate.toLocaleDateString()}</div>
      </div>
    </div>
  );
}
