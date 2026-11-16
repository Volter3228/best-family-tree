import { twMerge } from "tailwind-merge";

interface Props {
  checked: boolean;
  // Some, but not all, of a group is selected: shows a dash.
  indeterminate?: boolean;
  className?: string;
}

// The box shared by every checkbox in the filters panel, drawn like the
// sidebar form's FormCheckbox. Purely visual: the interactive element around
// it carries the role and the click handler.
const CheckBox = ({ checked, indeterminate = false, className }: Props) => {
  const on = checked || indeterminate;
  return (
    <span
      aria-hidden
      className={twMerge(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[11px] font-bold leading-none transition-all duration-150",
        on
          ? "border-accent-green bg-accent-green text-surface"
          : "border-accent-green bg-surface text-transparent",
        className,
      )}
    >
      {indeterminate ? "–" : "✓"}
    </span>
  );
};

export default CheckBox;
