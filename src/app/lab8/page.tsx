"use client";
import Link from "next/link";
import { getPosts } from "@/lab8/utils/postUtils";

export default function HomePage() {
  const posts = getPosts();

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="border p-2 my-2">
          <Link href={`/lab8/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>by {post.author}</p>
        </div>
      ))}
    </div>
  );
}
