import { siteConfig, whatsappUrl } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="scroll-mt-[104px] border-t border-white/10 bg-brand-950 py-9 text-sm text-[var(--muted)] lg:scroll-mt-[150px]"
    >
      <Container className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <strong className="block text-base font-black text-white">
            {siteConfig.name}
          </strong>
          <span className="mt-2 block max-w-2xl leading-6 text-[#8ea4d1]">
            Chincha: {siteConfig.locations.chincha}. Pisco:{" "}
            {siteConfig.locations.piscoReference}.
          </span>
        </div>
        <a
          href={whatsappUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-brand-850 shadow-[0_16px_38px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,0,0.34)] focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-950"
        >
          Reserva tu clase
        </a>
      </Container>
    </footer>
  );
}
