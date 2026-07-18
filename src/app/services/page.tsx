import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  ALL_SERVICES,
  BOOKING_URL,
  SITE,
  formatDuration,
  formatPrice,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description:
    "Explore every grooming service at Headlights Haircuts For Men in Morrisville, NC—from premier haircuts to The Gold Standard.",
};

export default function ServicesPage() {
  return (
    <>
      <Reveal />
      <Header />
      <main className="services-page">
        <section className="services-page__hero section">
          <div className="shell services-page__intro reveal">
            <p className="eyebrow">Full menu</p>
            <h1>Services</h1>
            <p className="section-lead">
              Every service at {SITE.name} is designed with intention—precision
              cuts, premium grooming, and finishing details that leave you
              looking sharp and feeling confident.
            </p>
            <BookButton>Book Your Appointment</BookButton>
          </div>
        </section>

        <section className="section services-page__list-section">
          <div className="shell">
            <ul className="services-page__list">
              {ALL_SERVICES.map((service, index) => (
                <li key={service.name} className="services-page__item reveal">
                  <div className="services-page__item-top">
                    <span className="services-page__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="services-page__meta">
                      <span>{formatDuration(service.durationMinutes)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{formatPrice(service.priceCents)}</span>
                    </div>
                  </div>

                  <div className="services-page__item-main">
                    <div className="services-page__item-body">
                      <h2>{service.name}</h2>
                      <p>{service.description}</p>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="services-page__book"
                      >
                        Book this service
                      </a>
                    </div>

                    <figure className="services-page__item-media">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={900}
                        height={700}
                        sizes="(max-width: 900px) 100vw, 280px"
                      />
                    </figure>
                  </div>
                </li>
              ))}
            </ul>

            <div className="services-page__footer-cta reveal">
              <h2>Ready when you are</h2>
              <p>Pick your service and lock in a time that works for you.</p>
              <BookButton>Book Your Appointment</BookButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
