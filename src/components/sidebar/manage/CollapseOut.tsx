import { twMerge } from "tailwind-merge";

interface Props {
  leaving: boolean;
  children: React.ReactNode;
}

// Folds its content away (height and opacity) once `leaving` is set.
const CollapseOut = ({ leaving, children }: Props) => (
  <div
    className={twMerge(
      "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
      leaving ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr]",
    )}
  >
    <div className="min-h-0 overflow-hidden">{children}</div>
  </div>
);

export default CollapseOut;
