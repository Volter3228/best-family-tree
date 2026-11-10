import { navigateWithSlide } from "@/utils/navigateWithSlide";
import { twMerge } from "tailwind-merge";
import { logout } from "@/api/auth";
import { authStrings as t } from "@/components/auth/strings";
import { useSessionStore } from "@/store/sessionStore";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

// Sign-out confirmation. A personal session also shows who is signed in; a
// questions session is anonymous, so there is nothing to show.
const AccountPanel = ({ isOpen, isClosing, onClose }: Props) => {
  const session = useSessionStore((s) => s.session);

  if (!isOpen || !session) return null;

  const name =
    session.method === "QUESTIONS"
      ? null
      : (session.member?.name ?? session.email);

  const signOut = async () => {
    onClose();
    await logout().catch(() => undefined);
    navigateWithSlide("/login", "ne");
  };

  return (
    <div
      className={twMerge(
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80",
        "backdrop-blur-lg rounded-2xl",
        isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
      )}
    >
      <div className="rounded-2xl bg-surface/70 shadow-2xl px-3 py-2.5">
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
      </div>
    </div>
  );
};

export default AccountPanel;
