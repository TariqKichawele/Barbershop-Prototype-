"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GOOGLE_RATING, REVIEWS } from "@/lib/site";
import { FadeIn } from "./motion";

const AUTO_MS = 3500;

export function Reviews() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = REVIEWS.length;
  const review = REVIEWS[index];

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  useEffect(() => {
    if (reduce || paused || total <= 1) return;

    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % total);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [reduce, paused, total]);

  return (
    <section className="reviews section" id="reviews">
      <div className="shell">
        <FadeIn className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>What clients are saying</h2>
          <p className="section-lead">
            Real Google reviews from guests who book with Jordan.
          </p>
          <div className="reviews__rating" aria-label="Google rating">
            <span className="reviews__rating-score">
              {GOOGLE_RATING.score.toFixed(1)}
            </span>
            <span className="reviews__stars" aria-hidden="true">
              ★★★★★
            </span>
            <span className="reviews__rating-count">
              {GOOGLE_RATING.count} Google reviews
            </span>
          </div>
        </FadeIn>

        <FadeIn className="reviews__carousel" delay={0.08}>
          <div
            className="reviews__stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setPaused(false);
              }
            }}
          >
            <button
              type="button"
              className="reviews__arrow reviews__arrow--prev"
              aria-label="Previous review"
              onClick={prev}
            >
              <ArrowIcon />
            </button>

            <div className="reviews__viewport" aria-live="polite">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={review.name}
                  className="reviews__item"
                  custom={direction}
                  variants={
                    reduce
                      ? undefined
                      : {
                          enter: (dir: number) => ({
                            opacity: 0,
                            x: dir > 0 ? 40 : -40,
                          }),
                          center: { opacity: 1, x: 0 },
                          exit: (dir: number) => ({
                            opacity: 0,
                            x: dir > 0 ? -40 : 40,
                          }),
                        }
                  }
                  initial={reduce ? false : "enter"}
                  animate="center"
                  exit={reduce ? undefined : "exit"}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="reviews__author">
                    {review.image ? (
                      <Image
                        src={review.image}
                        alt=""
                        width={56}
                        height={56}
                        className="reviews__avatar-img"
                      />
                    ) : (
                      <span
                        className="reviews__avatar"
                        style={{ backgroundColor: review.avatarColor }}
                        aria-hidden="true"
                      >
                        {review.initial}
                      </span>
                    )}
                    <div className="reviews__author-meta">
                      <cite>{review.name}</cite>
                      <span>{review.source}</span>
                    </div>
                  </div>

                  <div
                    className="reviews__stars"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>

                  <blockquote className="reviews__quote">
                    <p>“{review.quote}”</p>
                  </blockquote>
                </motion.article>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="reviews__arrow reviews__arrow--next"
              aria-label="Next review"
              onClick={next}
            >
              <ArrowIcon />
            </button>
          </div>

          <div className="reviews__dots" role="tablist" aria-label="Reviews">
            {REVIEWS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show review from ${item.name}`}
                className={`reviews__dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.12 4.12a1 1 0 0 1 1.41 0l6.35 6.35a1 1 0 0 1 0 1.41l-6.35 6.35a1 1 0 1 1-1.41-1.41L13.76 12 8.12 6.36a1 1 0 0 1 0-1.41Z"
      />
    </svg>
  );
}
