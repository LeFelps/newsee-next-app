"use server";

import { fetch } from "~/modules/fetch";

export const savePost = async (formData: FormData) => {
  const id = formData.get("id");
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  try {
    const method = id ? "PUT" : "POST";

    const response = await fetch({
      method,
      url: "/posts" + (id ? `/${id}` : ""),
      data,
    });

    return response.data;
  } catch (error) {
    console.log({ error });
    return {
      message: "Ocorreu um erro ao salvar o post",
    };
  }
};
