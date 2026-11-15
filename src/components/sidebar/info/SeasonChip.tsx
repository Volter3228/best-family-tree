import { MapleLeafIcon, FlowerIcon } from "@/components/icons/season";
import { formatMemberRecruitmentSeason } from "@/utils";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";
import HeaderChip from "../HeaderChip";

interface Props {
  member: Member;
  color: AccentColor;
}

// Header chip of the member card: the recruitment season with its motif.
const SeasonChip = ({ member, color }: Props) => (
  <HeaderChip
    icon={
      member.getRecruitmentTerm().season === "spring"
        ? FlowerIcon
        : MapleLeafIcon
    }
    color={color}
  >
    {formatMemberRecruitmentSeason(member)}
  </HeaderChip>
);

export default SeasonChip;
