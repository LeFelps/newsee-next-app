import Link from "next/link";
import { fetch } from "~/modules/fetch";
import dayjs from "dayjs";

export default async function Home() {
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
              <div key={post.id}>
                <Link href={`/post/${post.id}`}>
                  <div className="border border-gray-200 rounded-lg p-5 hover:bg-gray-50/70 space-y-4">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="max-h-12 overflow-hidden text-justify my-4">
                      {post.content}
                    </p>
                    <div className="flex justify-between text-muted-foreground font-semibold text-sm">
                      <span>Por {post.author?.fullName}</span>
                      <span>Em {dayjs(post.createdAt).format('D/MM/YY HH:mm')}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
