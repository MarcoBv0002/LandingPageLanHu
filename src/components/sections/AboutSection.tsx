import Image from "next/image";
import type { CSSProperties, ReactNode, SVGProps } from "react";
import { aboutContent } from "@/lib/site";

type Pillar = (typeof aboutContent.pillars)[number];
type PillarIcon = Pillar["icon"];

const iconMap: Record<
  PillarIcon,
  (props: SVGProps<SVGSVGElement>) => ReactNode
> = {
  mission: MissionIcon,
  vision: VisionIcon,
  values: ValuesIcon,
  community: CommunityIcon
};

export function AboutSection() {
  return (
    <section
      id="quienes-somos"
      className="relative isolate overflow-hidden bg-[#01050e] text-white lg:h-[100svh]"
      aria-labelledby="about-section-title"
    >
      <div className="absolute inset-x-0 top-0 h-[112vw] lg:hidden">
        <Image
          src="/images/tigre-azul/tigre-azul-about-hero.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-[63%_top]"
        />
      </div>
      <Image
        src="/images/tigre-azul/tigre-azul-about-hero.png"
        alt=""
        fill
        unoptimized
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />
      <div className="absolute inset-x-0 top-0 h-[124vw] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.03)_52%,rgba(1,5,14,0.9)_88%,#01050e_100%)] lg:hidden" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black/42 via-black/12 to-transparent lg:hidden" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_52%_40%,rgba(4,31,89,0.1),transparent_31%),linear-gradient(90deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.04)_46%,rgba(0,0,0,0.08)_100%)] lg:block" />
      <div className="absolute inset-y-0 left-0 hidden w-[54%] bg-gradient-to-r from-black/38 via-black/14 to-transparent lg:block" />
      <div className="tigre-about-soft-top pointer-events-none absolute inset-x-0 top-0 z-[2] h-[118px] bg-[linear-gradient(180deg,rgba(1,5,14,0.72)_0%,rgba(1,5,14,0.38)_42%,rgba(1,5,14,0)_100%)] lg:h-[190px] lg:bg-[linear-gradient(180deg,rgba(1,5,14,0.68)_0%,rgba(1,5,14,0.3)_45%,rgba(1,5,14,0)_100%)]" />

      <h2 id="about-section-title" className="sr-only">
        Mas que una academia, somos una familia.
      </h2>

      <div className="relative z-10 min-h-[100svh] px-[6.45vw] pb-[3.2vw] pt-[54vw] lg:hidden">
        <div
          className="tigre-rise-in"
          style={{ "--tigre-delay": "80ms" } as CSSProperties}
        >
          <AboutEyebrow variant="mobile" />
          <div className="mt-[4.8vw]">
            <AboutMobileHeadline />
          </div>
        </div>

        <div
          className="tigre-rise-in mt-[13.4vw] space-y-[3.2vw] text-[clamp(11px,3vw,27px)] leading-[1.44] tracking-normal text-white/92"
          style={{ "--tigre-delay": "150ms" } as CSSProperties}
        >
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.text}>
              {renderStrongText(paragraph.text, paragraph.strong)}
            </p>
          ))}
        </div>

        <AboutPillars variant="mobile" />
      </div>

      <div className="relative z-10 hidden h-[100svh] items-center lg:flex">
        <div
          className="tigre-rise-in ml-[5.85vw] w-[54vw] max-w-[780px]"
          style={{ "--tigre-delay": "90ms" } as CSSProperties}
        >
          <AboutEyebrow variant="desktop" />

          <div className="mt-[clamp(18px,2.7vh,30px)]">
            <AboutDesktopHeadline />
          </div>

          <div className="mt-[clamp(16px,2.3vh,24px)] max-w-[690px] space-y-[clamp(12px,1.7vh,18px)] text-[clamp(14px,1vw,17px)] leading-[1.54] tracking-[0.01em] text-white/90">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.text}>
                {renderStrongText(paragraph.text, paragraph.strong)}
              </p>
            ))}
          </div>

          <AboutPillars variant="desktop" />
        </div>
      </div>
    </section>
  );
}

