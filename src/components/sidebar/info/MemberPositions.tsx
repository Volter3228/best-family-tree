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
  featuredPositionId?: string | null;
}

// Latest first; positions without any year go last.
const MemberPositions = ({
  positions,
  onPositionClick,
  canClickPosition,
  color = "blue",
  featuredPositionId = null,
}: Props) => {
  const t = useT().memberInfo;
  const account = useT().account;
  const locale = useLocale();
  const featured = positions.find((p) => p.id === featuredPositionId);
  const sortedPositions = useMemo(
    () =>
      positions
        .filter((p) => p.id !== featuredPositionId)
        .sort((a, b) => {
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
    [positions, locale, featuredPositionId],
  );

  const renderBadge = (position: MemberPosition, isFeatured = false) => (
    <PositionBadge
      key={position.id}
      position={position}
      featured={isFeatured}
      onClick={
        onPositionClick && canClickPosition?.(position)
          ? () => onPositionClick(position)
          : undefined
      }
    />
  );

  return (
    <InfoSection
      title={t.positions}
      color={color}
      count={positions.length}
      headerExtra={
        featured && (
          <span className="my-1 ml-1 flex min-w-0 max-w-full items-center gap-1.5">
            {renderBadge(featured, true)}
          </span>
        )
      }
      visibleCount={3}
      toggle="pill"
      listClassName="flex flex-wrap items-start gap-2 -m-1 p-1"
      items={sortedPositions.map((position) => renderBadge(position))}
    />
  );
};

export default MemberPositions;
