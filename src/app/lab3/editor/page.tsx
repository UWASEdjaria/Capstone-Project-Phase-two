"use client";

import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

export default function SimpleEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="p-4 flex flex-col gap-4">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(c) => setContent(c)}
      />

      <div className="flex gap-2">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => { localStorage.setItem("draft", content); alert("Draft saved!"); }}
        >
          Save Draft
        </button>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => alert("Published!")}
        >
          Publish
        </button>
      </div>

      <div>
        <h2 className="font-bold">Preview:</h2>
        <div className="p-2 border rounded" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
