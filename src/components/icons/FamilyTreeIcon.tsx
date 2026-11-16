interface Props {
  className?: string;
}

// Parent card above two child cards, joined by right-angle connectors.
// Symmetric about x = 12 and y = 12 so it sits centred in its box.
const FamilyTreeIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x={8.5} y={3} width={7} height={5.5} rx={1.75} />
    <rect x={2.5} y={15.5} width={7} height={5.5} rx={1.75} />
    <rect x={14.5} y={15.5} width={7} height={5.5} rx={1.75} />
    <path d="M12 8.5V12 M6 15.5v-1.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5" />
  </svg>
);

export default FamilyTreeIcon;
