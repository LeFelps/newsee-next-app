"use client";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useActionState } from "react";
import { savePost } from "./action";
import { redirect } from "next/navigation";

export function PostForm({
  className,
  post,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  post?: {
    id: string;
    title: string;
    content: string;
  };
}) {
  const submitForm = async (initialFormData: FormData, formData: FormData) => {
    const postData = await savePost(formData);

    if (!post?.id) redirect(`/admin/post/edit/${postData.id}`);

    return post;
  };

  const [, formAction, pending] = useActionState(submitForm, {
    ...post,
  });

  return (
    <form action={formAction}>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Input
          name="title"
          type="text"
          placeholder="Título"
          disabled={pending}
          defaultValue={post?.title}
        />
        <Textarea
          name="content"
          placeholder="Digite aqui o conteúdo do post"
          className="h-40"
          disabled={pending}
          defaultValue={post?.content}
        />
        <div className="flex w-full justify-end">
          <Button type="submit" disabled={pending}>
            {pending ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </div>
    </form>
  );
}
