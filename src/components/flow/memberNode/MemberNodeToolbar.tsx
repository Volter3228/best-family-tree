import { MouseEvent, useState, useTransition } from "react";
import Member from "@/models/Member";
import { NodeToolbar, useReactFlow } from "@xyflow/react";
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ToolbarIconButton from "../../ToolbarIconButton";

interface Props {
  isVisible: boolean;
  member: Member;
}

const MemberNodeToolbar = ({ isVisible, member }: Props) => {
  const [showDescendants, setShowDescendants] = useState(true);
  const { setNodes, getEdges, setEdges } = useReactFlow();

  // Find all descendants by traversing edges
  const findAllDescendants = (memberId: string) => {
    const edges = getEdges();
    const descendants = new Set();

    const traverse = (currentId: string) => {
      // Find all edges where current member is the source (mentor)
      const childEdges = edges.filter((edge) => edge.source === currentId);

      childEdges.forEach((edge) => {
        const childId = edge.target;
        if (!descendants.has(childId)) {
          descendants.add(childId);
          traverse(childId); // Recursively find descendants
        }
      });
    };

    traverse(memberId);
    return Array.from(descendants);
  };

  const handleToggleDescendants = (_event: MouseEvent) => {
    const descendants = findAllDescendants(member.id);
    if (!descendants.length) return;

    setNodes((nodes) =>
      nodes.map((node) =>
        descendants.includes(node.id)
          ? { ...node, hidden: showDescendants }
          : node
      )
    );
    setEdges((edges) =>
      edges.map((edge) =>
        descendants.includes(edge.target)
          ? { ...edge, hidden: showDescendants }
          : edge
      )
    );
    setShowDescendants(!showDescendants);
  };

  return (
    <NodeToolbar
      offset={30}
      isVisible={isVisible}
      className={`flex gap-2 transition-opacity ${
        isVisible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      {member.mentees.length > 0 && (
        <ToolbarIconButton
          title={`${
            showDescendants ? "Приховати нащадків" : "Показати нащадків"
          }`}
          onClick={handleToggleDescendants}
          isActive={showDescendants}
          icon={ChevronDownIcon}
          className="shadow-lg"
        />
      )}
      {!!member.mentorId && (
        <>
          <ToolbarIconButton
            title="Показати предків"
            onClick={() => {}}
            icon={ChevronDownIcon}
            className="rotate-180 shadow-lg"
          />
          <ToolbarIconButton
            title="Показати всіх предків"
            onClick={() => {}}
            icon={ChevronDoubleDownIcon}
            className="rotate-180 shadow-lg"
          />
        </>
      )}
      <ToolbarIconButton
        title="Fit View Family"
        onClick={() => {}}
        icon={UserGroupIcon}
      />
    </NodeToolbar>
  );
};

export default MemberNodeToolbar;
