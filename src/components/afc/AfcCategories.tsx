"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  categoryRules,
  jiuJitsuRulesDetail,
  upcomingDisciplineDetail
} from "@/lib/afc";

type CategoryRule = (typeof categoryRules)[number];
type DisciplineName = CategoryRule["discipline"];

type DisciplineVisual = {
  subtitle: string;
  traits: readonly [string, string, string, string];
  emblemSrc: string;
};

const disciplineVisuals = {
  Boxeo: {
    subtitle: "Fuerza y técnica",
    traits: ["Fuerza", "Técnica", "Resistencia", "Disciplina"],
    emblemSrc: "/images/afc/disciplines/boxeo-emblem.png"
  },
  MMA: {
    subtitle: "Arte marcial mixto",
    traits: ["Fuerza", "Estrategia", "Resistencia", "Versatilidad"],
    emblemSrc: "/images/afc/disciplines/mma-emblem.png"
  },
  "Muay Thai": {
    subtitle: "El arte de las 8 armas",
    traits: ["Potencia", "Velocidad", "Resistencia", "Enfoque"],
    emblemSrc: "/images/afc/disciplines/muay-thai-emblem.png"
  },
  "Jiu-Jitsu": {
    subtitle: "Técnica y control",
    traits: ["Técnica", "Control", "Estrategia", "Disciplina"],
    emblemSrc: "/images/afc/disciplines/jiu-jitsu-emblem.png"
  },
  Sanda: {
    subtitle: "Combate completo",
    traits: ["Potencia", "Velocidad", "Resistencia", "Agilidad"],
    emblemSrc: "/images/afc/disciplines/sanda-emblem.png"
  }
} satisfies Record<DisciplineName, DisciplineVisual>;

