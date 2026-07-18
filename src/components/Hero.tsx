"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookButton } from "./BookButton";
import { HeroVideo } from "./HeroVideo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" id="top" aria-label="Welcome">
      <div className="hero__media" aria-hidden="true">
        <HeroVideo />
        <div className="hero__wash" />
      </div>

      <div className="hero__content">
        <motion.h1
          className="hero__headline"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <span className="hero__headline-text">Precision grooming.</span>
          <span className="hero__headline-text">Elevated experience.</span>
        </motion.h1>

        <motion.p
          className="hero__support"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.28 }}
        >
          A modern barber studio in Morrisville, North Carolina—where
          craftsmanship, comfort, and confidence meet. From a sharp refresh to
          full premium grooming, every service is designed with intention and
          delivered with care.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.42 }}
        >
          <BookButton>Book Your Appointment</BookButton>
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          className="hero__scroll-cue"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span />
        </motion.div>
      )}
    </section>
  );
}
