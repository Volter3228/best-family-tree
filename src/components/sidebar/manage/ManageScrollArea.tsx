import type { AccentColor } from "@/types";

interface Props {
  color: AccentColor;
  children: React.ReactNode;
}

// The scrolling body shared by the tabs that are not a ManageList.
const ManageScrollArea = ({ color, children }: Props) => (
  <div
    data-manage-content
    className="-mr-5 h-[calc(var(--sidebar-content-max)-1.75rem)] overflow-y-auto overscroll-contain pr-5"
    style={
      { "--scroll-color": `var(--accent-${color})` } as React.CSSProperties
    }
  >
    {children}
  </div>
);

export default ManageScrollArea;
