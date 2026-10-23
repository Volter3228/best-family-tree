import { useViewportCulling } from "@/hooks";

// Renders nothing; mounted inside <Application> so it can reach the ticker.
const ViewportCulling = () => {
  useViewportCulling();
  return null;
};

export default ViewportCulling;
