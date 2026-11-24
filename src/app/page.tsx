import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MembersTreeDynamic from "@/components/membersTree/MembersTreeDynamic";
import TreeLoadingSpinner from "@/components/membersTree/TreeLoadingSpinner";
import TreeLoadError from "@/components/membersTree/TreeLoadError";
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

const FamilyTree = async () => {
  const { members, unauthorized } = await loadTree(
    (await cookies()).toString(),
  );

  if (unauthorized) redirect("/login?expired=1");
  if (!members) return <TreeLoadError />;
  return <MembersTreeDynamic members={members} />;
};

// The spinner streams with the first byte; the tree follows once fetched (a
// cold server or database can take seconds).
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Suspense fallback={null}>
        <FamilyTree />
      </Suspense>
      <TreeLoadingSpinner />
    </div>
  );
}
