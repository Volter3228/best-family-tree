import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { loadImageAspect } from "@/components/photoViewer/imageAspect";
import PhotoOpenButton from "@/components/photoViewer/PhotoOpenButton";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  url?: string | null;
  name: string;
  className?: string;
  color?: AccentColor;
}

const GROUP_ICON_URL = 'url("/images/lion-group.svg")';

const MAX_LOGO_WIDTH = "16rem";
const MAX_LOGO_HEIGHT = "12rem";

const TeamLogo = ({ url, name, className, color = "blue" }: Props) => {
  const [loaded, setLoaded] = useState<{ url: string; aspect: number }>();
  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    void loadImageAspect(url).then((aspect) => {
      if (!cancelled) setLoaded({ url, aspect });
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (url) {
    const aspect = loaded?.url === url ? loaded.aspect : 1;
    return (
      <PhotoOpenButton
        id={`team-logo:${name}`}
        src={url}
        previewSrc={url}
        alt={name}
        fit="contain"
        roundedClassName="rounded-xl"
        className="shrink-0"
      >
        <img
          src={url}
          alt={name}
          className={twMerge("shrink-0", className)}
          style={{
            width: `min(${MAX_LOGO_WIDTH}, calc(${MAX_LOGO_HEIGHT} * ${aspect}))`,
            height: "auto",
          }}
        />
      </PhotoOpenButton>
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
