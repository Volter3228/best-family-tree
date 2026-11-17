import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  // Changes whenever the pane shows a different screen (list / editor).
  screen: string;
  // 1 slides in from the right (opening an editor), -1 from the left (back).
  direction: 1 | -1;
  children: React.ReactNode;
}

// Fades and nudges its content in when the screen changes. Skipped for the
// first render and when the user prefers reduced motion.
const ManagePane = ({ screen, direction, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const previous = useRef(screen);

  useLayoutEffect(() => {
    if (previous.current === screen) return;
    previous.current = screen;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    // Lists mark their results: the search bar and create button stay put.
    const target = el.querySelector<HTMLElement>("[data-manage-content]") ?? el;
    const tween = gsap.fromTo(
      target,
      { opacity: 0, x: direction * 16 },
      {
        opacity: 1,
        x: 0,
        duration: 0.2,
        ease: "power2.out",
        clearProps: "transform,opacity",
      },
    );
    return () => {
      tween.kill();
    };
  }, [screen, direction]);

  return (
    <div ref={ref} className="min-w-0 flex-1">
      {children}
    </div>
  );
};

export default ManagePane;
