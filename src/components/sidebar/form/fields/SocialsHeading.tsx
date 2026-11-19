import InfoBubble from "@/components/ui/InfoBubble";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import SectionHeading from "./SectionHeading";

interface Props {
  color?: AccentColor;
}

const SocialsHeading = ({ color = "blue" }: Props) => {
  const t = useT().memberForm;
  return (
    <div className="flex items-center gap-1.5">
      <SectionHeading title={t.socials} color={color} />
      <InfoBubble className="[&_svg]:h-4 [&_svg]:w-4">{t.socialsHint}</InfoBubble>
    </div>
  );
};

export default SocialsHeading;
