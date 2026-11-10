"use client";

import { useState } from "react";
import SubmitButton from "@/components/sidebar/form/buttons/SubmitButton";
import TextInput from "@/components/sidebar/form/inputs/TextInput";
import AuthMessage from "./AuthMessage";
import { authStrings as t } from "./strings";

const EMAIL_SHAPE = /^\S+@\S+\.\S+$/;

interface Props {
  initialEmail: string;
  /** Asks for a code; resolves to an error message, or null when it went out. */
  onSubmit: (email: string) => Promise<string | null>;
}

const EmailForm = ({ initialEmail, onSubmit }: Props) => {
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async () => {
    const address = email.trim();
    if (busy) return;
    if (!EMAIL_SHAPE.test(address)) {
      setMessage(t.invalidEmail);
      return;
    }
    setBusy(true);
    setMessage(null);
    const error = await onSubmit(address);
    // On success the parent swaps this form out, so only errors land here.
    if (error) setMessage(error);
    setBusy(false);
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
    >
      <p className="text-sm text-foreground/70">{t.emailIntro}</p>
      <TextInput
        id="email"
        name="email"
        type="email"
        value={email}
        placeholder={t.emailPlaceholder}
        onChange={setEmail}
        color="green"
        autoComplete="email"
        inputMode="email"
        autoCapitalize="off"
        spellCheck={false}
        disabled={busy}
      />
      {message && <AuthMessage>{message}</AuthMessage>}
      <div className="pt-2">
        <SubmitButton isSubmitting={busy} gradient>
          {busy ? t.sending : t.sendCode}
        </SubmitButton>
      </div>
    </form>
  );
};

export default EmailForm;
