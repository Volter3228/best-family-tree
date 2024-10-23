import Spinner from "@/components/utils/Spinner";

interface IProps {
  isSubmitting?: boolean;
  children: Readonly<React.ReactNode>;
}

export default function SubmitButton({
  isSubmitting = false,
  children,
}: IProps) {
  return (
    <button
      className="w-full h-10 bg-accent hover:bg-accent-darken hover:disabled:bg-accent rounded-full text-slate-50 font-semibold"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting && <Spinner className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
}
