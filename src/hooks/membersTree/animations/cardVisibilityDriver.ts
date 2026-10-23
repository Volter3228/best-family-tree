import { gsap } from "gsap";
import type { Container } from "pixi.js";

// One shared gsap ticker callback drives every card appearance/disappearance.
// A zoom threshold crossing used to create a timeline with several tweens per
// node; with hundreds of nodes that burst is what made the threshold stutter.
// Cards Pixi culled in its last frame (off screen) skip the animation and jump
// to the final state: animating something nobody can see is wasted work.
const SHOW_DURATION = 0.4;
const HIDE_DURATION = 0.24;

const easePower2Out = gsap.parseEase("power2.out");
const easePower2In = gsap.parseEase("power2.in");
const easeBackOut = gsap.parseEase("back.out(1.5)");

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

interface Entry {
  card: Container;
  startAt: number;
  duration: number;
  reveal: (card: Container, local: number) => void;
  finalize: (card: Container) => void;
}

let entries: Entry[] = [];

const tick = () => {
  const now = gsap.ticker.time;
  entries = entries.filter((entry) => {
    const local = now - entry.startAt;
    if (local < 0) return true;
    if (local >= entry.duration) {
      entry.finalize(entry.card);
      return false;
    }
    entry.reveal(entry.card, local);
    return true;
  });
  if (entries.length === 0) gsap.ticker.remove(tick);
};

export const finishCardReveal = (card: Container): void => {
  entries = entries.filter((entry) => {
    if (entry.card !== card) return true;
    entry.finalize(card);
    return false;
  });
};

interface RegisterOptions {
  direction: "show" | "hide";
  delay: number;
  finalize: (card: Container) => void;
  collapsedScaleX: number;
  collapsedScaleY: number;
  slideStartY: number;
  restY: number;
}

export const registerCardReveal = (
  card: Container,
  {
    direction,
    delay,
    finalize,
    collapsedScaleX,
    collapsedScaleY,
    slideStartY,
    restY,
  }: RegisterOptions,
): void => {
  // A card flipping direction mid-animation ends the previous one first.
  finishCardReveal(card);

  // `culled` is set by Pixi's culler every frame from the node's cullArea.
  if (card.parent?.culled) {
    finalize(card);
    return;
  }

  const isShow = direction === "show";
  const reveal = (c: Container, local: number): void => {
    if (isShow) {
      c.alpha = easePower2Out(clamp01(local / 0.25));
      const p = easeBackOut(clamp01(local / SHOW_DURATION));
      c.scale.set(
        collapsedScaleX + (1 - collapsedScaleX) * p,
        collapsedScaleY + (1 - collapsedScaleY) * p,
      );
      c.y = slideStartY + (restY - slideStartY) * p;
    } else {
      c.alpha = 1 - easePower2In(clamp01(local / 0.2));
      const p = easePower2In(clamp01(local / HIDE_DURATION));
      c.scale.set(
        1 + (collapsedScaleX - 1) * p,
        1 + (collapsedScaleY - 1) * p,
      );
      c.y = restY + (slideStartY - restY) * p;
    }
  };

  // Start state applied right away (as the delayed timeline used to do).
  reveal(card, 0);
  entries.push({
    card,
    startAt: gsap.ticker.time + delay,
    duration: isShow ? SHOW_DURATION : HIDE_DURATION,
    reveal,
    finalize,
  });
  gsap.ticker.add(tick);
};
