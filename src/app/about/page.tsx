import React from "react";
import Header from "../lab1/components/layout/Header";
import Footer from "../lab1/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "About — Medium Clone",
  description: "Learn more about our platform and share your story.",
};

function About() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white/87 bg-[url('/lab1/images/background-image.jpg')] bg-cover bg-center bg-no-repeat text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-left">
        <h1 className="text-7xl sm:text-4xl md:text-6xl lg:text-9xl font-serif font-light text-black/90 mb-6">
          About Medium Clone
        </h1>
        <p className="text-xl md:text-lg lg:text-2xl leading-relaxed max-w-3xl">
          Medium Clone is a platform for sharing ideas, stories, and knowledge. 
          Our mission is to create a distraction-free space for readers and writers to connect.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-left md:text-left">
        <h2 className="text-4xl font-serif font-semibold mb-2">Our Story</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          We started with a simple idea: give writers a place to share their stories freely and inspire readers. 
          Focused on clean typography and easy reading, Medium Clone keeps the content front and center.
        </p>
      </section>

      {/* Call-to-Join Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left">
        <h2 className="text-4xl font-serif font-bold mb-4">Share Your Story</h2>
        <p className="text-lg leading-relaxed mb-6 max-w-3xl">
          Join our community and start sharing your thoughts and experiences today.
        </p>
        <Link
          href="/signup"
          className="bg-green-600 md:bg-black  text-white px-4 py-4 md:px-15  rounded-full font-medium text-xl hover:bg-green-800 transition-colors w-60"
        >
          Get Started
        </Link>
      </section>

      <Footer />
    </main>
  );
}

export default About;
