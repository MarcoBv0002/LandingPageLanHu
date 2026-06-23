"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-40 border-b border-white/10 bg-gradient-to-b from-[#020813]/95 via-[#020813]/[0.72] to-[#020813]/[0.12]">
      <Container className="header-shell flex h-[96px] items-center justify-between gap-5 min-[700px]:h-[164px] lg:h-[92px]">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 outline-none transition focus-visible:text-brand-yellow lg:gap-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/75 bg-white shadow-[0_16px_42px_rgba(0,0,0,0.35)] min-[700px]:h-[100px] min-[700px]:w-[100px] lg:h-[58px] lg:w-[58px] xl:h-16 xl:w-16">
            <Image
              src="/images/tigre-azul/tigre-azul-logo.png"
              alt="Logo Tigre Azul"
              fill
              priority
              sizes="(min-width: 1280px) 64px, (min-width: 1024px) 58px, 64px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <strong className="block text-[26px] font-black leading-none tracking-normal min-[700px]:text-[44px] lg:text-[24px] xl:text-[28px]">
              {siteConfig.name}
            </strong>
            <span className="mt-2 block text-[11px] font-black uppercase tracking-normal text-white/[0.72] sm:text-[12px] min-[700px]:text-[20px] lg:text-[12px] xl:text-[13px]">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/15 bg-white/[0.08] text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur transition hover:border-brand-yellow/60 hover:bg-white/[0.14] focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-950 min-[700px]:h-16 min-[700px]:w-16 min-[700px]:gap-2 min-[700px]:rounded-[24px] lg:hidden"
        >
          <span className="h-1 w-7 rounded-full bg-current min-[700px]:h-1.5 min-[700px]:w-12" />
          <span className="h-1 w-7 rounded-full bg-current min-[700px]:h-1.5 min-[700px]:w-12" />
          <span className="h-1 w-7 rounded-full bg-current min-[700px]:h-1.5 min-[700px]:w-12" />
        </button>
      </Container>

      <div className="hidden border-t border-white/10 bg-[#061f59]/[0.42] shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md lg:block">
        <Container className="header-shell">
          <nav
            aria-label="Secciones"
            className="nav-scrollbar flex gap-8 overflow-x-auto py-4 text-[12px] font-black uppercase tracking-normal text-white/[0.78] xl:justify-between xl:gap-6 2xl:text-[13px]"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative shrink-0 whitespace-nowrap rounded-sm pb-2 outline-none transition duration-200 hover:text-brand-yellow focus-visible:text-brand-yellow ${
                  item.href === "#inicio" ? "text-brand-yellow" : ""
                }`}
              >
                {item.shortLabel}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-brand-yellow transition-all group-hover:right-0 ${
                    item.href === "#inicio" ? "right-1/2" : "right-full"
                  }`}
                />
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Menú de secciones"
          className="absolute left-3 right-3 top-[104px] z-50 max-h-[calc(100svh-122px)] overflow-y-auto rounded-[22px] border border-white/15 bg-[#020813]/[0.96] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl min-[700px]:top-[174px] min-[700px]:max-h-[calc(100svh-192px)] lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-normal text-white/[0.88] outline-none transition hover:bg-white/10 hover:text-brand-yellow focus-visible:bg-white/10 focus-visible:text-brand-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
