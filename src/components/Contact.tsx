import { SITE } from "@/lib/site";
import { BookButton } from "./BookButton";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="shell contact__grid">
        <div className="contact__lead reveal">
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
        </div>

        <div className="contact__form-wrap reveal">
          <h3>Have a question?</h3>
          <p>Fill out the form and we&apos;ll respond as soon as possible.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
