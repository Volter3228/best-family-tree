import { authStrings as t } from "./strings";

// Telegram's paper-plane mark on their brand blue.
const TelegramMark = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-[20px] w-[20px]">
    <circle cx="12" cy="12" r="12" fill="#27A7E7" />
    <path
      fill="#fff"
      d="M5.43 11.87c3.5-1.52 5.83-2.53 7-3.01 3.33-1.39 4.02-1.63 4.47-1.64.1 0 .32.02.46.14.12.1.15.23.17.33.02.1.04.31.02.47-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.69-1.65-1.12-2.67-1.8-1.19-.78-.42-1.21.26-1.9.18-.18 3.25-2.98 3.31-3.23.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.8 1.14-5.09 3.36-.48.33-.92.5-1.31.49-.43-.01-1.26-.24-1.88-.44-.76-.25-1.36-.38-1.31-.8.03-.22.33-.44.9-.67z"
    />
  </svg>
);

// A plain link, so the browser leaves for Telegram with a full navigation.
const TelegramButton = () => (
  <a
    href="/api/auth/telegram/start"
    className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-[#dadce0] bg-white px-4 text-sm font-medium text-[#1f1f1f] transition-colors hover:bg-[#f8f9fa] [[data-theme=dark]_&]:border-[#8e918f] [[data-theme=dark]_&]:bg-[#131314] [[data-theme=dark]_&]:text-[#e3e3e3] [[data-theme=dark]_&]:hover:bg-[#1f1f20]"
  >
    <TelegramMark />
    {t.telegramSignIn}
  </a>
);

export default TelegramButton;
