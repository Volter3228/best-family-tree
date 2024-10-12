import Flow from "@/components/flow/Flow";
import getFamilyTree from "@/libs/getFamilyTree";
import {
  getLayoutedElements,
  transformMembersToFlowValues,
} from "@/libs/reactFlow";

export default async function Home() {
  const familyTreeMembers = await getFamilyTree();
  const { nodes, edges } = transformMembersToFlowValues(familyTreeMembers);

  const layoutedElements = getLayoutedElements(nodes, edges);

  return (
    <div className="mx-auto h-screen w-full">
      <Flow {...layoutedElements} />
    </div>
  );
}
