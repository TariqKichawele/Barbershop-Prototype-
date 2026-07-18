"use client";

import { SITE } from "@/lib/site";
import { FadeIn } from "./motion";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=9557+Chapel+Hill+Rd+Suite+104,+Morrisville,+NC+27560&hl=en&z=15&output=embed";

export function Visit() {
  return (
    <section className="visit section" id="visit">
      <div className="shell">
        <FadeIn className="section-heading visit__heading">
          <h2>Visit us</h2>
        </FadeIn>

        <div className="visit__grid">
          <FadeIn className="visit__map-wrap" x={-28} y={16}>
            <div className="visit__map">
              <iframe
                title={`Map to ${SITE.name}`}
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>

          <FadeIn className="visit__details" x={28} y={16} delay={0.1}>
            <div>
              <h3>Address</h3>
              <p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </a>
              </p>
            </div>
            <div>
              <h3>Hours</h3>
              <p>{SITE.hours}</p>
            </div>
            <div>
              <h3>Call or text</h3>
              <p>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
