import { useCallback } from "react";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import LineageMemberSearch from "./LineageMemberSearch";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const LineageFilterSection = ({
  filters,
  onChange,
  isOpen,
  onToggle,
}: Props) => {
  const { lineageMemberId } = filters;

  const handleSelectMember = useCallback(
    (memberId: string) => {
      onChange({ lineageMemberId: memberId });
    },
    [onChange],
  );

  const handleClearMember = useCallback(() => {
    onChange({ lineageMemberId: null });
  }, [onChange]);

  return (
    <FilterSection
      title="Рід учасника"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={lineageMemberId !== null}
    >
      <LineageMemberSearch
        selectedMemberId={lineageMemberId}
        onSelect={handleSelectMember}
        onClear={handleClearMember}
      />
    </FilterSection>
  );
};

export default LineageFilterSection;
