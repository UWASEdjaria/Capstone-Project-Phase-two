import Header from "@/app/lab1/components/layout/Header";
import Footer from "@/app/lab1/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions — Medium Clone",
  description: "Read the rules for using Medium Clone.",
};

function Terms() {
  return (
    <main className="flex flex-col min-h-screen bg-white/90 text-gray-800">
      <Header />

      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl sm:text-3xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to Medium Clone! By using our platform, you agree to follow these terms and conditions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You are responsible for the content you publish, and you agree not to post anything unlawful or harmful.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Medium Clone reserves the right to remove content that violates these terms or any applicable law.
        </p>
      </section>

      <Footer />
    </main>
  );
}

export default Terms;
