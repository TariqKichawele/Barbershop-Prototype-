import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Image
          src="/logo.png"
          alt="Headlights Haircuts For Men"
          width={846}
          height={212}
          className="site-footer__logo"
        />
        <div className="site-footer__links">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
        </div>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {SITE.name}. Morrisville, NC.
        </p>
      </div>
    </footer>
  );
}
