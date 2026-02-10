import { useEffect, useRef } from "react";
import { Container, Sprite, Texture } from "pixi.js";
import { NODE_WIDTH } from "@/constants/pixi";
import gsap from "gsap";
import { BIRTHDAY_EMOJIS, EMOJI_COUNT } from "./constants";
import {
  createEmojiTexture,
  generateRandomPosition,
  MIN_DISTANCE_FROM_CENTER,
} from "./utils";

const MemberBirthdayAnimation = () => {
  const containerRef = useRef<Container>(null);
  const spritesRef = useRef<Sprite[]>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);
  // We only need to cache Textures now, not Text objects
  const textureCacheRef = useRef<Texture[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sprites: Sprite[] = [];
    const timelines: gsap.core.Timeline[] = [];
    const textureCache: Texture[] = [];

    // Clear any existing children
    container.removeChildren();

    // Map to easily retrieve texture by emoji
    const emojiTextures = new Map<string, Texture>();

    // Pre-generate textures for all emojis
    BIRTHDAY_EMOJIS.forEach((emoji) => {
      const texture = createEmojiTexture(emoji);
      emojiTextures.set(emoji, texture);
      textureCache.push(texture);
    });

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

    spritesRef.current = sprites;
    timelinesRef.current = timelines;
    textureCacheRef.current = textureCache;

    return () => {
      timelines.forEach((timeline) => timeline.kill());
      sprites.forEach((sprite) => sprite.destroy());
      // Destroy the generated textures to prevent memory leaks
      textureCache.forEach((texture) => texture.destroy(true));
      container.removeChildren();
    };
  }, []);

  return <pixiContainer ref={containerRef} />;
};

export default MemberBirthdayAnimation;
