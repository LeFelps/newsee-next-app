import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "~/interfaces/auth";
import { removeAuthorizationHeader, setAuthorizationHeader } from "../fetch";
import { cookies } from "next/headers";

export const setAuthTokenCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
  setAuthorizationHeader(token);
};

export const getAuthTokenCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.has("token") && cookieStore.get("token")?.value;
};

export const deleteAuthTokenCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.has("token") && cookieStore.delete("token");
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  events: {
    session: async () => {
      const token = await getAuthTokenCookie();
      if (token) {
        setAuthorizationHeader(token);
      }
    },
    signOut: async () => {
      deleteAuthTokenCookie();
      removeAuthorizationHeader();
    },
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async ({ username, password }) => {
        const user = await getUser({ username, password } as {
          username: string;
          password: string;
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        setAuthorizationHeader(user.token);
        setAuthTokenCookie(user.token);

        return {
          id: user.id,
          name: user.username,
        };
      },
    }),
  ],
});
