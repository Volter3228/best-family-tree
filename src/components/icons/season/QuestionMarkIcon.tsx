interface Props {
  className?: string;
  style?: React.CSSProperties;
}

// Bold question mark for an unknown season, drawn with currentColor.
const QuestionMarkIcon = ({ className, style }: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
    style={style}
  >
    <path d="M12 2.5c-3.3 0-5.9 2.2-5.9 5.3h3.4c0-1.1.9-1.9 2.5-1.9 1.5 0 2.4.8 2.4 1.9 0 .9-.5 1.4-1.6 2.2-1.6 1.1-2.6 2.2-2.6 4.4v.6h3.4v-.4c0-1.1.5-1.6 1.7-2.4 1.5-1 2.6-2.2 2.6-4.3 0-3.1-2.6-5.4-5.9-5.4z" />
    <circle cx="12" cy="19.6" r="2" />
  </svg>
);

export default QuestionMarkIcon;
