"use client";

import Image from "next/image";
import { useState, type SVGProps } from "react";

const honorees = [
  {
    id: "alvaro-mendoza",
    name: "Álvaro Mendoza",
    discipline: "Jiu-jitsu brasileño",
    image: "/images/tigre-azul/disciplines/jiu-jitsu.png",
    achievement: "Campeón Open Peruano de Jiu-Jitsu",
    result: "Medalla de oro · Categoría Adulto Azul · 2025",
    story:
      "Técnica, constancia y una mentalidad serena dentro del tatami. Álvaro representa el progreso construido entrenamiento tras entrenamiento.",
    stats: [
      { value: "01", label: "Oro nacional" },
      { value: "06", label: "Podios" },
      { value: "08", label: "Años entrenando" }
    ]
  },
  {
    id: "mateo-salazar",
    name: "Mateo Salazar",
    discipline: "Boxeo",
    image: "/images/tigre-azul/disciplines/boxeo.png",
    achievement: "Campeón Regional del Sur",
    result: "Cinturón de oro · Categoría Welter · 2024",
    story:
      "Su precisión y disciplina competitiva lo convirtieron en un referente para las nuevas generaciones de boxeadores de la academia.",
    stats: [
      { value: "12", label: "Victorias" },
      { value: "02", label: "Títulos" },
      { value: "07", label: "Años entrenando" }
    ]
  },
  {
    id: "renzo-huaman",
    name: "Renzo Huamán",
    discipline: "Sanda Wushu",
    image: "/images/tigre-azul/disciplines/sanda.png",
    achievement: "Seleccionado Nacional de Sanda",
    result: "Medalla de plata · Campeonato Nacional · 2025",
    story:
      "Velocidad, control y respeto por la tradición. Renzo destaca por competir con carácter y representar los valores de Tigre Azul.",
    stats: [
      { value: "09", label: "Combates" },
      { value: "05", label: "Podios" },
      { value: "06", label: "Años entrenando" }
    ]
  }
] as const;

