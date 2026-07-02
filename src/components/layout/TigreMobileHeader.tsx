"use client";

import Image from "next/image";
import { useRef, type SVGProps } from "react";
import { navItems, siteConfig } from "@/lib/site";

export function TigreMobileHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <header className="tigre-mobile-fixed-header fixed inset-x-0 top-0 z-50 bg-transparent px-[6.45vw] pb-[3.1vw] pt-[calc(env(safe-area-inset-top)+2.75vw)] text-white lg:hidden">
      <div className="relative z-10 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-[2.7vw] outline-none transition focus-visible:text-[#7fb0ff]"
        >
          <span className="relative h-[clamp(32px,8.95vw,78px)] w-[clamp(32px,8.95vw,78px)] shrink-0 overflow-hidden rounded-full border border-white/85 bg-white shadow-[0_16px_42px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/tigre-azul/tigre-azul-logo.png"
              alt="Logo Tigre Azul"
              fill
              priority
              sizes="78px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <strong className="block whitespace-nowrap text-[clamp(15px,4.05vw,36px)] font-black uppercase leading-none tracking-normal text-white">
              {siteConfig.name}
            </strong>
            <span className="mt-[0.9vw] block whitespace-nowrap text-[clamp(6px,1.65vw,15px)] font-bold uppercase tracking-[0.29em] text-white/82">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <details ref={menuRef} className="relative">
          <summary
            aria-label="Abrir menú"
            className="tigre-menu-summary inline-flex h-[clamp(30px,7.2vw,62px)] w-[clamp(30px,7.2vw,62px)] cursor-pointer flex-col items-center justify-center gap-[clamp(3px,0.72vw,7px)] text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#7fb0ff]"
          >
            <span className="sr-only">Abrir menú</span>
            <span className="h-[clamp(2px,0.42vw,4px)] w-[clamp(20px,5.2vw,45px)] rounded-full bg-current" />
            <span className="h-[clamp(2px,0.42vw,4px)] w-[clamp(20px,5.2vw,45px)] rounded-full bg-current" />
            <span className="h-[clamp(2px,0.42vw,4px)] w-[clamp(20px,5.2vw,45px)] rounded-full bg-current" />
          </summary>
          <nav
            aria-label="Menú de secciones"
            className="absolute right-0 top-[calc(100%+14px)] z-30 max-h-[calc(100svh-92px)] w-[min(78vw,340px)] overflow-y-auto rounded-[20px] border border-white/15 bg-[#020813]/[0.96] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          >
            {navItems.map((item) =>
              "subItems" in item ? (
                <details key={item.href} className="group">
                  <summary className="tigre-menu-summary flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-normal text-white/[0.9] outline-none transition hover:bg-white/10 hover:text-[#0b7cff] focus-visible:bg-white/10 focus-visible:text-[#0b7cff]">
                    <span>{item.shortLabel}</span>
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-[#0b7cff] transition group-open:rotate-180" />
                  </summary>
                  <div className="mb-1 ml-4 mt-1 space-y-1 border-l border-[#0b7cff]/45 pl-3">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[12px] font-black uppercase tracking-normal text-white/80 outline-none transition hover:bg-[#0b7cff]/12 hover:text-[#0b7cff] focus-visible:bg-[#0b7cff]/12 focus-visible:text-[#0b7cff]"
                      >
                        <span>{subItem.label}</span>
                        {"principal" in subItem && subItem.principal ? (
                          <span className="rounded-full border border-[#0b7cff]/45 px-2 py-0.5 text-[9px] tracking-normal text-[#7fb0ff]">
                            Principal
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-normal text-white/[0.9] outline-none transition hover:bg-white/10 hover:text-[#0b7cff] focus-visible:bg-white/10 focus-visible:text-[#0b7cff]"
                >
                  {item.shortLabel}
                </a>
              )
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}
