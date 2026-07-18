import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Gallery | ${SITE.name}`,
  description:
    "Browse recent cuts and finishes from Headlights Haircuts For Men in Morrisville, NC. Placeholder stock images until real client work is added.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
