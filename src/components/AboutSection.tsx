import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND, IMAGES } from "@/lib/site-data";

const bullets = [
  "Independent, unbiased advice",
  "Client-first, always",
  "Transparent — no hidden fees",
  "A dedicated consultant for you",
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-stone-800/10 bg-[var(--paper)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <AnimateIn>
          <div className="relative aspect-[4/5] max-h-[560px] w-full border-4 border-white shadow-xl">
            <Image
              src={IMAGES.about}
              alt={IMAGES.aboutAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-8 pt-24">
              <p className="font-display text-2xl font-semibold text-[var(--cream)]">{BRAND.tradingName}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--cream)]/60">
                {BRAND.legalName}
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--rust)]">About</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Built on trust. Driven by care.
            </h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              <strong className="text-stone-800">{BRAND.legalName}</strong>, trading as{" "}
              <strong className="text-stone-800">{BRAND.tradingName}</strong>, exists to make insurance simple, honest,
              and accessible — professional, trust-focused, and client-first.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              We&apos;re not tied to one insurer. We compare options, explain them in plain language, and stay beside you
              when it&apos;s time to claim.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-stone-800/20 bg-[var(--cream)]">
                    <Icon name="check" size={14} color="#c2410c" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="mt-10 inline-flex items-center gap-2 border-b-2 border-[var(--rust)] pb-1 text-sm font-bold uppercase tracking-wider text-stone-900"
            >
              Start with a quote
              <Icon name="arrow" size={16} color="#1c1917" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
