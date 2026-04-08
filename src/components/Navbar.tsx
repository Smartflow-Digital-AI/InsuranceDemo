"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { BRAND, whatsappHref } from "@/lib/site-data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Benefits", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [onDarkHero, setOnDarkHero] = useState(true);

  useEffect(() => {
    const update = () => {
      const vh = typeof window !== "undefined" ? window.innerHeight : 800;
      setOnDarkHero(window.scrollY < vh - 96);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const dark = onDarkHero && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          dark
            ? "border-transparent bg-transparent py-5"
            : "border-b border-black/5 bg-[var(--surface-card)]/90 py-3 shadow-sm backdrop-blur-xl"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2">
            <span
              className={`font-display text-3xl tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[var(--void)]"}`}
            >
              {BRAND.wordmark.toUpperCase()}
            </span>
            <span
              className={`hidden text-[10px] font-semibold uppercase tracking-[0.25em] sm:block ${
                dark ? "text-white/60" : "text-[var(--muted)]"
              }`}
            >
              insurance
            </span>
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-semibold transition ${
                  dark ? "text-white/85 hover:text-white" : "text-[var(--void)] hover:text-[var(--accent)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold transition ${
                dark ? "text-white/90 hover:text-white" : "text-[var(--void)] hover:text-[var(--accent)]"
              }`}
            >
              WhatsApp
            </a>
            <a
              href="#quote"
              className={`rounded-full px-6 py-2.5 text-sm font-bold tracking-wide transition ${
                dark
                  ? "bg-white text-[var(--void)] hover:bg-[var(--volt)]"
                  : "bg-[var(--void)] text-white hover:bg-[var(--accent)]"
              }`}
            >
              Get a quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-current lg:hidden ${
              dark ? "bg-white/15 text-white" : "bg-black/5 text-[var(--void)]"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} size={22} color="currentColor" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[99] bg-[var(--void)] pt-20 lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 font-display text-4xl tracking-tight text-white"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full border border-white/30 py-4 text-center text-sm font-bold text-white"
            >
              WhatsApp
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-white py-4 text-center text-sm font-bold text-[var(--void)]"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
