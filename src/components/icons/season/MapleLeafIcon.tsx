interface Props {
  className?: string;
  style?: React.CSSProperties;
}

// Maple leaf, drawn with currentColor.
const MapleLeafIcon = ({ className, style }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} style={style}>
    <polygon
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinejoin="round"
      points="12,2 14,6.2 16.8,4.6 16.3,9.4 21.6,8.6 19.6,12 22,14 17.4,15.2 17.8,17.4 12.8,16.4 12.8,22 11.2,22 11.2,16.4 6.2,17.4 6.6,15.2 2,14 4.4,12 2.4,8.6 7.7,9.4 7.2,4.6 10,6.2"
    />
  </svg>
);

export default MapleLeafIcon;
