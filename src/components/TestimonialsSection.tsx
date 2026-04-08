import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { TESTIMONIALS } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-y border-black/5 bg-[var(--surface-card)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">Reviews</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-[var(--void)] sm:text-6xl">IN THEIR WORDS</h2>
        </AnimateIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-[var(--surface)] p-8 ring-1 ring-black/[0.06]">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Icon key={j} name="star" size={16} color="#5b21b6" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-[var(--void)]/85">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-8 border-t border-black/5 pt-6">
                  <cite className="not-italic font-display text-xl tracking-tight text-[var(--void)]">{t.name}</cite>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">{t.role}</p>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
