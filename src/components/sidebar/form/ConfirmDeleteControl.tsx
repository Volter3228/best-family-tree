import { TrashIcon } from "@heroicons/react/16/solid";

interface Props {
  label: string;
  message: string;
  isConfirming: boolean;
  isSubmitting: boolean;
  onAsk: (isConfirming: boolean) => void;
  onConfirm: () => void;
}

// Two-step destructive action: a quiet red button first, then an explicit
// confirmation that says what will be lost.
const ConfirmDeleteControl = ({
  label,
  message,
  isConfirming,
  isSubmitting,
  onAsk,
  onConfirm,
}: Props) =>
  isConfirming ? (
    <div className="flex w-full flex-col items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3">
      <p className="text-center text-sm text-foreground/80">{message}</p>
      <div className="flex w-full gap-2">
        <button
          type="button"
          onClick={() => onAsk(false)}
          className="h-9 flex-1 rounded-full text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/10"
        >
          Скасувати
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-red-500 text-sm font-semibold text-white transition-all hover:brightness-90 disabled:opacity-60"
        >
          <TrashIcon className="h-4 w-4" />
          Видалити
        </button>
      </div>
    </div>
  ) : (
    <button
      type="button"
      onClick={() => onAsk(true)}
      className="flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-red-500/40 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/10"
    >
      <TrashIcon className="h-4 w-4" />
      {label}
    </button>
  );

export default ConfirmDeleteControl;
