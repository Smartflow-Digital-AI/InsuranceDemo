import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Icon } from "./Icon";
import { IMAGES, TRUST_POINTS } from "@/lib/site-data";

export function TrustSection() {
  return (
    <section id="why-us" className="bg-[var(--void)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <AnimateIn className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--volt)]">Why us</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              TRUST
              <br />
              <span className="text-white/40">BUILT IN</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              Why hand us your insurance? Four reasons — straight talk, fast help when you claim, and cover that actually
              fits.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl sm:max-w-md">
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
              <AnimateIn key={item.title} delay={i * 0.06}>
                <article className="group border-t border-white/10 py-10 first:border-t-0 first:pt-0 lg:pt-2">
                  <div className="flex gap-6 sm:gap-10">
                    <span className="font-display text-5xl leading-none text-white/15 transition group-hover:text-[var(--volt)] sm:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Icon name={item.icon} size={24} color="#fff" />
                      </div>
                      <h3 className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">{item.title.toUpperCase()}</h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60">{item.desc}</p>
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
