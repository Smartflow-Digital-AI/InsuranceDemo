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
    <section id="about" className="bg-[var(--surface)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <AnimateIn>
          <div className="relative aspect-[4/5] max-h-[600px] w-full overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.about}
              alt={IMAGES.aboutAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-display text-4xl tracking-tight text-white">{BRAND.wordmark.toUpperCase()}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">{BRAND.legalName}</p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Our story</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-[var(--void)] sm:text-6xl">
              BUILT ON
              <br />
              TRUST
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--muted)]">
              <strong className="font-semibold text-[var(--void)]">{BRAND.legalName}</strong>, trading as{" "}
              <strong className="font-semibold text-[var(--void)]">{BRAND.tradingName}</strong> — insurance made simple,
              honest, and built around you.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              We&apos;re not tied to one insurer. We compare, explain in plain language, and stay with you when you claim.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[var(--void)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                    <Icon name="check" size={14} color="#5b21b6" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--void)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[var(--accent)]"
            >
              Get a quote
              <Icon name="arrow" size={16} color="#fff" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
