"use server";

import { redirect } from "next/navigation";
import { signOut as authSignOut } from "~/modules/auth";
import { removeAuthorizationHeader } from "~/modules/fetch";

export const signOut = async () => {
  await authSignOut();
  removeAuthorizationHeader();
  redirect("/");
};
