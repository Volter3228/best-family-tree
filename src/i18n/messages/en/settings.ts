import type { Messages } from "../types";

export const settings = {
  title: "Settings",
  reset: "Reset settings",
  layout: "Layout",
  theme: "Theme",
  direction: "Tree direction",
  lineStyle: "Line style",
  treeMode: { family: "Families", grid: "Grid", team: "Teams" },
  themeOptions: { system: "System", light: "Light", dark: "Dark" },
  orientation: { auto: "Auto", tb: "Down", lr: "Right" },
  edgeStyle: { orthogonal: "Angular", bezier: "Smooth", straight: "Straight" },
} satisfies Messages["settings"];
