import {
  BIRTHDAY_ANIMATION_MIN_SCALE,
  CARD_VIEW_SCALE,
} from "@/constants/canvas";
import { useTreeStore } from "./treeStore";

type TreeSnapshot = ReturnType<typeof useTreeStore.getState>;

// A boolean derived from the tree store that notifies its listeners only when
// it flips. Every member node needs to react to a zoom threshold, but making
// the threshold a prop re-renders all of them (culled or not) in one frame;
// listeners let each node update its own Pixi objects without React.
const createSignal = (select: (state: TreeSnapshot) => boolean) => {
  let value = select(useTreeStore.getState());
  const listeners = new Set<(next: boolean) => void>();

  useTreeStore.subscribe((state) => {
    const next = select(state);
    if (next === value) return;
    value = next;
    // Copy: a listener may unsubscribe while the others are notified.
    [...listeners].forEach((listener) => listener(next));
  });

  return {
    get: () => value,
    subscribe: (listener: (next: boolean) => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
};

// The tree is zoomed out far enough that cards are collapsed behind avatars.
export const zoomedOutSignal = createSignal(
  (state) => state.scale < CARD_VIEW_SCALE,
);

export const birthdayVisibleSignal = createSignal(
  (state) => state.scale >= BIRTHDAY_ANIMATION_MIN_SCALE,
);

// Cards are collapsed when zoomed out, and while a fit-view animation is
// heading to a zoomed-out target.
export const cardsHiddenSignal = createSignal(
  (state) =>
    state.scale < CARD_VIEW_SCALE ||
    (state.isFitViewAnimating && state.fitViewTargetScale !== null),
);
