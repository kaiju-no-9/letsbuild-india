import { NavBar } from "./components/NavBar"
import HeroSection from "./components/HeroSection";
import { Card } from "./components/Card";
import { SponserSection } from "./components/SponserSection";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* 🔹 Navbar */}
      <NavBar />

      {/* 🔹 Hero Section */}
      <section id="home" className="w-full">
        <h1 className="text-4xl font-bold mb-6">HERO </h1>
        <HeroSection />
      </section>

      {/* 🔹 Hackathon Section */}
      <section id="hackathon" className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* You can map multiple cards here */}
          <h2 className="text-3xl font-semibold mb-10">Hackathon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      {/* 🔹 Sponsors Section */}
      <section id="sponsors" className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Sponsors</h2>
          <SponserSection />
        </div>
      </section>

      {/* 🔹 Contact Us Section */}
      <section id="contact" className="w-full py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Contact Us</h2>
          <ContactUs />
        </div>
      </section>

      {/* 🔹 Footer */}
      <Footer />

    </main>
  );
}
