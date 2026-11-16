import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  // Id of the control the title labels. Clicking the title focuses it.
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

const titleClass = "text-sm font-semibold text-foreground";

// A titled block inside a filter pane. Horizontal padding comes from the pane.
const FilterSection = ({ title, htmlFor, children, className }: Props) => (
  <div className={twMerge("flex flex-col gap-2 pb-5 last:pb-0", className)}>
    {htmlFor ? (
      <label htmlFor={htmlFor} className={titleClass}>
        {title}
      </label>
    ) : (
      <span className={titleClass}>{title}</span>
    )}
    {children}
  </div>
);

export default FilterSection;
