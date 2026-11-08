interface Props {
  title: string;
  subtitle?: string;
}

// What the minimized (mobile) sidebar bar shows: a name and one line of context.
const SidebarMinimizedSummary = ({ title, subtitle }: Props) => (
  <span className="flex min-w-0 flex-col leading-tight">
    <span className="truncate text-lg font-semibold">{title}</span>
    {subtitle && (
      <span className="truncate text-sm font-light text-foreground/70">
        {subtitle}
      </span>
    )}
  </span>
);

export default SidebarMinimizedSummary;
