import Image from "next/image";
import type { CSSProperties } from "react";
import { heroContent, navItems, siteConfig, whatsappUrl } from "@/lib/site";

const desktopNavItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Sobre nosotros" },
  { href: "#disciplinas", label: "Programas" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" }
] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate h-[100svh] overflow-hidden bg-[#020813] text-white xl:min-h-[720px]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/tigre-azul/tigre-azul-fighter-mobile-clean.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="(max-width: 1023px) 100vw, 0px"
        className="translate-y-[0.55svh] scale-[1.02] object-cover object-center lg:hidden"
      />
      <Image
        src="/images/tigre-azul/tigre-azul-fighter-desktop-clean.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="(min-width: 1024px) 100vw, 0px"
          className="hidden object-cover object-top lg:block"
      />

      <div className="sr-only">
        <h1 id="hero-title">
          {heroContent.headline.lead.join(" ")}{" "}
          {heroContent.headline.accent.join(" ")}
        </h1>
        <p>{heroContent.body}</p>
        <p>{heroContent.disciplines}</p>
      </div>

      <div className="relative z-10 h-full lg:hidden">
        <header className="absolute left-[4.25%] top-[2.5%] flex items-center">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-[2vw] outline-none transition focus-visible:text-[#7fb0ff]"
          >
            <span className="relative h-[9.7vw] max-h-[44px] min-h-[34px] w-[9.7vw] max-w-[44px] min-w-[34px] shrink-0 overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/tigre-azul/tigre-azul-logo.png"
                alt="Logo Tigre Azul"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="tigre-mobile-logo-copy min-w-0 max-w-[calc(100vw-116px)]">
              <strong className="block whitespace-nowrap text-[clamp(17px,5.55vw,24px)] font-black uppercase leading-none tracking-normal text-white">
                {siteConfig.name}
              </strong>
              <span className="mt-[0.6vw] block whitespace-nowrap text-[clamp(6.8px,2.25vw,10px)] font-bold uppercase tracking-[0.14em] text-white/76">
                {siteConfig.tagline}
              </span>
            </span>
          </a>
        </header>

        <div className="tigre-rise-in absolute left-[4.25%] top-[29.5%] w-[76%] max-[359px]:top-[28.7%]">
          <div className="mb-[1.9svh] flex items-center gap-[2.2vw] whitespace-nowrap text-[clamp(8px,min(2.45vw,1.55svh),14px)] font-bold uppercase tracking-[0.16em] text-[#75a9ff]">
            <span className="h-[2px] w-[3.9vw] bg-[#0b65ff] shadow-[0_0_16px_rgba(11,101,255,0.95)]" />
            <span>{heroContent.eyebrow}</span>
          </div>
          <h1 className="tigre-mobile-headline font-black tracking-normal text-white">
            <span className="block">{heroContent.headline.lead[0]}</span>
            <span className="tigre-mobile-headline-line2 block whitespace-nowrap">
              {heroContent.headline.lead[1]}{" "}
              <span className="text-[#0b54d8]">
                {heroContent.headline.accent[0]}
              </span>
            </span>
          </h1>
          <p className="mt-[1.15svh] text-[clamp(10px,min(3.1vw,1.9svh),18px)] leading-[1.35] text-white/70">
            {heroContent.body}
          </p>
        </div>

        <a
          href={whatsappUrl}
          aria-label="Reserva tu clase por WhatsApp"
          className="tigre-cta-button tigre-cta-glow tigre-mobile-cta absolute left-[4.25%] top-[55.25%] inline-flex h-[5.35%] min-h-[36px] w-[39.1%] min-w-[140px] items-center justify-center whitespace-nowrap rounded-[8px] px-3 font-black uppercase tracking-[0.16em] text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#8bb8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020813] max-[359px]:top-[56.25%]"
        >
          {heroContent.primaryCta.mobileLabel}
        </a>
      </div>

      <div className="relative z-10 hidden h-full flex-col px-[clamp(30px,2.05vw,40px)] py-[clamp(24px,3.2vh,34px)] lg:flex">
        <header className="tigre-rise-in flex items-start justify-between gap-8">
          <a
            href="#inicio"
            className="flex min-w-[clamp(300px,23vw,430px)] items-center gap-[clamp(12px,0.95vw,18px)] outline-none transition focus-visible:text-[#0b65ff]"
          >
            <span className="relative h-[clamp(66px,4.9vw,94px)] w-[clamp(66px,4.9vw,94px)] shrink-0 overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-[0_16px_46px_rgba(0,0,0,0.42)]">
              <Image
                src="/images/tigre-azul/tigre-azul-logo.png"
                alt="Logo Tigre Azul"
                fill
                priority
                sizes="94px"
                className="object-cover"
              />
            </span>
            <span>
              <strong className="block text-[clamp(27px,2.03vw,39px)] font-black uppercase leading-none tracking-normal text-white">
                {siteConfig.name}
              </strong>
              <span className="mt-[clamp(6px,0.5vw,10px)] block text-[clamp(11px,0.84vw,16px)] font-bold uppercase tracking-[0.34em] text-white/72">
                {siteConfig.tagline}
              </span>
            </span>
          </a>

          <div className="hidden min-w-0 items-start gap-[clamp(18px,2.2vw,44px)] pt-[clamp(9px,1.25vh,14px)] xl:flex">
            <nav
              aria-label="Navegación principal"
              className="flex items-start gap-[clamp(18px,2.1vw,42px)]"
            >
              {desktopNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="tigre-desktop-nav-link relative whitespace-nowrap pb-[5px] text-[12px] font-black uppercase tracking-[0.18em] text-white outline-none transition hover:text-[#2f8fff] focus-visible:text-[#2f8fff] xl:text-[13px]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={whatsappUrl}
              className="tigre-top-cta-button inline-flex h-[clamp(34px,4.46vh,48px)] w-[clamp(142px,10.4vw,198px)] items-center justify-center whitespace-nowrap rounded-[7px] px-4 text-[clamp(10px,0.72vw,13px)] font-black uppercase tracking-[0.14em] text-white outline-none transition hover:border-[#8bb8ff] focus-visible:ring-2 focus-visible:ring-[#8bb8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020813]"
            >
              Reserva tu clase
            </a>
          </div>
        </header>

        <div
          className="tigre-rise-in absolute left-[7.4%] top-[27.7%] max-w-[780px]"
          style={{ "--tigre-delay": "110ms" } as CSSProperties}
        >
          <div className="mb-[clamp(24px,3.4vh,37px)] flex items-center gap-[clamp(12px,0.95vw,18px)] text-[clamp(12px,0.84vw,15px)] font-bold uppercase tracking-[0.34em] text-[#2f8fff]">
            <span className="h-[2px] w-[clamp(32px,2.4vw,44px)] bg-[#0b65ff] shadow-[0_0_18px_rgba(11,101,255,0.95)]" />
            <span>{heroContent.eyebrow}</span>
          </div>
          <p className="tigre-desktop-headline text-[clamp(78px,6.45vw,124px)] font-black leading-[1.02] tracking-normal text-white">
            <span className="block">{heroContent.headline.lead[0]}</span>
            <span className="block whitespace-nowrap">
              {heroContent.headline.lead[1]}{" "}
              <span className="text-[#0b54d8]">
                {heroContent.headline.accent[0]}
              </span>
            </span>
          </p>
          <p className="mt-[clamp(22px,3vh,34px)] text-[clamp(18px,1.45vw,27px)] leading-relaxed text-white/68">
            {heroContent.body}
          </p>
          <a
            href={whatsappUrl}
            className="tigre-cta-button tigre-cta-glow mt-[clamp(44px,5.95vh,66px)] inline-flex h-[clamp(60px,7.85vh,86px)] w-[clamp(262px,19.3vw,370px)] items-center justify-center whitespace-nowrap rounded-[8px] px-8 text-[clamp(14px,1.08vw,20px)] font-black uppercase tracking-[0.22em] text-white outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8bb8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020813]"
          >
            {heroContent.primaryCta.desktopLabel}
          </a>
        </div>
      </div>

      <details className="pointer-events-none absolute inset-0 z-30 xl:hidden">
        <summary
          aria-label="Abrir menú"
          className="tigre-menu-summary pointer-events-auto absolute right-[5.2%] top-[2.9%] inline-flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[4px] text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#7fb0ff]"
        >
          <span className="sr-only">Abrir menú</span>
          <span className="h-[2px] w-[18px] rounded-full bg-current" />
          <span className="h-[2px] w-[18px] rounded-full bg-current" />
          <span className="h-[2px] w-[18px] rounded-full bg-current" />
        </summary>
        <nav
          id="mobile-navigation"
          aria-label="Menú de secciones"
          className="pointer-events-auto absolute left-[5.5%] right-[5.5%] top-[9%] max-h-[82svh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#020813]/[0.96] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-normal text-white/[0.9] outline-none transition hover:bg-white/10 hover:text-brand-yellow focus-visible:bg-white/10 focus-visible:text-brand-yellow min-[700px]:px-6 min-[700px]:py-5 min-[700px]:text-2xl"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>

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
