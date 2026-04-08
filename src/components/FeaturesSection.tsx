import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { FEATURES } from "@/lib/site-data";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-[var(--surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">The app-grade promise</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-[var(--void)] sm:text-6xl">
            WHAT YOU
            <br />
            <span className="text-[var(--muted)]">GET WITH US</span>
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.text} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl bg-[var(--surface-card)] p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(91,33,182,0.2)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                  <Icon name={f.icon} size={26} color="#5b21b6" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-[var(--void)]">{f.text.toUpperCase()}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">{f.blurb}</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)]" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