function TraitIcon({ index }: { index: number }) {
  if (index === 1) {
    return (
      <svg
        className="h-4 w-4 shrink-0 text-afc-red"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg
        className="h-4 w-4 shrink-0 text-afc-red"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg
        className="h-4 w-4 shrink-0 text-afc-red"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-4 w-4 shrink-0 text-afc-red"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 13h4l2-7 4 14 2-7h4" />
    </svg>
  );
}

function HexIconFrame({
  category,
  isSelected,
  compact = false
}: {
  category: CategoryRule;
  isSelected: boolean;
  compact?: boolean;
}) {
  const visual = disciplineVisuals[category.discipline];

  return (
    <span
      className={`relative grid shrink-0 place-items-center ${
        compact ? "h-[82px] w-[82px]" : "h-[118px] w-[118px]"
      }`}
    >
      <span
        className={`absolute inset-1 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)] ${
          isSelected
            ? "bg-afc-red shadow-[0_0_38px_rgba(211,32,46,0.45)]"
            : "bg-afc-red/65"
        }`}
      />
      <span
        className={`absolute inset-[7px] [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)] transition group-hover:bg-afc-red/20 group-focus-visible:bg-afc-red/20 ${
        isSelected
          ? "bg-[#170609]"
          : "bg-[#12151b]"
      }`}
      />
      <Image
        src={visual.emblemSrc}
        alt=""
        fill
        sizes={compact ? "82px" : "118px"}
        className="afc-emblem-float relative z-10 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-105 group-focus-visible:scale-105"
      />
    </span>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-afc-red"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DesktopDisciplineCard({
  category,
  isSelected,
  onSelect
}: {
  category: CategoryRule;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const visual = disciplineVisuals[category.discipline];

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      aria-controls="disciplina-modal"
      aria-haspopup="dialog"
      onClick={onSelect}
      className={`afc-rise-in afc-tilt-card group relative hidden min-h-[390px] overflow-hidden rounded-md border px-5 py-7 text-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-afc-red lg:flex lg:flex-col lg:items-center ${
        isSelected
          ? "border-afc-red bg-afc-red/[0.13] shadow-[0_0_0_1px_rgba(211,32,46,0.42),0_28px_70px_rgba(211,32,46,0.30)]"
          : "border-white/[0.16] bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] hover:-translate-y-1 hover:border-afc-red/80 hover:shadow-[0_24px_58px_rgba(211,32,46,0.18)]"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.25))] opacity-80" />
      <span
        className={`pointer-events-none absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 bg-afc-red transition ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <HexIconFrame category={category} isSelected={isSelected} />

      <h3 className="relative mt-5 text-xl font-black uppercase leading-none">
        {category.discipline}
      </h3>
      <p className="relative mt-3 min-h-[34px] text-xs font-black uppercase leading-5 text-white/[0.58]">
        {visual.subtitle}
      </p>

      <span className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-afc-red/75 to-transparent" />

      <ul className="relative mt-6 w-full space-y-3 text-left">
        {visual.traits.map((trait, index) => (
          <li
            key={`${category.discipline}-${trait}`}
            className="flex items-center gap-3 text-sm font-bold text-white/[0.72]"
          >
            <TraitIcon index={index} />
            <span>{trait}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}

function MobileDisciplineRow({
  category,
  isSelected,
  onSelect
}: {
  category: CategoryRule;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const visual = disciplineVisuals[category.discipline];

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      aria-controls="disciplina-modal"
      aria-haspopup="dialog"
      onClick={onSelect}
      className={`afc-row-lift group relative flex min-h-[106px] w-full items-center gap-4 overflow-hidden rounded-md border p-4 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-afc-red ${
        isSelected
          ? "border-afc-red bg-afc-red/[0.14] shadow-[0_0_0_1px_rgba(211,32,46,0.35),0_18px_52px_rgba(211,32,46,0.26)]"
          : "border-white/[0.14] bg-white/[0.055] hover:border-afc-red/80"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(211,32,46,0.14),transparent_55%)] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
      <HexIconFrame category={category} isSelected={isSelected} compact />
      <span className="relative min-w-0 flex-1">
        <span className="block text-[1.35rem] font-black uppercase leading-tight">
          {category.discipline}
        </span>
        <span className="mt-1 block text-xs font-black uppercase leading-5 text-white/[0.56]">
          {visual.subtitle}
        </span>
      </span>
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-afc-red/45 bg-black/20">
        <ChevronIcon />
      </span>
    </button>
  );
}

function DisciplineModal({
  selectedDiscipline,
  onClose
}: {
  selectedDiscipline: string;
  onClose: () => void;
}) {
  const isJiuJitsu = selectedDiscipline === jiuJitsuRulesDetail.discipline;
  const selectedCategory =
    categoryRules.find(
      (category) => category.discipline === selectedDiscipline
    ) ??
    categoryRules.find(
      (category) => category.discipline === jiuJitsuRulesDetail.discipline
    )!;
  const visual = disciplineVisuals[selectedCategory.discipline];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-[110] grid place-items-center overflow-y-auto bg-[#020203]/85 px-3 py-5 backdrop-blur-xl sm:px-5"
      onClick={onClose}
    >
      <section
        id="disciplina-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disciplina-modal-title"
        className="afc-modal-pop relative max-h-[calc(100svh-32px)] w-[min(1040px,100%)] overflow-y-auto rounded-2xl border border-white/10 bg-[#07080c] text-left text-white shadow-[0_36px_120px_rgba(0,0,0,0.78)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(211,32,46,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,rgba(211,32,46,0.08)_70%,transparent)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-afc-red/20" />
          <div className="absolute -bottom-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-afc-red/10 blur-3xl" />
        </div>

        <button
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-2xl font-black leading-none text-white shadow-[0_12px_30px_rgba(0,0,0,0.42)] transition hover:border-afc-red hover:bg-afc-red focus:outline-none focus:ring-2 focus:ring-afc-red"
        >
          X
        </button>

        <div className="relative grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative overflow-hidden border-b border-white/10 px-5 pb-7 pt-16 text-center sm:px-8 lg:min-h-[560px] lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(211,32,46,0.16),rgba(255,255,255,0.04)_36%,rgba(0,0,0,0.22))]" />
            <div className="pointer-events-none absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full bg-afc-red/20 blur-3xl" />

            <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <Image
                src={visual.emblemSrc}
                alt={`Logo de ${selectedCategory.discipline}`}
                fill
                sizes="(min-width: 1024px) 256px, 224px"
                className="afc-emblem-float object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.62)]"
                priority
              />
            </div>

            <span
              className={`relative mt-4 inline-flex items-center rounded-full border px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] ${
                isJiuJitsu
                  ? "border-afc-red bg-afc-red text-white shadow-[0_12px_28px_rgba(211,32,46,0.28)]"
                  : "border-white/15 bg-white/[0.08] text-white/72"
              }`}
            >
              {isJiuJitsu ? "Reglamento activo" : "Próximamente"}
            </span>

            <h3 className="relative mx-auto mt-5 max-w-[12ch] text-4xl font-black uppercase italic leading-none sm:text-5xl">
              {selectedCategory.discipline}
            </h3>
            <p className="relative mx-auto mt-3 max-w-xs text-sm font-bold uppercase leading-6 text-white/58">
              {visual.subtitle}
            </p>

            <div className="relative mt-6 grid grid-cols-2 gap-2 text-left">
              {visual.traits.map((trait, index) => (
                <div
                  key={`${selectedCategory.discipline}-modal-${trait}`}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/24 px-3 py-3 text-xs font-black uppercase text-white/72"
                >
                  <TraitIcon index={index} />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-5 sm:p-7 lg:p-9">
            {isJiuJitsu ? (
              <>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-afc-red">
                  Reglamento especial
                </p>
                <h3
                  id="disciplina-modal-title"
                  className="mt-3 text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl"
                >
                  {jiuJitsuRulesDetail.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  {jiuJitsuRulesDetail.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    jiuJitsuRulesDetail.format,
                    "Solo sometimiento",
                    "Sin puntaje"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-afc-red/24 bg-afc-red/[0.10] px-4 py-4"
                    >
                      <p className="text-sm font-black uppercase text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <h4 className="text-sm font-black uppercase tracking-[0.12em] text-white">
                    Categorías
                  </h4>
                  <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {jiuJitsuRulesDetail.categories.map((category) => (
                      <li
                        key={category}
                        className="rounded-lg border border-white/12 bg-white/[0.07] px-3 py-3 text-center text-sm font-black text-white"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-7 grid gap-3 text-sm leading-6 text-white/76">
                  {jiuJitsuRulesDetail.notes.map((note, index) => (
                    <li
                      key={note}
                      className="grid grid-cols-[34px_1fr] gap-3 rounded-xl border border-white/10 bg-black/24 px-4 py-4"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-afc-red text-xs font-black text-white">
                        {index + 1}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-afc-red">
                  Disciplina en preparación
                </p>
                <h3
                  id="disciplina-modal-title"
                  className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl"
                >
                  {upcomingDisciplineDetail.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  {upcomingDisciplineDetail.summary}
                </p>

                <div className="mt-7 rounded-2xl border border-dashed border-afc-red/35 bg-afc-red/[0.09] p-5">
                  <p className="text-lg font-black uppercase text-white">
                    {selectedCategory.discipline} aún no está disponible
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    AFC publicará el reglamento, categorías y formato oficial
                    cuando la disciplina ingrese al calendario competitivo.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    "Reglamento por publicar",
                    "Categorías por confirmar",
                    "Ranking pendiente"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-black/24 px-4 py-4"
                    >
                      <p className="text-xs font-black uppercase leading-5 text-white/66">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.12em] text-white/50">
                  {upcomingDisciplineDetail.note}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  return typeof document === "undefined"
    ? null
    : createPortal(modal, document.body);
}

export function AfcCategories() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<
    CategoryRule["discipline"]
  >(jiuJitsuRulesDetail.discipline);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDisciplineSelect(discipline: CategoryRule["discipline"]) {
    setSelectedDiscipline(discipline);
    setIsModalOpen(true);
  }

  return (
    <section
      id="categorias"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050609] px-4 py-16 text-white md:py-20"
      aria-labelledby="categorias-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/afc/afc-hero-desktop-generated.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,9,0.86),rgba(5,6,9,0.72)_42%,rgba(5,6,9,0.94))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(211,32,46,0.24),transparent_34%),radial-gradient(circle_at_8%_78%,rgba(211,32,46,0.14),transparent_24%),radial-gradient(circle_at_92%_70%,rgba(255,255,255,0.08),transparent_22%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-afc-red/40" />
      </div>

      <div className="mx-auto w-[min(1320px,100%)] text-center">
        <p className="text-xs font-black uppercase text-afc-red">
          Disciplinas AFC
        </p>
        <h2
          id="categorias-title"
          className="mt-2 text-5xl font-black italic uppercase leading-none text-white [text-shadow:0_5px_0_rgba(211,32,46,0.55)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Categorías
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-white/[0.70] md:text-base">
          Explora las disciplinas que forman campeones.
        </p>

        <div className="mt-10 hidden grid-cols-5 items-stretch gap-4 lg:grid">
          {categoryRules.map((category) => (
            <DesktopDisciplineCard
              key={category.discipline}
              category={category}
              isSelected={selectedDiscipline === category.discipline}
              onSelect={() => handleDisciplineSelect(category.discipline)}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 grid w-[min(520px,100%)] gap-3 lg:hidden">
          {categoryRules.map((category) => (
            <MobileDisciplineRow
              key={category.discipline}
              category={category}
              isSelected={selectedDiscipline === category.discipline}
              onSelect={() => handleDisciplineSelect(category.discipline)}
            />
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <DisciplineModal
          selectedDiscipline={selectedDiscipline}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
    </section>
  );
}
