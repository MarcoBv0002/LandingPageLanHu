import { afcSite } from "@/lib/afc";

const registrationItems = [
  {
    title: "Inscripciones abiertas",
    body: "Inscribe atletas para las próximas fechas.",
    meta: "Cupos limitados",
    icon: "user"
  },
  {
    title: "Requisitos",
    body: "Revisa requisitos y documentación necesaria.",
    meta: "Reglamento AFC",
    icon: "clipboard"
  },
  {
    title: "Contacto",
    body: `${afcSite.contact.phone} · ${afcSite.contact.email}`,
    meta: afcSite.contact.address,
    icon: "phone"
  },
  {
    title: "Síguenos",
    body: "Noticias, ranking y próximas convocatorias.",
    meta: "@afcperu",
    icon: "social"
  }
] as const;

function ContactIcon({ icon }: { icon: (typeof registrationItems)[number]["icon"] }) {
  if (icon === "clipboard") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M17 9h14l2 5h5v27H10V14h5l2-5Z" />
        <path d="M17 14h14M17 24h14M17 31h10" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M17 10 11 16c2 11 10 19 21 21l6-6-8-7-4 4c-4-2-7-5-9-9l4-4-4-5Z" />
      </svg>
    );
  }

  if (icon === "social") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="14" cy="24" r="5" />
        <circle cx="34" cy="14" r="5" />
        <circle cx="34" cy="34" r="5" />
        <path d="m18 22 11-6M18 26l11 6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="24" cy="16" r="7" />
      <path d="M10 40c2-9 8-14 14-14s12 5 14 14" />
    </svg>
  );
}

export function AfcRegistration() {
  return (
    <section
      id="inscripciones"
      className="scroll-mt-20 border-t border-white/10 bg-[radial-gradient(circle_at_50%_100%,rgba(211,32,46,0.14),transparent_38%),#07090c] px-4 py-12 text-white md:py-16"
      aria-labelledby="inscripciones-title"
    >
      <div className="mx-auto w-[min(1320px,100%)] text-center">
        <h2
          id="inscripciones-title"
          className="text-4xl font-black uppercase tracking-[-0.02em] md:text-5xl"
        >
          Inscripciones
        </h2>
        <p className="mt-3 text-sm text-white/[0.70] md:text-base">
          ¿Listo para competir? Contáctanos e inscríbete.
        </p>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {registrationItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/[0.16] bg-white/[0.035] p-6 text-left transition hover:border-afc-red hover:bg-afc-red/[0.06]"
            >
              <div className="text-afc-red">
                <ContactIcon icon={item.icon} />
              </div>
              <h3 className="mt-5 text-lg font-black uppercase">{item.title}</h3>
              <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/[0.68]">
                {item.body}
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.08em] text-afc-red">
                {item.meta}
              </p>
            </article>
          ))}
        </div>

        <a
          href={`mailto:${afcSite.contact.email}`}
          className="mx-auto mt-8 inline-flex h-14 min-w-[300px] items-center justify-center rounded-md bg-afc-red px-8 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_48px_rgba(211,32,46,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f3313e] focus:outline-none focus:ring-2 focus:ring-afc-red"
        >
          Quiero inscribirme
        </a>
      </div>
    </section>
  );
}
