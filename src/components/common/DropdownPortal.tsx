import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const DropdownPortal = ({ children }: Props) => {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
};

export default DropdownPortal;
