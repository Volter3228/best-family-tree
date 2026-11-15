import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import type { Member } from "@/models";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import InfoSection from "./InfoSection";
import MemberMiniAvatar from "./MemberMiniAvatar";

interface Props {
  mentees: Member[];
  onMemberNameClick?: (memberId: string) => void;
  isVisible: (id: string) => boolean;
  // false in team view: cards are plain, not navigable (and not dimmed).
  clickable?: boolean;
  color?: AccentColor;
}

const MenteesGrid = ({
  mentees,
  onMemberNameClick,
  isVisible,
  clickable = true,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const sortedMentees = useMemo(
    () => [...mentees].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [mentees],
  );

  return (
    <InfoSection
      title="Діти"
      color={color}
      visibleCount={4}
      toggle="bar"
      expandLabel="Показати всіх"
      listClassName="grid grid-cols-2 gap-1.5"
      items={sortedMentees.map((mentee) => {
        const visible = isVisible(mentee.id);
        const active = clickable && visible;

        return (
          <button
            key={mentee.id}
            type="button"
            disabled={!active}
            title={mentee.name}
            onClick={() => onMemberNameClick?.(mentee.id)}
            className={twMerge(
              "flex min-w-0 items-center gap-2 rounded-xl p-1.5 text-left transition-colors duration-200",
              active
                ? twMerge("cursor-pointer", colorClasses.hoverSurfaceBg)
                : "cursor-default",
              clickable && !visible && "opacity-50",
            )}
          >
            <MemberMiniAvatar member={mentee} size={32} color={color} />
            <span className="line-clamp-2 min-w-0 text-sm leading-tight">
              {mentee.name}
            </span>
          </button>
        );
      })}
    />
  );
};

export default MenteesGrid;
