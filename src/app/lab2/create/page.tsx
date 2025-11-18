"use client";

import { useState } from "react";
import RichEditor from "@/components/Editor/RichEditor";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) alert("Post published");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title..."
        className="w-full text-2xl border p-3 mb-4 rounded"
      />

      <RichEditor value={content} onChange={setContent} />

      <button
        onClick={handlePublish}
        className="mt-6 w-full p-3 bg-black text-white rounded"
      >
        Publish
      </button>
    </div>
  );
}
