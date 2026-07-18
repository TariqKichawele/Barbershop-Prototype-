"use client";

import { useReducedMotion } from "motion/react";

const ITEMS = [
  "Precision cuts",
  "Morrisville, NC",
  "Book online",
  "Fades & lineups",
  "Premium grooming",
  "Headlights",
] as const;

/** Repeat enough times that one group always wider than the viewport. */
const GROUP_ITEMS = Array.from({ length: 4 }, () => ITEMS).flat();

function MarqueeGroup() {
  return (
    <div className="marquee__group">
      {GROUP_ITEMS.map((item, index) => (
        <span key={`${item}-${index}`} className="marquee__item">
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  const reduce = useReducedMotion();

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee__track${reduce ? " is-static" : ""}`}>
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
