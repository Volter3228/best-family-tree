import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { getPhotoUrlForViewer } from "@/libs/cloudinary";
import type { AccentColor } from "@/types";
import { initialsOf } from "@/utils/strings";

interface Props {
  name: string;
  // Team photo (or a local preview of a picked one), else the type's icon.
  photoUrl?: string | null;
  iconUrl?: string | null;
  // Hex colour of the team type; tints the tile.
  typeColor?: string | null;
  color?: AccentColor;
  className?: string;
}

const HEX = /^#[0-9a-f]{6}$/i;

// Square logo tile of a team: photo, else the type icon, else initials tinted
// with the type colour. Size comes from `className`.
const TeamTile = ({ name, photoUrl, iconUrl, typeColor, color = "blue", className }: Props) => {
  const tint = typeColor && HEX.test(typeColor) ? typeColor : null;
  // Lists show dozens of tiles: ask Cloudinary for a thumbnail, not the original.
  const raw = photoUrl || iconUrl;
  const src = raw?.includes("res.cloudinary.com") ? getPhotoUrlForViewer(raw, 160) : raw;
  return (
    <div
      className={twMerge(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl text-sm font-semibold",
        !tint && [COLOR_CLASSES[color].softBg, COLOR_CLASSES[color].text],
        className,
      )}
      // Initials pulled toward the theme foreground, as in TeamTypeMark, so
      // near-black and near-white type colours stay readable in both themes.
      style={
        tint
          ? {
              backgroundColor: `${tint}26`,
              color: `color-mix(in srgb, ${tint} 30%, var(--foreground))`,
            }
          : undefined
      }
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={twMerge("h-full w-full", photoUrl ? "object-cover" : "object-contain p-1.5")}
        />
      ) : (
        initialsOf(name) || "?"
      )}
    </div>
  );
};

export default TeamTile;
