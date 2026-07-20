import {
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import type { MemberFormData, AccentColor } from "@/types";
import TextInput from "../inputs/TextInput";
import FieldError from "./FieldError";

interface Props {
  form: MemberFormData;
  onTextChange: (name: string) => (value: string) => void;
  errors: Partial<Record<keyof MemberFormData, string>>;
  color?: AccentColor;
}

const SocialMediaFormFields = ({
  form,
  onTextChange,
  errors,
  color = "blue",
}: Props) => {
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
            color={color}
          />
          <FieldError message={errors.telegramLink} color={color} />
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="instagramLink"
            value={form.instagramLink}
            onChange={onTextChange("instagramLink")}
            placeholder="patron_dsns"
            label="Instagram"
            icon={InstagramIcon}
            color={color}
          />
          <FieldError message={errors.instagramLink} color={color} />
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
            color={color}
          />
          <FieldError message={errors.facebookLink} color={color} />
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="linkedinLink"
            value={form.linkedinLink}
            onChange={onTextChange("linkedinLink")}
            placeholder="bestlviv"
            label="LinkedIn"
            icon={LinkedinIcon}
            color={color}
          />
          <FieldError message={errors.linkedinLink} color={color} />
        </div>
      </div>
    </>
  );
};

export default SocialMediaFormFields;
