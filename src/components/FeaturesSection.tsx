import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { FEATURES, IMAGES } from "@/lib/site-data";

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.featuresBg}
          alt={IMAGES.featuresBgAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--olive)]/92" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.45em] text-[var(--cream)]/70">Chapter 02</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-[var(--cream)] sm:text-5xl">
            What you get with us
          </h2>
          <p className="mt-4 max-w-lg text-[var(--cream)]/80">Four promises — no buzzwords, no widget clutter.</p>
        </AnimateIn>

        <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.text} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-[var(--olive)]/40 p-8 backdrop-blur-[2px] transition hover:bg-[var(--olive)]/55">
                <Icon name={f.icon} size={28} color="#f7f4ec" />
                <h3 className="mt-6 font-display text-xl font-semibold capitalize text-[var(--cream)]">{f.text}</h3>
                <div className="mt-auto pt-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cream)]/50">
                    0{i + 1} / 04
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
