import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, MemberPosition } from "@/types";
import MemberInfoRow from "./MemberInfoRow";
import PositionBadge from "./PositionBadge";

interface Props {
  positions: MemberPosition[];
  color?: AccentColor;
}

const PositionsDropdown = ({ positions, color = "blue" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorClasses = COLOR_CLASSES[color];

  const sortedPositions = useMemo(
    () =>
      [...positions].sort((a, b) => {
        const getTimestamp = (position: MemberPosition) => {
          const date =
            position.startDate ||
            position.endDate ||
            position.team?.startDate ||
            position.team?.endDate;
          return date ? new Date(date).getTime() : null;
        };
        const aDate = getTimestamp(a);
        const bDate = getTimestamp(b);
        if (aDate === null && bDate === null) {
          return a.role.name.localeCompare(b.role.name, "uk");
        }
        if (aDate === null) return 1;
        if (bDate === null) return -1;
        return bDate - aDate;
      }),
    [positions],
  );

  if (sortedPositions.length === 1) {
    return (
      <MemberInfoRow
        title="Посади"
        value={<PositionBadge position={sortedPositions[0]} />}
        icon={BriefcaseIcon}
        color={color}
      />
    );
  }

  const latest = sortedPositions[0];

  return (
    <div className="member-info-row flex gap-5 text-lg">
      <p
        className={twMerge(
          "flex min-w-32 max-w-32 font-semibold",
          colorClasses.text,
        )}
      >
        <BriefcaseIcon className="inline-block mr-1 h-6 mt-0.5" />
        Посади
      </p>
      <div className="flex grow flex-col overflow-x-hidden">
        <div className="flex items-center gap-2">
          <PositionBadge position={latest} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={twMerge(
              "flex items-center gap-1 text-sm transition-colors duration-200",
              colorClasses.text,
              colorClasses.hoverTextAccent,
            )}
            aria-expanded={isOpen}
            aria-label={`Показати всі посади (${sortedPositions.length})`}
          >
            <span className="text-foreground/60">
              +{sortedPositions.length - 1}
            </span>
            <ChevronDownIcon
              className={twMerge(
                "h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-180",
              )}
            />
          </button>
        </div>
        <div
          className={twMerge(
            "grid transition-[grid-template-rows] duration-150 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col items-start gap-1.5 pt-2">
              {sortedPositions.slice(1).map((pos) => (
                <PositionBadge key={pos.id} position={pos} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionsDropdown;
