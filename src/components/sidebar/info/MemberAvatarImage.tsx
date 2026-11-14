"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
}

// Placeholder while the photo loads: a muted disc with a slow highlight sweep
const AvatarSkeleton = ({ done }: { done: boolean }) => (
  <div
    aria-hidden
    className="motion-safe:animate-avatar-fade-in absolute inset-0"
  >
    <div
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-full bg-foreground/10 shadow-lg transition-opacity duration-300 ease-out",
        done && "opacity-0",
      )}
    >
      <div className="absolute inset-0 hidden bg-linear-to-r from-transparent via-surface/60 to-transparent motion-safe:block motion-safe:animate-avatar-shimmer" />
    </div>
  </div>
);

const MemberAvatarImageInner = ({ src }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const done = loaded || failed;

  return (
    <>
      <AvatarSkeleton done={done} />
      <Image
        src={src}
        alt="Avatar"
        className={twMerge(
          "rounded-full shadow-lg transition-[opacity,transform] duration-300 ease-out",
          loaded ? "scale-100 opacity-100" : "scale-[0.98] opacity-0",
        )}
        sizes="100%"
        quality={75}
        priority
        fill
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </>
  );
};

const MemberAvatarImage = ({ src }: Props) => (
  <MemberAvatarImageInner key={src} src={src} />
);

export default MemberAvatarImage;
