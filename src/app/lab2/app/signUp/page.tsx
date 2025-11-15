"use client";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState({ error: "", success: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password)
      return setMsg({ ...msg, error: "All fields required" });

    setMsg({ error: "", success: "" });
    const res = await fetch("/api/auth/signup", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setMsg({ error: "", success: "Account created!" });
    else setMsg({ error: "Something went wrong", success: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        {msg.error && <p className="text-red-500 mb-2">{msg.error}</p>}
        {msg.success && <p className="text-green-500 mb-2">{msg.success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <input name="email" value={form.email} onChange={handleChange}
            type="email" placeholder="Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <input name="password" value={form.password} onChange={handleChange}
            type="password" placeholder="Password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <button type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/auth/login" className="text-indigo-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}
