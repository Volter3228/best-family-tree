"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SubmitButton from "@/components/sidebar/form/buttons/SubmitButton";
import InfoBubble from "@/components/ui/InfoBubble";
import {
  startChallenge,
  swapQuestion,
  verifyAnswers,
  type Challenge,
} from "@/api/auth";
import type { AccentColor } from "@/types";
import { focusAboveKeyboard } from "@/utils/focusAboveKeyboard";
import AuthMessage from "./AuthMessage";
import QuestionCard from "./QuestionCard";
import { authStrings as t } from "./strings";

const CARD_COLORS: AccentColor[] = ["blue", "green", "orange"];

interface Props {
  onStruggle: () => void;
  onSuccess: () => void;
}

const QuestionsForm = ({ onStruggle, onSuccess }: Props) => {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [lockSeconds, setLockSeconds] = useState(0);
  const focusAfterBusyRef = useRef<string | null>(null);

  const load = useCallback(async () => {
    try {
      setChallenge(await startChallenge());
      setAnswers({});
    } catch {
      setMessage(t.loadFailed);
    }
  }, []);

  // Prefetched on mount so the cards are ready when the tab is opened.
  // The ref keeps StrictMode's double effect from creating two challenges.
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);

  useEffect(() => {
    if (lockSeconds <= 0) return;
    const timer = setTimeout(() => setLockSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [lockSeconds]);

  // Inputs are disabled while a check runs, so focusing them then is a no-op.
  // Apply the pending focus once the form is idle and the inputs are enabled.
  useEffect(() => {
    if (busy || !focusAfterBusyRef.current) return;
    focusAboveKeyboard(focusAfterBusyRef.current);
    focusAfterBusyRef.current = null;
  }, [busy]);

  const setAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSwap = async (questionId: string) => {
    if (!challenge || busy) return;
    setBusy(true);
    try {
      setChallenge(await swapQuestion(challenge.id, questionId));
      setAnswers((prev) => ({ ...prev, [questionId]: "" }));
      onStruggle();
    } catch {
      setMessage(t.loadFailed);
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async () => {
    if (!challenge || busy || done || lockSeconds > 0) return;
    const pending = challenge.questions.filter((q) => !q.solved);
    if (pending.some((q) => !answers[q.id]?.trim())) {
      setMessage(t.fillAll);
      return;
    }
    setBusy(true);
    try {
      const outcome = await verifyAnswers(challenge.id, answers);
      if (outcome.kind === "ok") {
        // Show the success label for a beat before the page transition.
        setDone(true);
        setBusy(false);
        window.setTimeout(onSuccess, 500);
        return;
      }
      // The old message stays until the result is in, so repeated attempts
      // do not make the layout jump.
      setMessage(null);
      if (outcome.kind === "locked") {
        setLockSeconds(outcome.retryAfterSeconds);
      } else if (outcome.kind === "expired") {
        setMessage(t.expired);
        await load();
      } else {
        setChallenge(outcome.challenge);
        if (outcome.kind === "wrong") {
          // Wrong fields are simply emptied for another try.
          setAnswers((prev) => {
            const next = { ...prev };
            for (const id of outcome.wrong) next[id] = "";
            return next;
          });
          const firstWrongIndex = outcome.challenge.questions.findIndex(
            (q) => q.id === outcome.wrong[0],
          );
          focusAfterBusyRef.current = `answer-${firstWrongIndex}`;
          setMessage(t.wrongAnswer);
          onStruggle();
        }
      }
      setBusy(false);
    } catch {
      setMessage(t.loadFailed);
      setBusy(false);
    }
  };

  const unsolved = challenge?.questions.filter((q) => !q.solved) ?? [];

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
    >
      <p className="flex items-center gap-1.5 text-sm text-foreground/70">
        {t.questionsIntro}
        <InfoBubble>{t.limitedAccess}</InfoBubble>
      </p>
      {!challenge && !message && (
        // Same cards as the real ones, so the height does not jump on load.
        <div aria-hidden className="flex animate-pulse flex-col gap-3">
          {CARD_COLORS.map((color, i) => (
            <QuestionCard
              key={color}
              index={i}
              prompt={"\u00a0"}
              value=""
              color={color}
              solved={false}
              disabled
              canSwap={false}
              onChange={() => undefined}
              onEnter={() => undefined}
              onSwap={() => undefined}
            />
          ))}
        </div>
      )}
      {challenge && (
        <>
          {challenge.questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              index={i}
              prompt={q.prompt}
              value={answers[q.id] ?? ""}
              color={CARD_COLORS[i]}
              solved={q.solved}
              disabled={busy || done || lockSeconds > 0}
              canSwap={challenge.swapsLeft > 0}
              onChange={(v) => setAnswer(q.id, v)}
              onEnter={() => {
                const next = unsolved.findIndex((u) => u.id === q.id) + 1;
                if (next < unsolved.length) {
                  document
                    .getElementById(
                      `answer-${challenge.questions.indexOf(unsolved[next])}`,
                    )
                    ?.focus();
                } else void handleSubmit();
              }}
              onSwap={() => void handleSwap(q.id)}
            />
          ))}
        </>
      )}
      {lockSeconds > 0 && <AuthMessage>{t.locked(lockSeconds)}</AuthMessage>}
      {message && lockSeconds <= 0 && <AuthMessage>{message}</AuthMessage>}
      <div className="pt-2">
        <SubmitButton isSubmitting={busy} disabled={done} gradient>
          {done ? t.welcome : busy ? t.checking : t.submit}
        </SubmitButton>
      </div>
    </form>
  );
};

export default QuestionsForm;
