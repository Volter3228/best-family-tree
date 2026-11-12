"use client";

import { useEffect, useState } from "react";
import { requestEmailCode } from "@/api/auth";
import CodeForm from "./CodeForm";
import EmailForm from "./EmailForm";
import { authStrings as t } from "./strings";

const RESEND_COOLDOWN_SECONDS = 60;

interface Props {
  onSuccess: () => void;
}

const AccountForm = ({ onSuccess }: Props) => {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Resolves to an error message, or null when the request went out.
  const ask = async (address: string): Promise<string | null> => {
    try {
      if ((await requestEmailCode(address)) === "limited") {
        return t.tooManyRequests;
      }
      setCooldown(RESEND_COOLDOWN_SECONDS);
      return null;
    } catch {
      return t.requestFailed;
    }
  };

  if (step === "email") {
    return (
      <EmailForm
        initialEmail={email}
        onSubmit={async (address) => {
          const error = await ask(address);
          if (!error) {
            setEmail(address);
            setStep("code");
          }
          return error;
        }}
      />
    );
  }

  return (
    <CodeForm
      email={email}
      cooldown={cooldown}
      onResend={() => ask(email)}
      onChangeEmail={() => setStep("email")}
      onSuccess={onSuccess}
    />
  );
};

export default AccountForm;
