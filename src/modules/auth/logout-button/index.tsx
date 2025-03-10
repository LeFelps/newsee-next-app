"use client";

import { Button } from "~/components/ui/button";
import { signOut } from "./action";

export function LogoutButton() {
  return <Button onClick={() => signOut()}>Sair</Button>;
}
