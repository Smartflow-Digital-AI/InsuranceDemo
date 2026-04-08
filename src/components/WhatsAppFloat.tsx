"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { whatsappHref } from "@/lib/site-data";

export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-24 right-4 z-[95] flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3.5 pl-3.5 shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-[1.03] animate-pulse-soft md:bottom-8 md:right-8 sm:pl-4"
      style={{
        paddingRight: hover ? "1.25rem" : "0.875rem",
        gap: hover ? "0.5rem" : 0,
      }}
      aria-label="Chat on WhatsApp"
    >
      <Icon name="whatsapp" size={26} color="#fff" />
      <span
        className="whitespace-nowrap text-sm font-bold text-white transition-all duration-300"
        style={{
          maxWidth: hover ? 200 : 0,
          opacity: hover ? 1 : 0,
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
