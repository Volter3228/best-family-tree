import { useContext } from "react";
import { ViewportContext } from "@/context/membersTree/ViewportContext";

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within TreeProvider");
  }
  return context;
};
