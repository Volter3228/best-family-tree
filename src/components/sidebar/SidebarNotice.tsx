import SuccessBubble from "./form/SuccessBubble";

// Confirmation floating just above the card's bottom edge.
const SidebarNotice = ({ message }: { message: string }) => (
  <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 h-0">
    <SuccessBubble message={message} />
  </div>
);

export default SidebarNotice;
