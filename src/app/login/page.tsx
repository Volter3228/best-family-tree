import SignIn from "@/components/auth/SignIn";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ expired?: string }>;
}) {
  const { expired } = await searchParams;
  return <SignIn expired={expired !== undefined} />;
}
