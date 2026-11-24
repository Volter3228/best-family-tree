import { useRenderOnDemand } from "@/hooks";

// Renders nothing; mounted inside <Application> so it can reach the ticker.
const RenderOnDemand = () => {
  useRenderOnDemand();
  return null;
};

export default RenderOnDemand;
