import Image from "next/image";
import { afcSite } from "@/lib/afc";

export function AfcHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="afc-hero-title"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#030406] pt-[70px] text-white md:min-h-[820px] md:pt-[78px] lg:min-h-[760px]"
    >
      <Image
        src="/images/afc/afc-hero-mobile-generated.png"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="afc-hero-bg-motion object-cover object-center md:hidden"
      />
      <Image
        src="/images/afc/afc-hero-desktop-generated.png"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="afc-hero-bg-motion hidden object-cover object-center md:block"
      />

      <div className="afc-light-breathe absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(211,32,46,0.18),transparent_24%),linear-gradient(180deg,rgba(3,4,6,0.20)_0%,rgba(3,4,6,0.18)_38%,rgba(3,4,6,0.86)_83%,#030406_100%)]" />
      <div className="absolute inset-x-0 top-[70px] h-px bg-white/10 md:top-[78px]" />

      <div className="relative mx-auto grid min-h-[690px] w-[min(1180px,calc(100%-32px))] place-items-center py-12 text-center md:min-h-[742px] lg:min-h-[682px]">
        <div className="mt-4 flex max-w-4xl flex-col items-center">
          <div className="afc-hero-logo-stage afc-rise-in relative h-[210px] w-[min(82vw,320px)] md:h-[330px] md:w-[520px] lg:h-[380px] lg:w-[600px]">
            <div className="afc-hero-logo-float relative h-full w-full">
            <Image
              src="/images/afc/afc-logo-floating.png"
              alt="AFC - Apex Fighting Championship"
              fill
              loading="eager"
              priority
              sizes="(max-width: 767px) 82vw, (max-width: 1023px) 520px, 600px"
              className="object-contain"
            />
            </div>
          </div>
          <p className="afc-rise-in mt-6 text-[0.8rem] font-black uppercase tracking-[0.26em] text-white/[0.86] [--afc-delay:130ms] md:mt-8 md:text-lg">
            Disciplina. Honor. Victoria.
          </p>
          <h1
            id="afc-hero-title"
            className="afc-rise-in mt-3 text-balance text-3xl font-black uppercase leading-[1.04] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] [--afc-delay:220ms] md:text-5xl lg:text-6xl"
          >
            Sé parte de la élite.
          </h1>
          <p className="afc-rise-in mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/[0.70] [--afc-delay:310ms] md:text-base">
            {afcSite.fullName} reúne ranking, calendario e inscripciones en una
            experiencia pensada para atletas, academias y organizadores.
          </p>
          <span className="afc-rise-in mt-7 block h-0.5 w-24 bg-afc-red shadow-[0_0_26px_rgba(211,32,46,0.72)] [--afc-delay:390ms]" />
        </div>
      </div>
    </section>
  );
}
