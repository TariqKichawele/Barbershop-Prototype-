"use client";

import Image from "next/image";
import { GALLERY } from "@/lib/site";
import { BookButton } from "./BookButton";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export function GalleryGrid() {
  return (
    <>
      <section className="gallery-page__hero section">
        <FadeIn className="shell gallery-page__intro">
          <p className="eyebrow">The work</p>
          <h1>Gallery</h1>
          <p className="section-lead">
            A look at the finishes we aim for—fades, lineups, beard detail, and
            styled cuts. These are placeholder stock shots for now; real client
            photos will replace them soon.
          </p>
          <BookButton>Book Your Appointment</BookButton>
        </FadeIn>
      </section>

      <section className="section gallery-page__grid-section">
        <div className="shell">
          <Stagger as="ul" className="gallery-page__grid" stagger={0.07}>
            {GALLERY.map((shot) => (
              <StaggerItem
                key={shot.src}
                as="li"
                className="gallery-page__item"
                y={32}
              >
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
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="gallery-page__footer-cta" delay={0.1}>
            <h2>Like what you see?</h2>
            <p>Book a time and we’ll build the look that fits you.</p>
            <BookButton>Book Your Appointment</BookButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
