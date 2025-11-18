"use client";

import Link from "next/link";
import { Post } from "./types/post";

export default function PostsPage() {
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");

  const handleDelete = (id: string) => {
    const filtered = posts.filter((p) => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(filtered));
    window.location.reload();
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Link
        href="/lab4/create-post"
        className="bg-purple-600 text-white px-4 py-2 rounded inline-block"
      >
        Create New Post
      </Link>

      {posts.map((post) => (
        <div key={post.id} className="border p-3 rounded">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <p>{post.published ? "Published" : "Draft"}</p>
          <div className="flex gap-2 mt-2">
            <Link
              href={`/lab4/post/${post.id}`}
              className="bg-blue-600 text-white px-2 py-1 rounded"
            >
              Start Reading
            </Link>
            <Link
              href={`/lab4/create-post?id=${post.id}`}
              className="bg-green-600 text-white px-2 py-1 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
