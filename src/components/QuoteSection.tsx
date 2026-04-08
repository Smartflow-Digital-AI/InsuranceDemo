"use client";

import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND } from "@/lib/site-data";

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="relative overflow-hidden bg-[var(--void)] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(91,33,182,0.35),transparent)]" />

      <div className="relative mx-auto max-w-lg px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--volt)]">Start here</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight text-white sm:text-6xl">GET A QUOTE</h2>
            <p className="mt-4 text-sm text-white/65">
              Tell us what you need — we&apos;ll reply with options. No pressure. {BRAND.wordmark} has your back.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mt-10 rounded-3xl bg-[var(--surface-card)] p-8 shadow-2xl shadow-black/40 sm:p-10">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]">
                  <Icon name="check" size={28} color="#fff" />
                </div>
                <h3 className="mt-6 font-display text-3xl tracking-tight text-[var(--void)]">YOU&apos;RE IN</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">Full name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Name"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 text-[var(--void)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                  />
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">Phone</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+27"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 text-[var(--void)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Email"
                      className="mt-2 w-full rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 text-[var(--void)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">Insurance type</span>
                  <select
                    required
                    name="type"
                    className="mt-2 w-full appearance-none rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 text-[var(--void)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="home">Home Insurance</option>
                    <option value="motor">Motor Insurance</option>
                    <option value="travel">Travel &amp; Valuables</option>
                    <option value="farming">Farming Insurance</option>
                    <option value="accident">Personal Accident Cover</option>
                    <option value="flood">Flood Cover</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--void)] py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[var(--accent)]"
                >
                  Submit
                  <Icon name="arrow" size={18} color="#fff" />
                </button>
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
