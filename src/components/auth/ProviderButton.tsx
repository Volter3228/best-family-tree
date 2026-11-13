import type { ReactNode } from "react";

// Shared look for the OIDC sign-in buttons; icon and copy vary by provider.
const BUTTON_CLASS =
  "flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-[#dadce0] bg-white px-4 text-sm font-medium text-[#1f1f1f] transition-colors hover:bg-[#f8f9fa] [[data-theme=dark]_&]:border-[#8e918f] [[data-theme=dark]_&]:bg-[#131314] [[data-theme=dark]_&]:text-[#e3e3e3] [[data-theme=dark]_&]:hover:bg-[#1f1f20]";

interface Props {
  href: string;
  label: string;
  icon: ReactNode;
}

// A plain link, so the browser leaves for the provider with a full navigation.
const ProviderButton = ({ href, label, icon }: Props) => (
  <a href={href} className={BUTTON_CLASS}>
    {icon}
    {label}
  </a>
);

export default ProviderButton;
