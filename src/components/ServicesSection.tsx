import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { SERVICES } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <AnimateIn>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Shop cover</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-[var(--void)] sm:text-6xl md:text-7xl">
                YOUR
                <br />
                LINES
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--muted)] lg:pb-2 lg:text-right">
              Home, motor, travel &amp; valuables, farming, personal accident, flood — same roster you asked for, presented
              like a premium brand catalogue.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.04}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--void)] sm:aspect-[4/5]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Icon name={s.icon} size={20} color="#fff" />
                  </div>
                  <h3 className="max-w-[95%] font-display text-3xl leading-[0.95] tracking-tight text-white sm:text-4xl">
                    {s.title.toUpperCase()}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75">{s.desc}</p>
                  <a
                    href="#quote"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:text-[var(--volt)]"
                  >
                    Get quote
                    <Icon name="arrow" size={14} color="currentColor" />
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
