import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { fetch } from "~/modules/fetch";

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = (
    await fetch({
      method: "GET",
      url: `/posts/${id}`,
    })
  ).data;

  return (
    <div className="w-full flex flex-grow justify-center">
      <div className="container p-6">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex gap-1 font-bold text-muted-foreground text-sm w-fit"
          >
            <LucideArrowLeft size={18} /> Voltar
          </Link>
          <div>
            <div className="border border-gray-200 rounded-t-lg p-5 space-y-4">
              <h3 className="text-xl font-bold">{post.title}</h3>
            </div>
            <div className="border-x border-b rounded-b-lg border-gray-200 p-5 space-y-4">
              <p className="text-xl font-bold">{post.content}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500 font-bold">
                <span>Por professor tal</span>
                <span>em {post.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
