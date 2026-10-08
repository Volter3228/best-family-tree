import { NODE_CARD_HEIGHT, NODE_CARD_TOP } from "./dimensions";

// Team frame geometry
export const TEAM_FRAME_PADDING = 80;
export const TEAM_FRAME_HEADER = 110;
export const TEAM_FRAME_RADIUS = 60;
export const TEAM_FRAME_GAP = 240;
export const TEAM_FRAME_STROKE_WIDTH = 6;
export const TEAM_FRAME_MIN_WIDTH = 640;

// Team layout inside a frame
export const TEAM_LAYOUT_COLUMNS = 5;
export const TEAM_COLUMN_GAP = 100;
export const TEAM_LEADER_GAP = 100;
export const TEAM_ROW_GAP = 90;
export const TEAM_NODE_VISUAL_HEIGHT = NODE_CARD_TOP + NODE_CARD_HEIGHT;
export const TEAM_PACK_ASPECT = 16 / 9;

// Semantic zoom: detail level above START, overview level below END.
// Fades run FAST times quicker than the raw progress.
export const TEAM_OVERVIEW_START_SCALE = 0.2;
export const TEAM_OVERVIEW_END_SCALE = 0.1;
export const TEAM_OVERVIEW_FAST_FACTOR = 2.5;
export const TEAM_OVERVIEW_NODE_ALPHA = 0.1;
export const TEAM_OVERVIEW_EDGE_ALPHA = 0.08;
// Above this raw progress nodes stop being interactive and team cards take over.
export const TEAM_OVERVIEW_INTERACTIVE_PROGRESS = 0.2;

// Title badge (detail level)
export const TEAM_TITLE_FONT_SIZE = 32;
export const TEAM_TITLE_PADDING_X = 24;
export const TEAM_TITLE_PADDING_Y = 12;
export const TEAM_TITLE_ICON_SIZE = 44;
// Rounded-square corner radius for the badge logo (0.75rem in canvas units).
export const TEAM_TITLE_ICON_RADIUS = 12;
export const TEAM_TITLE_ICON_PADDING = 10;
export const TEAM_TITLE_BORDER_WIDTH = 3;
export const TEAM_TITLE_SCREEN_PX = 18;

// Overview label (centre of the frame)
export const TEAM_OVERVIEW_FONT_SIZE = 64;
export const TEAM_OVERVIEW_WRAP_WIDTHS = [180, 240, 320, 420, 560, 720];
export const TEAM_OVERVIEW_SCREEN_PX = 96;

// Overview card hover zoom
export const TEAM_HOVER_TEXT_SCREEN_PX = 40;
export const TEAM_HOVER_MAX_SCALE = 5;

// Edges leaving one start spread under it, left to right (inside the avatar).
export const TEAM_EDGE_SPREAD_STEP = 26;
export const TEAM_EDGE_SPREAD_WIDTH = 120;

// Team edges: start under the leader's card, optionally via a shared hub bar.
export const TEAM_EDGE_START_Y = NODE_CARD_TOP + 10;
export const TEAM_EDGE_DROP = 40;
export const TEAM_MULTI_LEADER_EXTRA_GAP = 120;
export const TEAM_HUB_OFFSET = 60;
