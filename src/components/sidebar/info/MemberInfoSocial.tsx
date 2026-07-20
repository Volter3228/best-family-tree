import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Member } from "@/models";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons";

interface Props {
  member: Member;
  color?: AccentColor;
}

const MemberInfoSocial = ({
  member: { telegramLink, instagramLink, facebookLink, linkedinLink },
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const linkClass = twMerge(
    "w-12 h-12 transition-all duration-300 rounded-full hover:brightness-80",
    colorClasses.fill,
  );

  return (
    <div className="member-info-row flex justify-center gap-4 mt-4">
      {!!telegramLink && (
        <Link
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
          className={linkClass}
        >
          <TelegramIcon />
        </Link>
      )}
      {!!instagramLink && (
        <Link
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className={linkClass}
        >
          <InstagramIcon />
        </Link>
      )}
      {!!facebookLink && (
        <Link
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className={linkClass}
        >
          <FacebookIcon />
        </Link>
      )}
      {!!linkedinLink && (
        <Link
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className={linkClass}
        >
          <LinkedinIcon />
        </Link>
      )}
    </div>
  );
};

export default MemberInfoSocial;
