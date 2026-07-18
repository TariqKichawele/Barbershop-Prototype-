"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (elements.length === 0) return;

    const show = (el: Element) => el.classList.add("is-visible");
    const root = document.documentElement;

    if (!("IntersectionObserver" in window)) {
      elements.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );

    // Mark in-view items before enabling hide styles.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        show(el);
      } else {
        observer.observe(el);
      }
    });

    root.classList.add("reveal-ready");

    const fallback = window.setTimeout(() => {
      elements.forEach(show);
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
