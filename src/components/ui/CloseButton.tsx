import type { ComponentProps } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentProps<"button">, "children"> {
  // Accessible name, e.g. "Закрити".
  label: string;
  // Size and stroke of the cross, e.g. "h-4 w-4 stroke-2".
  iconClassName?: string;
}

// The cross button: owns the icon, the accessible name and the centering.
// Look (size, colour, background) comes from the caller via className.
const CloseButton = ({
  label,
  className,
  iconClassName = "h-5 w-5",
  type = "button",
  ...rest
}: Props) => (
  <button
    type={type}
    aria-label={label}
    className={twMerge("flex items-center justify-center", className)}
    {...rest}
  >
    <XMarkIcon className={iconClassName} />
  </button>
);

export default CloseButton;
