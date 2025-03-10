"use server";

import { revalidatePath } from "next/cache";
import { fetch } from "~/modules/fetch";

export const deletePost = async (id: string) => {
  await fetch({
    method: "DELETE",
    url: `/posts/${id}`,
    headers: { "Content-Type": undefined },
  });

  return revalidatePath("/admin/post/list");
};
