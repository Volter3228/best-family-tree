import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";

type IconProps = { className?: string };

// Green like the activity dots and gender signs; white on a pressed pill.
// Wraps icons that draw in currentColor, so the pill's text color cannot tint them.
export const greenPillIcon = (
  Icon: ComponentType<IconProps>,
): ComponentType<IconProps> => {
  const GreenPillIcon = ({ className }: IconProps) => (
    <Icon
      className={twMerge(
        "text-accent-green group-aria-pressed:text-white",
        className,
      )}
    />
  );
  return GreenPillIcon;
};
