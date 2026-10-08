import MaskIcon from "@/components/ui/MaskIcon";

export const LION_ICON = "/images/lion.svg";
export const LION_GROUP_ICON = "/images/lion-group.svg";

interface Props {
  title: string;
  // SVG in /public shown in the filters colour.
  iconSrc: string;
  // How many filters of this category are set.
  activeCount: number;
  children: React.ReactNode;
}

// A titled group of filter sections ("Учасники", "Команди").
const FilterCategory = ({ title, iconSrc, activeCount, children }: Props) => (
  <section className="flex flex-col">
    <div className="flex items-center gap-2 px-3 pt-3 pb-1.5">
      <MaskIcon src={iconSrc} className="h-4 w-4 bg-accent-green" />
      <h3 className="text-[11px] font-semibold uppercase tracking-wider text-accent-green">
        {title}
      </h3>
      {activeCount > 0 && (
        <span className="rounded-full bg-accent-green px-1.5 text-[10px] font-semibold leading-4 text-white">
          {activeCount}
        </span>
      )}
      <div className="h-px flex-1 bg-accent-green/30" />
    </div>
    {children}
  </section>
);

export default FilterCategory;
