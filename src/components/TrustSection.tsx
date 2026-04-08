import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { BRAND, IMAGES, TRUST_POINTS } from "@/lib/site-data";

export function TrustSection() {
  return (
    <section id="why-us" className="relative border-t border-stone-800/10 bg-[var(--cream)] py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimateIn className="lg:col-span-5">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--rust)]">Chapter 01</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-stone-900 sm:text-5xl">
              Why trust {BRAND.wordmark}
              <span className="block text-2xl font-normal italic text-stone-500 sm:text-3xl">with your insurance?</span>
            </h2>
            <div className="relative mt-10 aspect-[4/3] max-w-md overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={IMAGES.trustStrip}
                alt={IMAGES.trustAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </AnimateIn>

          <div className="space-y-0 lg:col-span-7">
            {TRUST_POINTS.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.07}>
                <article className="group border-t border-stone-800/15 py-10 first:border-t-0 first:pt-0 lg:first:pt-2">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-stone-900 bg-[var(--paper)] transition group-hover:border-[var(--rust)] group-hover:bg-[var(--cream)]">
                      <Icon name={item.icon} size={26} color="#1c1917" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold text-stone-900 sm:text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
