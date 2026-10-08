import { useState } from "react";
import type { AccentColor, Member as MemberType } from "@/types";
import AddMemberForm from "./AddMemberForm";
import MemberEditPanel from "./MemberEditPanel";
import SegmentedControl, {
  CREATE_EDIT_OPTIONS,
  type SegmentOption,
} from "./SegmentedControl";
import TeamForm from "./team/TeamForm";
import TeamTypeForm from "./teamType/TeamTypeForm";

type Section = "members" | "teams";
type MemberMode = "create" | "edit";
type TeamKind = "team" | "teamType";

const SECTIONS: SegmentOption<Section>[] = [
  { value: "members", label: "Учасники" },
  { value: "teams", label: "Команди" },
];

const TEAM_KINDS: SegmentOption<TeamKind>[] = [
  { value: "team", label: "Команда" },
  { value: "teamType", label: "Тип команди" },
];

interface Props {
  onSuccess?: (member: MemberType) => void;
  color?: AccentColor;
}

// Everything that creates, edits or removes data lives behind two levels of
// menus: the entity group (members / teams) and, for teams, the kind.
const ManageForm = ({ onSuccess, color = "blue" }: Props) => {
  const [section, setSection] = useState<Section>("members");
  const [teamKind, setTeamKind] = useState<TeamKind>("team");
  const [memberMode, setMemberMode] = useState<MemberMode>("create");

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <SegmentedControl
        options={SECTIONS}
        value={section}
        onChange={setSection}
        color={color}
      />
      {section === "teams" ? (
        <>
          <SegmentedControl
            options={TEAM_KINDS}
            value={teamKind}
            onChange={setTeamKind}
            color={color}
          />
          <div className="h-px w-full bg-foreground/10" />
          {teamKind === "team" ? (
            <TeamForm color={color} />
          ) : (
            <TeamTypeForm color={color} />
          )}
        </>
      ) : (
        <>
          <SegmentedControl
            options={CREATE_EDIT_OPTIONS}
            value={memberMode}
            onChange={setMemberMode}
            color={color}
          />
          {memberMode === "create" ? (
            <AddMemberForm onSuccess={onSuccess} color={color} />
          ) : (
            <MemberEditPanel color={color} />
          )}
        </>
      )}
    </div>
  );
};

export default ManageForm;
