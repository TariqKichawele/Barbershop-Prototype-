import { Artist } from "@/components/Artist";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Services />
        <Artist />
        <Reviews />
        <Visit />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
