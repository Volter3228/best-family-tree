// A press that moved no more than this (screen px) is a click, however long it took.
export const TAP_MOVE_TOLERANCE = 6;
// A quick, short drag is most likely a click that slipped: it still selects.
export const ACCIDENTAL_DRAG_MAX_DISTANCE = 24;
export const ACCIDENTAL_DRAG_MAX_MS = 220;
// A touch held still this long (ms) shows the node's hover state instead of selecting it.
export const LONG_PRESS_MS = 300;
