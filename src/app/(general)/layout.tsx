import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "~/modules/auth";
import { LogoutButton } from "~/modules/auth/logout-button";

export default async function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex w-full  border-b justify-center">
        <div className="container p-4 flex justify-between">
          <div className="flex items-center">
            <span className="text-center">Newsee</span>
          </div>

          <div className="flex gap-2">
            <Link href="/">
              <Button variant="link">Posts</Button>
            </Link>
            <Link href="/admin/post/list" hidden={!session?.user}>
              <Button variant="link">Administrar Posts</Button>
            </Link>
            <Link href="/admin/post/new" hidden={!session?.user}>
              <Button variant="link">Novo post</Button>
            </Link>
          </div>

          {!!session?.user ? (
            <LogoutButton />
          ) : (
            <Link href="/login">
              <Button>Entrar</Button>
            </Link>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
