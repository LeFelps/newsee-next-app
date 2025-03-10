"use server";

import { redirect } from "next/navigation";
import { signIn as authSignIn } from "~/modules/auth";

export const signIn = async (_: FormData, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  try {
    await authSignIn("credentials", {
      ...data,
      redirect: false,
    });
  } catch (error) {
    console.log({ error });
    return {
      message: "E-mail ou senha inválidos, tente novamente.",
    };
  }

  redirect("/");
};
