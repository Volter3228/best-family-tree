import { MembersProvider } from "@/context/MembersContext";
import MembersTreeDynamic from "@/components/membersTree/MembersTreeDynamic";
import fetchFamilyTree from "@/api/fetchFamilyTree";

export default async function Home() {
  const familyTreeMembers = await fetchFamilyTree().catch((error) => {
    console.error("Failed to load family tree:", error);
    return undefined;
  });

  return (
    <div className="h-screen w-screen">
      <MembersProvider>
        {!!familyTreeMembers && (
          <MembersTreeDynamic members={familyTreeMembers} />
        )}
      </MembersProvider>
    </div>
  );
}
