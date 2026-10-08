import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  url?: string | null;
  name: string;
  className?: string;
  color?: AccentColor;
}

const GROUP_ICON_URL = 'url("/images/lion-group.svg")';

// Team logo shown whole (no crop, no backdrop, so white logos stay visible), or
// the lion group icon (drawn as a mask in the accent colour) when the team and
// its type have none. The size comes from the className prop.
const TeamLogo = ({ url, name, className, color = "blue" }: Props) => {
  if (url) {
    return (
      <img
        src={url}
        alt={name}
        className={twMerge("shrink-0", className)}
      />
    );
  }

  return (
    <div
      className={twMerge(
        "flex shrink-0 items-center justify-center rounded-full p-4",
        COLOR_CLASSES[color].accentBg,
        className,
      )}
    >
      <div
        className="h-full w-full bg-white"
        style={{
          WebkitMaskImage: GROUP_ICON_URL,
          maskImage: GROUP_ICON_URL,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default TeamLogo;
