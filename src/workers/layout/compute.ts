import { computeTeamLayout } from "@/utils/membersTree/teamLayout";
import { layoutWithElk } from "./elkLayout";
import type {
  LayoutKind,
  LayoutMessage,
  LayoutResults,
} from "./protocol";

export const computeLayout = async ({
  kind,
  payload,
}: LayoutMessage): Promise<LayoutResults[LayoutKind]> =>
  kind === "elk"
    ? layoutWithElk(payload as LayoutMessage<"elk">["payload"])
    : computeTeamLayout(payload as LayoutMessage<"team">["payload"]);
