import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND, CONTACT } from "@/lib/site-data";

const cards = [
  {
    icon: "phone" as const,
    title: "Call us",
    lines: CONTACT.phones,
    href: CONTACT.tel,
  },
  {
    icon: "mail" as const,
    title: "Email",
    lines: CONTACT.emails,
    href: CONTACT.mailto,
  },
  {
    icon: "location" as const,
    title: "Visit us",
    lines: CONTACT.addressLines,
    href: CONTACT.mapLink,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-stone-800/10 bg-stone-900 py-20 text-[var(--cream)] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--cream)]/50">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Let&apos;s talk</h2>
            <p className="mt-4 text-[var(--cream)]/75">Call, email, or visit — {BRAND.wordmark} is here to help.</p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <AnimateIn key={c.title} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.icon === "location" ? "_blank" : undefined}
                rel={c.icon === "location" ? "noopener noreferrer" : undefined}
                className="block h-full border border-[var(--cream)]/15 bg-stone-800/40 p-8 transition hover:border-[var(--rust)] hover:bg-stone-800/60"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-[var(--cream)]/25">
                  <Icon name={c.icon} size={22} color="#f7f4ec" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className="mt-2 text-sm text-[var(--cream)]/65">
                    {line}
                  </p>
                ))}
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.18}>
          <div className="mt-12 overflow-hidden border border-[var(--cream)]/15">
            <div className="aspect-[21/9] min-h-[220px] w-full sm:aspect-[2.5/1] sm:min-h-[260px]">
              <iframe
                title={`${BRAND.tradingName} office location`}
                src={CONTACT.mapEmbedUrl}
                className="h-full w-full border-0 opacity-90 contrast-[1.05] grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
