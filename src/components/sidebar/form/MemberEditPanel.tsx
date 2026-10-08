import { useMemo, useState } from "react";
import { useMembers } from "@/hooks";
import type { AccentColor } from "@/types";
import { DropdownSelectInput } from "./inputs";
import EditMemberForm from "./EditMemberForm";

interface Props {
  color?: AccentColor;
}

// Pick any member by name and edit or delete them without finding them in the tree.
const MemberEditPanel = ({ color = "blue" }: Props) => {
  const { flatMembersList, getMemberById } = useMembers();
  const [memberId, setMemberId] = useState("");
  // Remounts the picker so it is empty again after saving or cancelling.
  const [pickerKey, setPickerKey] = useState(0);

  const options = useMemo(
    () =>
      flatMembersList
        .map((member) => ({ value: member.id, text: member.name }))
        .sort((a, b) => a.text.localeCompare(b.text, "uk")),
    [flatMembersList],
  );

  const member = memberId ? getMemberById(memberId) : undefined;

  const handleExit = () => {
    setMemberId("");
    setPickerKey((key) => key + 1);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <DropdownSelectInput
        key={pickerKey}
        name="manageMember"
        label="Учасник"
        options={options}
        onSelect={setMemberId}
        placeholder="Пошук учасника"
        autoComplete
        color={color}
      />
      {member && (
        <EditMemberForm
          key={member.id}
          member={member}
          onExit={handleExit}
          color={color}
        />
      )}
    </div>
  );
};

export default MemberEditPanel;
