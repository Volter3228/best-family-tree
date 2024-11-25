interface IProps {
  isSubmitting?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: Readonly<React.ReactNode>;
}

export default function ClearButton({
  isSubmitting = false,
  onClick,
  children,
}: IProps) {
  return (
    <button
      className="w-full h-10 bg-purple-50 hover:bg-purple-200 hover:disabled:bg-accent rounded-full text-accent font-semibold"
      onClick={onClick}
      disabled={isSubmitting}
    >
      Очистити
      {children}
    </button>
  );
}
