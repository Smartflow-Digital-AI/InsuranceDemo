"use client";

import { Icon } from "./Icon";
import { whatsappHref } from "@/lib/site-data";

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[85] border-t border-white/10 bg-[var(--void)]/95 px-4 py-3 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center rounded-full bg-white py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--void)]"
        >
          Quote
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-xs font-bold uppercase tracking-wider text-white"
        >
          <Icon name="whatsapp" size={18} color="#fff" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
