import { createContext } from "react";

// The element a sidebar reserves below its scrollable area. Forms render their
// action buttons into it (through a portal), so the buttons never scroll away
// and are not part of the scrolled content.
export const SidebarFooterContext = createContext<HTMLElement | null>(null);
