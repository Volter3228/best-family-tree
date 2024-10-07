import { Member, Mentor } from "@/types";

interface IMemberNodeProps {
  member: Member | Mentor;
}

export default function MemberNode({
  member: { name, birthday, joinedAt, phoneNumber, email },
}: IMemberNodeProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded border border-gray-200 bg-white shadow-lg">
      <div className="bg-gray-800 px-6 py-4 text-gray-100">
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="px-6 py-4 text-gray-800">
        <div>День народження: {new Date(birthday).toLocaleDateString()}</div>
        <div>Набір: {joinedAt}</div>
        <div>Номер телефону: {phoneNumber}</div>
        <div>Email: {email}</div>
      </div>
    </div>
  );
}
