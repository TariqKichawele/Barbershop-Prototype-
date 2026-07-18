import Image from "next/image";
import Link from "next/link";
import { FEATURED_SERVICES } from "@/lib/site";

const gallery = [
  { src: "/hero-portrait.jpg", alt: "Sharp lineup with textured top" },
  { src: "/cut-mullet.jpg", alt: "Curly mullet with skin fade" },
  { src: "/cut-slick.jpg", alt: "Slick styled cut with faded undercut" },
];

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>Grooming services designed with intention</h2>
          <p className="section-lead">
            From clean, classic cuts to modern styles and premium grooming
            services, every appointment is tailored to your look, your
            preferences, and your lifestyle.
          </p>
        </div>

        <div className="services__gallery reveal">
          {gallery.map((image) => (
            <figure key={image.src} className="services__shot">
              <Image
                src={image.src}
                alt={image.alt}
                width={880}
                height={1168}
                sizes="(max-width: 768px) 70vw, 28vw"
              />
            </figure>
          ))}
        </div>

        <ol className="services__list">
          {FEATURED_SERVICES.map((service, index) => (
            <li key={service.name} className="services__item reveal">
              <span className="services__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="services__cta reveal">
          <Link href="/services" className="btn-primary">
            Explore More Services
          </Link>
          <Link href="/gallery" className="btn-ghost">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
