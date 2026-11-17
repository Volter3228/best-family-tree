// A short confirmation at the top of a tab's list (e.g. "Видалено"): the
// editor that produced it is already gone, so it cannot show the message.
const ManageNotice = ({ message }: { message: string | null }) =>
  message ? (
    <p
      role="status"
      className="mb-2 self-center rounded-full bg-surface-green px-3 py-1 text-center text-xs font-semibold text-accent-green ring-1 ring-accent-green/30"
    >
      {message}
    </p>
  ) : null;

export default ManageNotice;
