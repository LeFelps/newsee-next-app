import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { PostForm } from "../../post-form";
import { redirect } from "next/navigation";
import { fetch } from "~/modules/fetch";

export default async function EditPost({
  params
}: {
  params: { id: string };
}) {
  const { id } = await params

  const post = (
    await fetch({
      method: "GET",
      url: `/posts/${id}`,
    })
  ).data;

  if (!post) redirect("/admin/post/list");

  return (
    <div className="w-full flex flex-grow justify-center">
      <div className="container p-6 space-y-4">
        <Link
          href="/"
          className="flex gap-1 font-bold text-muted-foreground text-sm w-fit"
        >
          <LucideArrowLeft size={18} /> Voltar
        </Link>
        <h2 className="font-bold text-2xl">Editar post</h2>
        <PostForm post={post} />
      </div>
    </div>
  );
}
