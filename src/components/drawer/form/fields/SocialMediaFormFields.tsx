import {
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import type { MemberFormData } from "@/types";
import TextInput from "../inputs/TextInput";

interface Props {
  form: MemberFormData;
  onTextChange: (name: string) => (value: string) => void;
  errors: Partial<Record<keyof MemberFormData, string>>;
}

const SocialMediaFormFields = ({ form, onTextChange, errors }: Props) => {
  return (
    <>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="telegramLink"
            value={form.telegramLink}
            onChange={onTextChange("telegramLink")}
            placeholder="Vouchik"
            label="Telegram"
            icon={TelegramIcon}
          />
          {errors.telegramLink && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.telegramLink}
            </p>
          )}
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="instagramLink"
            value={form.instagramLink}
            onChange={onTextChange("instagramLink")}
            placeholder="patron_dsns"
            label="Instagram"
            icon={InstagramIcon}
          />
          {errors.instagramLink && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.instagramLink}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="facebookLink"
            value={form.facebookLink}
            onChange={onTextChange("facebookLink")}
            placeholder="BEST.Lviv"
            label="Facebook"
            icon={FacebookIcon}
          />
          {errors.facebookLink && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.facebookLink}
            </p>
          )}
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="linkedinLink"
            value={form.linkedinLink}
            onChange={onTextChange("linkedinLink")}
            placeholder="bestlviv"
            label="LinkedIn"
            icon={LinkedinIcon}
          />
          {errors.linkedinLink && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.linkedinLink}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialMediaFormFields;
