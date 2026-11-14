import { useEffect, type RefObject } from "react";
import {
  bakeAuroraLayers,
  canBakeAurora,
  getBlurPaddingPx,
} from "@/utils/aurora";

const BAKED_CLASS = "aurora-baked";
const RESIZE_DEBOUNCE_MS = 250;

const readNumber = (value: string, fallback: number) => {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

// Draws the aurora's blurred conic layers once (see bakeParams.ts) and hands
// them to the CSS as images, so no blur filter runs while they drift. Bakes
// again when the theme or the container size changes.
export const useBakedAurora = (ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el || !canBakeAurora()) return;

    let lastKey = "";
    let timer: ReturnType<typeof setTimeout> | undefined;

    const bake = () => {
      const { clientWidth, clientHeight } = el;
      if (!clientWidth || !clientHeight) return;

      const style = getComputedStyle(el);
      // The blur and saturation are set on the pseudo-elements (mobile uses a
      // smaller blur through a media query).
      const layerStyle = getComputedStyle(el, "::before");
      const colors = [
        style.getPropertyValue("--aurora-conic-blue").trim(),
        style.getPropertyValue("--aurora-conic-green").trim(),
        style.getPropertyValue("--aurora-conic-orange").trim(),
      ] as const;
      if (colors.some((color) => !color)) return;

      const blurPx = readNumber(layerStyle.getPropertyValue("--aurora-blur"), 80);
      const saturate = readNumber(
        layerStyle.getPropertyValue("--aurora-saturate"),
        1.4,
      );

      const key = [clientWidth, clientHeight, blurPx, saturate, ...colors].join("|");
      if (key === lastKey) return;

      const urls = bakeAuroraLayers({
        containerWidth: clientWidth,
        containerHeight: clientHeight,
        colors,
        blurPx,
        saturate,
      });
      if (!urls) return;

      lastKey = key;
      el.style.setProperty("--aurora-pad", `${getBlurPaddingPx(blurPx)}px`);
      urls.forEach((url, index) =>
        el.style.setProperty(`--aurora-baked-${index + 1}`, `url("${url}")`),
      );
      el.classList.add(BAKED_CLASS);
    };

    const scheduleBake = () => {
      clearTimeout(timer);
      timer = setTimeout(bake, RESIZE_DEBOUNCE_MS);
    };

    bake();

    const resizeObserver = new ResizeObserver(scheduleBake);
    resizeObserver.observe(el);
    // The theme switches through attributes/inline variables on <html>.
    const themeObserver = new MutationObserver(scheduleBake);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [ref]);
};
