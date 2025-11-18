"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import CommentForm from "@/components/CommentForm";
import { useAuth } from "@/app/lab7/context/AuthContext";
import FollowButton from "@/components/FollowButton";
import ClapButton from "@/components/ClapButton";
import { Post, Comment } from "../../types/post";

export default function PostPage() {
  const router = useRouter();
  const { id } = useParams();
  const { user } = useAuth();

  const post = useMemo<Post>(() => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    return posts.find((p) => p.id === id) || {
      id: "1",
      title: "Sample Post",
      content: "This is a post content",
      author: "Author1",
      claps: 0,
      comments: [],
    };
  }, [id]);

  useEffect(() => {
    if (!user) router.push("/lab7/login"); // redirect if not logged in
  }, [user, router]);

  const [comments, setComments] = useState<Comment[]>(post.comments || []);

  const addComment = (text: string) => {
    const newComment = { id: Date.now().toString(), author: user || "Anonymous", text };
    setComments([...comments, newComment]);
  };

  if (!user) return <p>Redirecting to login...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 border rounded space-y-4 mt-10">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <div className="flex gap-2">
        <ClapButton post={post} setPost={() => {}}/>
        <FollowButton author={post.author}/>
      </div>
      <CommentForm onAdd={addComment}/>
      <div className="flex flex-col gap-2 mt-2">
        {comments.map((c: Comment) => (
          <div key={c.id} className="border p-2 rounded">
            <p className="font-bold">{c.author}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
