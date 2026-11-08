import { useSettingsStore } from "@/store/settingsStore";
import { useMediaQuery } from "@/hooks/ui/useMediaQuery";
import { FLOW_VIEWPORT_DIRECTION } from "@/libs/elk";
import type { Direction } from "@/types";

// Just below Tailwind's `md` breakpoint (768px), so the two never both match.
const MOBILE_QUERY = "(max-width: 767.98px)";

export const useIsMobileScreen = (): boolean => useMediaQuery(MOBILE_QUERY);

/**
 * The tree's growth direction. "auto" follows the screen shape: phones lay
 * trees out left-to-right so they grow vertically on portrait displays.
 * The resolved direction doubles as the "mobile layout" flag (grid density).
 */
export const useResolvedDirection = (): Direction => {
  const orientation = useSettingsStore((s) => s.orientation);
  const mobile = useIsMobileScreen();
  if (orientation === "auto") {
    return mobile
      ? FLOW_VIEWPORT_DIRECTION.MOBILE
      : FLOW_VIEWPORT_DIRECTION.DESKTOP;
  }
  return orientation === "lr"
    ? FLOW_VIEWPORT_DIRECTION.MOBILE
    : FLOW_VIEWPORT_DIRECTION.DESKTOP;
};
