interface Props {
  message: string;
}

// Small floating confirmation above a submit button. It is absolutely
// positioned, so showing it never changes the sidebar's height.
const SuccessBubble = ({ message }: Props) => (
  <p
    role="status"
    className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface-green px-3 py-1 text-xs font-semibold text-accent-green shadow-md ring-1 ring-accent-green/30"
  >
    {message}
  </p>
);

export default SuccessBubble;
