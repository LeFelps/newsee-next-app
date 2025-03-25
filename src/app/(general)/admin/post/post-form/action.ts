"use server";

import { fetch } from "~/modules/fetch";

export const savePost = async (
  state: {
    title: string;
    content: string;
    id: string;
    message?: undefined;
  },
  formData: FormData
) => {
  const id = state?.id;

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

    return {
      title: response.data.title,
      content: response.data.content,
      id: response.data.id,
    };
  } catch (error) {
    console.log({ error });
    return {
      message: "Ocorreu um erro ao salvar o post",
    };
  }
};
