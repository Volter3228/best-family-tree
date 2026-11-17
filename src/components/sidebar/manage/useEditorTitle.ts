import { useEffect } from "react";

// Reports the editor header's second line (item name / "Новий …") upward.
// Call it unconditionally in every tab; pass "" while on the list.
export const useEditorTitle = (onTitle: (title: string) => void, title: string) => {
  useEffect(() => {
    onTitle(title);
  }, [onTitle, title]);
};
