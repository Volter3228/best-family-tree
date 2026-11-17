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
  const row = (
    <div className={twMerge("flex w-full items-center gap-3", className)}>
      {children}
    </div>
  );
  if (footer) return createPortal(row, footer);

  return <div className="mt-4">{row}</div>;
};

export default FormFooter;
