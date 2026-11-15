import type { ComponentType, SVGProps } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  EyeIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import { MemberStatus } from "@/types";

type StatusIcon = ComponentType<SVGProps<SVGSVGElement>>;

export const STATUS_ICONS: Record<MemberStatus, StatusIcon> = {
  [MemberStatus.Observer]: EyeIcon,
  [MemberStatus.Baby]: SparklesIcon,
  [MemberStatus.Full]: BriefcaseIcon,
  [MemberStatus.Alumni]: AcademicCapIcon,
};
