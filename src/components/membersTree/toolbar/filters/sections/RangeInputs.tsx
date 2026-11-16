import type { ReactNode } from "react";

export interface RangeSlot {
  id?: string;
  placeholder: string;
  disabled: boolean;
}

interface Props {
  // Id of the "from" control, so the section title can label it.
  fromId?: string;
  fromPlaceholder: string;
  toPlaceholder: string;
  disabled?: boolean;
  // Callers render the field so years and dates share one row.
  renderFrom: (slot: RangeSlot) => ReactNode;
  renderTo: (slot: RangeSlot) => ReactNode;
}

// Two fields on one row with a dash between them. Filling one field means an
// exact match; filling both means a range.
const RangeInputs = ({
  fromId,
  fromPlaceholder,
  toPlaceholder,
  disabled = false,
  renderFrom,
  renderTo,
}: Props) => (
  <div className="flex items-center gap-2">
    <div className="min-w-0 flex-1">
      {renderFrom({ id: fromId, placeholder: fromPlaceholder, disabled })}
    </div>
    <span aria-hidden className="shrink-0 text-xs text-foreground/40">
      —
    </span>
    <div className="min-w-0 flex-1">
      {renderTo({ placeholder: toPlaceholder, disabled })}
    </div>
  </div>
);

export default RangeInputs;
