import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { CONTACT, whatsappHref } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="border-y-4 border-stone-900 bg-[var(--rust)] py-16 sm:py-20">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to protect what matters?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Free, no-obligation quote — or message us on WhatsApp if that&apos;s easier.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex min-w-[160px] items-center justify-center border-2 border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[var(--rust)] transition hover:bg-transparent hover:text-white"
            >
              Get a quote
            </a>
            <a
              href={CONTACT.tel}
              className="inline-flex min-w-[160px] items-center justify-center gap-2 border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[var(--rust)]"
            >
              <Icon name="phone" size={18} color="currentColor" />
              Call
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[160px] items-center justify-center gap-2 border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white"
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
