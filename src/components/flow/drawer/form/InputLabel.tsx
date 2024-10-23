interface IProps {
  label: string;
  htmlFor: string;
  required: boolean;
  onClick?: () => void;
}

export default function InputLabel({
  label,
  htmlFor,
  required,
  onClick,
}: IProps) {
  return (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={`block mb-1 ${
        required ? "after:content-['*'] after:ml-0.5 after:text-accent" : ""
      }`}
    >
      {label}
    </label>
  );
}
