"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
}

// Fades the photo in once it has loaded. Keyed by `src` it remounts for every
// member, so the previous member's photo never lingers while the new one loads.
const MemberAvatarImageInner = ({ src }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt="Avatar"
      className={twMerge(
        "rounded-full shadow-lg transition-opacity duration-300 ease-out",
        loaded ? "opacity-100" : "opacity-0",
      )}
      sizes="100%"
      quality={75}
      priority
      fill
      onLoad={() => setLoaded(true)}
    />
  );
};

const MemberAvatarImage = ({ src }: Props) => (
  <MemberAvatarImageInner key={src} src={src} />
);

export default MemberAvatarImage;
