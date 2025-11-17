"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PostForm from "../components/postform";
import { Post } from "../types/post";
import { useMemo } from "react";

export default function CreatePostPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const post = useMemo<Post | undefined>(() => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    return posts.find((p) => p.id === postId);
  }, [postId]);

  const handleSave = (newPost: Post) => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const updated = posts.filter((p) => p.id !== newPost.id);
    updated.push(newPost);
    localStorage.setItem("posts", JSON.stringify(updated));
    router.push("/lab4");
  };

  return <PostForm existingPost={post} onSave={handleSave} />;
}
