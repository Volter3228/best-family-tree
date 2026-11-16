import { gsap } from "gsap";
import type { Container } from "pixi.js";
import { cardsHiddenSignal } from "@/store/treeSignals";

// Member cards are built only when first needed: cards are shown and the node
// is on screen. Mounting every card in one task made a tree-mode switch freeze,
// and right after it the camera fits the whole tree, where cards are hidden.
// One gsap ticker callback hands out a few mounts per tick.
const MOUNTS_PER_TICK = 16;
// A mount this soon after the cards were revealed plays the reveal animation.
const REVEAL_WINDOW = 0.5;

interface Entry {
  mount: (animate: boolean) => void;
  // `culled` is valid only after the Culler ran once on the container, and it
  // runs on another ticker: a fresh entry waits for the next tick.
  ready: boolean;
}

const entries = new Map<Container, Entry>();
let running = false;
let revealedAt = -Infinity;
let subscribed = false;

const sync = (): void => {
  const shouldRun = entries.size > 0 && !cardsHiddenSignal.get();
  if (shouldRun === running) return;
  running = shouldRun;
  if (shouldRun) gsap.ticker.add(tick);
  else gsap.ticker.remove(tick);
};

function tick() {
  const animate = gsap.ticker.time - revealedAt < REVEAL_WINDOW;
  let mounted = 0;
  for (const [container, entry] of entries) {
    if (container.destroyed) {
      entries.delete(container);
      continue;
    }
    if (!entry.ready) {
      entry.ready = true;
      continue;
    }
    if (container.culled) continue;
    entries.delete(container);
    entry.mount(animate);
    if (++mounted >= MOUNTS_PER_TICK) break;
  }
  sync();
}

export const registerLazyCard = (
  container: Container,
  mount: (animate: boolean) => void,
): (() => void) => {
  if (!subscribed) {
    subscribed = true;
    cardsHiddenSignal.subscribe((hidden) => {
      if (!hidden) revealedAt = gsap.ticker.time;
      sync();
    });
  }
  entries.set(container, { mount, ready: false });
  sync();
  return () => {
    entries.delete(container);
    sync();
  };
};
