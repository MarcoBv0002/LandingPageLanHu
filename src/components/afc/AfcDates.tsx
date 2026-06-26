import { tournamentDates } from "@/lib/afc";

const dateStatusClassName = {
  Completado: "text-white/[0.55]",
  "En curso": "text-afc-red",
  Próximo: "text-[#e8b657]",
  PRÓXIMA: "text-[#e8b657]",
  "SIN FECHA": "text-white/[0.48]"
} as const;

function formatDateLabel(date: string) {
  if (!date.includes(" de ")) {
    return date.toUpperCase();
  }

  const [day, rest = ""] = date.split(" de ");
  const [month = "", year = ""] = rest.split(", ");

  return `${day} ${month.slice(0, 3).toUpperCase()} ${year}`.trim();
}

export function AfcDates() {
  return (
    <section
      id="fechas"
      className="scroll-mt-20 border-t border-white/10 bg-[#090b0f] px-4 py-12 text-white md:py-16"
      aria-labelledby="fechas-title"
    >
      <div className="mx-auto w-[min(1320px,100%)] text-center">
        <h2
          id="fechas-title"
          className="text-4xl font-black uppercase tracking-[-0.02em] md:text-5xl"
        >
          Fechas
        </h2>
        <p className="mt-3 text-sm text-white/[0.70] md:text-base">
          Próximos torneos programados.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tournamentDates.slice(0, 5).map((item, index) => {
            const isActive = "highlight" in item && item.highlight;

            return (
              <article
                key={item.event}
                className={`afc-rise-in afc-tilt-card overflow-hidden rounded-lg border p-5 text-left ${
                  isActive
                    ? "border-afc-red bg-afc-red/[0.10] shadow-[0_20px_48px_rgba(211,32,46,0.18)]"
                    : "border-white/[0.16] bg-white/[0.035] hover:border-white/[0.30]"
                }`}
              >
                <p className="text-sm font-black uppercase text-white">
                  Fecha {index + 1}
                </p>
                <p className="mt-4 text-2xl font-black uppercase leading-none">
                  {formatDateLabel(item.date)}
                </p>
                <p className="mt-3 text-sm text-white/[0.62]">{item.venue}</p>
                <p
                  className={`mt-4 text-xs font-black uppercase ${dateStatusClassName[item.status]}`}
                >
                  {item.status}
                </p>
              </article>
            );
          })}
        </div>

        <a
          href="#inscripciones"
          className="afc-row-lift mx-auto mt-7 inline-flex h-12 min-w-[280px] items-center justify-center rounded-md border border-afc-red px-6 text-xs font-black uppercase tracking-[0.08em] text-white hover:bg-afc-red hover:shadow-[0_18px_40px_rgba(211,32,46,0.26)] focus:outline-none focus:ring-2 focus:ring-afc-red"
        >
          Ver calendario completo
        </a>
      </div>
    </section>
  );
}
