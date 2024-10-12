// Need this enum cause importing it from react-flow lib creates the need of client-side rendering
export enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom",
}

export type DagreDirection = "TB" | "LR";
export type FlowDirection = {
  DESKTOP: DagreDirection;
  MOBILE: DagreDirection;
};
