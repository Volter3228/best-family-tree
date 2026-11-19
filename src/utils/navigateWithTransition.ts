export type PageTransition = "fade" | "zoom";

const KEY = "bft-page-enter";
const LEAVE_MS = { fade: 320, zoom: 450 } as const;

/**
 * Plays the leave animation for `transition` on the current page, then does a
 * full navigation. The next page plays the matching enter animation (see
 * `pageEnterScript` and the `.page-root` rules in animations.css).
 */
export const navigateWithTransition = (
  url: string,
  transition: PageTransition,
) => {
  try {
    sessionStorage.setItem(KEY, transition);
  } catch {}
  document.documentElement.classList.add(`page-leaving-${transition}`);
  window.setTimeout(() => window.location.assign(url), LEAVE_MS[transition]);
};

/** Runs before first paint: marks the page that arrives with a transition. */
export const pageEnterScript = `try{var d=sessionStorage.getItem("${KEY}");if(d){sessionStorage.removeItem("${KEY}");document.documentElement.dataset.enter=d;setTimeout(function(){delete document.documentElement.dataset.enter},900)}}catch(e){}`;
