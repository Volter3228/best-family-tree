import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { initialsOf } from "@/utils/strings";

interface Props {
  name: string;
  // Displayable image URL (remote or object URL), or null.
  iconSrc: string | null;
  // Lowercase `#rrggbb`; the tile is tinted at ~15% with this color.
  color?: string;
  className?: string;
}

// The type's mark: its icon, or its initials, tinted with its color.
const TeamTypeMark = ({ name, iconSrc, color, className }: Props) => {
  const initials = initialsOf(name);
  return (
    <span
      className={twMerge(
        "relative flex shrink-0 items-center justify-center overflow-hidden font-semibold",
        !color && "bg-foreground/10 text-foreground/70",
        className,
      )}
      // Pull the initials toward the theme foreground so they stay readable for
      // near-black and near-white colors (same mix as PositionBadge).
      style={
        color
          ? {
              backgroundColor: `${color}26`,
              color: `color-mix(in srgb, ${color} 30%, var(--foreground))`,
            }
          : undefined
      }
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="80px"
          className="object-contain p-2"
        />
      ) : initials ? (
        initials
      ) : (
        <PhotoIcon className="h-1/3 w-1/3" />
      )}
    </span>
  );
};

export default TeamTypeMark;
