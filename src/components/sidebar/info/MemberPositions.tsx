import { useMemo } from "react";
import { getPositionPeriod } from "@/utils";
import type { AccentColor, MemberPosition } from "@/types";
import { useLocale, useT } from "@/i18n/useT";
import InfoSection from "./InfoSection";
import PositionBadge from "./PositionBadge";

interface Props {
  positions: MemberPosition[];
  onPositionClick?: (position: MemberPosition) => void;
  canClickPosition?: (position: MemberPosition) => boolean;
  color?: AccentColor;
}

// Latest first; positions without any year go last.
const MemberPositions = ({
  positions,
  onPositionClick,
  canClickPosition,
  color = "blue",
}: Props) => {
  const t = useT().memberInfo;
  const locale = useLocale();
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
          return a.role.name.localeCompare(b.role.name, locale);
        }
        if (aYear === null) return 1;
        if (bYear === null) return -1;
        return bYear - aYear;
      }),
    [positions, locale],
  );

  return (
    <InfoSection
      title={t.positions}
      color={color}
      visibleCount={3}
      toggle="pill"
      listClassName="flex flex-wrap items-start gap-2 -m-1 p-1"
      items={sortedPositions.map((position) => (
        <PositionBadge
          key={position.id}
          position={position}
          onClick={
            onPositionClick && canClickPosition?.(position)
              ? () => onPositionClick(position)
              : undefined
          }
        />
      ))}
    />
  );
};

export default MemberPositions;
