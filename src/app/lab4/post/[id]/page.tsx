"use client";

import { useParams } from "next/navigation";
import { Post } from "../../types/post";

export default function SinglePostPage() {
  const params = useParams();
  const id = params?.id;
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-xl mx-auto p-4 border rounded">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <p>Status: {post.published ? "Published" : "Draft"}</p>
    </div>
  );
}
