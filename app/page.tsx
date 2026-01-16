import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Tours from "@/components/sections/Tours";
import Services from "@/components/sections/Services";
import Locations from "@/components/sections/Locations";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import PartnerLogos from "@/components/sections/PartnerLogos";
import Memories from "@/components/sections/Memories";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-0">
      <Hero />
      <PartnerLogos />
      <Stats />
      <Tours />
      <Services />
      <Locations />
      <Features />
      <Memories />
      <Testimonials />
      <Blog />
    </main>
  );
}