export function HallOfFameSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHonoree = honorees[activeIndex];
  const [firstName, ...lastName] = activeHonoree.name.split(" ");

  return (
    <section
      id="salon-fama"
      className="tigre-hall-section relative isolate scroll-mt-[104px] overflow-hidden bg-[#01060d] px-[4.8vw] py-[clamp(72px,8vw,118px)] text-white lg:min-h-[100svh] lg:scroll-mt-[150px] lg:px-[clamp(42px,6vw,96px)]"
      aria-labelledby="hall-title"
    >
      <Image
        src="/images/tigre-azul/tigre-azul-blue-wall-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-35 saturate-[0.72]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#01060d_0%,rgba(1,6,13,0.62)_44%,#01060d_100%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[28%] -z-10 h-[50vw] w-[50vw] rounded-full bg-[#075ee8]/10 blur-[130px]" />
      <div className="tigre-professors-grain pointer-events-none absolute inset-0 -z-10 opacity-45" />
      <HallLaurel className="pointer-events-none absolute -right-[10vw] top-1/2 -z-10 h-[min(78vw,960px)] w-[min(78vw,960px)] -translate-y-1/2 text-[#087cff] opacity-[0.055]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <header className="tigre-hall-reveal flex flex-col gap-6 border-b border-white/14 pb-[clamp(24px,3vw,40px)] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4 text-[clamp(10px,0.9vw,14px)] font-black uppercase tracking-[0.42em] text-[#087cff]">
              <span className="h-px w-10 bg-[#087cff] shadow-[0_0_10px_rgba(8,124,255,0.72)]" />
              <span className="pl-[0.42em]">Legado Tigre Azul</span>
            </div>
            <h2
              id="hall-title"
              className="tigre-hall-title mt-4 text-[clamp(48px,7vw,110px)] uppercase leading-[0.88]"
            >
              Salón de la fama
            </h2>
          </div>

          <p className="max-w-[520px] text-[clamp(13px,1vw,16px)] leading-7 text-[#b8c6e8] lg:pb-1 lg:text-right">
            Reconocemos a los alumnos que elevaron el nombre de nuestra escuela
            con disciplina, resultados y ejemplo.
          </p>
        </header>

        <div className="mt-[clamp(30px,3.6vw,56px)] grid gap-[clamp(28px,4vw,72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-stretch">
          <figure
            key={activeHonoree.id}
            className="tigre-hall-feature group relative min-h-[480px] overflow-hidden border border-white/20 bg-[#030b16] shadow-[0_32px_100px_rgba(0,0,0,0.52)] sm:min-h-[580px] lg:min-h-0"
          >
            <Image
              src={activeHonoree.image}
              alt={`Alumno destacado ${activeHonoree.name}, ${activeHonoree.discipline}`}
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-1000 ease-out group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,6,13,0.03)_35%,rgba(1,6,13,0.94)_100%)]" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-[clamp(16px,2vw,28px)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7fb0ff]">
                Miembro {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <MedalIcon className="h-8 w-8 text-[#1686ff] drop-shadow-[0_0_14px_rgba(8,124,255,0.75)]" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-[clamp(20px,3vw,46px)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1686ff]">
                {activeHonoree.discipline}
              </span>
              <p className="tigre-hall-feature-name mt-2 text-[clamp(42px,6vw,88px)] uppercase leading-[0.84] text-white">
                <span className="block">{firstName}</span>
                <span className="block">{lastName.join(" ")}</span>
              </p>
            </figcaption>
          </figure>

          <div
            key={`${activeHonoree.id}-details`}
            className="tigre-hall-details flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#087cff]">
                Reconocimiento principal
              </p>
              <h3 className="mt-4 max-w-[680px] text-[clamp(29px,3.35vw,54px)] font-black uppercase leading-[1.02] tracking-[-0.02em] text-white">
                {activeHonoree.achievement}
              </h3>
              <p className="mt-4 border-l-2 border-[#087cff] pl-4 text-[clamp(12px,0.95vw,15px)] font-bold uppercase tracking-[0.12em] text-[#8eb9ff]">
                {activeHonoree.result}
              </p>
              <p className="mt-[clamp(22px,2.4vw,34px)] max-w-[620px] text-[clamp(13px,1vw,16px)] leading-7 text-[#b8c6e8]">
                {activeHonoree.story}
              </p>

              <dl className="mt-[clamp(28px,3vw,44px)] grid grid-cols-3 divide-x divide-white/16 border-y border-white/16 py-5">
                {activeHonoree.stats.map((stat) => (
                  <div key={stat.label} className="px-3 first:pl-0 sm:px-6">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45 sm:text-[10px]">
                      {stat.label}
                    </dt>
                    <dd className="tigre-hall-stat mt-2 text-[clamp(28px,3vw,48px)] leading-none text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="mt-[clamp(34px,4vw,64px)] border-t border-white/14"
              role="tablist"
              aria-label="Alumnos del Salón de la Fama"
            >
              {honorees.map((honoree, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={honoree.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="hall-active-member"
                    onClick={() => setActiveIndex(index)}
                    className={`tigre-hall-member group relative grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/14 py-[clamp(14px,1.4vw,20px)] text-left outline-none transition focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#58a4ff] ${
                      isActive ? "text-white" : "text-white/48 hover:text-white/82"
                    }`}
                  >
                    <span className="text-[10px] font-black tracking-[0.16em] text-[#087cff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong className="block text-[clamp(13px,1vw,16px)] font-black uppercase tracking-[0.05em]">
                        {honoree.name}
                      </strong>
                      <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/38">
                        {honoree.discipline}
                      </span>
                    </span>
                    <ArrowIcon
                      className={`h-5 w-5 transition duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#1686ff]"
                          : "-translate-x-2 text-white/20 group-hover:translate-x-0"
                      }`}
                    />
                    {isActive ? (
                      <span className="absolute inset-x-0 bottom-[-1px] h-px bg-[linear-gradient(90deg,#087cff,transparent)] shadow-[0_0_12px_rgba(8,124,255,0.68)]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <footer className="tigre-hall-reveal mt-[clamp(28px,3vw,48px)] flex items-start gap-4 border-t border-white/14 pt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45 sm:items-center">
          <ShieldStarIcon className="h-6 w-6 shrink-0 text-[#087cff]" />
          <p>El logro inspira. El ejemplo permanece.</p>
        </footer>
      </div>

      <div id="hall-active-member" role="tabpanel" className="sr-only">
        {activeHonoree.name}, {activeHonoree.achievement}
      </div>
    </section>
  );
}

function MedalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="m8 3 8 11L24 3M11 3l5 7 5-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="16" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="m16 15 1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.5 3.5-.5L16 15Z" fill="currentColor" />
    </svg>
  );
}

function ShieldStarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3 20 7v5c0 4.5-2.7 7.5-8 9-5.3-1.5-8-4.5-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m12 7.2 1.35 2.75 3.05.45-2.2 2.15.52 3.03L12 14.15l-2.72 1.43.52-3.03-2.2-2.15 3.05-.45L12 7.2Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HallLaurel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" {...props}>
      <circle cx="300" cy="300" r="178" stroke="currentColor" strokeWidth="3" />
      <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="1" />
      <path d="M166 420C70 340 82 192 190 117M434 420c96-80 84-228-24-303" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M159 390c-33-5-52-21-68-48 35-2 56 11 73 32M143 343c-31-12-46-32-56-61 35 6 52 23 64 48M139 292c-27-18-38-40-40-71 32 13 45 33 51 61M150 242c-22-23-28-47-23-78 28 19 37 42 37 70M175 197c-16-28-16-52-4-81 23 25 26 49 18 76M441 390c33-5 52-21 68-48-35-2-56 11-73 32M457 343c31-12 46-32 56-61-35 6-52 23-64 48M461 292c27-18 38-40 40-71-32 13-45 33-51 61M450 242c22-23 28-47 23-78-28 19-37 42-37 70M425 197c16-28 16-52 4-81-23 25-26 49-18 76" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m300 194 25 51 56 8-40 39 9 56-50-26-50 26 9-56-40-39 56-8 25-51Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}
