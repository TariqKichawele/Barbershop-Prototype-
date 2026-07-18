import { BookButton } from "./BookButton";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Welcome">
      <div className="hero__media" aria-hidden="true">
        <HeroVideo />
        <div className="hero__wash" />
      </div>

      <div className="hero__content">
        <h1 className="hero__headline">
          <span className="hero__headline-text">Precision grooming.</span>
          <span className="hero__headline-text">Elevated experience.</span>
        </h1>
        <p className="hero__support">
          A modern barber studio in Morrisville, North Carolina—where
          craftsmanship, comfort, and confidence meet. From a sharp refresh to
          full premium grooming, every service is designed with intention and
          delivered with care.
        </p>
        <div className="hero__actions">
          <BookButton>Book Your Appointment</BookButton>
        </div>
      </div>
    </section>
  );
}
