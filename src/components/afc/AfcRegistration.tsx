const contactEmail = "afcperu.ica@gmail.com";
const whatsappDisplay = "+51 923 007 839";
const whatsappHref = "https://wa.me/51923007839";

const paymentRows = [
  {
    id: "bcp",
    label: "Cuenta BCP Soles",
    value: "31500201658092",
    logo: "bcp"
  },
  {
    id: "cci",
    label: "Cuenta interbancaria",
    value: "00231510020165809205",
    logo: "interbank"
  },
  {
    id: "yape",
    label: "Yape",
    value: "923 007 839",
    logo: "yape"
  },
  {
    id: "plin",
    label: "Plin",
    value: "923 007 839",
    logo: "plin"
  }
] as const;

type PaymentLogo = (typeof paymentRows)[number]["logo"];

function EnvelopeIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.15"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5.4 18.5 4 22l3.7-1.2A8.7 8.7 0 1 0 3.6 13a8.6 8.6 0 0 0 1.8 5.5Z" />
      <path d="M9 8.8c.2-.5.4-.6.8-.6h.6c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c-.1.2-.1.4.1.6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.5.3.5.6 0 .5-.2 1.3-.8 1.7-.5.4-1.6.6-3.3-.1-2.8-1.1-5.1-3.4-6.1-6.1-.5-1.2-.1-1.8.2-2.1Z" />
    </svg>
  );
}

function ChevronIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.7"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function VoucherIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6Z" />
      <path d="M9 10h6M9 14h4" />
    </svg>
  );
}

function PaymentLogoMark({ logo }: { logo: PaymentLogo }) {
  if (logo === "bcp") {
    return (
      <span
        className="grid h-[86px] w-[86px] shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#0a58b1,#062d69)] shadow-[0_14px_30px_rgba(0,0,0,0.34)]"
        aria-label="BCP"
      >
        <span className="flex items-center text-[1.45rem] font-black italic tracking-[-0.06em] text-white">
          <span className="mr-1 text-[1.6rem] text-[#ff8b28]">›</span>
          BCP
          <span className="ml-1 text-[1.6rem] text-[#ff8b28]">›</span>
        </span>
      </span>
    );
  }

  if (logo === "interbank") {
    return (
      <span
        className="grid h-[86px] w-[86px] shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#08be5b,#0a8d43)] shadow-[0_14px_30px_rgba(0,0,0,0.34)]"
        aria-label="Interbank"
      >
        <span className="flex flex-col items-center gap-1 text-[0.8rem] font-black text-white">
          <span className="grid h-7 w-7 place-items-center border-[6px] border-[#1738c7]" />
          Interbank
        </span>
      </span>
    );
  }

  if (logo === "yape") {
    return (
      <span
        className="grid h-[86px] w-[86px] shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#b115aa,#6c117d)] shadow-[0_14px_30px_rgba(0,0,0,0.34)]"
        aria-label="Yape"
      >
        <span className="relative text-[1.55rem] font-black italic leading-none text-white">
          <span className="absolute -right-4 -top-5 grid h-7 w-7 place-items-center rounded-full bg-[#23d2c7] text-[0.65rem] font-black not-italic text-[#63328e]">
            S/
          </span>
          yape
        </span>
      </span>
    );
  }

  return (
    <span
      className="grid h-[86px] w-[86px] shrink-0 place-items-center rounded-lg"
      aria-label="Plin"
    >
      <span className="grid h-[74px] w-[78px] place-items-center rounded-[48%_52%_54%_46%/48%_47%_53%_52%] bg-[linear-gradient(135deg,#1ce2d5,#09aee2)] text-[1.6rem] font-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.34)]">
        plin
      </span>
    </span>
  );
}

function ContactCard({
  href,
  label,
  value,
  tone,
  icon
}: {
  href: string;
  label: string;
  value: string;
  tone: "red" | "green";
  icon: "mail" | "whatsapp";
}) {
  const isGreen = tone === "green";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="afc-tilt-card group grid min-h-[128px] grid-cols-[84px_1fr_auto] items-center gap-5 overflow-hidden rounded-xl border border-white/[0.15] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] px-5 text-white shadow-[0_22px_54px_rgba(0,0,0,0.24)] hover:border-white/28 focus:outline-none focus:ring-2 focus:ring-afc-red max-sm:min-h-[112px] max-sm:grid-cols-[64px_1fr_auto] max-sm:gap-3 max-sm:px-4"
    >
      <span
        className={`grid h-[78px] w-[78px] place-items-center rounded-full border transition max-sm:h-14 max-sm:w-14 ${
          isGreen
            ? "border-[#18c760] text-[#18c760] group-hover:bg-[#18c760]/10"
            : "border-afc-red text-afc-red group-hover:bg-afc-red/10"
        }`}
      >
        {icon === "mail" ? (
          <EnvelopeIcon className="h-9 w-9 max-sm:h-7 max-sm:w-7" />
        ) : (
          <WhatsAppIcon className="h-9 w-9 max-sm:h-7 max-sm:w-7" />
        )}
      </span>

      <span className="min-w-0">
        <span className="block text-[1rem] font-black uppercase tracking-[0.08em] text-white/56 max-sm:text-[0.78rem]">
          {label}
        </span>
        <span className="mt-2 block break-words text-[1.32rem] font-black uppercase tracking-[0.02em] text-white max-sm:text-base">
          {value}
        </span>
      </span>

      <ChevronIcon
        className={`h-8 w-8 transition group-hover:translate-x-1 max-sm:h-6 max-sm:w-6 ${
          isGreen ? "text-[#18c760]" : "text-afc-red"
        }`}
      />
    </a>
  );
}

