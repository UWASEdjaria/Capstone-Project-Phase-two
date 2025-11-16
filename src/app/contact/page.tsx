'use client';

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Your message has been sent!");
    console.log("Contact form submitted:", formData);

    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-600">Contact Us</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
