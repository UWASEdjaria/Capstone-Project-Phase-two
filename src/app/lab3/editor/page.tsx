'use client';

import { useState } from "react";
import Image from "next/image";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePublish = () => {
    console.log("Publishing article:", { title, body, bold, italic, image });
    alert("Article published! Check console for data.");
  };

  const toggleBold = () => setBold(!bold);
  const toggleItalic = () => setItalic(!italic);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-semibold border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black p-2"
        />

        {/* Toolbar */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={toggleBold}
            className={`px-3 py-1 border rounded ${bold ? "bg-gray-200" : "bg-white"}`}
          >
            B
          </button>
          <button
            type="button"
            onClick={toggleItalic}
            className={`px-3 py-1 border rounded ${italic ? "bg-gray-200" : "bg-white"}`}
          >
            I
          </button>
          <label className="px-3 py-1 border rounded cursor-pointer bg-white">
            Image
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>

        {/* Body */}
        <textarea
          placeholder="Write your article here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={`w-full h-60 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition ${
            bold ? "font-bold" : ""
          } ${italic ? "italic" : ""}`}
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => alert("Draft saved!")}
            className="px-4 py-2 border rounded hover:bg-gray-100 transition"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Publish
          </button>
        </div>
        {/* Show uploaded image */}
        {image && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Uploaded Image:</p>
            <Image
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              width={200}
              height={160}
              className="mt-2 max-h-40 rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}
