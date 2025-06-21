import { memo } from "react";
import { Handle, NodeProps, ReactFlowState, useStore } from "@xyflow/react";
import { useMembers } from "@/hooks/useMembers";
import Member from "@/models/Member";
import { Position } from "@/types";
import Image from "next/image";
import LionIcon from "../../icons/Lion";
import MinimizedMemberNodeContent from "./MinimizedMemberNodeContent";

const zoomSelector = (state: ReactFlowState) => state.transform[2] < 0.55;

interface Props extends NodeProps {
  id: string;
  data: { member: Member };
}

const MemberNode = ({
  data: {
    member,
    member: { name, avatar, photo },
  },
}: Props) => {
  const { selectedMember, setSelectedMember } = useMembers();
  const showMinimized = useStore(zoomSelector);

  const handleNodeClick = () => setSelectedMember(member);
  const isSelected = selectedMember?.id === member.id;

  if (showMinimized) {
    return (
      <MinimizedMemberNodeContent
        member={member}
        isSelected={isSelected}
        onNodeClick={handleNodeClick}
      />
    );
  }

  return (
    <div
      className={`
        relative group flex items-center max-w-xs p-3 transition hover:scale-110
        rounded-3xl border-2 border-accent-darken bg-slate-50 
      hover:shadow-slate-200 hover:shadow-[0_0_35px]
        duration-300 min-w-72 max-h-24 ${
          isSelected
            ? "selected shadow-slate-200 shadow-[0_-2px_35px] hover:shadow-[0_-2px_45px]"
            : "shadow-lg"
        }
      `}
      onClick={handleNodeClick}
    >
      <div className="relative h-16 w-16 rounded-full bg-primary">
        {photo ? (
          <Image
            src={avatar || photo}
            alt={member.name || "Member photo"}
            className="rounded-full drop-shadow-md"
            sizes="100%"
            fill
          />
        ) : (
          <div
            className="
              flex items-center justify-center w-full h-full rounded-full
              bg-primary text-accent text-center p-2.5 shadow-inner drop-shadow-md
            "
          >
            <LionIcon className="fill-white" />
          </div>
        )}
      </div>

      <div className="ml-4 flex flex-col">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm">{member.getRecruitmentSeason()}</p>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(MemberNode);
