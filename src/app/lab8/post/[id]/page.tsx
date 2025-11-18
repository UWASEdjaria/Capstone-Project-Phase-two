"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ClapButton from "@/components/ClapButton";
import CommentForm from "@/components/CommentForm";
import { useAuth } from "@/app/lab8/context/AuthContext";

export default function PostPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const [post, setPost] = useState<{ id: string; title: string; content: string; author: string; claps?: number; comments?: { id: string; author: string; text: string }[] }>({ id: id as string, title: "Test", content: "Hello", author: "A", claps: 0, comments: [] });

  useEffect(()=>{ if(!user) router.push("/lab8/login"); },[user, router]);

  useEffect(() => {
    const posts: { id: string; title: string; content: string; author: string; claps?: number; comments?: { id: string; author: string; text: string }[] }[] = JSON.parse(localStorage.getItem("posts") || "[]");
    const p = posts.find((p) => p.id === id);
    if (p) setPost(p);
  }, [id, setPost]);

  if(!user) return <p>Redirecting...</p>;
  return <div>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    <ClapButton post={post} setPost={setPost}/>
    <CommentForm onAdd={(t: string)=>setPost({...post, comments:[...(post.comments || []),{id:String(Date.now()),author:user || "Anonymous",text:t}]})}/>
    {(post.comments || []).map(c=><p key={c.id}><b>{c.author}:</b> {c.text}</p>)}
  </div>;
}
