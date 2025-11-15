import Footer from "@/app/lab1/components/layout/Footer";
import Header from "@/app/lab1/components/layout/Header";

export const metadata = {
  title: "Membership — Medium Clone",
  description: "Join Medium Clone and enjoy exclusive benefits for members.",
};

function Membership() {
  return (
    <main className="flex flex-col min-h-screen bg-white/90 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl sm:text-3xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
          Become a Member
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Join our community and get access to exclusive stories, early access to features, and support for independent writers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Start Reading
          </a>
          <a
            href="/register"
            className="border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Become a Member
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 grid sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">Exclusive Stories</h3>
          <p className="text-gray-700">
            Get access to members-only content from our top writers.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">Support Writers</h3>
          <p className="text-gray-700">
            Your membership helps independent writers get paid for their work.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">Early Access</h3>
          <p className="text-gray-700">
            Be the first to try new features and tools on our platform.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p className="text-gray-700">
            Connect with like-minded readers and writers around the world.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Membership;
