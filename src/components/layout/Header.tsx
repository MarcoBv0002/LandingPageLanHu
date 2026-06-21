import Image from "next/image";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 border-b border-white/10 bg-gradient-to-b from-brand-950/85 to-brand-950/15">
      <Container className="flex h-[78px] items-center justify-between gap-5 md:h-[92px]">
        <a href="#inicio" className="flex min-w-0 items-center gap-3 md:gap-4">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/70 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:h-[58px] md:w-[58px]">
            <Image
              src="/images/tigre-azul/tigre-azul-logo.png"
              alt="Logo Tigre Azul"
              fill
              priority
              sizes="58px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <strong className="block text-lg font-black leading-none tracking-[0.02em] md:text-[21px]">
              {siteConfig.name}
            </strong>
            <span className="mt-1 hidden text-[11px] font-black uppercase tracking-[0.17em] text-white/70 sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-7 text-sm font-black text-white/90 lg:flex"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap"
            >
              {item.label}
              <span
                className={`absolute -bottom-[9px] left-0 h-[3px] rounded-full bg-brand-yellow transition-all group-hover:right-0 ${
                  index === 0 ? "right-1/2" : "right-full"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={whatsappUrl}
            variant="white"
            showDot
            className="hidden sm:inline-flex"
            aria-label="Reserva tu clase por WhatsApp"
          >
            Reserva tu clase
          </ButtonLink>
          <span className="inline-flex rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm font-black backdrop-blur md:hidden">
            Menú
          </span>
        </div>
      </Container>
    </header>
  );
}
