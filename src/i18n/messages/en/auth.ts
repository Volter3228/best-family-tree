export const auth = {
  brand: "BEST Tree",
  methodLabel: "Sign-in method",
  methodQuestions: "Questions",
  methodAccount: "Account",
  questionsIntro: "Answer three questions about BEST!",
  answerPlaceholder: "Your answer",
  dontRemember: "I don't remember",
  submit: "Sign in",
  welcome: "Ariki tarakuma!",
  checking: "Checking…",
  wrongAnswer: "Ugh, a BEST cheat sheet would help…",
  fillAll: "Answer all the questions",
  solved: "Nailed it!",
  struggle: "Memory not what it was? Sign in with your account!",
  locked: (seconds: number) =>
    `Too many attempts. Try again in ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`,
  expired: "Time's up. Questions refreshed",
  loadFailed: "Couldn't load the questions. Try again later",
  emailIntro: "Enter your BEST email and we'll send you a sign-in code",
  emailPlaceholder: "Your email",
  invalidEmail: "That doesn't look like an email",
  sendCode: "Send code",
  sending: "Sending…",
  codeSentTo: (email: string) =>
    `If ${email} is in BEST, we sent a code there. Check your Spam folder too.`,
  codeLabel: "Code from the email",
  codeDigit: (n: number) => `Digit ${n} of 6`,
  wrongCode: "The code is wrong or has expired. Request a new one",
  incompleteCode: "Enter all 6 digits of the code",
  requestFailed: "Something went wrong. Try again",
  tooManyRequests: "Too many requests. Try again in a little while",
  resendIn: (seconds: number) =>
    `Resend in ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`,
  resend: "Resend code",
  changeEmail: "Change email",
  demoNotice: "Demo: the questions are easy, and any email address works.",
  or: "or",
  googleSignIn: "Sign in with Google",
  telegramSignIn: "Sign in with Telegram",
  signInErrors: {
    google_failed: "Couldn't sign in with Google. Try again",
    not_verified:
      "Google didn't verify this email. Try another account or sign in with a code",
    not_member:
      "This email isn't in BEST. Try another account, or sign in with a code sent to an email we have on record",
    ambiguous:
      "This email is linked to several members. Sign in with a code, or message an admin",
    telegram_failed: "Couldn't sign in with Telegram. Try again",
    telegram_not_member:
      "This number isn't in BEST, or you didn't share it. Sign in with a code sent to your email, and ask an editor to add your number to your profile",
    telegram_ambiguous:
      "This number is linked to several members. Sign in with a code sent to your email, or message an admin",
  },
  expiredSession: "Your session ended. Sign in again",
  theme: "Theme",
  logout: "Sign out",
  logoutConfirm: "Sign out of BEST Tree?",
  cancel: "Cancel",
  viewMethod: {
    QUESTIONS: "Questions",
    EMAIL: "Email",
    GOOGLE: "Google",
    TELEGRAM: "Telegram",
  },
  limitedAccess:
    "Signing in with questions doesn't give access to personal information: contacts and birthdays are hidden. Sign in with your account for full access.",
} as const;
