import type { Messages } from "../types";
import { auth } from "./auth";
import { formCommon } from "./formCommon";
import { memberForm } from "./memberForm";
import { teamForm } from "./teamForm";
import { roleForm } from "./roleForm";
import { teamTypeForm } from "./teamTypeForm";
import { ui } from "./ui";
import { errors } from "./errors";
import { common } from "./common";
import { settings } from "./settings";
import { manage } from "./manage";
import { memberInfo } from "./memberInfo";
import { sidebar } from "./sidebar";
import { teamInfo } from "./teamInfo";
import { filters } from "./filters";
import { search } from "./search";
import { photoViewer, toolbar } from "./toolbar";

export const en = {
  formCommon,
  memberForm,
  teamForm,
  roleForm,
  teamTypeForm,
  ui,
  errors,
  auth,
  common,
  settings,
  manage,
  memberInfo,
  sidebar,
  teamInfo,
  filters,
  search,
  photoViewer,
  toolbar,
} satisfies Messages;
