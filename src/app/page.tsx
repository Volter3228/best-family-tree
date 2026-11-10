import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MembersTreeDynamic from "@/components/membersTree/MembersTreeDynamic";
import fetchFamilyTree from "@/api/fetchFamilyTree";
import { UnauthorizedError } from "@/libs/http";

const loadTree = async (cookie: string) => {
  try {
    return { members: await fetchFamilyTree(cookie), unauthorized: false };
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return { members: undefined, unauthorized: true };
    }
    console.error("Failed to load family tree:", error);
    return { members: undefined, unauthorized: false };
  }
};

export default async function Home() {
  const { members, unauthorized } = await loadTree((await cookies()).toString());

  if (unauthorized) redirect("/login?expired=1");

  return (
    <div className="h-screen w-screen">
      {!!members && <MembersTreeDynamic members={members} />}
    </div>
  );
}
