import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons";
import Member from "@/models/Member";
import Link from "next/link";

export default function MemberInfoSocial({
  member: { telegramLink, instagramLink, facebookLink, linkedinLink },
}: {
  member: Member;
}) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {!!telegramLink && (
        <Link
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
          className="w-12 fill-accent hover:fill-accent-darken transition-colors duration-300"
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
          className="w-12 fill-accent hover:fill-accent-darken transition-colors duration-300"
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
          className="w-12 fill-accent hover:fill-accent-darken transition-colors duration-300"
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
          className="w-12 fill-accent hover:fill-accent-darken transition-colors duration-300"
        >
          <LinkedinIcon />
        </Link>
      )}
    </div>
  );
}
