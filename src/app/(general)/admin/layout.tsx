import { redirect } from "next/navigation";
import { auth, getAuthTokenCookie } from "~/modules/auth";
import { setAuthorizationHeader } from "~/modules/fetch";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) redirect("/");

  const token = await getAuthTokenCookie();
  if (token) setAuthorizationHeader(token);

  return children;
}
