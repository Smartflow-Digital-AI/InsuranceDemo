/** Brand — change here to re-title the whole site */
export const BRAND = {
  /** Registered company */
  legalName: "Marula (Pty) Ltd",
  /** Trading / public name */
  tradingName: "Marula Insurance Advisory",
  /** Short wordmark for tight spaces */
  wordmark: "Marula",
  tagline: "Cover that reads the terrain — not the brochure.",
} as const;

/** Replace with your real WhatsApp number (country code, no +). */
export const WHATSAPP_NUMBER = "27000000000";
export const WHATSAPP_MESSAGE = "Hi, I'd like a quote for insurance";

export function whatsappHref() {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Unsplash photos (hotlinked per Unsplash guidelines — credit in footer).
 * Swap URLs anytime; keep `images.unsplash.com` hostname in next.config.
 */
export const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
  heroAlt: "Modern home exterior at dusk — family and property",
  trustStrip:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  trustAlt: "Team collaboration in a bright office",
  about:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
  aboutAlt: "People meeting and talking together",
  featuresBg:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
  featuresBgAlt: "Architectural office interior with light",
} as const;

export const SERVICES = [
  {
    icon: "home" as const,
    title: "Home Insurance",
    desc: "Protect your most valuable asset. Cover for your home, contents, and everything that makes it yours.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "House keys on a wooden surface",
  },
  {
    icon: "car" as const,
    title: "Motor Insurance",
    desc: "Drive with confidence. Full cover for accidents, theft, fire, and third-party liability.",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Car on an open road",
  },
  {
    icon: "travel" as const,
    title: "Travel & Valuables",
    desc: "Travel worry-free. Protection for trips and valuable possessions wherever life takes you.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Travel planning flat lay with map",
  },
  {
    icon: "farming" as const,
    title: "Farming Insurance",
    desc: "Safeguard your livelihood. Cover for crops, livestock, equipment, and farming risks.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d89c67a2ad?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tractor and fields at sunrise",
  },
  {
    icon: "accident" as const,
    title: "Personal Accident Cover",
    desc: "Financial protection for you and your family against accidents and disability.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Active healthy lifestyle outdoors",
  },
  {
    icon: "flood" as const,
    title: "Flood Cover",
    desc: "Stay protected against the elements. Flood damage cover for property and belongings.",
    image:
      "https://images.unsplash.com/photo-1433863449890-738be494de93?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Storm clouds over landscape",
  },
];

export const TRUST_POINTS = [
  {
    icon: "users" as const,
    title: "Personalized insurance solutions",
    desc: "We listen first. Every policy fits your situation — not a one-size template.",
  },
  {
    icon: "bolt" as const,
    title: "Fast claims assistance",
    desc: "When you need us, we move quickly and guide you through every step.",
  },
  {
    icon: "shield" as const,
    title: "Trusted advisory",
    desc: "Honest, independent advice. We work for you to get the right cover at a fair price.",
  },
  {
    icon: "chart" as const,
    title: "Wide coverage options",
    desc: "Access to multiple leading insurers. We compare so you don't have to.",
  },
];

export const FEATURES = [
  { icon: "shield" as const, text: "Comprehensive cover" },
  { icon: "wallet" as const, text: "Affordable premiums" },
  { icon: "support" as const, text: "Expert guidance" },
  { icon: "clock" as const, text: "Quick support" },
];

export const TESTIMONIALS = [
  {
    name: "Thabo Mokoena",
    role: "Business Owner, Johannesburg",
    text: "Marula made switching insurance effortless. Better cover at a lower premium — and a smooth claims process when we needed it.",
    stars: 5,
  },
  {
    name: "Sarah van der Merwe",
    role: "Homeowner, Cape Town",
    text: "Finally someone who explains things clearly. No jargon, no pressure — just genuine care.",
    stars: 5,
  },
  {
    name: "Priya Naidoo",
    role: "Farmer, KwaZulu-Natal",
    text: "They reviewed my farming operations and got me proper coverage. When floods hit, they were there within hours.",
    stars: 5,
  },
];

export const CONTACT = {
  phones: ["+27 XX XXX XXXX", "+27 XX XXX XXXX"],
  tel: "tel:+27000000000",
  emails: ["hello@marulainsurance.co.za", "quotes@marulainsurance.co.za"],
  mailto: "mailto:hello@marulainsurance.co.za",
  addressLines: ["123 Business Avenue", "Johannesburg, South Africa"],
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=27.95%2C-26.25%2C28.15%2C-26.15&layer=mapnik&marker=-26.2041%2C28.0473",
  mapLink: "https://www.openstreetmap.org/?mlat=-26.2041&mlon=28.0473#map=12/-26.2041/28.0473",
};
