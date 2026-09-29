import { useState } from "react";
import type { PositionFormRow } from "@/types";
import { createEmptyPositionRow } from "./positionFormUtils";

export const usePositionRows = (
  positions: PositionFormRow[],
  onChange: (positions: PositionFormRow[]) => void,
) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const updateRow = (id: string, patch: Partial<PositionFormRow>) => {
    onChange(
      positions.map((row) => (row.id === id ? { ...row, ...patch } : row)),
    );
  };

  const addRow = () => {
    const row = createEmptyPositionRow();
    setExpandedRows((current) => new Set(current).add(row.id));
    onChange([...positions, row]);
  };

  const removeRow = (id: string) => {
    setExpandedRows((current) => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
    onChange(positions.filter((row) => row.id !== id));
  };

  const toggleRow = (id: string) => {
    setExpandedRows((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return { expandedRows, updateRow, addRow, removeRow, toggleRow };
};
