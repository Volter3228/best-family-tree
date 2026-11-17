import type { AccentColor } from "@/types";
import SectionHeading from "../fields/SectionHeading";

interface Props {
  title: string;
  // Shown after the title only when positive ("Учасники", then "Учасники · 3").
  count?: number;
  color?: AccentColor;
  children: React.ReactNode;
}

// One titled block of the team form, with the member form's heading and spacing.
const FormSection = ({ title, count, color = "blue", children }: Props) => (
  <section className="flex w-full flex-col gap-3">
    <SectionHeading title={title} count={count || undefined} color={color} />
    {children}
  </section>
);

export default FormSection;
