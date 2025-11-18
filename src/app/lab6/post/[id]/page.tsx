"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import CommentForm from "../../components/commentForm";
import { Post, Comment } from "../../types/post";

export default function PostPage() {
  const { id } = useParams();

  const initialPost = useMemo<Post | null>(() => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    return posts.find((p) => p.id === id) || null;
  }, [id]);

  const [post, setPost] = useState<Post | null>(initialPost);
  const [claps, setClaps] = useState(() => initialPost?.claps || 0);
  const [following, setFollowing] = useState(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || '{"following":[]}');
    return user.following.includes(initialPost?.author);
  });

  const handleClap = () => {
    setClaps(claps + 1);
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const updated = posts.map((p: Post) =>
      p.id === id ? { ...p, claps: (p.claps || 0) + 1 } : p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const toggleFollow = () => {
    const user = JSON.parse(localStorage.getItem("currentUser") || '{"following":[]}');
    if (following) {
      user.following = user.following.filter((a: string) => a !== post!.author);
    } else {
      user.following.push(post!.author);
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    setFollowing(!following);
  };

  const addComment = (text: string) => {
    const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const updated = posts.map((p: Post) =>
      p.id === id
        ? { ...p, comments: [...(p.comments || []), { id: Date.now().toString(), author: "You", text }] }
        : p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
    setPost({ ...post!, comments: [...(post!.comments || []), { id: Date.now().toString(), author: "You", text }] });
  };

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-4 border rounded space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>

      <div className="flex gap-2">
        <button onClick={handleClap} className="bg-yellow-400 px-3 py-1 rounded">👏 {claps}</button>
        <button onClick={toggleFollow} className="bg-blue-600 text-white px-3 py-1 rounded">
          {following ? "Unfollow" : "Follow"} {post.author}
        </button>
      </div>

      <CommentForm onAdd={addComment} />

      <div className="flex flex-col gap-2 mt-2">
        {(post.comments || []).map((c: Comment) => (
          <div key={c.id} className="border p-2 rounded">
            <p className="font-bold">{c.author}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
