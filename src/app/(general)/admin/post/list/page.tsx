import { LucidePencil } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { DeletePostButton } from "./delete-post-button";
import { fetch } from "~/modules/fetch";

export default async function AdminPosts() {
  const posts = await fetch({
    method: "GET",
    url: "/posts",
  });

  return (
    <div className="w-full flex flex-grow justify-center">
      <div className="container p-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Lista de posts
        </h2>
        <p className="leading-7 mt-1">
          Confira todos os posts feitos pelos seus professores!
        </p>
        <div className="space-y-4 mt-4">
          {posts.data.map(
            (post: {
              id: string;
              title: string;
              content: string;
              createdAt: Date;
            }) => (
              <div
                className="border border-gray-200 rounded-lg p-5 space-y-4"
                key={post.id}
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold w-fit">{post.title}</h3>
                  <div className="flex gap-2">
                    <Link href={`/admin/post/edit/${post.id}`}>
                      <Button size="icon">
                        <LucidePencil size={18} />
                      </Button>
                    </Link>
                    <DeletePostButton
                      post={{ id: post.id, title: post.title }}
                    />
                  </div>
                </div>
                <p className="max-h-12 overflow-hidden text-justify my-4">
                  {post.content}
                </p>
                <div className="flex justify-between text-muted-foreground font-semibold text-sm">
                  <span>Por Professor Tal</span>
                  <span>Em {post.createdAt.toLocaleString()}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
