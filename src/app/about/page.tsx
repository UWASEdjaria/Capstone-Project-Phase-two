import React from "react";
import Header from "../lab1/components/layout/Header";
import Footer from "../lab1/components/layout/Footer";

export const metadata = {
  title: "About — Medium Clone",
  description: "Learn more about our platform and share your story.",
};

function About() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-serif font-bold mb-6">
          About Medium Clone
        </h1>
        <p className="text-lg leading-relaxed">
          Medium Clone is a platform for sharing ideas, stories, and knowledge. 
          Our mission is to create a distraction-free space for readers and writers to connect.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center md:text-left">
        <h2 className="text-3xl font-serif font-semibold mb-4">
          Our Story
        </h2>
        <p className="text-lg leading-relaxed">
          We started with a simple idea: give writers a place to share their stories freely and inspire readers. 
          Focused on clean typography and easy reading, Medium Clone keeps the content front and center.
        </p>
      </section>

      {/* Call-to-Join */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Share Your Story
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Join our community and start sharing your thoughts and experiences today.
        </p>
        <a 
          href="/signup"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </main>
  );
}

export default About;
