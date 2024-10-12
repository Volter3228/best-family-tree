import { Member, Position } from "@/types";
import { DagreDirection } from "@/types/reactFlow";
import { Handle } from "@xyflow/react";
import Image from "next/image";

interface IProps {
  id: string;
  data: { member: Member; direction: DagreDirection };
}

export default function MemberNode({
  data: {
    member: { name, photo, joinedAt },
    direction,
  },
}: IProps) {
  return (
    <div
      className="
        relative group flex items-center w-full max-w-xs p-3 
        rounded-3xl border-2 border-violet-400 bg-slate-50 
        shadow-lg hover:shadow-slate-200 hover:shadow-[0_0_35px]
        transition-shadow duration-300 min-w-72 max-h-24
      "
    >
      <div className="relative h-16 w-16 rounded-full bg-primary">
        <div className="absolute inset-0 scale-75">
          <Image
            src={photo || "/images/lion-white.png"}
            alt={`${name} photo`}
            fill
            sizes="100%"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="ml-4 flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{joinedAt}</p>
      </div>
      {direction === "TB" ? (
        <>
          <Handle type="target" position={Position.Top} />
          <Handle type="source" position={Position.Bottom} />
        </>
      ) : (
        <>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </>
      )}
    </div>
  );
}
