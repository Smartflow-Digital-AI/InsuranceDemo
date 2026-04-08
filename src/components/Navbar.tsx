"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { BRAND, whatsappHref } from "@/lib/site-data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "What you get", href: "#features" },
  { label: "Stories", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300 ${
          scrolled
            ? "border-stone-800/10 bg-[#ebe4d7]/95 py-2.5 shadow-sm backdrop-blur-md"
            : "border-transparent bg-[#ebe4d7]/80 py-3.5 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
              {BRAND.wordmark}
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.35em] text-stone-500 sm:inline">
              advisory
            </span>
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-semibold uppercase tracking-wider text-stone-600 transition hover:text-[var(--rust)]"
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
              className="inline-flex items-center gap-2 border-b-2 border-transparent pb-0.5 text-sm font-bold text-stone-800 transition hover:border-[var(--rust)]"
            >
              <Icon name="whatsapp" size={18} color="#128C7E" />
              WhatsApp
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-stone-900 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--cream)] transition hover:bg-[var(--rust)]"
            >
              Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center border border-stone-800/15 bg-[var(--cream)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} size={22} color="#1c1917" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[99] bg-[#ebe4d7] pt-[4.5rem] lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone-800/10 py-4 font-display text-2xl text-stone-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 border-2 border-stone-900 py-4 text-sm font-bold uppercase tracking-wider"
            >
              <Icon name="whatsapp" size={22} color="#128C7E" />
              WhatsApp
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[var(--rust)] py-4 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
