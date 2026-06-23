"use client";

import { useState } from "react";
import { AfcBrandMark } from "@/components/afc/AfcBrandMark";
import { afcNavItems } from "@/lib/afc";

export function AfcHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#030406]/[0.90] text-white shadow-[0_18px_55px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="mx-auto flex h-[70px] w-[min(1540px,calc(100%-32px))] items-center justify-between gap-5 md:h-[78px]">
        <a
          href="#inicio"
          className="group flex min-w-[76px] items-center gap-3 outline-none"
          aria-label="AFC Peru inicio"
        >
          <AfcBrandMark />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-xl font-black uppercase tracking-normal text-afc-red transition group-hover:text-[#ff3a45] group-focus-visible:text-[#ff3a45]">
              AFC
            </span>
            <span className="-mt-0.5 text-[0.64rem] font-black uppercase tracking-[0.32em] text-white">
              Perú
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegacion principal AFC"
          className="hidden items-center justify-center gap-7 lg:flex xl:gap-9"
        >
          {afcNavItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative px-1 py-7 text-sm font-black uppercase tracking-[0.04em] text-white/[0.88] outline-none transition hover:text-afc-red focus-visible:text-afc-red ${
                index === 0 ? "text-white" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-1 bottom-4 h-0.5 origin-left bg-afc-red transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                  index === 0 ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-controls="afc-mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-white/[0.15] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/[0.86] transition hover:border-afc-red hover:text-white focus:outline-none focus:ring-2 focus:ring-afc-red lg:hidden"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <nav
          id="afc-mobile-menu"
          aria-label="Menu movil AFC"
          className="border-t border-white/10 bg-[#08090d]/[0.98] px-4 py-4 shadow-2xl lg:hidden"
        >
          <div className="mx-auto grid w-[min(520px,100%)] gap-1">
            {afcNavItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:bg-white/[0.08] focus-visible:text-white ${
                  index === 0 ? "text-afc-red" : "text-white/[0.84]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
