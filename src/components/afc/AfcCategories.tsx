import { categoryRules } from "@/lib/afc";

type DisciplineIconProps = {
  icon: (typeof categoryRules)[number]["icon"];
};

function DisciplineIcon({ icon }: DisciplineIconProps) {
  const common = {
    className: "h-14 w-14",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 64 64",
    "aria-hidden": true
  };

  if (icon === "glove") {
    return (
      <svg {...common}>
        <path d="M25 45c-8 0-14-6-14-14v-7c0-7 5-13 12-13h5c8 0 14 6 14 14v16" />
        <path d="M42 28h6c4 0 7 3 7 7s-3 7-7 7h-6" />
        <path d="M22 46v8h21v-8" />
        <path d="M25 12v18M34 13v17" />
      </svg>
    );
  }

  if (icon === "cage") {
    return (
      <svg {...common}>
        <path d="m32 6 23 13v26L32 58 9 45V19L32 6Z" />
        <path d="M9 19 32 32l23-13M32 32v26M20 13v38M44 13v38" />
        <path d="m16 39 32-20M16 25l32 20" />
      </svg>
    );
  }

  if (icon === "gi") {
    return (
      <svg {...common}>
        <path d="M19 10h10l3 8 3-8h10l10 14-9 7-4-6v29H22V25l-4 6-9-7 10-14Z" />
        <path d="m25 30 14 14M39 30 25 44M22 54h20" />
      </svg>
    );
  }

  if (icon === "helmet") {
    return (
      <svg {...common}>
        <path d="M18 41V25c0-10 6-17 15-17s15 7 15 17v16" />
        <path d="M18 29h30M22 41h22v9H22zM28 20h10M26 29v12M40 29v12" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M23 10h10l-5 17h-9l4-17ZM40 10h-8l5 17h9l-6-17Z" />
      <path d="M19 27h9l-3 27h-9l3-27ZM37 27h9l5 27h-9l-5-27Z" />
      <path d="M17 54h12M39 54h13" />
    </svg>
  );
}

export function AfcCategories() {
  return (
    <section
      id="categorias"
      className="scroll-mt-20 border-t border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(211,32,46,0.10),transparent_32%),#080a0d] px-4 py-12 text-white md:py-16"
      aria-labelledby="categorias-title"
    >
      <div className="mx-auto w-[min(1320px,100%)] text-center">
        <h2
          id="categorias-title"
          className="text-4xl font-black uppercase tracking-[-0.02em] md:text-5xl"
        >
          Categorías
        </h2>
        <p className="mt-3 text-sm text-white/[0.70] md:text-base">
          Conoce las disciplinas, categorías y pesos oficiales.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categoryRules.map((category) => (
            <article
              key={category.discipline}
              className="group rounded-lg border border-white/[0.16] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-6 text-center transition hover:-translate-y-1 hover:border-afc-red hover:shadow-[0_22px_56px_rgba(211,32,46,0.16)]"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-afc-red/[0.55] text-afc-red transition group-hover:bg-afc-red group-hover:text-white">
                <DisciplineIcon icon={category.icon} />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase">
                {category.discipline}
              </h3>
              <p className="mt-1 text-xs font-bold text-white/[0.62]">
                {category.gender}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-white/[0.78]">
                {category.weightsList.map((weight) => (
                  <li key={`${category.discipline}-${weight}`}>· {weight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a
          href="#inscripciones"
          className="mx-auto mt-7 inline-flex h-12 min-w-[280px] items-center justify-center rounded-md border border-afc-red px-6 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:bg-afc-red hover:shadow-[0_18px_40px_rgba(211,32,46,0.26)] focus:outline-none focus:ring-2 focus:ring-afc-red"
        >
          Ver reglamento completo
        </a>
      </div>
    </section>
  );
}
