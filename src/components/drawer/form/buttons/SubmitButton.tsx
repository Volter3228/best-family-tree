import Spinner from "@/components/utils/Spinner";

interface Props {
  isSubmitting?: boolean;
  children: Readonly<React.ReactNode>;
}

const SubmitButton = ({ isSubmitting = false, children }: Props) => {
  return (
    <button
      className="
        w-full h-10 bg-accent hover:bg-accent-darken hover:disabled:bg-accent rounded-full 
        text-slate-50 font-semibold focus:outline-hidden focus:ring-2 focus:ring-purple-200
        transition-colors duration-300 ease-in-out
      "
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
};

export default SubmitButton;
