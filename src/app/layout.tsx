import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/site-data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-brico",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-news",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${BRAND.tradingName} | Your trusted partner for all insurance needs`,
  description: `${BRAND.legalName} (${BRAND.tradingName}) — home, motor, travel, farming, personal accident & flood cover. Independent advice, fast claims support. Get a free quote.`,
  keywords: [
    "insurance advisory",
    "home insurance",
    "motor insurance",
    "farming insurance",
    BRAND.tradingName,
  ],
  openGraph: {
    title: BRAND.tradingName,
    description: BRAND.tagline,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: BRAND.tradingName,
  legalName: BRAND.legalName,
  description:
    "Independent insurance consultancy offering home, motor, travel, farming, personal accident and flood cover.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}>
      <body className="grain flex min-h-full flex-col bg-[var(--paper)] font-sans text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
