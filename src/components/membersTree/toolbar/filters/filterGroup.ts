import type { FilterSectionKey, FilterState } from "@/types";

// What a category of filter sections needs from the panel.
export interface FilterGroupProps {
  filters: FilterState;
  openSections: Record<FilterSectionKey, boolean>;
  onChange: (patch: Partial<FilterState>) => void;
  onToggleSection: (key: FilterSectionKey) => () => void;
}
