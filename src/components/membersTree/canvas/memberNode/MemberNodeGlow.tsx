import { memo, useRef } from "react";
import { Sprite } from "pixi.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  NODE_AVATAR_SIZE,
  NODE_CARD_TOP,
  NODE_HOVER_ANIMATION_DURATION,
  NODE_WIDTH,
} from "@/constants/canvas";
import { getGlowTexture, GLOW_PADDING, type GlowKind } from "./glowTexture";

const GLOW_ALPHA = 0.6;

// Top-left of the glowed shape in node space.
const ORIGINS: Record<GlowKind, { x: number; y: number }> = {
  avatar: { x: (NODE_WIDTH - NODE_AVATAR_SIZE) / 2, y: 0 },
  card: { x: 0, y: NODE_CARD_TOP },
};

interface Props {
  kind: GlowKind;
  active: boolean;
}

// Fades a shared pre-blurred halo in and out behind the node. The card halo
// is rendered inside the card container, so it grows and fades with the card.
const MemberNodeGlow = ({ kind, active }: Props) => {
  const spriteRef = useRef<Sprite>(null);

  useGSAP(() => {
    if (!spriteRef.current) return;
    gsap.to(spriteRef.current, {
      alpha: active ? GLOW_ALPHA : 0,
      duration: NODE_HOVER_ANIMATION_DURATION / 2,
      ease: "power1.out",
      overwrite: "auto",
    });
  }, [active]);

  const origin = ORIGINS[kind];
  return (
    <pixiSprite
      ref={spriteRef}
      texture={getGlowTexture(kind)}
      x={origin.x - GLOW_PADDING}
      y={origin.y - GLOW_PADDING}
      alpha={0}
      eventMode="none"
    />
  );
};

export default memo(MemberNodeGlow);
