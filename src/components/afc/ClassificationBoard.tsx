"use client";

import { useMemo, useState } from "react";
import { classificationEvents } from "@/lib/afc";

type ClassificationEventId = (typeof classificationEvents)[number]["id"];

const statusLabel = {
  classified: "Clasificó",
  pending: "Pendiente",
  notQualified: "No clasificó"
} as const;

const statusClassName = {
  classified: "text-[#76ff69]",
  pending: "text-[#ffcf66]",
  notQualified: "text-[#ff413d]"
} as const;

const statusIcon = {
  classified: "✓",
  pending: "•",
  notQualified: "x"
} as const;

export function ClassificationBoard() {
  const [selectedId, setSelectedId] = useState<ClassificationEventId>(
    classificationEvents[2].id
  );

  const selectedEvent = useMemo(
    () =>
      classificationEvents.find((event) => event.id === selectedId) ??
      classificationEvents[2],
    [selectedId]
  );

  return (
    <section
      id="clasificaciones"
      className="scroll-mt-20 border-t border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(211,32,46,0.13),transparent_32%),linear-gradient(115deg,#11171b_0%,#090c0f_56%,#111417_100%)] px-4 py-12 text-white md:py-16"
      aria-labelledby="clasificaciones-title"
    >
      <div className="mx-auto w-[min(1320px,100%)] text-center">
        <h2
          id="clasificaciones-title"
          className="text-4xl font-black uppercase tracking-[-0.02em] text-white md:text-5xl"
        >
          Clasificaciones
        </h2>
        <p className="mt-3 text-sm text-white/[0.70] md:text-base">
          Consulta a los clasificados por fecha y disciplina.
        </p>

        <div className="mx-auto mt-7 hidden max-w-5xl grid-cols-4 gap-2 md:grid lg:grid-cols-8">
          {classificationEvents.map((event, index) => {
            const isActive = event.id === selectedId;

            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setSelectedId(event.id)}
                className={`h-12 rounded-md border px-3 text-xs font-black uppercase transition focus:outline-none focus:ring-2 focus:ring-afc-red ${
                  isActive
                    ? "border-afc-red bg-afc-red text-white shadow-[0_16px_36px_rgba(211,32,46,0.24)]"
                    : "border-white/[0.12] bg-white/[0.035] text-white/[0.68] hover:border-afc-red/[0.60] hover:text-white"
                }`}
              >
                Fecha {index + 1}
              </button>
            );
          })}
        </div>

        <label className="mx-auto mt-7 grid max-w-md gap-2 text-left text-sm text-white/[0.78] md:hidden">
          <span>Selecciona fecha / torneo</span>
          <span className="relative">
            <select
              value={selectedId}
              onChange={(event) =>
                setSelectedId(event.target.value as ClassificationEventId)
              }
              className="h-14 w-full appearance-none rounded-md border border-white/[0.18] bg-white/[0.045] px-5 text-sm font-black uppercase text-white outline-none transition hover:border-white/[0.34] focus:border-afc-red focus:ring-2 focus:ring-afc-red/[0.35]"
            >
              {classificationEvents.map((event) => (
                <option key={event.id} value={event.id} className="bg-[#101318]">
                  {event.label}
                </option>
              ))}
            </select>
          </span>
        </label>

        <div className="mt-7 hidden overflow-x-auto rounded-lg border border-white/[0.14] bg-black/[0.18] text-left shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:block">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead className="bg-white/[0.08] text-xs font-black uppercase text-white/[0.82]">
              <tr>
                <th className="w-24 px-8 py-4">Pos.</th>
                <th className="px-6 py-4">Atleta</th>
                <th className="px-6 py-4">Disciplina</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Puntos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {selectedEvent.athletes.map((athlete) => (
                <tr
                  key={`${selectedEvent.id}-${athlete.name}`}
                  className="transition hover:bg-white/[0.045]"
                >
                  <td className="px-8 py-4 text-center font-black">
                    {athlete.position}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white/[0.90]">
                    {athlete.name}
                  </td>
                  <td className="px-6 py-4 text-white/[0.82]">
                    {athlete.discipline}
                  </td>
                  <td className="px-6 py-4 text-white/[0.82]">
                    {athlete.category}
                  </td>
                  <td
                    className={`px-6 py-4 font-black uppercase ${statusClassName[athlete.status]}`}
                  >
                    <span aria-hidden="true">{statusIcon[athlete.status]} </span>
                    {statusLabel[athlete.status]}
                  </td>
                  <td className="px-6 py-4 text-right font-black">
                    {athlete.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-3 md:hidden">
          {selectedEvent.athletes.map((athlete) => (
            <article
              key={`${selectedEvent.id}-${athlete.name}-mobile`}
              className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-left"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white/[0.06] text-lg font-black">
                {athlete.position}
              </span>
              <div>
                <h3 className="text-sm font-black text-white">{athlete.name}</h3>
                <p className="mt-1 text-xs text-white/[0.64]">
                  {athlete.discipline} · {athlete.category}
                </p>
              </div>
              <span
                className={`rounded-md border border-current/40 px-2.5 py-1 text-[0.62rem] font-black uppercase ${statusClassName[athlete.status]}`}
              >
                {statusLabel[athlete.status]}
              </span>
            </article>
          ))}
        </div>

        <a
          href="#fechas"
          className="mx-auto mt-6 inline-flex h-12 min-w-[280px] items-center justify-center rounded-md border border-afc-red px-6 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:bg-afc-red hover:shadow-[0_18px_40px_rgba(211,32,46,0.26)] focus:outline-none focus:ring-2 focus:ring-afc-red"
        >
          Ver todas las clasificaciones
        </a>
      </div>
    </section>
  );
}
