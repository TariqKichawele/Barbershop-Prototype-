export const BOOKING_URL =
  "https://book.squareup.com/appointments/jlipsuy5iooa6d/location/L4PR63X15K87T/services";

export const SITE = {
  name: "Headlights Haircuts For Men",
  phoneDisplay: "(919) 559-0127",
  phoneHref: "tel:+19195590127",
  addressLine1: "9557 Chapel Hill Rd. Suite 104",
  addressLine2: "Morrisville, North Carolina 27560",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=9557+Chapel+Hill+Rd+Suite+104+Morrisville+NC+27560",
  hours: "Wednesday – Sunday, 10 AM – 7 PM",
  instagram: "https://www.instagram.com/hairjordanx",
  tiktok: "https://www.tiktok.com/@hairjordanx",
} as const;

/** Featured packages shown on the landing page. */
export const FEATURED_SERVICES = [
  {
    name: "Premier Haircut",
    description:
      "Precision meets efficiency with our Premier Haircut Service. Enjoy a tailored haircut, revitalizing wash, and expert styling delivered with refined attention to detail for a polished, confident finish.",
  },
  {
    name: "Premier Hair and Beard",
    description:
      "Elevate your experience with our Premier Grooming Service. This all-inclusive treatment builds upon our Premier Haircut with the addition of a precision beard sculpting and a relaxing neck and shoulder massage delivering refined detail, total relaxation, and a truly distinguished finish.",
  },
  {
    name: "The Gold Standard",
    description:
      "Our most comprehensive, luxury treatment. This all-in-one service combines a precision haircut, wash & style, beard tailoring, steamed towel treatment, facial care, neck and shoulder massage, and detail grooming including ear and nose waxing. Every element is executed with meticulous attention to detail, delivering transformation in comfort, refinement, and style.",
  },
] as const;

/** Full menu from Square booking. */
export const ALL_SERVICES = [
  {
    name: "Premier Haircut",
    description:
      "Precision meets efficiency with our Express Haircut Service. Enjoy a tailored haircut, revitalizing wash, and expert styling delivered with refined attention to detail for a polished, confident finish in minimal time.",
    priceCents: 4500,
    durationMinutes: 45,
    image: "/service-haircut.jpg",
    imageAlt: "Client with a fresh precision haircut",
  },
  {
    name: "Premier Hair and Beard",
    description:
      "Elevate your experience with our Premier Grooming Service. This all-inclusive treatment builds upon our Express Grooming with the addition of a precision beard sculpting and a relaxing neck and shoulder massage delivering refined detail, total relaxation, and a truly distinguished finish.",
    priceCents: 6000,
    durationMinutes: 60,
    image: "/service-hair-beard.jpg",
    imageAlt: "Styled haircut with a neatly tailored beard",
  },
  {
    name: "Beard Tailoring",
    description:
      "Refine your look with our Beard Tailoring Service. This elevated treatment features a precision beard sculpt, enhanced by a hot steamed towel to soften and prepare the hair, followed by a relaxing massage to complete the experience—leaving your beard sharp, conditioned, and impeccably finished.",
    priceCents: 4000,
    durationMinutes: 30,
    image: "/service-beard.jpg",
    imageAlt: "Barber shaping and trimming a beard",
  },
  {
    name: "Grey Coverage Service",
    description:
      "Restore a youthful, polished look with our Grey Coverage Service. This customized color treatment is expertly blended to seamlessly conceal greys while maintaining a natural, refined appearance—finished with a cleansing rinse and style for a smooth, confident result.",
    priceCents: 6500,
    durationMinutes: 45,
    image: "/service-color.jpg",
    imageAlt: "Color treatment in a salon chair",
  },
  {
    name: "Fantasy Color Consultation",
    description:
      "Our Fantasy Color Consultation is a creative, one-on-one session designed to bring bold vision to life. We explore your desired look, assess your hair’s condition, and map out a custom color strategy for vibrant, expressive tones—whether subtle accents or statement-making transformations.",
    priceCents: 0,
    durationMinutes: 15,
    image: "/service-fantasy.jpg",
    imageAlt: "Bold creative hair color consultation inspiration",
  },
  {
    name: "Revitalizing Facial",
    description:
      "A refreshing facial treatment designed to cleanse, revive, and leave your skin feeling smooth and restored—an ideal add-on to any grooming appointment.",
    priceCents: 4000,
    durationMinutes: 30,
    image: "/service-facial.jpg",
    imageAlt: "Client receiving a revitalizing facial treatment",
  },
  {
    name: "Ear and Nose Waxing",
    description:
      "Our Ear and Nose Waxing Service offers quick, precise grooming for a clean, polished appearance. Using gentle waxing techniques, we safely remove unwanted hair from hard-to-reach areas—delivering a sharp, well-groomed finish with minimal discomfort and long-lasting results.",
    priceCents: 3000,
    durationMinutes: 30,
    image: "/service-detail.jpg",
    imageAlt: "Detail grooming tools in a barbershop",
  },
  {
    name: "The Gold Standard",
    description:
      "The ultimate grooming experience—our most comprehensive, luxury treatment. This all-in-one service combines a precision haircut, revitalizing wash and style, expert beard tailoring, hot steamed towel treatment, facial care, neck and shoulder massage, and detail grooming including ear and nose waxing.",
    priceCents: 18500,
    durationMinutes: 120,
    image: "/service-luxury.jpg",
    imageAlt: "Barber delivering a full premium grooming experience",
  },
  {
    name: "Total Transformation Haircut",
    description:
      "Designed for hair 7 inches or longer, this service is for clients ready for a major change. Includes a detailed consultation, precision haircut, wash, and professional styling.",
    priceCents: 8000,
    durationMinutes: 90,
    image: "/service-transform.jpg",
    imageAlt: "Dramatic haircut transformation result",
  },
] as const;

