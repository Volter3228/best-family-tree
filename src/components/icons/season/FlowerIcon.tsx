interface Props {
  className?: string;
  style?: React.CSSProperties;
}

// Simple spring flower: five round petals around a centre, in currentColor.
const FlowerIcon = ({ className, style }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} style={style}>
    {[0, 72, 144, 216, 288].map((angle) => (
      <circle
        key={angle}
        cx="12"
        cy="6.2"
        r="4"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
    <circle cx="12" cy="12" r="2.6" fill="var(--surface)" fillOpacity="0.85" />
  </svg>
);

export default FlowerIcon;
