import { Position } from "@/types";
import Member from "@/models/Member";
import { Handle } from "@xyflow/react";
import Image from "next/image";
import { memo } from "react";

interface IProps {
  id: string;
  data: { member: Member };
}

const MemberNode = ({
  data: {
    member,
    member: { name, photo },
  },
}: IProps) => (
  <div
    className="
        relative group flex items-center w-full max-w-xs p-3 
        rounded-3xl border-2 border-violet-400 bg-slate-50 
        shadow-lg hover:shadow-slate-200 hover:shadow-[0_0_35px]
        transition-shadow duration-300 min-w-72 max-h-24
      "
  >
    <div className="relative h-16 w-16 rounded-full bg-primary">
      <div className={`absolute inset-0 ${photo ? "" : "scale-75"}`}>
        <Image
          src={photo || "/images/lion.svg"}
          alt={`${name} photo`}
          fill
          sizes="100%"
          className={`rounded-full ${photo ? "" : "invert"}`}
        />
      </div>
    </div>

    <div className="ml-4 flex flex-col">
      <h3 className="text-base font-semibold">{name}</h3>
      <p className="text-sm">{member.getRecruitmentSeason()}</p>
    </div>

    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export default memo(MemberNode);
