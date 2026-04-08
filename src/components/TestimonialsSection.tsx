import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { TESTIMONIALS } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-stone-800/10 bg-[var(--paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--rust)]">Voices</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-stone-900 sm:text-5xl">Field notes</h2>
            <p className="mt-3 text-stone-600">Real feedback — edited only for length.</p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <blockquote className="relative h-full border-l-4 border-[var(--rust)] pl-6">
                <span
                  className="pointer-events-none absolute -left-1 -top-2 font-display text-7xl leading-none text-stone-200"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Icon key={j} name="star" size={14} color="#c2410c" />
                  ))}
                </div>
                <p className="relative z-10 mt-4 text-base leading-relaxed text-stone-700">{t.text}</p>
                <footer className="mt-8 border-t border-stone-800/10 pt-6">
                  <cite className="not-italic font-display text-lg font-semibold text-stone-900">{t.name}</cite>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-stone-500">{t.role}</p>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
