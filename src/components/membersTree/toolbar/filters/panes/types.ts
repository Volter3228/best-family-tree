import type { FilterState } from "@/types";

// What every pane needs from the panel.
export interface FilterPaneProps {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}
