import { memo, useEffect, useRef, useState } from "react";
import { Container, Rectangle } from "pixi.js";
import gsap from "gsap";
import { birthdayVisibleSignal } from "@/store/treeSignals";
import MemberBirthdayAnimation from "@/components/animations/memberBirthday";

// Far above any hover zIndex, so the effect draws over every node.
const BIRTHDAY_Z_INDEX = 1e9;

interface Props {
  x: number;
  y: number;
  cullArea: Rectangle;
}

// x and y are the node's content center.
const MemberNodeBirthday = ({ x, y, cullArea }: Props) => {
  const birthdayRef = useRef<Container>(null);
  const [showBirthday, setShowBirthday] = useState(birthdayVisibleSignal.get);
  // Follows the zoom state.
  useEffect(() => birthdayVisibleSignal.subscribe(setShowBirthday), []);

  useEffect(() => {
    if (!birthdayRef.current) return;
    const tween = gsap.to(birthdayRef.current, {
      alpha: showBirthday ? 1 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
    return () => {
      tween.kill();
    };
  }, [showBirthday]);

  return (
    <pixiContainer
      ref={birthdayRef}
      x={x}
      y={y}
      alpha={0}
      zIndex={BIRTHDAY_Z_INDEX}
      eventMode="none"
      cullable
      cullableChildren={false}
      cullArea={cullArea}
    >
      <MemberBirthdayAnimation paused={!showBirthday} />
    </pixiContainer>
  );
};

export default memo(MemberNodeBirthday);
