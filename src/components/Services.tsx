"use client";

import Image from "next/image";
import Link from "next/link";
import { FEATURED_SERVICES } from "@/lib/site";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const gallery = [
  { src: "/hero-portrait.jpg", alt: "Sharp lineup with textured top" },
  { src: "/cut-mullet.jpg", alt: "Curly mullet with skin fade" },
  { src: "/cut-slick.jpg", alt: "Slick styled cut with faded undercut" },
];

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="shell">
        <FadeIn className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Grooming services designed with intention</h2>
          <p className="section-lead">
            From clean, classic cuts to modern styles and premium grooming
            services, every appointment is tailored to your look, your
            preferences, and your lifestyle.
          </p>
        </FadeIn>

        <Stagger className="services__gallery" stagger={0.12}>
          {gallery.map((image) => (
            <StaggerItem key={image.src} as="figure" className="services__shot">
              <Image
                src={image.src}
                alt={image.alt}
                width={880}
                height={1168}
                sizes="(max-width: 768px) 70vw, 28vw"
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger as="ol" className="services__list" stagger={0.12} delay={0.05}>
          {FEATURED_SERVICES.map((service, index) => (
            <StaggerItem key={service.name} as="li" className="services__item">
              <span className="services__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="services__cta" delay={0.1}>
          <Link href="/services" className="btn-primary">
            Explore More Services
          </Link>
          <Link href="/gallery" className="btn-ghost">
            View Gallery
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
