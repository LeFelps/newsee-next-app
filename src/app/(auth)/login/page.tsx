"use client";

import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { LoginForm } from "~/app/(auth)/login/login-form";

import { signIn } from "./login-form/action";
import { useActionState } from "react";

export default function LoginPage() {
  const [, formAction] = useActionState(signIn, { message: "" });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-3">
        <Link
          href="/"
          className="flex gap-1 font-bold text-muted-foreground text-sm w-fit"
        >
          <LucideArrowLeft size={18} /> Voltar
        </Link>
        <form action={formAction}>
          <LoginForm />
        </form>
      </div>
    </div>
  );
}
