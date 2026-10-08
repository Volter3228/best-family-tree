import { useContext } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { SidebarFooterContext } from "../SidebarFooterContext";

interface Props {
  children: React.ReactNode;
  className?: string;
}

// Action bar of a form. Inside a sidebar it is rendered into the sidebar's
// footer slot, below the scrollable area; elsewhere it stays in place. Submit
// buttons living there must reference their form through the `form` attribute.
const FormFooter = ({ children, className }: Props) => {
  const footer = useContext(SidebarFooterContext);
  if (footer) return createPortal(children, footer);

  return (
    <div
      className={twMerge("mt-4 flex flex-col items-center gap-3", className)}
    >
      {children}
    </div>
  );
};

export default FormFooter;
