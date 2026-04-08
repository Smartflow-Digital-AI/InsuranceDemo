import Image from "next/image";
import { Icon } from "./Icon";
import { BRAND, IMAGES, whatsappHref } from "@/lib/site-data";

const badges = ["Licensed & regulated", "Independent advice", "Claims support"];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[4.75rem]">
      {/* Diagonal split layout — photo bleeds; copy sits on paper */}
      <div className="relative mx-auto max-w-[1600px] lg:min-h-[calc(100svh-4.75rem)]">
        <div className="grid lg:grid-cols-12 lg:gap-0">
          <div className="relative z-10 flex flex-col justify-center px-4 pb-12 pt-8 sm:px-6 lg:col-span-5 lg:px-10 lg:pb-20 lg:pt-16 xl:px-14">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--rust)]">
              {BRAND.legalName}
            </p>
            <h1 className="mt-5 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.15rem]">
              Your trusted partner
              <span className="block text-[var(--olive)]">for all insurance needs</span>
            </h1>
            <p className="mt-6 max-w-md border-l-4 border-[var(--rust)] pl-5 font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
              Protect what matters most — your home, business, health, and future. Plain language, human advice, cover
              shaped around you.
            </p>
            <p className="mt-4 max-w-sm text-sm italic text-stone-500">&ldquo;{BRAND.tagline}&rdquo;</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[var(--rust)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[var(--rust-dark)]"
              >
                Get a Quote
                <Icon name="arrow" size={16} color="#fff" />
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-stone-900 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-stone-900 transition hover:bg-stone-900 hover:text-[var(--cream)]"
              >
                <Icon name="whatsapp" size={20} color="currentColor" />
                WhatsApp
              </a>
            </div>

            <ul className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                  <span className="h-1.5 w-1.5 shrink-0 bg-[var(--rust)]" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-0">
            <div
              className="relative h-[min(52vh,420px)] w-full lg:absolute lg:inset-0 lg:h-full lg:min-h-[calc(100svh-4.75rem)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <Image
                src={IMAGES.hero}
                alt={IMAGES.heroAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#ebe4d7] via-[#ebe4d7]/25 to-transparent lg:from-25%"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent lg:hidden" aria-hidden />
            </div>
            {/* Floating polaroid-style stack — desktop only */}
            <div className="pointer-events-none absolute -bottom-8 left-4 z-20 hidden w-44 rotate-[-4deg] border-[10px] border-white bg-white shadow-2xl lg:block xl:left-10 xl:w-52">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={IMAGES.trustStrip}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
              <p className="px-2 py-2 font-mono text-[9px] uppercase tracking-widest text-stone-500">People first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
