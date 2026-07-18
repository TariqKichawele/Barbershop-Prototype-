"use client";

import { FAQ_ITEMS } from "@/lib/site";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="shell faq__grid">
        <FadeIn className="section-heading faq__heading">
          <p className="eyebrow">FAQ</p>
          <h2>Before you book</h2>
          <p className="section-lead">
            Quick answers on parking, walk-ins, cancellations, kids, and payment
            so your visit is smooth from the start.
          </p>
        </FadeIn>

        <Stagger className="faq__list" stagger={0.08}>
          {FAQ_ITEMS.map((item) => (
            <StaggerItem key={item.question} className="faq__item-wrap">
              <details className="faq__item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
