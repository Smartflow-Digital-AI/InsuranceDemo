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
    <footer className="border-t border-stone-800/20 bg-[#1a1814] py-14 text-[var(--cream)]/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--cream)]/25 bg-stone-900">
            <Icon name="shield" size={18} color="#f7f4ec" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--cream)]">{BRAND.tradingName}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--cream)]/45">
              {BRAND.legalName}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-[var(--cream)]/60 transition hover:text-[var(--cream)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm lg:text-right">
          <p className="text-[var(--cream)]/50">
            &copy; {new Date().getFullYear()} {BRAND.legalName}
          </p>
          <p className="text-xs text-[var(--cream)]/40">
            Photography from{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--cream)]/30 underline-offset-2 hover:text-[var(--cream)]"
            >
              Unsplash
            </a>{" "}
            — thank you to contributing photographers.
          </p>
        </div>
      </div>
    </footer>
  );
}
