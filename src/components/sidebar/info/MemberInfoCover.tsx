import { twMerge } from "tailwind-merge";
import { SeasonMotif } from "@/components/icons/season";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";

interface Props {
  member: Member;
  color?: AccentColor;
}

// Seasonal band behind the header chips and the top of the avatar. It bleeds
// over the content padding. Its tint gradient is painted by the Sidebar card
// (see the floating-header layer there) so it can reach under the scrollbar.
const MemberInfoCover = ({ member, color = "blue" }: Props) => (
  <div
    aria-hidden
    className={twMerge(
      "relative -mx-6 h-[calc(var(--sidebar-header-height,3.5rem)+4.5rem)] shrink-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",
      COLOR_CLASSES[color].text,
    )}
  >
    <SeasonMotif season={member.getRecruitmentTerm().season} />
  </div>
);

export default MemberInfoCover;
