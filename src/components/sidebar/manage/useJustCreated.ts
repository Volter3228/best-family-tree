import { useState } from "react";
import type { ManageView } from "./types";

// Remembers the item just created so its editor opens with "Створено". The
// mark is dropped once the editor of that item is left, so reopening it later
// shows no message.
export const useJustCreated = (view: ManageView) => {
  const [createdId, setCreatedId] = useState<string | null>(null);
  if (createdId && !(view.kind === "edit" && view.id === createdId)) {
    setCreatedId(null);
  }
  return {
    markCreated: setCreatedId,
    messageFor: (id: string) => (createdId === id ? "Створено" : undefined),
  };
};
