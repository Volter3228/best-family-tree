import {
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import { useT } from "@/i18n/useT";
import type { MemberFormData, AccentColor } from "@/types";
import TextInput from "../inputs/TextInput";
import FormField from "./FormField";
import SocialsHeading from "./SocialsHeading";

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
  const t = useT().memberForm;
  return (
    <section className="flex flex-col gap-3">
      <SocialsHeading color={color} />
      <div className="grid grid-cols-1 gap-3 @[26rem]:grid-cols-2">
        <FormField error={errors.telegramLink} color={color}>
          <TextInput
            name="telegramLink"
            value={form.telegramLink}
            onChange={onTextChange("telegramLink")}
            placeholder="Vouchik"
            label="Telegram"
            icon={TelegramIcon}
            color={color}
          />
        </FormField>
        <FormField error={errors.instagramLink} color={color}>
          <TextInput
            name="instagramLink"
            value={form.instagramLink}
            onChange={onTextChange("instagramLink")}
            placeholder="patron_dsns"
            label="Instagram"
            icon={InstagramIcon}
            color={color}
          />
        </FormField>
        <FormField error={errors.facebookLink} color={color}>
          <TextInput
            name="facebookLink"
            value={form.facebookLink}
            onChange={onTextChange("facebookLink")}
            placeholder="BEST.Lviv"
            label="Facebook"
            icon={FacebookIcon}
            color={color}
          />
        </FormField>
        <FormField error={errors.linkedinLink} color={color}>
          <TextInput
            name="linkedinLink"
            value={form.linkedinLink}
            onChange={onTextChange("linkedinLink")}
            placeholder="bestlviv"
            label="LinkedIn"
            icon={LinkedinIcon}
            color={color}
          />
        </FormField>
      </div>
    </section>
  );
};

export default SocialMediaFormFields;
