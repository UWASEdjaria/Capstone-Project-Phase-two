'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

<<<<<<< HEAD
export default function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
=======
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

<<<<<<< HEAD
    if (!formData.name || !formData.email || !formData.password) {
=======
    if (!formData.email || !formData.password) {
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
      setError("Please fill in all fields.");
      return;
    }

    try {
<<<<<<< HEAD
      const res = await fetch("/api/signup", {
=======
      // Call your backend API
      const res = await fetch("/lab2/api/login", {
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
<<<<<<< HEAD
        throw new Error(errData.message || "Sign up failed");
      }

      router.push("/lab2/login"); // Redirect to login after signup
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
=======
        throw new Error(errData.message || "Login failed");
      }

      const data = await res.json();

      // Save token or user info in localStorage
      localStorage.setItem("token", data.token);

      setError("");
      router.push("/"); // Redirect after login
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4 mt-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-600">Sign Up</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-2">
          Already have an account?{" "}
          <Link href="/lab2/login" className="text-blue-500 hover:underline">
            Log In
=======
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
            className="w-full text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9] transition"
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
            className="w-full  text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9] transition"
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
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
          </Link>
        </p>
      </form>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 61288d9f384889fe4bfc424d4e956fa3b0d9ef91
