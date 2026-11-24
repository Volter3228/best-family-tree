// The canvas is drawn only while something may be changing on it: drawing an
// unchanged scene 60–120 times a second drains phone batteries and keeps the
// browser re-blurring the sidebar backdrop. Anything that changes the scene
// outside the tracked sources (input, stores, tweens, camera) calls
// `requestCanvasRender`.

// Long enough for the eased hover/selection transitions to settle.
export const RENDER_ACTIVE_MS = 1000;
// Safety net while idle: a change nobody reported still shows up shortly.
export const IDLE_RENDER_INTERVAL_MS = 1000;

let activeUntil = 0;

export const requestCanvasRender = (now = performance.now()): void => {
  activeUntil = Math.max(activeUntil, now + RENDER_ACTIVE_MS);
};

export const shouldRenderFrame = (now: number, lastRenderAt: number): boolean =>
  now < activeUntil || now - lastRenderAt >= IDLE_RENDER_INTERVAL_MS;

export const resetRenderDemand = (): void => {
  activeUntil = 0;
};
