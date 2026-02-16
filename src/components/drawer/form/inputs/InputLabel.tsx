import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  htmlFor: string;
  required: boolean;
  onClick?: () => void;
}

const InputLabel = ({ label, htmlFor, required, onClick }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      onClick={onClick}
      className={twMerge(
        "block mb-1",
        required && "after:content-['*'] after:ml-0.5 after:text-accent",
      )}
    >
      {label}
    </label>
  );
};

export default InputLabel;