function AboutEyebrow({ variant }: { variant: "mobile" | "desktop" }) {
  return (
    <div>
      <p
        className={
          variant === "mobile"
            ? "text-[clamp(8px,2.35vw,21px)] font-black uppercase tracking-[0.02em] text-[#087cff]"
            : "text-[clamp(15px,1.16vw,19px)] font-black uppercase tracking-[0.02em] text-[#087cff]"
        }
      >
        {aboutContent.eyebrow}
      </p>
      <span
        className={
          variant === "mobile"
            ? "mt-[3.15vw] block h-[2px] w-[clamp(32px,8.15vw,76px)] bg-[#087cff] shadow-[0_0_18px_rgba(8,124,255,0.8)]"
            : "mt-[clamp(12px,1.8vh,20px)] block h-[2px] w-[clamp(58px,4.4vw,78px)] bg-[#087cff] shadow-[0_0_18px_rgba(8,124,255,0.8)]"
        }
      />
    </div>
  );
}

function AboutDesktopHeadline() {
  return (
    <p
      aria-hidden="true"
      className="tigre-about-heading text-[clamp(40px,3.55vw,62px)] leading-[1.1] text-white"
    >
      <span className="tigre-about-condensed block whitespace-nowrap">
        {aboutContent.headline.desktopLead}
      </span>
      <span className="block whitespace-nowrap">
        <span className="tigre-about-condensed inline-block">
          {aboutContent.headline.bridge}
        </span>
        <RaggedFamilyWord className="ml-[clamp(10px,1vw,18px)] inline-block w-[clamp(205px,16.5vw,292px)] align-[-0.2em]" />
      </span>
    </p>
  );
}

function AboutMobileHeadline() {
  return (
    <p
      aria-hidden="true"
      className="tigre-about-heading text-[clamp(28px,7.18vw,64px)] leading-[1.05] text-white"
    >
      {aboutContent.headline.mobileLead.map((line) => (
        <span key={line} className="tigre-about-condensed block w-max">
          {line}
        </span>
      ))}
      <RaggedFamilyWord className="-ml-[0.3vw] mt-[0.8vw] block w-[clamp(122px,31.8vw,284px)]" />
    </p>
  );
}

function RaggedFamilyWord({ className = "" }: { className?: string }) {
  return (
    <span className={`tigre-ragged-word ${className}`}>
      <Image
        src="/images/tigre-azul/tigre-azul-family-word.png"
        alt=""
        width={300}
        height={116}
        unoptimized
        className="h-auto w-full"
      />
    </span>
  );
}

