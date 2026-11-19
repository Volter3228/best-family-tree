import { useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { navigateWithTransition } from "@/utils/navigateWithTransition";
import { logout } from "@/api/auth";
import { useT } from "@/i18n/useT";
import { useLocale } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import { getInitials, getStatusLabel } from "@/utils";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useProfileStore } from "@/store/profileStore";
import { useMemberById } from "@/hooks";
import InfoBubble from "@/components/ui/InfoBubble";
import PhotoOpenButton from "@/components/photoViewer/PhotoOpenButton";
import {
  getPhotoUrlForViewer,
  getPhotoUrlForViewerPreview,
} from "@/libs/cloudinary";
import MemberMiniAvatar from "@/components/sidebar/info/MemberMiniAvatar";
import NameBadge from "@/components/sidebar/info/NameBadge";
import type { MemberStatus } from "@/types";
import ToolbarPanel from "./ToolbarPanel";
import AccountRoles from "./AccountRoles";
import NameBadgePicker from "./NameBadgePicker";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

const ROW =
  "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-foreground/5";

const AccountPanel = ({ isOpen, isClosing, onClose }: Props) => {
  const t = useT().auth;
  const a = useT().account;
  const locale = useLocale();
  const dn = useDisplayName();
  const session = useSessionStore((s) => s.session);
  const requestOpen = useProfileStore((s) => s.requestOpen);
  const [confirming, setConfirming] = useState(false);
  const person = session?.member ?? null;
  const treeMember = useMemberById(person?.id);

  if (!isOpen || !session) return null;

  const signOut = async () => {
    onClose();
    await logout().catch(() => undefined);
    navigateWithTransition("/login", "fade");
  };

  const open = (mode: "info" | "edit" | "suggest") => {
    if (!person) return;
    requestOpen(person.id, mode);
  };
  const editable = canEdit(session, person?.id);
  const isQuestions = session.method === "QUESTIONS";

  let header: React.ReactNode = null;
  if (person) {
    header = (
      <div className="flex items-center gap-3 px-3 pt-3 pb-2">
        {treeMember ? (
          person.photo ? (
            <PhotoOpenButton
              id={`account:${person.id}`}
              src={getPhotoUrlForViewer(person.photo)}
              previewSrc={getPhotoUrlForViewerPreview(person.photo)}
              alt={dn(person.name)}
              roundedClassName="rounded-full"
              className="block h-10 w-10 shrink-0"
            >
              <MemberMiniAvatar member={treeMember} size={40} />
            </PhotoOpenButton>
          ) : (
            <MemberMiniAvatar member={treeMember} size={40} />
          )
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-blue text-sm font-semibold text-white">
            {getInitials(dn(person.name))}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            {dn(person.name)}
            {treeMember && <NameBadge member={treeMember} />}
          </p>
          <p className="truncate text-xs text-foreground/60">
            {[
              getStatusLabel(person.status as MemberStatus, locale),
              a.levels[session.level],
            ].join(" · ")}
          </p>
        </div>
      </div>
    );
  } else {
    header = (
      <p className="truncate px-3 pt-3 pb-2 text-sm font-semibold">
        {isQuestions ? a.guest : session.email}
      </p>
    );
  }

  return (
    <ToolbarPanel isClosing={isClosing} className="max-w-[23rem]">
      {header}
      {person && (
        <>
          <AccountRoles member={person} readOnly={session.demo} />
          {!session.demo && <NameBadgePicker member={person} />}
          <div className="flex flex-col px-1.5 pt-1">
            <button type="button" onClick={() => open("info")} className={ROW}>
              <MapPinIcon className="h-5 w-5 shrink-0 text-foreground/60" />
              {a.showInTree}
            </button>
            <div className={twMerge(ROW, "gap-0 py-0 hover:bg-foreground/5")}>
              <button
                type="button"
                onClick={() => open(editable ? "edit" : "suggest")}
                className="flex items-center gap-2.5 py-2"
              >
                <PencilSquareIcon className="h-5 w-5 shrink-0 text-foreground/60" />
                {a.editProfile}
              </button>
              <InfoBubble className="ml-1.5 shrink-0 [&_svg]:h-3.5 [&_svg]:w-3.5">
                {editable ? a.editProfileInfoDirect : a.editProfileInfo}
              </InfoBubble>
              <button
                type="button"
                aria-hidden
                tabIndex={-1}
                onClick={() => open(editable ? "edit" : "suggest")}
                className="min-h-9 flex-1 self-stretch"
              />
            </div>
          </div>
        </>
      )}
      <div className="mx-3 my-1.5 h-px bg-foreground/10" />
      <div className="relative px-1.5 pb-1.5">
        <button
          type="button"
          aria-expanded={confirming}
          onClick={() => setConfirming((v) => !v)}
          className={ROW}
        >
          <ArrowRightStartOnRectangleIcon className="h-5 w-5 shrink-0 text-foreground/60" />
          {t.logout}
        </button>
        {confirming && (
          <div
            role="alertdialog"
            aria-label={t.logoutConfirm}
            onKeyDown={(e) => e.key === "Escape" && setConfirming(false)}
            className="absolute inset-x-1.5 bottom-full z-20 mb-1 origin-bottom animate-rise-in rounded-2xl bg-surface/90 p-3 shadow-2xl ring-1 ring-foreground/10 backdrop-blur-xl motion-reduce:animate-none"
          >
            <p className="mb-2.5 text-sm font-semibold text-foreground">
              {t.logoutConfirm}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                autoFocus
                onClick={() => void signOut()}
                className="flex-1 rounded-lg bg-accent-blue py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                {t.logout}
              </button>
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="flex-1 rounded-lg bg-foreground/5 py-1.5 text-sm transition-colors hover:bg-foreground/10"
              >
                {t.cancel}
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolbarPanel>
  );
};

export default AccountPanel;
