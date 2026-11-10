export type SlideDirection = "ne" | "sw" | "zoom";

const KEY = "bft-slide-in";
const ENTER = { ne: "sw", sw: "ne", zoom: "zoom" } as const;

/**
 * Slides the current page off towards `direction` (ne = top right), then does
 * a full navigation. The next page slides in from the opposite corner (see
 * `slideInScript` and the `.page-root` rules in animations.css).
 */
export const navigateWithSlide = (url: string, direction: SlideDirection) => {
  try {
    sessionStorage.setItem(KEY, ENTER[direction]);
  } catch {}
  document.documentElement.classList.add(`page-leaving-${direction}`);
  window.setTimeout(
    () => window.location.assign(url),
    direction === "zoom" ? 450 : 520,
  );
};

/** Runs before first paint: marks the page that arrives by sliding. */
export const slideInScript = `try{var d=sessionStorage.getItem("${KEY}");if(d){sessionStorage.removeItem("${KEY}");document.documentElement.dataset.enter=d;setTimeout(function(){delete document.documentElement.dataset.enter},800)}}catch(e){}`;
