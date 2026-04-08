import Image from "next/image";
import { Icon } from "./Icon";
import { BRAND, IMAGES, whatsappHref } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-[var(--void)]">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:from-black/80 sm:via-black/40"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-24 lg:pt-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{BRAND.legalName}</p>
          <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,9rem)] font-normal leading-[0.9] tracking-tight text-white">
            YOUR TRUSTED
            <br />
            <span className="text-white/95">PARTNER</span>
          </h1>
          <p className="mt-2 font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-[var(--volt)]">
            FOR EVERY COVER
          </p>
          <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-white/85 sm:text-xl">
            Protect what matters — home, motor, travel, farming, accident &amp; flood. Advice that feels as clear as your
            favourite app.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-[var(--void)] transition hover:bg-[var(--volt)]"
            >
              Get a quote
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[var(--void)]"
            >
              <Icon name="whatsapp" size={20} color="currentColor" />
              WhatsApp
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/15 pt-8">
            {["Licensed & regulated", "Independent advice", "Claims support"].map((t) => (
              <span key={t} className="text-xs font-semibold uppercase tracking-widest text-white/55">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
