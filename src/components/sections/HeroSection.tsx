import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[820px] items-stretch overflow-hidden bg-brand-950 md:min-h-[900px] lg:min-h-[100svh]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/tigre-azul/tigre-azul-blue-wall-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,34,0.45),rgba(2,11,34,0.78)_70%,#041743_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_39%,rgba(63,105,177,0.28),transparent_25%),radial-gradient(circle_at_82%_62%,rgba(236,168,60,0.12),transparent_23%),linear-gradient(90deg,rgba(2,11,34,0.82),transparent_24%,transparent_74%,rgba(2,11,34,0.82))]" />
      <div className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(236,168,60,0.25)] opacity-75 shadow-[0_0_0_22px_rgba(63,105,177,0.08),0_0_0_48px_rgba(255,255,255,0.035)] md:top-1/2 md:h-[880px] md:w-[880px] md:-translate-y-[42%] md:shadow-[0_0_0_34px_rgba(63,105,177,0.08),0_0_0_74px_rgba(255,255,255,0.035)]" />

      <Container className="relative z-10 grid w-full grid-rows-[auto_1fr_auto] pb-11 pt-[104px] md:pb-14 md:pt-28 xl:pb-[clamp(7.5rem,14vh,10rem)]">
        <div aria-hidden="true" />

        <div className="grid min-h-[300px] place-items-center pt-5 text-center md:min-h-[330px] md:pt-7">
          <div className="hero-logo-mark relative grid h-[178px] w-[178px] place-items-center rounded-full bg-white/95 shadow-hero ring-[10px] ring-white/10 md:h-[228px] md:w-[228px] md:ring-[14px] 2xl:h-[250px] 2xl:w-[250px]">
            <Image
              src="/images/tigre-azul/tigre-azul-logo.png"
              alt="Logo Tigre Azul"
              width={198}
              height={198}
              priority
              sizes="(min-width: 1536px) 218px, (min-width: 768px) 198px, 154px"
              className="relative z-10 h-[154px] w-[154px] rounded-full object-cover md:h-[198px] md:w-[198px] 2xl:h-[218px] 2xl:w-[218px]"
            />
          </div>
        </div>

        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,700px)_minmax(420px,1fr)] lg:gap-8 2xl:grid-cols-[minmax(0,820px)_minmax(420px,1fr)]">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-yellow/35 bg-brand-yellow/15 px-3 py-2 text-[11px] font-black uppercase tracking-[0.04em] text-brand-yellow md:px-3.5 md:py-2.5 md:text-[13px] md:tracking-[0.08em]">
              <span className="h-2 w-2 rounded-full bg-brand-yellow shadow-[0_0_0_5px_rgba(236,168,60,0.16)]" />
              Boxeo · MMA · BJJ · Sanda · Fitness
            </div>
            <h1
              id="hero-title"
              className="mt-5 max-w-4xl text-[46px] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-[48px] sm:tracking-[-0.055em] md:text-[72px] md:leading-[0.91] md:tracking-[-0.065em]"
            >
              <span className="block">La actitud se entrena.</span>
              <span className="block text-brand-yellow">
                <span className="sm:hidden">
                  El carácter se
                  <br />
                  forja.
                </span>
                <span className="hidden sm:inline">El carácter se forja.</span>
              </span>
            </h1>
          </div>

          <div className="max-w-[500px] rounded-[24px] border border-white/20 bg-gradient-to-b from-white/15 to-white/10 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl md:rounded-[28px] md:p-6 lg:justify-self-end">
            <p className="m-0 text-[15px] leading-7 text-[#dce6ff] md:text-[17px] md:leading-8">
              Academia Tigre Azul: disciplina, respeto, técnica y preparación
              física para alumnos nuevos, adultos, niños y competidores.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink
                href={whatsappUrl}
                variant="white"
                className="w-full sm:w-auto"
              >
                Reserva tu clase
              </ButtonLink>
              <ButtonLink
                href="#sedes"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Conoce nuestras sedes
              </ButtonLink>
              <ButtonLink
                href="#equipo"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                Únete al equipo
              </ButtonLink>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-5 left-1/2 hidden h-[54px] w-[34px] -translate-x-1/2 rounded-full border border-white/30 pt-2.5 opacity-75 md:grid md:place-items-start md:justify-center"
        >
          <span className="h-2.5 w-1 rounded-full bg-white" />
        </div>
      </Container>
    </section>
  );
}
