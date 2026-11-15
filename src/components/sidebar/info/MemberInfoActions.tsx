import { twMerge } from "tailwind-merge";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  FacebookGlyph,
  InstagramGlyph,
  LinkedinGlyph,
  TelegramGlyph,
} from "@/components/icons";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { Member } from "@/models";
import type { AccentColor } from "@/types";

interface Props {
  member: Member;
  // Reduced view hides the social links; call and email stay.
  hideSocial?: boolean;
  color?: AccentColor;
}

interface Action {
  key: string;
  title: string;
  href: string;
  external: boolean;
  Glyph: React.ComponentType<{ className?: string }>;
}

// Row of round buttons under the name: socials, call, email.
const MemberInfoActions = ({ member, hideSocial = false, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const { telegramLink, instagramLink, facebookLink, linkedinLink, email } = member;
  const phone = member.phoneNumbers[0];

  const actions: Action[] = [];
  if (!hideSocial) {
    const socials = [
      { key: "tg", title: "Telegram", href: telegramLink, Glyph: TelegramGlyph },
      { key: "ig", title: "Instagram", href: instagramLink, Glyph: InstagramGlyph },
      { key: "fb", title: "Facebook", href: facebookLink, Glyph: FacebookGlyph },
      { key: "in", title: "LinkedIn", href: linkedinLink, Glyph: LinkedinGlyph },
    ];
    for (const { href, ...rest } of socials) {
      if (href) actions.push({ ...rest, href, external: true });
    }
  }
  if (phone) {
    actions.push({
      key: "call",
      title: "Зателефонувати",
      href: `tel:${phone.replace(/\s+/g, "")}`,
      external: false,
      Glyph: PhoneIcon,
    });
  }
  if (email) {
    actions.push({
      key: "mail",
      title: "Написати в Gmail",
      href: `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`,
      external: true,
      Glyph: EnvelopeIcon,
    });
  }

  if (actions.length === 0) return null;

  return (
    <div className="member-info-row flex flex-wrap justify-center gap-3">
      {actions.map(({ key, title, href, external, Glyph }) => (
        <a
          key={key}
          href={href}
          title={title}
          aria-label={title}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={twMerge(
            "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5",
            colorClasses.softBg,
            colorClasses.softBgHover,
            colorClasses.text,
          )}
        >
          <Glyph className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default MemberInfoActions;
