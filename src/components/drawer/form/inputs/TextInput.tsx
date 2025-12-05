import InputLabel from "./InputLabel";

interface Props {
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange: (text: string) => void;
  icon?:
    | React.FC
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
      >;
}

const TextInput = ({
  id,
  name = "",
  placeholder = "",
  label = "",
  required = false,
  value,
  onChange,
  icon: Icon,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <InputLabel label={label} htmlFor={name} required={required} />
      <input
        id={id || name}
        name={name}
        onChange={handleChange}
        value={value}
        type="text"
        placeholder={placeholder}
        className={`
            block w-full pl-3 ${
              Icon ? "pr-10" : "pr-3"
            } py-2 rounded-xl placehoder:text-slate-200 shadow-inner border-accent font-light
            bg-purple-50 placeholder:text-placeholder focus:outline-hidden focus:ring-3 focus:ring-accent
            caret-accent transition-all duration-200 ease-out
          `}
        autoComplete="off"
        required={required}
      />
      {!!Icon && (
        <div className="relative">
          <div className="absolute -top-9 h-8 w-8 fill-accent text-accent right-0 pr-2 flex items-center pointer-events-none">
            <Icon />
          </div>
        </div>
      )}
    </>
  );
};

export default TextInput;
