import { useMemo } from "react";
import { useEventTypes } from "@/hooks";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import BadgeInput from "./badge/BadgeInput";

interface Props {
  filters: FilterState;
  isOpen: boolean;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const EventTypeFilterSection = ({
  filters,
  isOpen,
  onChange,
  onToggle,
}: Props) => {
  const [eventTypes] = useEventTypes();

  const sortedEventTypes = useMemo(
    () => [...eventTypes].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [eventTypes],
  );

  const eventTypeOptions = useMemo(
    () =>
      sortedEventTypes.map((eventType) => ({
        value: eventType.name,
        text: eventType.name,
      })),
    [sortedEventTypes],
  );

  return (
    <FilterSection
      title="Команди"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={filters.eventTypeNames.length > 0}
    >
      <BadgeInput
        selected={filters.eventTypeNames}
        options={eventTypeOptions}
        onChange={(eventTypeNames) => onChange({ eventTypeNames })}
        placeholder="Введіть команду..."
        color="green"
      />
    </FilterSection>
  );
};

export default EventTypeFilterSection;
