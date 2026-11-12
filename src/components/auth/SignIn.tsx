"use client";

import { navigateWithSlide } from "@/utils/navigateWithSlide";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSidebarHeightAnimation } from "@/hooks/sidebar/useSidebarHeightAnimation";
import { LionIcon } from "@/components/icons";
import SegmentedSwitch from "@/components/ui/SegmentedSwitch";
import { logout } from "@/api/auth";
import AccountForm from "./AccountForm";
import AuthMessage from "./AuthMessage";
import QuestionsForm from "./QuestionsForm";
import { authStrings as t } from "./strings";

type Method = "questions" | "account";

interface Props {
  expired: boolean;
  demo?: boolean;
}

const SignInCard = ({ expired, demo = false }: Props) => {
  const [method, setMethod] = useState<Method>("account");
  const [struggled, setStruggled] = useState(false);
  const [showExpired] = useState(expired);

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const canAnimateRef = useRef(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevMethod = useRef<Method>(method);
  // Same smooth height change as the sidebars.
  useSidebarHeightAnimation(outerRef, innerRef, canAnimateRef);

  // Content slides in from the side of the tab that was picked.
  useEffect(() => {
    if (prevMethod.current === method) return;
    const dir = method === "questions" ? 1 : -1;
    prevMethod.current = method;
    if (!panelRef.current) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, x: 16 * dir },
      { opacity: 1, x: 0, duration: 0.35, ease: "power3.out" },
    );
  }, [method]);

  // A stale cookie would bounce /login back to / and show the message again
  // on every reload: clear it and drop the query parameter once.
  useEffect(() => {
    if (!expired) return;
    void logout().catch(() => undefined);
    window.history.replaceState(null, "", "/login");
  }, [expired]);

  // A full navigation so the server component sees the new cookie.
  const handleSuccess = () => navigateWithSlide("/", "zoom");

  return (
    <main className="fixed inset-0 flex overflow-y-auto px-4 py-6">
      <div className="relative m-auto w-full max-w-sm overflow-hidden rounded-2xl bg-surface/80 p-5 shadow-2xl backdrop-blur-xl">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent-blue via-accent-green to-accent-orange"
        />
        <div className="mb-4 flex flex-col items-center gap-2">
          <div className="h-16 w-16">
            <LionIcon className="fill-foreground" />
          </div>
          <h1 className="text-2xl font-bold">{t.brand}</h1>
        </div>
        {demo && (
          <div className="mb-3">
            <AuthMessage tone="info">{t.demoNotice}</AuthMessage>
          </div>
        )}
        {showExpired && (
          <div className="mb-3">
            <AuthMessage tone="info">{t.expiredSession}</AuthMessage>
          </div>
        )}
        <div>
          <SegmentedSwitch<Method>
            ariaLabel={t.methodLabel}
            value={method}
            onChange={setMethod}
            options={[
              { value: "account", label: t.methodAccount, color: "green" },
              { value: "questions", label: t.methodQuestions, color: "blue" },
            ]}
          />
        </div>
        {/* Side and bottom room, so the button glow is not clipped. */}
        <div ref={outerRef} className="-mx-6 -mb-6 overflow-hidden">
          <div ref={innerRef} className="px-6 pb-6 pt-4">
            <div ref={panelRef}>
              {/* Keep the questions mounted so answers survive a tab switch. */}
              <div hidden={method !== "questions"}>
                <QuestionsForm
                  active={method === "questions"}
                  onStruggle={() => setStruggled(true)}
                  onSuccess={handleSuccess}
                />
                {struggled && (
                  <button
                    type="button"
                    onClick={() => setMethod("account")}
                    className="mt-3 w-full animate-fade-slide-down text-center text-sm text-foreground/70 hover:text-foreground hover:underline"
                  >
                    {t.struggle}
                  </button>
                )}
              </div>
              {/* Mounted too, so a half-entered code survives a tab switch. */}
              <div hidden={method !== "account"}>
                <AccountForm onSuccess={handleSuccess} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInCard;
