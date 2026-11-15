import { TrashIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  // Deletion is not possible right now. The button still responds to clicks so
  // the editor can see why (the parent shows the reason in DeleteMemberPrompt).
  blocked: boolean;
  isSubmitting: boolean;
  onClick: () => void;
}

// Compact icon-only trigger that sits in the action row next to Cancel/Save.
export const DeleteMemberButton = ({
  blocked,
  isSubmitting,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={isSubmitting}
    aria-label="Видалити учасника"
    aria-disabled={blocked || undefined}
    title="Видалити учасника"
    className={twMerge(
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-500/40 text-red-500 transition-colors hover:bg-red-500/10 disabled:opacity-50",
      blocked && "opacity-50",
    )}
  >
    <TrashIcon className="h-4 w-4" />
  </button>
);

interface PromptProps {
  message: string;
  isSubmitting: boolean;
  onDismiss: () => void;
  // Present only when deletion is allowed. Without it the prompt is a notice.
  onConfirm?: () => void;
}

// Replaces the action row while the editor is confirming a delete or has been
// told it is blocked. Takes space only for as long as it is needed.
export const DeleteMemberPrompt = ({
  message,
  isSubmitting,
  onDismiss,
  onConfirm,
}: PromptProps) => (
  <div className="flex w-full flex-col items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3">
    <p className="text-center text-sm text-foreground/80">{message}</p>
    <div className="flex w-full gap-2">
      <button
        type="button"
        onClick={onDismiss}
        disabled={isSubmitting}
        className="h-9 flex-1 rounded-full border border-foreground/30 bg-background text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/10 disabled:opacity-60"
      >
        {onConfirm ? "Скасувати" : "Зрозуміло"}
      </button>
      {onConfirm && (
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-red-500 text-sm font-semibold text-white transition-all hover:brightness-90 disabled:opacity-60"
        >
          <TrashIcon className="h-4 w-4" />
          Видалити
        </button>
      )}
    </div>
  </div>
);
