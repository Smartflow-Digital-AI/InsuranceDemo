import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND, CONTACT } from "@/lib/site-data";

const cards = [
  {
    icon: "phone" as const,
    title: "Call",
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
    title: "Visit",
    lines: CONTACT.addressLines,
    href: CONTACT.mapLink,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--accent)] via-[var(--accent-bright)] to-[#4c1d95] px-8 py-14 text-center sm:px-12 sm:py-16">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Contact</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight text-white sm:text-6xl">LET&apos;S TALK</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
              {BRAND.wordmark} — here when you need us.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => (
            <AnimateIn key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.icon === "location" ? "_blank" : undefined}
                rel={c.icon === "location" ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col rounded-2xl bg-[var(--surface-card)] p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.05] transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(91,33,182,0.15)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                  <Icon name={c.icon} size={22} color="#5b21b6" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-[var(--void)]">{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className="mt-2 text-sm text-[var(--muted)]">
                    {line}
                  </p>
                ))}
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-black/10">
            <div className="aspect-[21/9] min-h-[220px] w-full sm:aspect-[2.5/1] sm:min-h-[260px]">
              <iframe
                title={`${BRAND.tradingName} office location`}
                src={CONTACT.mapEmbedUrl}
                className="h-full w-full border-0 grayscale contrast-[1.02]"
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
