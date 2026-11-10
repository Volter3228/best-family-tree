import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  tone?: "error" | "info";
}

const AuthMessage = ({ children, tone = "error" }: Props) => (
  <p
    role="alert"
    className={twMerge(
      "rounded-xl px-3 py-2 text-sm",
      tone === "error"
        ? "bg-accent-orange/10 text-accent-orange"
        : "bg-foreground/5 text-foreground/70",
    )}
  >
    {children}
  </p>
);

export default AuthMessage;
