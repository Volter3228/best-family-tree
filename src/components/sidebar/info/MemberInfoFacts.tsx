import { differenceInYears, format } from "date-fns";
import { enUS } from "date-fns/locale";
import {
  CalendarDateRangeIcon,
  EnvelopeIcon,
  GiftIcon,
  PhoneIcon,
  StarIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { generateGoogleCalendarLink } from "@/utils";
import { useLocale, useT } from "@/i18n/useT";
import { formatCount } from "@/i18n/plural";
import { useIsMobileScreen } from "@/hooks/membersTree/useTreeDirection";
import { abbreviateName, useDisplayName } from "@/utils/displayName";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";
import MemberFactTile from "./MemberFactTile";
import MemberInfoCopy from "./MemberInfoCopy";
import MemberMiniAvatar from "./MemberMiniAvatar";

interface Props {
  member: Member;
  mentor: Member | null | undefined;
  mentorClickable: boolean;
  onMemberNameClick?: (memberId: string) => void;
  color?: AccentColor;
}

interface Tile {
  key: string;
  render: (fullWidth: boolean) => React.ReactNode;
}

// "12.03.2020 · 5 років": the date plus the full years elapsed in the accent.
// Under one full year the years part is omitted entirely.
const DateWithYears = ({ date, color }: { date: Date; color: AccentColor }) => {
  const t = useT().memberInfo;
  const locale = useLocale();
  const years = differenceInYears(new Date(), date);
  const mobile = useIsMobileScreen();
  return (
    <>
      {locale === "en"
        ? format(date, "d MMM yyyy", { locale: enUS })
        : format(date, "dd.LL.yyyy")}
      {years > 0 && (
        <span
          className={twMerge(
            "whitespace-nowrap text-sm font-medium",
            COLOR_CLASSES[color].text,
          )}
        >
          {" · "}
          {mobile
            ? `${years} ${t.yearsShort}`
            : formatCount(locale, years, t.years)}
        </span>
      )}
    </>
  );
};

const MemberInfoFacts = ({
  member,
  mentor,
  mentorClickable,
  onMemberNameClick,
  color = "blue",
}: Props) => {
  const t = useT().memberInfo;
  const locale = useLocale();
  const dn = useDisplayName();
  const mobile = useIsMobileScreen();
  const { birthday, joinedAt, phoneNumbers, email } = member;
  const colorClasses = COLOR_CLASSES[color];

  const tiles: Tile[] = [];
  if (mentor) {
    tiles.push({
      key: "mentor",
      render: (fullWidth) => (
        <MemberFactTile
          label={t.mentor}
          icon={StarIcon}
          color={color}
          fullWidth={fullWidth}
          onClick={
            mentorClickable ? () => onMemberNameClick?.(mentor.id) : undefined
          }
        >
          <span
            className={twMerge(
              "flex items-center gap-2",
              !mentorClickable && "text-foreground/60",
            )}
          >
            <MemberMiniAvatar member={mentor} size={24} color={color} />
            <span className={twMerge("min-w-0", mobile && "block truncate")}>
              {mobile ? abbreviateName(dn(mentor.name)) : dn(mentor.name)}
            </span>
          </span>
        </MemberFactTile>
      ),
    });
  }
  tiles.push({
    key: "joined",
    render: (fullWidth) => (
      <MemberFactTile
        label={t.memberSince}
        icon={UserPlusIcon}
        color={color}
        fullWidth={fullWidth}
      >
        <DateWithYears date={joinedAt} color={color} />
      </MemberFactTile>
    ),
  });
  if (birthday) {
    tiles.push({
      key: "birthday",
      render: (fullWidth) => (
        <MemberFactTile
          label={t.birthday}
          icon={GiftIcon}
          color={color}
          fullWidth={fullWidth}
          action={
            <a
              href={generateGoogleCalendarLink(member, locale)}
              target="_blank"
              rel="noopener noreferrer"
              title={t.addToCalendar}
              aria-label={t.addToCalendar}
              className={twMerge("block h-5 w-5", colorClasses.text)}
            >
              <CalendarDateRangeIcon />
            </a>
          }
        >
          <DateWithYears date={birthday} color={color} />
        </MemberFactTile>
      ),
    });
  }
  if (phoneNumbers.length > 0) {
    tiles.push({
      key: "phone",
      render: (fullWidth) => (
        <MemberFactTile
          label={t.phone}
          icon={PhoneIcon}
          color={color}
          fullWidth={fullWidth}
          action={
            <MemberInfoCopy valueToCopy={phoneNumbers[0]} color={color} />
          }
        >
          {phoneNumbers[0]}
        </MemberFactTile>
      ),
    });
  }

  // An odd number of half-width tiles: the last one takes the full row.
  const lastHalf = tiles.length % 2 === 1 ? tiles.length - 1 : -1;

  return (
    <div className="grid grid-cols-2 gap-3">
      {tiles.map((tile, i) => (
        <div key={tile.key} className="contents">
          {tile.render(i === lastHalf)}
        </div>
      ))}
      {!!email && (
        <MemberFactTile
          label="Email"
          icon={EnvelopeIcon}
          color={color}
          fullWidth
          breakAll
          action={<MemberInfoCopy valueToCopy={email} color={color} />}
        >
          {email}
        </MemberFactTile>
      )}
    </div>
  );
};

export default MemberInfoFacts;
