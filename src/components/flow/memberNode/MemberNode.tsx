import { memo } from "react";
import Image from "next/image";
import { Handle, NodeProps, ReactFlowState, useStore } from "@xyflow/react";
import { useMembers } from "@/hooks/useMembers";
import { Position } from "@/types";
import Member from "@/models/Member";
import MinimizedMemberNodeContent from "./MinimizedMemberNodeContent";
import MemberNodeToolbar from "./MemberNodeToolbar";
import LionIcon from "../../icons/Lion";

const zoomSelector = (state: ReactFlowState) => state.transform[2] < 0.45;

interface Props extends NodeProps {
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

  return (
    <>
      <MemberNodeToolbar isVisible={isSelected} member={member} />
      {showMinimized ? (
        <MinimizedMemberNodeContent
          member={member}
          isSelected={isSelected}
          onNodeClick={handleNodeClick}
        />
      ) : (
        <div
          className={`
          relative group flex flex-col justify-center items-center transition hover:scale-110
          rounded-3xl border-2 border-accent-darken bg-slate-50
        hover:shadow-slate-200 hover:shadow-[0_0_35px]
          duration-300 min-w-60 max-w-60 p-6 h-44 ${
            isSelected
              ? "selected shadow-slate-200 shadow-[0_-2px_35px] hover:shadow-[0_-2px_45px]"
              : "shadow-lg"
          } 
        `}
          onClick={handleNodeClick}
        >
          <div className="relative h-20 w-20 mb-2 rounded-full bg-primary">
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
          <div className="flex flex-col text-center max-w-full">
            <h3 className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </h3>
            <p className="text-sm">{member.getRecruitmentSeason()}</p>
          </div>
          <Handle type="target" position={Position.Top} />
          <Handle type="source" position={Position.Bottom} />
        </div>
      )}
    </>
  );
};

export default memo(MemberNode);
