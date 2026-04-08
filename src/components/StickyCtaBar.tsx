"use client";

import { Icon } from "./Icon";
import { whatsappHref } from "@/lib/site-data";

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[85] border-t-2 border-stone-900 bg-[#ebe4d7]/95 px-3 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center border-2 border-stone-900 bg-stone-900 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--cream)]"
        >
          Quote
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-xs font-bold uppercase tracking-wider text-white"
        >
          <Icon name="whatsapp" size={18} color="#fff" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
