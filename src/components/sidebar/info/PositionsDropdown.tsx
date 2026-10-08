import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { getPositionPeriod } from "@/utils";
import type { AccentColor, MemberPosition } from "@/types";
import MemberInfoRow from "./MemberInfoRow";
import PositionBadge from "./PositionBadge";

interface Props {
  positions: MemberPosition[];
  onPositionClick?: (position: MemberPosition) => void;
  canClickPosition?: (position: MemberPosition) => boolean;
  color?: AccentColor;
}

const PositionsDropdown = ({
  positions,
  onPositionClick,
  canClickPosition,
  color = "blue",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorClasses = COLOR_CLASSES[color];

  const sortedPositions = useMemo(
    () =>
      [...positions].sort((a, b) => {
        const getYear = (position: MemberPosition) => {
          const { start, end } = getPositionPeriod(position);
          return start ?? end ?? null;
        };
        const aYear = getYear(a);
        const bYear = getYear(b);
        if (aYear === null && bYear === null) {
          return a.role.name.localeCompare(b.role.name, "uk");
        }
        if (aYear === null) return 1;
        if (bYear === null) return -1;
        return bYear - aYear;
      }),
    [positions],
  );

  const renderBadge = (position: MemberPosition) => (
    <PositionBadge
      key={position.id}
      position={position}
      onClick={
        onPositionClick && canClickPosition?.(position)
          ? () => onPositionClick(position)
          : undefined
      }
    />
  );

  if (sortedPositions.length === 1) {
    return (
      <MemberInfoRow
        title="Посади"
        value={renderBadge(sortedPositions[0])}
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
      <div className="flex grow flex-col overflow-x-hidden -m-1 p-1">
        {/* items-start + a button as tall as the label keeps the toggle level
            with "Посади" even when the badge wraps onto two rows */}
        <div className="flex min-w-0 items-start gap-2">
          {renderBadge(latest)}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={twMerge(
              "flex h-7 shrink-0 items-center gap-1 text-sm transition-colors duration-200",
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
              {sortedPositions.slice(1).map(renderBadge)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionsDropdown;