function PaymentRow({ row }: { row: (typeof paymentRows)[number] }) {
  return (
    <article className="afc-row-lift grid min-h-[113px] grid-cols-[86px_1fr] items-center gap-8 rounded-xl border border-white/[0.14] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.014))] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] max-sm:min-h-[96px] max-sm:grid-cols-[68px_1fr] max-sm:gap-4 max-sm:px-3">
      <PaymentLogoMark logo={row.logo} />
      <div className="min-w-0">
        <p className="text-[0.94rem] font-black uppercase tracking-[0.08em] text-white/52 max-sm:text-[0.72rem]">
          {row.label}
        </p>
        <p className="mt-3 break-all text-[1.55rem] font-black tracking-[0.035em] text-white max-sm:mt-2 max-sm:text-lg">
          {row.value}
        </p>
      </div>
    </article>
  );
}

export function AfcRegistration() {
  return (
    <section
      id="inscripciones"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/5 bg-[#030407] px-5 py-16 text-white sm:px-8 md:py-20 lg:min-h-[920px] lg:px-12"
      aria-labelledby="inscripciones-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.04),transparent_22%),radial-gradient(circle_at_82%_45%,rgba(255,255,255,0.045),transparent_28%),linear-gradient(180deg,#05070b_0%,#030407_56%,#020305_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)]" />

      <div className="mx-auto grid w-[min(1548px,100%)] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
        <div className="afc-rise-in lg:pl-1">
          <p className="text-[0.9rem] font-black uppercase tracking-[0.28em] text-afc-red">
            Contacto oficial
          </p>
          <h2
            id="inscripciones-title"
            className="mt-7 text-[clamp(3.25rem,7.2vw,5.55rem)] font-black uppercase leading-[0.95] tracking-[0.015em] text-white [font-family:Arial,Helvetica,sans-serif] [text-shadow:0_2px_0_rgba(255,255,255,0.12),0_10px_24px_rgba(0,0,0,0.54)]"
          >
            Inscripciones
          </h2>
          <span className="mt-7 block h-[5px] w-[90px] bg-afc-red" />
          <div className="mt-9 max-w-[600px]">
            <p className="text-[1.05rem] font-black uppercase tracking-[0.08em] text-white">
              Requisitos para inscribirte
            </p>
            <ul className="mt-4 grid gap-3 text-[1.05rem] leading-7 text-white/78 max-sm:text-base">
              {[
                "Enviar nombres, apellidos y voucher de pago correspondiente.",
                "Tener su esquina.",
                "Tener cinturón o grado.",
                "Ser de nivel avanzado.",
                "Pertenecer a una escuela; no se aceptan independientes."
              ].map((requirement) => (
                <li
                  key={requirement}
                  className="grid grid-cols-[18px_1fr] gap-3"
                >
                  <span className="mt-[0.62rem] h-1.5 w-1.5 rounded-full bg-afc-red" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 grid max-w-[570px] gap-5">
            <ContactCard
              href={`mailto:${contactEmail}`}
              label="Correo oficial"
              value={contactEmail}
              tone="red"
              icon="mail"
            />
            <ContactCard
              href={whatsappHref}
              label="Whatsapp oficial"
              value={whatsappDisplay}
              tone="green"
              icon="whatsapp"
            />
          </div>
        </div>

        <div className="afc-panel-depth afc-rise-in rounded-2xl border border-white/[0.16] bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)_44%,rgba(255,255,255,0.035))] p-6 shadow-[0_34px_90px_rgba(0,0,0,0.36)] [--afc-delay:120ms] sm:p-8 lg:p-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.88rem] font-black uppercase tracking-[0.28em] text-afc-red">
                Para pagos
              </p>
              <h3 className="mt-5 text-[clamp(1.7rem,3vw,2.05rem)] font-black uppercase tracking-[-0.035em] text-white">
                Pagos e inscripciones
              </h3>
            </div>
            <span className="mt-1 rounded-full border border-white/[0.16] bg-black/24 px-7 py-3 text-[0.86rem] font-black uppercase text-white">
              Soles
            </span>
          </div>

          <div className="mt-8 grid gap-3">
            {paymentRows.map((row) => (
              <PaymentRow key={row.id} row={row} />
            ))}
          </div>

          <div className="mt-5 grid min-h-[92px] grid-cols-[58px_1fr] items-center gap-4 rounded-xl border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] px-5 py-4 max-sm:grid-cols-[48px_1fr] max-sm:px-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-afc-red text-afc-red">
              <VoucherIcon />
            </span>
            <p className="text-[1.02rem] leading-7 text-white/78">
              <span className="block font-black text-white">
                Envía el voucher al correo oficial
              </span>
              para validar tu inscripción.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
