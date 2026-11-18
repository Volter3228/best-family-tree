import type { Messages } from "../types";

export const toolbar = {
  search: "Search",
  filters: "Filters",
  settings: "Settings",
  manage: "Manage",
  fitToScreen: "Fit to screen",
  demoBadge: "Demo · changes aren't saved",
  team: "Team",
  editTitle: (name: string) => `Edit: ${name}`,
} satisfies Messages["toolbar"];

export const photoViewer = {
  open: "Open photo",
  close: "Close",
  zoomOut: "Zoom out",
  zoomIn: "Zoom in",
  resetZoom: "Reset zoom",
} satisfies Messages["photoViewer"];
