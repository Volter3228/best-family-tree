"use client";

import { CSSProperties, useState } from "react";
import { twMerge } from "tailwind-merge";
import PhotoOpenButton, {
  useIsPhotoOpen,
} from "@/components/photoViewer/PhotoOpenButton";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import { initialsOf } from "@/utils/strings";
import { AvatarSkeleton } from "./MemberAvatarImage";

interface Props {
  // The team's own photo: fills the frame and opens in the photo viewer.
  photoUrl?: string | null;
  // Fallback logo of the team type: shown whole, never cropped.
  iconUrl?: string | null;
  // Type colour (`#rrggbb`): the fallback is tinted with it, like the type tiles.
  typeColor?: string | null;
  // The type's name; its initials stand in when the type has no icon.
  typeName?: string | null;
  name: string;
  color?: AccentColor;
}

const GROUP_ICON_URL = 'url("/images/lion-group.svg")';
const INNER = "relative h-full w-full overflow-hidden rounded-[1.25rem] ring-4 ring-surface";

// The tinted look of the team type tiles: a light tint of the type colour over
// the (opaque) surface, with the mark in the type colour.
const tintStyle = (typeColor: string): CSSProperties => ({
  backgroundColor: "var(--surface)",
  backgroundImage: `linear-gradient(${typeColor}26, ${typeColor}26)`,
  color: typeColor,
});

// Rim of the tinted frame: the type colour, softened like the tile's ring.
const rimStyle = (typeColor: string): CSSProperties => ({
  backgroundColor: `color-mix(in srgb, ${typeColor} 60%, var(--surface))`,
});

// The tinted fallbacks (no own photo, type has a colour).
const isTinted = (photoUrl?: string | null, typeColor?: string | null) =>
  !photoUrl && !!typeColor;

const LoadingImage = ({ url, name, className }: { url: string; name: string; className: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <>
      <AvatarSkeleton done={loaded || failed} roundedClassName="rounded-[inherit]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={(img) => {
          // Cached images can finish before React attaches onLoad.
          if (img?.complete && img.naturalWidth) setLoaded(true);
        }}
        src={url}
        alt={name}
        className={twMerge(
          "absolute inset-0 h-full w-full transition-[opacity,transform] duration-300 ease-out",
          loaded ? "scale-100 opacity-100" : "scale-[0.98] opacity-0",
          className,
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </>
  );
};

// Counterpart of the member avatar: the same accent rim and white ring, as a
// wide rounded frame. Group photos are mostly landscape, so a 16:10 cover crop
// loses little, and the photo viewer shows the whole thing.
const TeamLogo = ({ photoUrl, iconUrl, typeColor, typeName, name, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const viewerId = `team-photo:${name}`;
  const photoOpen = useIsPhotoOpen(viewerId);

  const tinted = isTinted(photoUrl, typeColor);

  let content: React.ReactNode;
  if (photoUrl) {
    content = (
      <PhotoOpenButton
        id={viewerId}
        src={photoUrl}
        previewSrc={photoUrl}
        alt={name}
        roundedClassName="rounded-[1.25rem]"
        className={twMerge(INNER, "block bg-surface")}
      >
        <LoadingImage key={photoUrl} url={photoUrl} name={name} className="object-cover" />
      </PhotoOpenButton>
    );
  } else if (iconUrl) {
    content = (
      <div
        className={twMerge(INNER, !typeColor && "bg-surface")}
        style={typeColor ? tintStyle(typeColor) : undefined}
      >
        <LoadingImage key={iconUrl} url={iconUrl} name={name} className="object-contain p-6" />
      </div>
    );
  } else if (typeColor) {
    content = (
      <div
        className={twMerge(INNER, "flex items-center justify-center text-5xl font-semibold")}
        style={tintStyle(typeColor)}
      >
        {initialsOf(typeName || name) || "?"}
      </div>
    );
  } else {
    content = (
      <div className={twMerge(INNER, "flex items-center justify-center p-8 shadow-inner", colorClasses.accentBg)}>
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
  }

  return (
    <div
      className={twMerge(
        "member-info-avatar relative aspect-[16/10] w-full max-w-80 rounded-3xl p-1 drop-shadow-2xl/30",
        !tinted && colorClasses.accentBg,
        !tinted && colorClasses.dropShadow,
        // `invisible`, not opacity: the sidebar switch animation leaves an
        // inline opacity on this element.
        photoOpen && "invisible",
      )}
      style={tinted && typeColor ? rimStyle(typeColor) : undefined}
    >
      {content}
    </div>
  );
};

export default TeamLogo;
