import { AddMemberForm } from "@/types";
import {
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import TextInput from "../inputs/TextInput";

interface IProps {
  form: AddMemberForm;
  onTextChange: (name: string) => (value: string) => void;
}

export default function SocialMediaFields({ form, onTextChange }: IProps) {
  return (
    <>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1">
          <TextInput
            name="telegramLink"
            value={form.telegramLink}
            onChange={onTextChange("telegramLink")}
            placeholder="Vouchik"
            label="Telegram"
            icon={TelegramIcon}
          />
        </div>
        <div className="flex flex-col flex-1">
          <TextInput
            name="instagramLink"
            value={form.instagramLink}
            onChange={onTextChange("instagramLink")}
            placeholder="patron_dsns"
            label="Instagram"
            icon={InstagramIcon}
          />
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1">
          <TextInput
            name="facebookLink"
            value={form.facebookLink}
            onChange={onTextChange("facebookLink")}
            placeholder="BEST.Lviv"
            label="Facebook"
            icon={FacebookIcon}
          />
        </div>
        <div className="flex flex-col flex-1">
          <TextInput
            name="linkedinLink"
            value={form.linkedinLink}
            onChange={onTextChange("linkedinLink")}
            placeholder="bestlviv"
            label="LinkedIn"
            icon={LinkedinIcon}
          />
        </div>
      </div>
    </>
  );
}
