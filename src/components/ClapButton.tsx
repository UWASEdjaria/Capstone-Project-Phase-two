"use client";
import { useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  claps?: number;
  comments?: { id: string; author: string; text: string }[];
}

interface Props {
  post: Post;
  setPost: (post: Post) => void;
}

export default function ClapButton({ post, setPost }: Props) {
  const [claps, setClaps] = useState(post.claps || 0);

  const handleClap = () => {
    const newClaps = claps + 1;
    setClaps(newClaps);
    setPost({ ...post, claps: newClaps });
  };

  return (
    <button onClick={handleClap} className="bg-yellow-400 px-3 py-1 rounded">
      👏 {claps}
    </button>
  );
}
