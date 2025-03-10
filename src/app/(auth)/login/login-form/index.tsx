"use client";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFormStatus } from "react-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { pending } = useFormStatus();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bem vindo!</CardTitle>
          <CardDescription>
            Se identifique com sua conta de professor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  disabled={pending}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  disabled={pending}
                  required
                />
              </div>
              <Button disabled={pending} type="submit" className="w-full">
                {pending ? "Enviando..." : "Entrar"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
