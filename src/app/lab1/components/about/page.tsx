import React from "react";
import Image from "next/image";
import Header from "../layout/Header";
import Footer from "../layout/Footer";



export const metadata = {
  title: "About — Medium Clone",
  description: "Learn more about our platform, mission, and story.",
};

function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900">
          About Medium Clone
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
          Medium Clone is a platform for sharing human stories, ideas, and knowledge. 
          Our mission is to create a space for thoughtful writing, reading, and community engagement.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            To empower writers and readers with a clean, distraction-free experience. 
            Medium Clone demonstrates frontend engineering skills: Next.js, Tailwind, responsive design, and reusable components.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/lab1/images/about-illustration.jpg"
            alt="Mission illustration"
            width={640}
            height={360}
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0">
          Medium Clone started with a simple idea: to give writers a platform to share their stories and ideas freely, 
          and to create a reading experience that is clean, engaging, and distraction-free. 
          Every feature, from the editor to the layout, is designed to focus on content and the people behind it.
        </p>
      </section>

      {/* Optional Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gray-900">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="/lab1/images/team1.jpg" alt="Team member" width={128} height={128} className="w-32 h-32 rounded-full mb-4 object-cover"/>
            <h3 className="font-semibold text-xl mb-1">Alice Smith</h3>
            <p className="text-gray-600 text-center text-sm">Frontend Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="/lab1/images/team2.jpg" alt="Team member" width={128} height={128} className="w-32 h-32 rounded-full mb-4 object-cover"/>
            <h3 className="font-semibold text-xl mb-1">John Doe</h3>
            <p className="text-gray-600 text-center text-sm">Backend Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Image src="/lab1/images/team3.jpg" alt="Team member" width={128} height={128} className="w-32 h-32 rounded-full mb-4 object-cover"/>
            <h3 className="font-semibold text-xl mb-1">Mary Johnson</h3>
            <p className="text-gray-600 text-center text-sm">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default AboutPage;
