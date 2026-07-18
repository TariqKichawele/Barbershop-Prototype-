import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Graduate } from "next/font/google";
import { VoiceflowChat } from "@/components/VoiceflowChat";
import { SITE } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

/** Closest free match to the Headlights logo’s condensed slab display face. */
const graduate = Graduate({
  variable: "--font-graduate",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${SITE.name} | North Carolina`,
  description:
    "Headlights Haircuts For Men in Morrisville, NC offers precision haircuts, fades, and premium grooming services in a modern, welcoming barbershop. Book today for a clean, confident look.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${graduate.variable}`}
    >
      <body>
        {children}
        <VoiceflowChat />
      </body>
    </html>
  );
}
