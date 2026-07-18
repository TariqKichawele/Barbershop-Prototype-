import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { GALLERY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery | ${SITE.name}`,
  description:
    "Browse recent cuts and finishes from Headlights Haircuts For Men in Morrisville, NC. Placeholder stock images until real client work is added.",
};

export default function GalleryPage() {
  return (
    <>
      <Reveal />
      <Header />
      <main className="gallery-page">
        <section className="gallery-page__hero section">
          <div className="shell gallery-page__intro reveal">
            <p className="eyebrow">The work</p>
            <h1>Gallery</h1>
            <p className="section-lead">
              A look at the finishes we aim for—fades, lineups, beard detail, and
              styled cuts. These are placeholder stock shots for now; real client
              photos will replace them soon.
            </p>
            <BookButton>Book Your Appointment</BookButton>
          </div>
        </section>

        <section className="section gallery-page__grid-section">
          <div className="shell">
            <ul className="gallery-page__grid">
              {GALLERY.map((shot) => (
                <li key={shot.src} className="gallery-page__item reveal">
                  <figure>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={900}
                      height={1200}
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                    <figcaption>{shot.label}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <div className="gallery-page__footer-cta reveal">
              <h2>Like what you see?</h2>
              <p>Book a time and we’ll build the look that fits you.</p>
              <BookButton>Book Your Appointment</BookButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
