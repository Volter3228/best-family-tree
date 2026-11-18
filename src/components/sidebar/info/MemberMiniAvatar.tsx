import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { getInitials, getMemberAvatar } from "@/utils";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";
import { useDisplayName } from "@/utils/displayName";

interface Props {
  member: Member;
  // Diameter in px.
  size: number;
  color?: AccentColor;
  className?: string;
}

// Round photo, or the initials on the accent colour when there is none.
const MemberMiniAvatar = ({
  member,
  size,
  color = "blue",
  className,
}: Props) => {
  const dn = useDisplayName();
  const avatar = getMemberAvatar(member, {
    width: Math.round(size * 2),
    height: Math.round(size * 2),
  });
  const style = { width: size, height: size };

  return avatar ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={avatar}
      alt=""
      style={style}
      className={twMerge("shrink-0 rounded-full object-cover", className)}
    />
  ) : (
    <span
      style={{ ...style, fontSize: Math.max(10, size * 0.38) }}
      className={twMerge(
        "flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        COLOR_CLASSES[color].accentBg,
        className,
      )}
    >
      {/* Trim the line box to the capitals so they sit at the optical
          centre; the font's line box leaves more room below than above. */}
      <span className="leading-none [text-box:trim-both_cap_alphabetic]">
        {getInitials(dn(member.name))}
      </span>
    </span>
  );
};

export default MemberMiniAvatar;