/** Placeholder gallery shots — swap for real client work when ready. */
export const GALLERY = [
  {
    src: "/gallery/fade-1.jpg",
    alt: "Clean skin fade with textured top",
    label: "Skin fade",
  },
  {
    src: "/gallery/fade-2.jpg",
    alt: "Mid fade with soft fringe",
    label: "Mid fade",
  },
  {
    src: "/gallery/beard-1.jpg",
    alt: "Beard shaping and lineup",
    label: "Beard detail",
  },
  {
    src: "/gallery/cut-1.jpg",
    alt: "Classic tapered cut",
    label: "Taper cut",
  },
  {
    src: "/gallery/cut-2.jpg",
    alt: "Barbershop tools and chair detail",
    label: "In the chair",
  },
  {
    src: "/gallery/style-1.jpg",
    alt: "Styled finish with volume on top",
    label: "Styled finish",
  },
  {
    src: "/gallery/shop-1.jpg",
    alt: "Barbershop atmosphere",
    label: "Shop vibe",
  },
  {
    src: "/gallery/detail-1.jpg",
    alt: "Precision lineup close-up",
    label: "Lineup",
  },
] as const;

/** Placeholder reviews — replace with real Google reviews later. */
export const REVIEWS = [
  {
    name: "Marcus T.",
    rating: 5,
    quote:
      "Best fade I’ve gotten in the Triangle. Jordan takes his time, listens, and the cut holds up for weeks. Already booked my next one.",
    source: "Google",
  },
  {
    name: "Devon R.",
    rating: 5,
    quote:
      "Clean shop, great energy, and the Gold Standard is worth every dollar. Walked out looking sharper than I have in years.",
    source: "Google",
  },
  {
    name: "Andre W.",
    rating: 5,
    quote:
      "On time, professional, and the beard work is elite. Easy booking and a spot I actually look forward to visiting.",
    source: "Google",
  },
  {
    name: "Chris L.",
    rating: 5,
    quote:
      "Brought my son for his first real cut and Jordan made it easy. Detail-oriented without the rush. Highly recommend.",
    source: "Google",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you take walk-ins or only appointments?",
    answer:
      "We prioritize appointments so every guest gets the time they deserve. Walk-ins are welcome when the chair is open—call or text ahead to check availability, or book online to lock in your spot.",
  },
  {
    question: "Where should I park?",
    answer:
      "Free parking is available in the lot at 9557 Chapel Hill Rd. We’re in Suite 104—look for Headlights near the front of the building. Street parking nearby is limited, so the lot is your best bet.",
  },
  {
    question: "What’s your cancellation policy?",
    answer:
      "Please cancel or reschedule at least 24 hours before your appointment. Late cancellations and no-shows may limit future booking flexibility so we can keep the schedule fair for everyone.",
  },
  {
    question: "Do you cut kids’ hair?",
    answer:
      "Yes—kids are welcome when they’re comfortable sitting through a full service. For first-timers, booking a slightly longer window helps. Reach out if you’re unsure which service fits.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, and payment is handled through Square at checkout. Cash may be accepted—ask when you arrive if that’s preferred.",
  },
  {
    question: "How early should I arrive?",
    answer:
      "Aim for 5–10 minutes early so you can check in and settle. If you’re running late, a quick text helps us protect the rest of the day’s schedule.",
  },
] as const;

export function formatPrice(priceCents: number) {
  if (priceCents <= 0) return "Complimentary";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (rest === 0) return hours === 1 ? "1 hr" : `${hours} hrs`;
  return `${hours} hr ${rest} min`;
}
