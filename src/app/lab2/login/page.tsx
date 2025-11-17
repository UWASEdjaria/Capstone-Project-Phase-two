'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Call your backend API
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Login failed");
      }

      const data = await res.json();

      // Save token or user info in localStorage
      localStorage.setItem("token", data.token);

      setError("");
      router.push("/"); // Redirect after login
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-600">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9] transition"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9] transition"
            required
          />
        </div>

        <button className="w-full bg-black text-white p-3 rounded-md text-base font-semibold hover:bg-gray-900 transition">
          Sign In
        </button>

        <p className="text-sm text-center text-gray-600">
          Do not have an account?{" "}
          <Link href="/lab2/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}