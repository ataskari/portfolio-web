import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#fafafa]">
      <Navbar />
      
      <div id="hero" className="w-full flex items-center justify-center pt-40 pb-16 lg:pb-24">
        <Hero />
      </div>
      
      <div id="services" className="w-full flex items-center justify-center bg-white py-20 lg:py-24 shadow-sm border-t border-b border-gray-100/50">
        <Services />
      </div>
      
      <div id="work" className="w-full flex items-center justify-center py-20 lg:py-24">
        <SelectedWork />
      </div>

      <div id="contact" className="w-full flex items-center justify-center bg-white py-20 lg:py-24 shadow-sm border-t border-gray-100/50">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
