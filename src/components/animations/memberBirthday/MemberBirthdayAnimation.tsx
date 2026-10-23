import { useEffect, useRef } from "react";
import { Container, Sprite, Texture } from "pixi.js";
import gsap from "gsap";
import {
  acquireEmojiTextures,
  generateRandomPosition,
  releaseEmojiTextures,
} from "./utils";
import { BIRTHDAY_EMOJIS, EMOJI_COUNT } from "./constants";

interface Props {
  // Hidden animations stop ticking instead of animating at alpha 0.
  paused?: boolean;
}

const MemberBirthdayAnimation = ({ paused = false }: Props) => {
  const containerRef = useRef<Container>(null);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sprites: Sprite[] = [];
    const timelines: gsap.core.Timeline[] = [];

    // Clear any existing children
    container.removeChildren();

    const emojiTextures = acquireEmojiTextures();

    const getRandomTexture = () => {
      const emoji =
        BIRTHDAY_EMOJIS[Math.floor(Math.random() * BIRTHDAY_EMOJIS.length)];
      return emojiTextures.get(emoji) || Texture.EMPTY;
    };

    // Create emoji sprites
    for (let i = 0; i < EMOJI_COUNT; i++) {
      const sprite = new Sprite(getRandomTexture());

      sprite.anchor.set(0.5);
      // Scale down because we generated textures at high resolution (128px)
      // 0.25 scale gives us 32px visual size
      sprite.scale.set(0.2);

      // Assign side based on index to ensure perfect balance
      // Even indexes go right (1), odd indexes go left (-1)
      const fixedSide = i % 2 === 0 ? 1 : -1;
      const { x: randomX, y: randomY } = generateRandomPosition(fixedSide);

      sprite.x = randomX;
      sprite.y = randomY;
      sprite.alpha = 0;

      container.addChild(sprite);
      sprites.push(sprite);

      // Create individual timeline for each emoji with continuous loop
      const timeline = gsap.timeline({ repeat: -1 });

      // Random initial delay for stagger effect
      const initialDelay = Math.random() * 3;
      const floatDuration = 5 + Math.random() * 2; // 5-7 seconds
      const floatDistance = 30 + Math.random() * 20; // Float up 30-50px
      const horizontalDrift = (Math.random() - 0.5) * 40; // Drift left or right

      // Fade in
      timeline.to(
        sprite,
        {
          alpha: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        initialDelay,
      );

      // Float up and drift
      timeline.to(
        sprite,
        {
          y: randomY - floatDistance,
          x: randomX + horizontalDrift,
          duration: floatDuration,
          ease: "sine.out",
        },
        initialDelay,
      );

      // Gentle rotation wobble
      timeline.to(
        sprite,
        {
          rotation: (Math.random() - 0.5) * 0.8,
          duration: floatDuration,
          ease: "sine.inOut",
        },
        initialDelay,
      );

      // Fade out
      timeline.to(
        sprite,
        {
          alpha: 0,
          duration: 1.5,
          ease: "power2.in",
        },
        initialDelay + floatDuration - 1.5,
      );

      // Reset to new random position (outside exclusion zone)
      timeline.call(
        () => {
          // Optimization: Swap texture instead of changing Text string
          sprite.texture = getRandomTexture();

          // Keep the same side to maintain balance
          const { x: newX, y: newY } = generateRandomPosition(fixedSide);

          sprite.x = newX;
          sprite.y = newY;
          sprite.rotation = 0;
        },
        undefined,
        initialDelay + floatDuration,
      );

      timelines.push(timeline);
    }
    timelinesRef.current = timelines;

    return () => {
      timelines.forEach((timeline) => timeline.kill());
      sprites.forEach((sprite) => sprite.destroy());
      timelinesRef.current = [];
      releaseEmojiTextures();
      container.removeChildren();
    };
  }, []);

  // Declared after the build effect, so it also applies the initial state.
  useEffect(() => {
    timelinesRef.current.forEach((timeline) => timeline.paused(paused));
  }, [paused]);

  return <pixiContainer ref={containerRef} />;
};

export default MemberBirthdayAnimation;
