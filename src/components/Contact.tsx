"use client";

import { SITE } from "@/lib/site";
import { BookButton } from "./BookButton";
import { ContactForm } from "./ContactForm";
import { FadeIn } from "./motion";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="shell contact__grid">
        <FadeIn className="contact__lead">
          <p className="eyebrow">Ready for your next cut?</p>
          <h2>Book your appointment today</h2>
          <p className="section-lead">
            Experience precision barbering, premium care, and a barbershop
            atmosphere built around comfort, confidence, and style.
          </p>
          <BookButton>Book Your Appointment</BookButton>
          <div className="contact__meta">
            <p>
              Call or text{" "}
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </p>
            <p>Hours: {SITE.hours}</p>
          </div>
        </FadeIn>

        <FadeIn className="contact__form-wrap" delay={0.12} x={28} y={16}>
          <h3>Have a question?</h3>
          <p>Fill out the form and we&apos;ll respond as soon as possible.</p>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
