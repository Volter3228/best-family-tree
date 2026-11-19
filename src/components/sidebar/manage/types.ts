import type { AccentColor } from "@/types";

export type ManageTab =
  "members" | "teams" | "types" | "roles" | "suggestions" | "access";

export type ManageView =
  { kind: "list" } | { kind: "create" } | { kind: "edit"; id: string };

export const LIST_VIEW: ManageView = { kind: "list" };

// What every tab receives from ManageSidebar.
export interface ManageTabProps {
  view: ManageView;
  // Switches between the tab's list, the create form and an item's editor.
  go: (view: ManageView) => void;
  // Sets the editor header's second line (the item name, or "Новий …").
  onTitle: (title: string) => void;
  // Closes the whole sidebar (members close it after creating).
  onClose: () => void;
  color: AccentColor;
  // Re-reads the pending suggestions count shown on the rail.
  refreshCount: () => void;
}
