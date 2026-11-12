"use client";

import { useEffect, useState } from "react";
import SubmitButton from "@/components/sidebar/form/buttons/SubmitButton";
import { verifyEmailCode } from "@/api/auth";
import AuthMessage from "./AuthMessage";
import CodeInput from "./CodeInput";
import { emptyDigits, isComplete } from "./codeDigits";
import { authStrings as t } from "./strings";

interface Props {
  email: string;
  cooldown: number;
  onResend: () => Promise<string | null>;
  onChangeEmail: () => void;
  onSuccess: () => void;
}

const CodeForm = ({ email, cooldown, onResend, onChangeEmail, onSuccess }: Props) => {
  const [digits, setDigits] = useState(emptyDigits);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  // The code arrives by mail, so the first box is ready as the form appears.
  useEffect(() => {
    document.getElementById("code-digit-0")?.focus();
  }, []);

  const handleSubmit = async () => {
    if (busy || done) return;
    if (!isComplete(digits)) {
      setMessage(t.incompleteCode);
      return;
    }
    setBusy(true);
    try {
      const session = await verifyEmailCode(email, digits.join(""));
      if (session) {
        // Show the success label for a beat before the page transition.
        setDone(true);
        setBusy(false);
        window.setTimeout(onSuccess, 500);
        return;
      }
      setMessage(t.wrongCode);
      setDigits(emptyDigits());
      setBusy(false);
      // Inputs are disabled while busy; focus once they are enabled again.
      window.setTimeout(() => document.getElementById("code-digit-0")?.focus(), 0);
    } catch {
      setMessage(t.requestFailed);
      setBusy(false);
    }
  };

  const handleResend = async () => {
    const error = await onResend();
    setMessage(error);
    if (!error) setDigits(emptyDigits());
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
    >
      <p className="text-sm text-foreground/70">{t.codeSentTo(email)}</p>
      <CodeInput
        digits={digits}
        onChange={setDigits}
        onEnter={() => void handleSubmit()}
        disabled={busy || done}
      />
      {message && <AuthMessage>{message}</AuthMessage>}
      <div className="pt-2">
        <SubmitButton isSubmitting={busy} disabled={done} gradient>
          {done ? t.welcome : busy ? t.checking : t.submit}
        </SubmitButton>
      </div>
      <div className="flex flex-col items-center gap-1 text-sm text-foreground/70">
        <button
          type="button"
          onClick={() => void handleResend()}
          disabled={cooldown > 0 || busy || done}
          className="enabled:hover:text-foreground enabled:hover:underline disabled:opacity-60"
        >
          {cooldown > 0 ? t.resendIn(cooldown) : t.resend}
        </button>
        <button
          type="button"
          onClick={onChangeEmail}
          disabled={busy || done}
          className="hover:text-foreground hover:underline"
        >
          {t.changeEmail}
        </button>
      </div>
    </form>
  );
};

export default CodeForm;
