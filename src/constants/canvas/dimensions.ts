// Node & circle dimensions (NODE_HEIGHT matches circle for layout/edges)
export const NODE_WIDTH = 240;
export const NODE_AVATAR_SIZE = 192;
export const NODE_AVATAR_RADIUS = NODE_AVATAR_SIZE / 2;
export const NODE_HEIGHT = NODE_AVATAR_SIZE;

// Edges dimensions
export const FIXED_EDGE_WIDTH = 4;

// Zoom thresholds
export const CARD_VIEW_SCALE = 0.5;
export const BIRTHDAY_ANIMATION_MIN_SCALE = 0.2;
export const MIN_VIEWPORT_ZOOM = 0.03;
export const MAX_VIEWPORT_ZOOM = 1.5;

// Node Tooltip
export const NODE_TOOLTIP_OFFSET = 4;

// Node Card
export const NODE_CARD_TOP = Math.round((NODE_AVATAR_SIZE * 5) / 6);
export const NODE_CARD_HEIGHT = NODE_AVATAR_SIZE - NODE_CARD_TOP + 70;
export const NODE_CARD_RADIUS = 25;
