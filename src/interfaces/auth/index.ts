import { fetch } from "~/modules/fetch";

export const getUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const user = (
    await fetch({
      method: "POST",
      url: "/sign-in",
      data: { username, password },
    })
  ).data;

  return user;
};
