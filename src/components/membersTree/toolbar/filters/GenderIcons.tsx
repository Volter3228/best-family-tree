import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";
import { Gender } from "@/types";

type IconProps = { className?: string };

// Mars and Venus signs, green like the activity dots and white on a pressed
// (green) pill.
const SIGN_CLASS = "text-accent-green group-aria-pressed:text-white";

const MaleIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={twMerge(SIGN_CLASS, className)}
  >
    <circle cx="6.5" cy="9.5" r="4" />
    <path d="M9.5 6.5 14 2M10 2h4v4" />
  </svg>
);

const FemaleIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={twMerge(SIGN_CLASS, className)}
  >
    <circle cx="8" cy="6" r="4" />
    <path d="M8 10v5M5.5 12.5h5" />
  </svg>
);

export const GENDER_ICONS: Record<Gender, ComponentType<IconProps>> = {
  [Gender.Male]: MaleIcon,
  [Gender.Female]: FemaleIcon,
};
