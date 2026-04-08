"use client";

import { useState } from "react";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND } from "@/lib/site-data";

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="border-t border-stone-800/10 bg-[var(--cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-lg lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--rust)]">Request</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Get your quote from {BRAND.wordmark}
            </h2>
            <p className="mt-3 text-stone-600">Tell us what you need — we&apos;ll reply with options. No obligation.</p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <div className="mt-10 border-4 border-stone-900 bg-[var(--paper)] p-8 shadow-[8px_8px_0_0_rgba(28,25,23,0.12)] sm:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[var(--rust)]">
                  <Icon name="check" size={28} color="#fff" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-stone-900">Thank you</h3>
                <p className="mt-2 text-stone-600">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="mt-2 w-full border-2 border-stone-800/15 bg-[var(--cream)] px-4 py-3.5 text-stone-900 outline-none transition focus:border-[var(--rust)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Phone</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+27 …"
                      className="mt-2 w-full border-2 border-stone-800/15 bg-[var(--cream)] px-4 py-3.5 text-stone-900 outline-none transition focus:border-[var(--rust)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="mt-2 w-full border-2 border-stone-800/15 bg-[var(--cream)] px-4 py-3.5 text-stone-900 outline-none transition focus:border-[var(--rust)]"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Type of insurance</span>
                  <select
                    required
                    name="type"
                    className="mt-2 w-full appearance-none border-2 border-stone-800/15 bg-[var(--cream)] px-4 py-3.5 text-stone-900 outline-none transition focus:border-[var(--rust)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
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
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-stone-900 py-4 text-sm font-bold uppercase tracking-wider text-[var(--cream)] transition hover:bg-[var(--rust)]"
                >
                  Get My Quote
                  <Icon name="arrow" size={18} color="#f7f4ec" />
                </button>
              </form>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
