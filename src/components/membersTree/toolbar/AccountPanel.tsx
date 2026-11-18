import { navigateWithSlide } from "@/utils/navigateWithSlide";
import { logout } from "@/api/auth";
import { useT } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import { useSessionStore } from "@/store/sessionStore";
import ToolbarPanel from "./ToolbarPanel";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

// Sign-out confirmation. A personal session also shows who is signed in; a
// questions session is anonymous, so there is nothing to show.
const AccountPanel = ({ isOpen, isClosing, onClose }: Props) => {
  const t = useT().auth;
  const dn = useDisplayName();
  const session = useSessionStore((s) => s.session);

  if (!isOpen || !session) return null;

  const name =
    session.method === "QUESTIONS"
      ? null
      : session.member
        ? dn(session.member.name)
        : session.email;

  const signOut = async () => {
    onClose();
    await logout().catch(() => undefined);
    navigateWithSlide("/login", "ne");
  };

  return (
    <ToolbarPanel isClosing={isClosing} className="px-3 py-2.5">
      {name && (
        <p className="mb-1 truncate text-xs text-foreground/60">{name}</p>
      )}
      <p className="mb-2.5 text-sm font-semibold text-foreground">
        {t.logoutConfirm}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => void signOut()}
          className="flex-1 rounded-lg bg-accent-blue py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          {t.logout}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-lg bg-foreground/5 py-1.5 text-sm transition-colors hover:bg-foreground/10"
        >
          {t.cancel}
        </button>
      </div>
    </ToolbarPanel>
  );
};

export default AccountPanel;
