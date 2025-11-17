"use client";
import { useState } from "react";

interface Props {
  author: string;
}

export default function FollowButton({ author }: Props) {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => {
    setFollowing(!following);
  };

  return (
    <button onClick={toggleFollow} className="bg-blue-600 text-white px-3 py-1 rounded">
      {following ? "Unfollow" : "Follow"} {author}
    </button>
  );
}
