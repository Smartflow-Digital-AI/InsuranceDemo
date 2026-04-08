import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { SERVICES } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-stone-800/10 bg-[var(--paper)] py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-24 hidden h-96 w-96 border border-stone-800/5 lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex max-w-3xl flex-col gap-4 lg:max-w-none lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--rust)]">What we place</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Cover, line by line
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-stone-600 lg:text-right">
              Same six lines you asked for — home, motor, travel & valuables, farming, personal accident, flood — each with
              a real photograph, not a stock icon grid.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 space-y-16 sm:space-y-20">
          {SERVICES.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.05}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-4 border-white shadow-lg sm:aspect-[5/3]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-6 pt-20">
                    <div className="flex items-center gap-3 text-white">
                      <Icon name={s.icon} size={22} color="#fff" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">Line {i + 1}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">{s.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-stone-600">{s.desc}</p>
                  <a
                    href="#quote"
                    className="mt-8 inline-flex items-center gap-2 border-b-2 border-[var(--rust)] pb-1 text-sm font-bold uppercase tracking-wider text-stone-900 transition hover:text-[var(--rust)]"
                  >
                    Get quote
                    <Icon name="arrow" size={16} color="#1c1917" />
                  </a>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
