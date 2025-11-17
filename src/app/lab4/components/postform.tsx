// components/PostForm.tsx
"use client";
import { useState } from "react";
import { Post } from "../types/post";

interface Props {
  existingPost?: Post;
  onSave: (post: Post) => void;
}

export default function PostForm({ existingPost, onSave }: Props) {
  const [title, setTitle] = useState(existingPost?.title || "");
  const [content, setContent] = useState(existingPost?.content || "");
  const [tags, setTags] = useState<string[]>(existingPost?.tags || []);
  const [published, setPublished] = useState(existingPost?.published || false);
  const [tagInput, setTagInput] = useState("");

  const handleSave = () => {
    const post: Post = {
      id: existingPost?.id || Date.now().toString(),
      title,
      content,
      tags,
      published,
      image: existingPost?.image,
    };
    onSave(post);
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  return (
    <div className="p-4 border rounded max-w-xl mx-auto flex flex-col gap-3">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded"/>
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} className="border p-2 rounded h-32"/>
      
      {/* Tags */}
      <div className="flex gap-2">
        <input type="text" placeholder="Add tag" value={tagInput} onChange={e => setTagInput(e.target.value)} className="border p-1 rounded"/>
        <button type="button" onClick={addTag} className="bg-gray-600 text-white px-2 rounded">Add</button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => <span key={tag} className="bg-blue-200 px-2 rounded">{tag}</span>)}
      </div>

      <label>
        <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)}/> Published
      </label>

      <button onClick={handleSave} className="bg-purple-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
