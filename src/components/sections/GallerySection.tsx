"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type SVGProps } from "react";
import { createPortal } from "react-dom";

const galleryItems = [
  {
    src: "/images/tigre-azul/disciplines/mma.png",
    alt: "Entrenamiento de artes marciales mixtas en Tigre Azul",
    eyebrow: "Entrenamiento",
    title: "Estrategia bajo presión"
  },
  {
    src: "/images/tigre-azul/disciplines/boxeo.png",
    alt: "Sesión de boxeo en la academia Tigre Azul",
    eyebrow: "Boxeo",
    title: "Precisión y potencia"
  },
  {
    src: "/images/tigre-azul/disciplines/jiu-jitsu.png",
    alt: "Práctica de jiu-jitsu brasileño sobre el tatami",
    eyebrow: "Jiu-jitsu",
    title: "Control y técnica"
  },
  {
    src: "/images/tigre-azul/disciplines/sanda.png",
    alt: "Atleta practicando Sanda Wushu",
    eyebrow: "Sanda Wushu",
    title: "Velocidad que decide"
  },
  {
    src: "/images/tigre-azul/disciplines/preparacion-fisica.png",
    alt: "Preparación física de un atleta de Tigre Azul",
    eyebrow: "Alto rendimiento",
    title: "Fuerza para evolucionar"
  }
] as const;

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? galleryItems.length - 1
            : (current - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? galleryItems.length - 1
        : (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % galleryItems.length
    );
  };

  return (
    <>
      <section
        id="galeria"
        className="tigre-gallery-section relative isolate scroll-mt-[104px] overflow-hidden bg-[#01060d] px-[4.8vw] py-[clamp(72px,8vw,118px)] text-white lg:min-h-[100svh] lg:scroll-mt-[150px] lg:px-[clamp(42px,6vw,96px)]"
        aria-labelledby="gallery-title"
      >
        <Image
          src="/images/tigre-azul/tigre-azul-disciplines-bg-v2.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none -z-20 object-cover object-center opacity-40 saturate-[0.82]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#01060d_0%,rgba(1,6,13,0.86)_18%,rgba(1,6,13,0.38)_55%,#01060d_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[56vw] w-[76vw] -translate-x-1/2 rounded-full bg-[#075ee8]/10 blur-[120px]" />
        <div className="tigre-professors-grain pointer-events-none absolute inset-0 -z-10 opacity-50" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <header className="tigre-gallery-reveal flex flex-col gap-6 border-b border-white/14 pb-[clamp(24px,3vw,42px)] lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-4 text-[clamp(10px,0.9vw,14px)] font-black uppercase tracking-[0.42em] text-[#087cff]">
                <span className="h-px w-10 bg-[#087cff] shadow-[0_0_10px_rgba(8,124,255,0.72)]" />
                <span className="pl-[0.42em]">Momentos Tigre Azul</span>
              </div>
              <h2
                id="gallery-title"
                className="tigre-gallery-title mt-4 text-[clamp(58px,8.2vw,124px)] uppercase leading-[0.82]"
              >
                Galería
              </h2>
            </div>

            <p className="max-w-[520px] text-[clamp(13px,1vw,16px)] leading-7 text-[#b8c6e8] lg:pb-1 lg:text-right">
              Entrenamientos, técnica y esfuerzo real. Una mirada a la energía
              que se vive cada día dentro y fuera del tatami.
            </p>
          </header>

          <div className="mt-[clamp(28px,3.4vw,52px)] grid gap-3 lg:h-[clamp(500px,61vh,690px)] lg:grid-cols-[minmax(0,1.36fr)_minmax(390px,0.84fr)] lg:gap-4">
            <GalleryTile
              item={galleryItems[0]}
              index={0}
              featured
              onOpen={() => setActiveIndex(0)}
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-rows-2 lg:gap-4">
              {galleryItems.slice(1).map((item, itemIndex) => {
                const index = itemIndex + 1;

                return (
                  <GalleryTile
                    key={item.src}
                    item={item}
                    index={index}
                    onOpen={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          </div>

          <div className="tigre-gallery-reveal mt-6 flex flex-col gap-3 border-t border-white/14 pt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/48 sm:flex-row sm:items-center sm:justify-between">
            <span>05 momentos · una misma disciplina</span>
            <span className="flex items-center gap-2 text-[#7fb0ff]">
              <ExpandIcon className="h-4 w-4" />
              Selecciona una imagen para ampliarla
            </span>
          </div>
        </div>
      </section>

      {activeIndex !== null &&
        createPortal(
          <GalleryViewer
            activeIndex={activeIndex}
            onClose={() => setActiveIndex(null)}
            onPrevious={showPrevious}
            onNext={showNext}
          />,
          document.body
        )}
    </>
  );
}

function GalleryTile({
  item,
  index,
  featured = false,
  onOpen
}: {
  item: (typeof galleryItems)[number];
  index: number;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar imagen: ${item.title}`}
      aria-haspopup="dialog"
      className={`tigre-gallery-media tigre-gallery-reveal group relative w-full overflow-hidden border border-white/18 bg-[#030b16] text-left outline-none focus-visible:border-[#58a4ff] focus-visible:ring-2 focus-visible:ring-[#087cff] ${
        featured
          ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          : "aspect-[4/5] lg:aspect-auto lg:h-full"
      }`}
      style={{ "--gallery-delay": `${index * 70}ms` } as CSSProperties}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={
          featured
            ? "(min-width: 1024px) 62vw, 100vw"
            : "(min-width: 1024px) 22vw, 50vw"
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,6,13,0.02)_35%,rgba(1,6,13,0.92)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(1,6,13,0)_45%,rgba(1,6,13,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-[clamp(14px,2vw,28px)]">
        <div>
          <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#1686ff] sm:text-[10px]">
            {item.eyebrow}
          </span>
          <h3
            className={`mt-1 font-black uppercase leading-[1.02] text-white ${
              featured
                ? "text-[clamp(23px,3vw,48px)]"
                : "text-[clamp(14px,1.3vw,21px)]"
            }`}
          >
            {item.title}
          </h3>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/30 bg-black/25 text-white transition duration-300 group-hover:border-[#087cff] group-hover:bg-[#075ee8]">
          <ExpandIcon className="h-4 w-4" />
        </span>
      </div>
      <span className="absolute right-3 top-3 text-[10px] font-black tracking-[0.18em] text-white/45">
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

function GalleryViewer({
  activeIndex,
  onClose,
  onPrevious,
  onNext
}: {
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const item = galleryItems[activeIndex];

  return (
    <div
      className="tigre-gallery-viewer fixed inset-0 z-[100] grid place-items-center bg-[#01050c]/96 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ampliada: ${item.title}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center border border-white/25 bg-black/35 text-white transition hover:border-[#087cff] hover:bg-[#075ee8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a4ff] sm:right-8 sm:top-8"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <div
        className="relative h-[min(78svh,840px)] w-full max-w-[1380px] overflow-hidden border border-white/16 bg-[#020914] shadow-[0_35px_110px_rgba(0,0,0,0.72)]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority
          sizes="100vw"
          className="tigre-gallery-viewer-image object-contain"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1686ff]">
              {item.eyebrow}
            </span>
            <p className="mt-2 text-xl font-black uppercase text-white sm:text-3xl">
              {item.title}
            </p>
          </div>
          <span className="text-xs font-black tracking-[0.2em] text-white/55">
            {String(activeIndex + 1).padStart(2, "0")} / {" "}
            {String(galleryItems.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/25 bg-black/45 text-white transition hover:border-[#087cff] hover:bg-[#075ee8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a4ff] sm:left-8"
      >
        <ArrowIcon className="h-5 w-5 rotate-180" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/25 bg-black/45 text-white transition hover:border-[#087cff] hover:bg-[#075ee8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a4ff] sm:right-8"
      >
        <ArrowIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

function ExpandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M4 15v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
