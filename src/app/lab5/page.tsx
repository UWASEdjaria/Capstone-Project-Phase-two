"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Post } from "../lab4/types/post";

export default function FeedPage() {
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const posts = useMemo<Post[]>(() => {
    const allPosts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
    return allPosts.filter(p => p.published);
  }, []);

  const filteredPosts = posts
    .filter(p => !tagFilter || p.tags?.includes(tagFilter))
    .filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()));

  // debounce search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Home Feed</h1>

      {/* Search */}
      <input type="text" placeholder="Search posts..." value={search} onChange={handleSearch} className="border p-2 rounded w-full mb-4"/>

      {/* Tag Filter */}
      <div className="flex gap-2 flex-wrap mb-4">
        {["Tech","Life","News"].map((tag: string) => (
          <button key={tag} onClick={() => setTagFilter(tag)} className={`px-2 py-1 rounded ${tagFilter === tag ? "bg-blue-600 text-white" : "bg-blue-200"}`}>{tag}</button>
        ))}
        <button onClick={() => setTagFilter("")} className="px-2 py-1 rounded bg-gray-300">Clear</button>
      </div>

      {/* Posts */}
      {filteredPosts.map(post => (
        <div key={post.id} className="border p-3 rounded">
          <Link href={`/lab4/post/${post.id}`} className="text-xl font-bold">{post.title}</Link>
          <p>{post.content.slice(0,100)}...</p>
          <div className="flex gap-2 flex-wrap mt-2">
            {post.tags?.map(tag => <span key={tag} className="bg-blue-100 px-2 rounded">{tag}</span>)}
          </div>
        </div>
      ))}
      {filteredPosts.length === 0 && <p>No posts found.</p>}
    </div>
  );
}
