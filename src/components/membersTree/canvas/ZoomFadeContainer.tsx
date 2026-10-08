import { memo, type ReactNode, useRef } from "react";
import { Container } from "pixi.js";
import { useTick } from "@pixi/react";
import { useViewport } from "@/hooks";
import { getTeamOverviewFade, getTeamOverviewProgress } from "@/utils";
import { TEAM_OVERVIEW_INTERACTIVE_PROGRESS } from "@/constants/canvas";

interface Props {
  enabled: boolean;
  minAlpha: number;
  children: ReactNode;
}

// Fades children towards `minAlpha` in the team overview and makes them
// non-interactive there, so team cards underneath can take the pointer.
const ZoomFadeContainer = ({ enabled, minAlpha, children }: Props) => {
  const { viewport } = useViewport();
  const containerRef = useRef<Container>(null);

  useTick(() => {
    const container = containerRef.current;
    if (!container) return;
    const scale = viewport?.scale.x ?? 1;
    const alpha = enabled
      ? 1 - getTeamOverviewFade(scale) * (1 - minAlpha)
      : 1;
    const interactive =
      !enabled ||
      getTeamOverviewProgress(scale) < TEAM_OVERVIEW_INTERACTIVE_PROGRESS;
    if (container.alpha !== alpha) container.alpha = alpha;
    if (container.interactiveChildren !== interactive) {
      container.interactiveChildren = interactive;
    }
  });

  return <pixiContainer ref={containerRef}>{children}</pixiContainer>;
};

export default memo(ZoomFadeContainer);
