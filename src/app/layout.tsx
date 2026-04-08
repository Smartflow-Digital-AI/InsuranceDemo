import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/site-data";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--surface)] font-sans text-[var(--void)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
