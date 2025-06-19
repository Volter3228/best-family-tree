import { memo } from "react";
import { Handle, NodeProps } from "@xyflow/react";
import { useMembers } from "@/hooks/useMembers";
import Member from "@/models/Member";
import { Position } from "@/types";
import Image from "next/image";
import LionIcon from "../icons/Lion";

interface Props extends NodeProps {
  id: string;
  data: { member: Member };
}

const MemberNode = ({
  data: {
    member,
    member: { name, photo },
  },
}: Readonly<Props>) => {
  const { selectedMember, setSelectedMember } = useMembers();

  const handleNodeClick = () => setSelectedMember(member);
  const isSelected = selectedMember?.id === member.id;

  return (
    <div
      className={`
        relative group flex items-center w-full max-w-xs p-3 
        rounded-3xl border-2 border-accent-darken bg-slate-50 
      hover:shadow-slate-200 hover:shadow-[0_0_35px]
        transition-shadow duration-300 min-w-72 max-h-24 ${
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
            src={photo}
            alt="Avatar"
            className="rounded-full drop-shadow-md"
            fill
            sizes="100%"
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
