"use client";

import Image from "next/image";
import { useState, type CSSProperties, type SVGProps } from "react";
import { professorsContent } from "@/lib/site";

type Professor = (typeof professorsContent.profiles)[number];
type LocationId = (typeof professorsContent.locations)[number]["id"];

export function ProfessorsSection() {
  const [activeLocation, setActiveLocation] = useState<LocationId>("chincha");
  const visibleProfessors = professorsContent.profiles.filter((professor) =>
    professor.locations.some((location) => location === activeLocation)
  );

  return (
    <section
      id="profesores"
      className="tigre-professors-section relative isolate overflow-hidden bg-[#01060d] px-[4.8vw] pb-[clamp(54px,7vw,92px)] pt-[clamp(72px,8vw,112px)] text-white lg:min-h-[100svh] lg:px-[clamp(36px,5.6vw,88px)]"
      aria-labelledby="professors-title"
    >
      <ProfessorBackground />

      <div className="tigre-professors-content relative z-10 mx-auto flex w-full max-w-[1450px] flex-col items-center">
        <div className="tigre-professors-kicker flex items-center gap-[clamp(12px,1.4vw,22px)] text-[clamp(10px,1vw,15px)] font-black uppercase tracking-[0.38em] text-[#087cff]">
          <ScratchLines direction="left" />
          <span className="pl-[0.38em]">{professorsContent.eyebrow}</span>
          <ScratchLines direction="right" />
        </div>

        <h2
          id="professors-title"
          className="tigre-professors-title mt-[clamp(8px,1.2vw,16px)] text-center text-[clamp(54px,8.8vw,112px)] uppercase leading-[0.9]"
        >
          {professorsContent.headline}
        </h2>

        <div className="tigre-professors-divider mt-[clamp(16px,2.1vw,28px)] flex w-full max-w-[480px] items-center gap-[clamp(13px,1.4vw,20px)] text-[#087cff]">
          <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#087cff)] shadow-[0_0_12px_rgba(8,124,255,0.65)]" />
          <TigerMarkIcon className="h-[clamp(28px,2.4vw,38px)] w-[clamp(28px,2.4vw,38px)] drop-shadow-[0_0_12px_rgba(8,124,255,0.68)]" />
          <span className="h-px flex-1 bg-[linear-gradient(90deg,#087cff,transparent)] shadow-[0_0_12px_rgba(8,124,255,0.65)]" />
        </div>

        <p className="tigre-professors-intro mt-[clamp(14px,1.5vw,22px)] max-w-[690px] text-balance text-center text-[clamp(13px,1.08vw,17px)] leading-[1.55] text-[#b8c6e8]">
          {professorsContent.body}
        </p>

        <div
          className="tigre-professors-tabs mt-[clamp(24px,3vw,42px)] grid w-full max-w-[620px] grid-cols-2 overflow-hidden rounded-full border border-white/30 bg-[#060d17]/88 p-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_45px_rgba(0,0,0,0.32)]"
          role="tablist"
          aria-label="Sedes de profesores"
        >
          {professorsContent.locations.map((location) => {
            const isActive = location.id === activeLocation;

            return (
              <button
                key={location.id}
                id={`professors-tab-${location.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`professors-panel-${location.id}`}
                onClick={() => setActiveLocation(location.id)}
                className={`tigre-professors-tab flex min-h-[52px] items-center justify-center gap-3 rounded-full px-3 text-[clamp(11px,1.05vw,15px)] font-black uppercase tracking-[0.08em] outline-none transition focus-visible:ring-2 focus-visible:ring-[#8bb8ff] ${
                  isActive
                    ? "bg-[linear-gradient(180deg,#2587ff,#0756e8)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_9px_24px_rgba(0,91,255,0.36)]"
                    : "text-white/48 hover:text-white/82"
                }`}
              >
                <PinIcon className="h-[20px] w-[20px] shrink-0" />
                <span>{location.label}</span>
              </button>
            );
          })}
        </div>

        <div
          key={activeLocation}
          id={`professors-panel-${activeLocation}`}
          role="tabpanel"
          aria-labelledby={`professors-tab-${activeLocation}`}
          className="tigre-professors-grid mt-[clamp(32px,4.2vw,58px)] grid w-full grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProfessors.map((professor, index) => (
            <ProfessorCard
              key={professor.id}
              professor={professor}
              index={index}
            />
          ))}
        </div>

        <div className="tigre-professors-assurance mt-[clamp(30px,3.8vw,52px)] flex max-w-[900px] items-start gap-4 text-left text-[clamp(12px,0.96vw,15px)] leading-6 text-[#b8c6e8] sm:items-center sm:text-center">
          <span className="grid h-9 w-9 shrink-0 place-items-center text-[#087cff]">
            <ShieldCheckIcon className="h-9 w-9" />
          </span>
          <p>{professorsContent.assurance}</p>
        </div>
      </div>
    </section>
  );
}

function ProfessorCard({
  professor,
  index
}: {
  professor: Professor;
  index: number;
}) {
  const [firstName, ...lastName] = professor.name.split(" ");

  return (
    <article
      className="tigre-professor-card group relative overflow-hidden rounded-[16px] border border-[#71819a]/55 bg-[linear-gradient(145deg,rgba(13,25,39,0.96),rgba(5,13,23,0.98))] p-[clamp(13px,1.15vw,18px)] shadow-[0_30px_75px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.055)]"
      style={{ "--professor-delay": `${index * 90}ms` } as CSSProperties}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_18%_0%,rgba(8,124,255,0.14),transparent_52%)]" />
      <CardScratch />

      <div className="tigre-professor-overview relative grid grid-cols-[34%_1fr] gap-[clamp(14px,1.2vw,20px)]">
        <div className="tigre-professor-portrait relative aspect-[4/5] self-start overflow-hidden rounded-[8px] border border-[#087cff]/90 bg-[#06101d] shadow-[inset_0_0_24px_rgba(8,124,255,0.15)]">
          <Image
            src={professor.image}
            alt={`Retrato de ${professor.name}`}
            fill
            sizes="(min-width: 1280px) 14vw, (min-width: 768px) 22vw, 34vw"
            className="object-cover object-top saturate-[0.92] transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_67%,rgba(1,8,18,0.48)_100%)]" />
        </div>

        <div className="tigre-professor-summary relative min-w-0 pt-[clamp(8px,0.8vw,13px)]">
          <p className="tigre-professor-role text-[clamp(9px,0.78vw,12px)] font-black uppercase tracking-[0.13em] text-[#087cff]">
            {professor.role}
          </p>
          <h3 className="tigre-professor-name mt-[clamp(8px,0.8vw,12px)] text-[clamp(23px,2.1vw,34px)] uppercase leading-[0.98] text-white">
            <span className="block">{firstName}</span>
            <span className="block">{lastName.join(" ")}</span>
          </h3>

          <div className="tigre-professor-age mt-[clamp(15px,1.6vw,22px)] flex items-center gap-2 text-[clamp(11px,0.88vw,14px)] text-white/88">
            <CalendarIcon className="h-[19px] w-[19px] shrink-0 text-[#087cff]" />
            <span>
              <strong>Edad:</strong> {professor.age} años
            </span>
          </div>

          <div className="tigre-professor-disciplines mt-3 flex items-start gap-2 text-[clamp(11px,0.88vw,14px)] text-white/88">
            <DisciplineIcon className="mt-[1px] h-[19px] w-[19px] shrink-0 text-[#087cff]" />
            <div className="min-w-0">
              <strong className="block">Disciplinas:</strong>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {professor.disciplines.map((discipline) => (
                  <span
                    key={discipline}
                    className="rounded-[5px] border border-[#087cff]/75 bg-[#061837]/75 px-2 py-1 text-[clamp(8px,0.7vw,11px)] font-bold uppercase leading-none text-white/92"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tigre-professor-details relative mt-[clamp(14px,1.6vw,22px)] border-t border-white/14 pt-[clamp(14px,1.35vw,20px)]">
        <div className="tigre-professor-credentials grid grid-cols-2 divide-x divide-white/16">
          <CredentialBlock
            icon={<BeltIcon className="h-[21px] w-[21px]" />}
            title="Grado"
          >
            {professor.grade.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </CredentialBlock>
          <CredentialBlock
            icon={<ClockIcon className="h-[21px] w-[21px]" />}
            title="Trayectoria"
            className="pl-[clamp(14px,1.5vw,22px)]"
          >
            {professor.trajectory}
          </CredentialBlock>
        </div>

        <div className="tigre-professor-certifications mt-[clamp(13px,1.25vw,18px)] border-t border-white/14 pt-[clamp(12px,1.2vw,17px)]">
          <InfoTitle
            icon={<ShieldCheckIcon className="h-[21px] w-[21px]" />}
            label="Certificaciones"
          />
          <ul className="tigre-professor-certification-list mt-2 space-y-1 pl-[31px] text-[clamp(10px,0.78vw,13px)] leading-[1.45] text-[#b8c6e8]">
            {professor.certifications.map((certification) => (
              <li key={certification} className="relative pl-3">
                <span className="absolute left-0 top-[0.62em] h-1 w-1 rounded-full bg-[#087cff] shadow-[0_0_7px_#087cff]" />
                {certification}
              </li>
            ))}
          </ul>
        </div>

        <div className="tigre-professor-focus mt-[clamp(13px,1.25vw,18px)] border-t border-white/14 pt-[clamp(12px,1.2vw,17px)]">
          <InfoTitle
            icon={<TargetIcon className="h-[21px] w-[21px]" />}
            label="Enfoque"
          />
          <p className="tigre-professor-focus-copy mt-2 pl-[31px] text-[clamp(10px,0.78vw,13px)] leading-[1.45] text-[#b8c6e8]">
            {professor.focus}
          </p>
        </div>
      </div>
    </article>
  );
}

function CredentialBlock({
  icon,
  title,
  className = "",
  children
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`tigre-professor-credential ${className}`}>
      <InfoTitle icon={icon} label={title} />
      <p className="tigre-professor-credential-copy mt-1.5 pl-[31px] text-[clamp(10px,0.8vw,13px)] leading-[1.4] text-[#b8c6e8]">
        {children}
      </p>
    </div>
  );
}

function InfoTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="tigre-professor-info-title flex items-center gap-2 text-[clamp(11px,0.88vw,14px)] font-black text-[#087cff]">
      <span className="shrink-0">{icon}</span>
      <strong>{label}</strong>
    </div>
  );
}

function ProfessorBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(7,35,77,0.22),transparent_39%),linear-gradient(180deg,#030810_0%,#02070e_58%,#01050b_100%)]" />
      <div className="tigre-professors-grain absolute inset-0 opacity-35" />
      <div className="absolute -left-[9vw] -top-[5vw] h-[min(48vw,720px)] w-[min(48vw,720px)] opacity-[0.13] mix-blend-screen [filter:grayscale(1)_invert(1)_brightness(.46)_sepia(1)_saturate(5)_hue-rotate(166deg)]">
        <Image
          src="/images/tigre-azul/tigre-head-transparent.png"
          alt=""
          fill
          unoptimized
          sizes="48vw"
          className="object-contain"
        />
      </div>
      <div className="absolute inset-y-0 left-0 w-[36vw] bg-[linear-gradient(90deg,rgba(0,0,0,0.28),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-[42vw] bg-[linear-gradient(270deg,rgba(0,36,93,0.08),transparent)]" />
      <GeometricAngles className="absolute -right-[3vw] top-0 h-[48vw] min-h-[420px] w-[36vw] min-w-[330px] opacity-60" />
      <GeometricAngles className="absolute -bottom-[18vw] -left-[14vw] h-[35vw] min-h-[360px] w-[35vw] min-w-[360px] rotate-180 opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(8,124,255,0.32),transparent)]" />
    </div>
  );
}

function ScratchLines({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex gap-[3px] ${direction === "right" ? "scale-x-[-1]" : ""}`}
    >
      {[0, 1, 2, 3, 4].map((line) => (
        <span
          key={line}
          className="block h-px w-[9px] -skew-x-[42deg] bg-[#087cff] shadow-[0_0_7px_rgba(8,124,255,0.55)]"
        />
      ))}
    </span>
  );
}

function CardScratch() {
  return (
    <span className="pointer-events-none absolute right-4 top-4 flex -rotate-[43deg] gap-[4px] text-[#087cff] opacity-85" aria-hidden="true">
      <span className="h-[1px] w-7 bg-current shadow-[0_0_7px_currentColor]" />
      <span className="h-[1px] w-8 bg-current shadow-[0_0_7px_currentColor]" />
      <span className="h-[1px] w-6 bg-current shadow-[0_0_7px_currentColor]" />
    </span>
  );
}

function GeometricAngles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 620" fill="none" aria-hidden="true">
      <path d="M505 0 312 176l193 207" stroke="#087CFF" strokeOpacity=".72" />
      <path d="M435 0 242 176l207 222" stroke="#426A99" strokeOpacity=".38" />
      <path d="M341 0 148 176l260 278" stroke="#72839B" strokeOpacity=".25" />
      <path d="m503 139-87 92 87 94" stroke="#087CFF" strokeOpacity=".22" />
      <path d="m492 318-70 76 70 76" stroke="#087CFF" strokeOpacity=".3" />
      <path d="M520 472 382 620" stroke="#087CFF" strokeOpacity=".68" />
    </svg>
  );
}

function TigerMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="m9 14 7-6 8 4 8-4 7 6-3 20-12 8-12-8-3-20Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="m14 16 7 4-4 4m17-8-7 4 4 4M18 29l6 4 6-4m-10 8 4 2 4-2M15 12l3 7m15-7-3 7M24 12v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 25h3m8 0h3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21s7-6.15 7-12A7 7 0 1 0 5 9c0 5.85 7 12 7 12Z" fill="currentColor" />
      <circle cx="12" cy="9" r="2.3" fill="#0A5CEB" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h2m4 0h2m-8 3h2m4 0h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DisciplineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m9.5 8 5 8M14.5 8l-5 8M8 4l2 4-4 2-2-4 4-2Zm8 0-2 4 4 2 2-4-4-2ZM6 14l4 2-2 4-4-2 2-4Zm12 0-4 2 2 4 4-2-2-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function BeltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 8h18l-2 5H5L3 8Zm5 5-2 5 6-3 6 3-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 8V6h6v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m12 3 7 3v5.1c0 4.45-2.7 7.75-7 9.9-4.3-2.15-7-5.45-7-9.9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.5 12 2.25 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="13" r="7.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="11" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m13.5 10.5 6-6m-3 0h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
