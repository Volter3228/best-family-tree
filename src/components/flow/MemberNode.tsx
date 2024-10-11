import { Member, Position } from "@/types";
import { Handle } from "@xyflow/react";
import Image from "next/image";

interface IMemberNodeProps {
  id: string;
  data: Member;
}

export default function MemberNode({
  data: { name, photo, joinedAt },
}: IMemberNodeProps) {
  return (
    <div
      className={`
        relative group flex items-center w-full max-w-xs p-3 
        rounded-lg border-4 border-violet-400 bg-slate-50 
        hover:shadow-slate-200 hover:shadow-[0_0_35px]
        transition-shadow duration-300 min-w-72 max-h-24
      `}
    >
      <Handle type="target" position={Position.Top} />
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

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
