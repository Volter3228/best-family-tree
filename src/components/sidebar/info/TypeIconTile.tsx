import { twMerge } from "tailwind-merge";

interface Props {
  iconUrl?: string | null;
  color?: string | null;
  className?: string;
  // Shown when the type has no icon.
  fallback?: React.ReactNode;
  imgClassName?: string;
}

// A team type's icon on a light tint of the type colour, so it reads on any
// theme. Size and radius come from className.
const TypeIconTile = ({
  iconUrl,
  color,
  className,
  imgClassName,
  fallback,
}: Props) => (
  <span
    className={twMerge(
      "flex shrink-0 items-center justify-center overflow-hidden bg-foreground/5",
      className,
    )}
    style={
      color
        ? {
            backgroundColor: `color-mix(in srgb, ${color} 10%, var(--surface))`,
          }
        : undefined
    }
  >
    {!iconUrl && fallback && (
      <span style={color ? { color } : undefined}>{fallback}</span>
    )}
    {iconUrl && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={iconUrl}
        alt=""
        className={twMerge("h-[70%] w-[70%] object-contain", imgClassName)}
      />
    )}
  </span>
);

export default TypeIconTile;
