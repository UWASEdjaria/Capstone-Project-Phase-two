"use client";
import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function CommentForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  return (
    <div className="mt-2 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Write comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={() => { onAdd(text); setText(""); }}
        className="bg-green-600 text-white px-2 py-1 rounded"
      >
        Comment
      </button>
    </div>
  );
}
