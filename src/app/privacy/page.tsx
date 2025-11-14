import Header from "@/app/lab1/components/layout/Header";
import Footer from "@/app/lab1/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Medium Clone",
  description: "Learn how Medium Clone handles your data and privacy.",
};

function Privacy() {
  return (
    <main className="flex flex-col min-h-screen bg-white/90 text-gray-800">
      <Header />

      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl sm:text-3xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          We value your privacy and are committed to protecting your personal information.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          This privacy policy explains how we collect, use, and safeguard your data when you use Medium Clone.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          By using our platform, you agree to the practices described in this policy.
        </p>
      </section>

      <Footer />
    </main>
  );
}

export default Privacy;
