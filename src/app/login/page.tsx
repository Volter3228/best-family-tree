import SignIn from "@/components/auth/SignIn";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ expired?: string; error?: string }>;
}) {
  const { expired, error } = await searchParams;
  return (
    <SignIn
      expired={expired !== undefined}
      error={error}
      demo={process.env.DEMO_MODE === "true"}
      googleEnabled={!!process.env.GOOGLE_CLIENT_ID}
      telegramEnabled={!!process.env.TELEGRAM_CLIENT_ID}
    />
  );
}
