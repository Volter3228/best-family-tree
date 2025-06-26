import { memo } from "react";
import Image from "next/image";
import { LionIcon } from "@/components/icons";
import Member from "@/models/Member";
import { Position } from "@/types";
import { Handle, ReactFlowState, useStore } from "@xyflow/react";
interface Props {
  member: Member;
  isSelected: boolean;
  onNodeClick: () => void;
}

const zoomSelector = (state: ReactFlowState) => state.transform[2];

type HoverScale = 1.2 | 2 | 3 | 4;
// Tailwind doesn't precompile these classes if object is imported
const SCALE_ON_HOVER_VARIANTS = {
  1.2: "hover:scale-120",
  2: "hover:scale-[2]",
  3: "hover:scale-[3]",
  4: "hover:scale-[4]",
};

const getScale = (zoom: number): HoverScale => {
  if (zoom < 0.15) return 4;
  if (zoom < 0.2) return 3;
  if (zoom < 0.4) return 2;
  return 1.2;
};

const MinimizedMemberNodeContent = ({
  member: { name, avatar, photo },
  isSelected,
  onNodeClick,
}: Props) => {
  const zoom = useStore(zoomSelector);
  let scale: HoverScale = getScale(zoom);

  return (
    <div
      className={`minimized relative min-w-60 h-44 flex justify-center transition duration-150`}
      onClick={onNodeClick}
    >
      <div
        className={`
            absolute w-48 h-48 rounded-full hover:shadow-slate-200 hover:shadow-[0_0_70px] 
            transition duration-200 ${
              SCALE_ON_HOVER_VARIANTS[scale]
            } hover:scale-150
            ${
              isSelected
                ? "selected shadow-slate-200 shadow-[0_0_70px] hover:shadow-[0_0_100px]"
                : "shadow-2xl"
            } 
        `}
      >
        {photo ? (
          <Image
            src={avatar || photo}
            alt={name || "Member photo"}
            className="rounded-full drop-shadow-md"
            sizes="100%"
            quality={50}
            fill
          />
        ) : (
          <div
            className="
                flex items-center justify-center w-full h-full rounded-full
                bg-primary text-accent text-center p-7 shadow-inner
              "
          >
            <LionIcon className="fill-white" />
          </div>
        )}
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(MinimizedMemberNodeContent);
