import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { PostForm } from "../post-form";

export default async function NewPost({}: { params: { id: string } }) {
  return (
    <div className="w-full flex flex-grow justify-center">
      <div className="container p-6 space-y-4">
        <Link
          href="/"
          className="flex gap-1 font-bold text-muted-foreground text-sm w-fit"
        >
          <LucideArrowLeft size={18} /> Voltar
        </Link>
        <h2 className="font-bold text-2xl">Criar um novo post</h2>
        <PostForm />
      </div>
    </div>
  );
}
