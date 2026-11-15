import { twMerge } from "tailwind-merge";
import { SeasonMotif } from "@/components/icons/season";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";
import SeasonChip from "./SeasonChip";

interface Props {
  member: Member;
  color?: AccentColor;
}

// Seasonal band behind the season chip and the top of the avatar. It bleeds
// over the content padding. Its tint gradient is painted by the Sidebar card
// (see the floating-header layer there) so it can reach under the scrollbar.
// The chip lives here, not in the floating header, so it scrolls away with the
// cover. The motif is aria-hidden itself; the chip stays readable.
const MemberInfoCover = ({ member, color = "blue" }: Props) => (
  <div
    className={twMerge(
      "relative -mx-6 h-[calc(var(--sidebar-header-height,3.5rem)+4.5rem)] shrink-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",
      COLOR_CLASSES[color].text,
    )}
  >
    <SeasonMotif season={member.getRecruitmentTerm().season} />
    {/* Same row as the sidebar header's title: pt-4, or below the mobile handle. */}
    <div className="absolute inset-x-0 top-0 flex px-4 pt-4 max-md:pt-10">
      <SeasonChip member={member} color={color} />
    </div>
  </div>
);

export default MemberInfoCover;
