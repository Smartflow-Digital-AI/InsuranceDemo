import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { CONTACT, whatsappHref } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--void)] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(91,33,182,0.25)_100%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <AnimateIn>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            READY
            <br />
            <span className="text-white/35">WHEN YOU ARE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-white/65">
            Free quote. One call. Or WhatsApp — your move.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex min-w-[168px] items-center justify-center rounded-full bg-[var(--volt)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[var(--void)] transition hover:bg-white"
            >
              Quote
            </a>
            <a
              href={CONTACT.tel}
              className="inline-flex min-w-[168px] items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10"
            >
              <Icon name="phone" size={18} color="#fff" />
              Call
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[168px] items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white"
            >
              <Icon name="whatsapp" size={20} color="#fff" />
              WhatsApp
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
