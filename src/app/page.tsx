import Flow from "@/components/flow/Flow";
import { MembersProvider } from "@/context/MembersContext";
import getFamilyTree from "@/api/getFamilyTree";

export default async function Home() {
  const familyTreeMembers = await getFamilyTree();

  return (
    <div className="mx-auto h-screen w-full">
      <MembersProvider>
        {!!familyTreeMembers && <Flow members={familyTreeMembers} />}
      </MembersProvider>
    </div>
  );
}