function AboutPillars({ variant }: { variant: "mobile" | "desktop" }) {
  if (variant === "desktop") {
    return (
      <div className="mt-[clamp(20px,2.8vh,32px)] grid w-[min(52vw,780px)] grid-cols-4 rounded-[12px] border border-[#0b72ff]/90 bg-[#03122d]/70 px-[clamp(12px,1.15vw,20px)] py-[clamp(14px,2vh,22px)] shadow-[0_18px_70px_rgba(0,38,126,0.25)] backdrop-blur-[2px]">
        {aboutContent.pillars.map((pillar, index) => (
          <PillarItem
            key={pillar.title}
            pillar={pillar}
            variant="desktop"
            index={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-[5vw] rounded-[clamp(12px,2.55vw,22px)] border border-[#0b72ff]/95 bg-[#03122d]/72 px-[3.5vw] py-[0.8vw] shadow-[0_24px_80px_rgba(0,28,118,0.28)] backdrop-blur-[2px]">
      {aboutContent.pillars.map((pillar, index) => (
        <PillarItem
          key={pillar.title}
          pillar={pillar}
          variant="mobile"
          index={index}
        />
      ))}
    </div>
  );
}

function PillarItem({
  pillar,
  variant,
  index
}: {
  pillar: Pillar;
  variant: "mobile" | "desktop";
  index: number;
}) {
  const Icon = iconMap[pillar.icon];

  if (variant === "desktop") {
    return (
      <article
        className={`flex min-h-[112px] flex-col items-center justify-start px-[clamp(10px,1vw,16px)] text-center text-white ${
          index > 0 ? "border-l border-[#0b72ff]/85" : ""
        }`}
      >
        <Icon className="h-[clamp(38px,3vw,54px)] w-[clamp(38px,3vw,54px)] text-[#087cff]" />
        <h3 className="mt-[clamp(10px,1.35vh,16px)] text-[clamp(13px,0.98vw,17px)] font-black uppercase tracking-normal">
          {pillar.title}
        </h3>
        <p className="mt-[clamp(5px,0.8vh,9px)] max-w-[135px] text-[clamp(10px,0.78vw,13px)] leading-[1.35] text-white/90">
          {pillar.description}
        </p>
      </article>
    );
  }

  return (
    <article
      className={`grid min-h-[clamp(58px,14.3vw,126px)] grid-cols-[22.5vw_1fr_7vw] items-center gap-[2.4vw] ${
        index > 0 ? "border-t border-[#0b72ff]/78" : ""
      }`}
    >
      <Icon className="mx-auto h-[clamp(34px,8.2vw,74px)] w-[clamp(34px,8.2vw,74px)] text-[#087cff]" />
      <div>
        <h3 className="text-[clamp(13px,3.15vw,28px)] font-black uppercase leading-none tracking-normal text-white">
          {pillar.title}
        </h3>
        <p className="mt-[1.2vw] text-[clamp(11px,2.45vw,22px)] leading-[1.3] text-white/90">
          {pillar.description}
        </p>
      </div>
      <ChevronIcon className="h-[clamp(18px,4.3vw,38px)] w-[clamp(18px,4.3vw,38px)] text-[#087cff]" />
    </article>
  );
}

function renderStrongText(text: string, highlights: readonly string[]) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  highlights.forEach((highlight) => {
    const index = text.indexOf(highlight, cursor);
    if (index === -1) return;

    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    nodes.push(
      <strong key={`${highlight}-${index}`} className="font-black text-white">
        {highlight}
      </strong>
    );

    cursor = index + highlight.length;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      />
    </svg>
  );
}

function MissionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.6"
      {...props}
    >
      <circle cx="34" cy="38" r="25" />
      <circle cx="34" cy="38" r="15" />
      <circle cx="34" cy="38" r="5.4" fill="currentColor" stroke="none" />
      <path
        d="M48 24 60 12M51 11h10v10M44 28l-10 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      {...props}
    >
      <path
        d="M5 36s11-18 31-18 31 18 31 18-11 18-31 18S5 36 5 36Z"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="36" r="12" />
      <path d="M36 27a9 9 0 1 1-7.8 13.5" strokeLinecap="round" />
      <circle cx="36" cy="36" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ValuesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      {...props}
    >
      <path
        d="M36 6 61 17v18c0 15-9.7 25.5-25 31C20.7 60.5 11 50 11 35V17L36 6Z"
        strokeLinejoin="round"
      />
      <path
        d="m36 25 4.2 8.5 9.4 1.4-6.8 6.6 1.6 9.3L36 46.4l-8.4 4.4 1.6-9.3-6.8-6.6 9.4-1.4L36 25Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      {...props}
    >
      <circle cx="36" cy="23" r="10" />
      <path
        d="M18 62V51c0-8 7.4-14 18-14s18 6 18 14v11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 28a8 8 0 1 0-7.4 11M54 28a8 8 0 1 1 7.4 11M7 62V51c0-5 4-9 10-10M65 62V51c0-5-4-9-10-10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
