"use client";

import { REVIEWS } from "@/lib/site";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="shell">
        <FadeIn className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>What clients are saying</h2>
          <p className="section-lead">
            Feedback from guests who book with Jordan—clean cuts, sharp detail,
            and a chair worth coming back to.
          </p>
        </FadeIn>

        <Stagger as="ul" className="reviews__list" stagger={0.1}>
          {REVIEWS.map((review) => (
            <StaggerItem key={review.name} as="li" className="reviews__item">
              <div
                className="reviews__stars"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="reviews__quote">
                <p>“{review.quote}”</p>
              </blockquote>
              <footer className="reviews__meta">
                <cite>{review.name}</cite>
                <span aria-hidden="true">·</span>
                <span>{review.source}</span>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
