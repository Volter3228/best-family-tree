import { UserGroupIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useMemberById } from "@/hooks";
import type { AccentColor } from "@/types";
import { initialsOf } from "@/utils/strings";
import { useDisplayName } from "@/utils/displayName";
import MemberMiniAvatar from "../info/MemberMiniAvatar";

interface Props {
  kind: "member" | "team";
  id: string;
  name: string;
  photo: string | null;
  color: AccentColor;
  size?: number;
}

// A member's round avatar or a team's rounded tile, from the data a row carries.
const PersonAvatar = ({ kind, id, name, photo, color, size = 40 }: Props) => {
  const dn = useDisplayName();
  const member = useMemberById(kind === "member" ? id : null);
  const colorClasses = COLOR_CLASSES[color];
  const style = { width: size, height: size };

  if (member)
    return <MemberMiniAvatar member={member} size={size} color={color} />;

  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt=""
        style={style}
        className={twMerge(
          "shrink-0 object-cover",
          kind === "team" ? "rounded-xl" : "rounded-full",
        )}
      />
    );
  }

  if (kind === "team") {
    return (
      <span
        style={style}
        className={twMerge(
          "flex shrink-0 items-center justify-center rounded-xl",
          colorClasses.softBg,
          colorClasses.text,
        )}
      >
        <UserGroupIcon className="h-5 w-5" />
      </span>
    );
  }

  return (
    <span
      style={{ ...style, fontSize: Math.max(10, size * 0.38) }}
      className={twMerge(
        "flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        colorClasses.accentBg,
      )}
    >
      <span className="leading-none [text-box:trim-both_cap_alphabetic]">
        {initialsOf(dn(name)) || "?"}
      </span>
    </span>
  );
};

export default PersonAvatar;
