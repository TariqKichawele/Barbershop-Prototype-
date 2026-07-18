"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";
import { FadeIn } from "./motion";

export function Artist() {
  return (
    <section className="artist section" id="artist">
      <div className="shell">
        <FadeIn>
          <h2 className="artist__title">Meet the artist</h2>
        </FadeIn>

        <div className="artist__grid">
          <FadeIn className="artist__media" x={-36} y={16}>
            <Image
              src="/jordan-at-work.png"
              alt="Jordan Howell cutting hair at Headlights Haircuts For Men"
              width={524}
              height={531}
              sizes="(max-width: 900px) 90vw, 46vw"
              className="artist__photo"
              priority
            />
          </FadeIn>

          <FadeIn className="artist__copy" x={36} y={16} delay={0.12}>
            <h3 className="artist__name">Jordan Howell</h3>
            <p>
              Jordan Howell is a seasoned master barber with nearly a decade of
              experience, known for delivering refined, detail-driven results. He
              specializes in timeless, classic cuts with a modern edge and
              approaches every service with both precision and creativity.
            </p>
            <p>
              Whether you are looking for a crisp, polished fade or a bold
              transformation, Jordan has the expertise to bring your vision to
              life.
            </p>
            <p>
              Beyond his technical skill, Jordan is known for his warm,
              personable approach and unwavering attention to detail. He is
              committed to creating an exceptional client experience, making sure
              every guest feels welcomed, comfortable, and confident from the
              moment they sit in his chair.
            </p>

            <div className="artist__social">
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jordan on TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jordan on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.13V9.01a6.27 6.27 0 0 0-.86-.06A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.2 8.2 0 0 0 4.76 1.51V6.8a4.85 4.85 0 0 1-1-.11Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3Zm0 7.75A3.05 3.05 0 1 1 15.05 12 3.05 3.05 0 0 1 12 15.05ZM17.94 6.1a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21.5 6.07a5.56 5.56 0 0 0-1.52-3.95A5.6 5.6 0 0 0 16.03.6C14.76.54 14.35.5 12 .5s-2.76.04-4.03.1a5.6 5.6 0 0 0-3.95 1.52A5.56 5.56 0 0 0 2.5 6.07C2.44 7.34 2.4 7.75 2.4 10.1s.04 2.76.1 4.03a5.56 5.56 0 0 0 1.52 3.95 5.6 5.6 0 0 0 3.95 1.52c1.27.06 1.68.1 4.03.1s2.76-.04 4.03-.1a5.6 5.6 0 0 0 3.95-1.52 5.56 5.56 0 0 0 1.52-3.95c.06-1.27.1-1.68.1-4.03s-.04-2.76-.1-4.03Zm-1.65 8a3.86 3.86 0 0 1-.87 2.16 3.9 3.9 0 0 1-2.16.87c-1.25.06-1.63.08-3.82.08s-2.57-.02-3.82-.08a3.9 3.9 0 0 1-2.16-.87 3.86 3.86 0 0 1-.87-2.16c-.06-1.25-.08-1.63-.08-3.82s.02-2.57.08-3.82a3.86 3.86 0 0 1 .87-2.16 3.9 3.9 0 0 1 2.16-.87c1.25-.06 1.63-.08 3.82-.08s2.57.02 3.82.08a3.9 3.9 0 0 1 2.16.87 3.86 3.86 0 0 1 .87 2.16c.06 1.25.08 1.63.08 3.82s-.02 2.57-.08 3.82Z"
      />
    </svg>
  );
}
