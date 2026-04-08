import { Icon } from "./Icon";
import { BRAND } from "@/lib/site-data";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Quote", href: "#quote" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--void)] py-16 text-white/70">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Icon name="shield" size={22} color="#fff" />
            </div>
            <div>
              <p className="font-display text-3xl tracking-tight text-white">{BRAND.wordmark.toUpperCase()}</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">{BRAND.legalName}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">{BRAND.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-4">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-white/55 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 lg:text-right">
          <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} {BRAND.legalName}</p>
          <p className="max-w-xs text-xs text-white/35 lg:ml-auto">
            Photos via{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/60"
            >
              Unsplash
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
