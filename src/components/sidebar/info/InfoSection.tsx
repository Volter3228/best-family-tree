import { useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  title: string;
  items: React.ReactNode[];
  // How many items show before the rest is tucked away.
  visibleCount: number;
  // Classes of the list that holds the items (the head and the tail).
  listClassName: string;
  // "pill": a "+N" pill after the visible items. "bar": a full-width toggle below.
  toggle: "pill" | "bar";
  // Label of the "bar" toggle while collapsed.
  expandLabel?: string;
  color?: AccentColor;
}

// "Title · count" label with a list below it; the items past `visibleCount`
// expand on demand.
const InfoSection = ({
  title,
  items,
  visibleCount,
  listClassName,
  toggle,
  expandLabel,
  color = "blue",
}: Props) => {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const colorClasses = COLOR_CLASSES[color];
  const head = items.slice(0, visibleCount);
  const tail = items.slice(visibleCount);
  const toggleOpen = () => {
    const opening = !open;
    setOpen(opening);
    // Once the list has grown, bring all of it into view.
    if (opening) {
      setTimeout(
        () => sectionRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }),
        200,
      );
    }
  };
  const toggleLabel = open ? "Згорнути" : (expandLabel ?? `+${tail.length}`);

  return (
    <section ref={sectionRef} className="member-info-row flex scroll-mb-4 flex-col gap-2">
      <h3 className="text-base">
        <span className={twMerge("font-semibold", colorClasses.text)}>{title}</span>
        <span className="text-foreground/50"> · {items.length}</span>
      </h3>
      <div className={listClassName}>
        {head}
        {toggle === "pill" && open && tail}
        {toggle === "pill" && tail.length > 0 && (
          <button
            type="button"
            onClick={toggleOpen}
            aria-expanded={open}
            className={twMerge(
              "h-7 rounded-full px-3 text-xs font-medium transition-colors duration-200",
              colorClasses.softBg,
              colorClasses.softBgHover,
              colorClasses.text,
            )}
          >
            {toggleLabel}
          </button>
        )}
      </div>
      {toggle === "bar" && tail.length > 0 && (
        <div
          inert={!open}
          className={twMerge(
            "grid transition-[grid-template-rows,margin] duration-150 ease-out",
            // The flex gap still applies to the collapsed row; cancel it.
            open ? "grid-rows-[1fr]" : "-mt-2 grid-rows-[0fr]",
          )}
        >
          {/* The padding keeps hover lifts and shadows inside the clip; the
              negative margin cancels it, so the layout does not move. Only while open:
              collapsed, the padding would show the top of the hidden items. */}
          <div className={twMerge("overflow-hidden", open && "-m-1 p-1")}>
            <div className={twMerge(listClassName, "m-0 p-0")}>{tail}</div>
          </div>
        </div>
      )}
      {toggle === "bar" && tail.length > 0 && (
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          className={twMerge(
            "flex h-9 w-full items-center justify-center gap-1 rounded-xl text-sm font-medium transition-colors duration-200",
            colorClasses.softBg,
            colorClasses.softBgHover,
            colorClasses.text,
          )}
        >
          {toggleLabel}
          <ChevronDownIcon
            className={twMerge("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      )}
    </section>
  );
};

export default InfoSection;
