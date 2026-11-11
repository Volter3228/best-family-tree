import { redirect } from "next/navigation";
import SignIn from "@/components/auth/SignIn";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ expired?: string }>;
}) {
  // The public demo has no sign-in: everyone is a read-only Editor.
  if (process.env.DEMO_MODE === "true") redirect("/");
  const { expired } = await searchParams;
  return <SignIn expired={expired !== undefined} />;
}
