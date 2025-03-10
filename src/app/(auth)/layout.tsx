import { redirect } from "next/navigation";
import { auth } from "~/modules/auth";

export default async function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!!session?.user) redirect("/");

  return children;
}
