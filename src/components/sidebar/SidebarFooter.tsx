interface Props {
  // The wrapper animates its height; the slot inside it receives the portaled
  // form actions.
  wrapperRef: (el: HTMLDivElement | null) => void;
  slotRef: (el: HTMLDivElement | null) => void;
}

// Collapsed to 0 while the slot is empty; animates like the content.
const SidebarFooter = ({ wrapperRef, slotRef }: Props) => (
  <div
    ref={wrapperRef}
    className="grid shrink-0 grid-rows-[0fr] transition-[grid-template-rows] duration-[400ms] ease-out has-[.sidebar-footer-slot:not(:empty)]:grid-rows-[1fr]"
  >
    <div className="min-h-0 overflow-hidden transition-[overflow] duration-0 transition-discrete has-[.sidebar-footer-slot:not(:empty)]:overflow-visible has-[.sidebar-footer-slot:not(:empty)]:delay-[400ms]">
      <div
        ref={slotRef}
        className="sidebar-footer-slot relative flex flex-col items-center gap-3 px-4 py-4 md:px-6"
      />
    </div>
  </div>
);

export default SidebarFooter;
