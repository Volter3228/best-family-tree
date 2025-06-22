interface Props {
  isSubmitting?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: Readonly<React.ReactNode>;
}

const ClearButton = ({ isSubmitting = false, onClick, children }: Props) => {
  return (
    <button
      className={`
        w-full h-10 bg-purple-50 hover:bg-purple-200 hover:disabled:bg-accent rounded-full 
        text-accent font-semibold focus:outline-none focus:ring focus:ring-accent
      `}
      onClick={onClick}
      disabled={isSubmitting}
    >
      Очистити
      {children}
    </button>
  );
};

export default ClearButton;
