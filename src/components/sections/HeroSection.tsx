"use client";

import Image from "next/image";
import { useState } from "react";
import { heroContent, navItems, whatsappUrl } from "@/lib/site";

const desktopNavHotspots = [
  { href: "#inicio", label: "Inicio", left: "3.2%", width: "4.9%" },
  { href: "#quienes-somos", label: "Quiénes somos", left: "9.6%", width: "9.3%" },
  { href: "#disciplinas", label: "Disciplinas", left: "19.0%", width: "8.3%" },
  { href: "#profesores", label: "Profesores", left: "27.2%", width: "7.9%" },
  { href: "#sedes", label: "Sedes", left: "35.2%", width: "5.0%" },
  { href: "#arbol-aprendizaje", label: "Árbol", left: "40.7%", width: "5.0%" },
  { href: "#equipo-competitivo", label: "Equipo", left: "46.4%", width: "5.2%" },
  { href: "#eventos-trayectoria", label: "Eventos", left: "52.1%", width: "6.0%" },
  { href: "#convenios", label: "Convenios", left: "59.5%", width: "7.4%" },
  { href: "#salon-fama", label: "Fama", left: "67.4%", width: "4.7%" },
  { href: "#galeria", label: "Galería", left: "73.6%", width: "5.4%" },
  { href: "#blog", label: "Blog", left: "80.6%", width: "4.3%" },
  { href: "#faq", label: "FAQ", left: "87.0%", width: "3.4%" },
  { href: "#contacto", label: "Contacto", left: "92.6%", width: "6.0%" }
] as const;

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-[#020813] text-white max-lg:min-h-[720px]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/tigre-azul/tigre-azul-final-mobile.png"
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 0px"
        className="object-fill lg:hidden"
      />
      <Image
        src="/images/tigre-azul/tigre-azul-final-desktop.png"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-fill lg:block"
      />

      <div className="sr-only">
        <h1 id="hero-title">
          {heroContent.headline.lead.join(" ")}{" "}
          {heroContent.headline.accent.join(" ")}
        </h1>
        <p>{heroContent.body}</p>
        <p>{heroContent.disciplines}</p>
      </div>

      <div aria-label="Navegación principal" className="hidden lg:block">
        {desktopNavHotspots.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className="absolute top-[9.7%] z-20 h-[4.7%] rounded-sm outline-none transition focus-visible:bg-brand-yellow/25 focus-visible:ring-2 focus-visible:ring-brand-yellow"
            style={{ left: item.left, width: item.width }}
          />
        ))}
      </div>

      <a
        href={whatsappUrl}
        aria-label="Reserva tu clase por WhatsApp"
        className="absolute z-20 rounded-[18px] outline-none transition focus-visible:bg-brand-yellow/25 focus-visible:ring-2 focus-visible:ring-brand-yellow lg:left-[11.1%] lg:top-[74.1%] lg:h-[6.1%] lg:w-[12.6%] max-lg:left-[6.25%] max-lg:top-[44.9%] max-lg:h-[5.25%] max-lg:w-[45.8%]"
      />

      <a
        href={heroContent.videoCta.href}
        aria-label={heroContent.videoCta.label}
        className="absolute z-20 rounded-[18px] outline-none transition focus-visible:bg-[#0084ff]/20 focus-visible:ring-2 focus-visible:ring-[#0084ff] lg:left-[24.8%] lg:top-[74.1%] lg:h-[6.1%] lg:w-[11.5%] max-lg:left-[6.3%] max-lg:top-[52.15%] max-lg:h-[4.6%] max-lg:w-[33.0%]"
      />

      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsMenuOpen((current) => !current)}
        className="absolute right-[5.6%] top-[3.4%] z-20 h-[4.9%] w-[7.0%] rounded-[18px] outline-none transition focus-visible:bg-white/15 focus-visible:ring-2 focus-visible:ring-brand-yellow lg:hidden"
      />

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Menú de secciones"
          className="absolute left-[5.5%] right-[5.5%] top-[9%] z-30 max-h-[82svh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#020813]/[0.96] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-normal text-white/[0.9] outline-none transition hover:bg-white/10 hover:text-brand-yellow focus-visible:bg-white/10 focus-visible:text-brand-yellow min-[700px]:px-6 min-[700px]:py-5 min-[700px]:text-2xl"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}

      <div className="sr-only">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
