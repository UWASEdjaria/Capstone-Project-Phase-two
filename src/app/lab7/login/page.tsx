"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!name.trim()) return;
    login(name, () => router.push("/lab7/post/1")); // go to post page after login
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded flex flex-col gap-2">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
      >
        Login
      </button>
    </div>
  );
}
