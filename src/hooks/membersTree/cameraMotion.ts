// True while the camera is being dragged, zoomed or gliding. Hover effects
// (shadow filter, scale tween, tooltip) are skipped then: nodes sliding under
// a stationary cursor would start them on every frame. Clicks are unaffected.
const MOTION_GRACE_MS = 150;
let movingUntil = 0;

export const markCameraMoving = () => {
  movingUntil = performance.now() + MOTION_GRACE_MS;
};

export const isCameraMoving = () => performance.now() < movingUntil;
