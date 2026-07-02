import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import { disciplinesContent } from "@/lib/site";

type Discipline = (typeof disciplinesContent.cards)[number];
type DisciplineIcon = Discipline["icon"];
type DetailIcon = Discipline["details"][number]["icon"];
type DisciplineIconProps = SVGProps<SVGSVGElement> & { className?: string };

const disciplineIconMap: Record<
  DisciplineIcon,
  (props: DisciplineIconProps) => ReactNode
> = {
  boxing: BoxingIcon,
  mma: MmaIcon,
  bjj: BjjIcon,
  sanda: SandaIcon,
  fitness: FitnessIcon
};

const detailIconMap: Record<
  DetailIcon,
  (props: SVGProps<SVGSVGElement>) => ReactNode
> = {
  shield: MiniShieldIcon,
  pulse: MiniPulseIcon,
  levels: MiniLevelsIcon,
  training: MiniTrainingIcon,
  target: MiniTargetIcon,
  system: MiniSystemIcon,
  history: MiniHistoryIcon,
  rules: MiniRulesIcon,
  trophy: MiniTrophyIcon,
  conditioning: MiniConditioningIcon,
  strength: MiniStrengthIcon,
  performance: MiniPerformanceIcon
};

export function DisciplinesSection() {
  return (
    <section
      id="disciplinas"
      className="tigre-disciplines-section relative isolate overflow-hidden bg-[#01050e] px-[4.8vw] pb-[clamp(42px,7.6vw,78px)] pt-[calc(env(safe-area-inset-top)+72px)] text-white lg:min-h-[100svh] lg:px-0 lg:pb-[clamp(18px,3vh,34px)] lg:pt-[clamp(24px,4.7vh,58px)]"
      aria-labelledby="disciplines-title"
    >
      <Image
        src="/images/tigre-azul/tigre-azul-disciplines-bg-v2.png"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center opacity-95 saturate-[1.1]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,5,14,0.62)_0%,rgba(1,5,14,0.18)_30%,rgba(1,5,14,0.3)_70%,rgba(1,5,14,0.76)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[clamp(130px,17vh,190px)] bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.5)_48%,rgba(0,0,0,0)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[40vw] bg-[linear-gradient(90deg,transparent_0%,rgba(0,92,255,0.12)_56%,rgba(3,126,255,0.18)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col items-center lg:w-[calc(100%-clamp(48px,7.5vw,112px))] lg:max-w-[1430px]">
        <div className="flex items-center gap-[clamp(10px,1.25vw,16px)] text-[clamp(10px,1vw,15px)] font-black uppercase tracking-[0.48em] text-[#087cff]">
          <span className="h-[2px] w-[clamp(38px,3.2vw,58px)] bg-[#087cff]" />
          <span className="pl-[0.48em]">{disciplinesContent.eyebrow}</span>
          <span className="h-[2px] w-[clamp(38px,3.2vw,58px)] bg-[#087cff]" />
        </div>

        <h2
          id="disciplines-title"
          className="tigre-disciplines-heading mt-[clamp(10px,1.7vh,16px)] text-center text-[clamp(34px,4.2vw,60px)] font-black leading-[1.02] tracking-[-0.01em] text-white drop-shadow-[0_5px_16px_rgba(0,0,0,0.74)] lg:mt-[clamp(8px,1.25vh,14px)] lg:text-[clamp(30px,3.65vw,56px)]"
        >
          <span>{disciplinesContent.headline.lead}</span>{" "}
          <span className="text-[#0b65ff]">
            {disciplinesContent.headline.accent}
          </span>{" "}
          <span>{disciplinesContent.headline.tail}</span>
        </h2>

        <p className="mt-[clamp(14px,2.1vh,21px)] text-center text-[clamp(14px,1.25vw,18px)] leading-relaxed text-white/78 lg:mt-[clamp(8px,1.45vh,16px)] lg:text-[clamp(13px,1.1vw,17px)]">
          {disciplinesContent.body}
        </p>

        <div className="mt-[clamp(22px,4.2vh,34px)] grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:mt-[clamp(10px,1.55vh,16px)] lg:grid-cols-5 lg:gap-[12px]">
          {disciplinesContent.cards.map((discipline) => (
            <DisciplineCard key={discipline.title} discipline={discipline} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({ discipline }: { discipline: Discipline }) {
  const Icon = disciplineIconMap[discipline.icon];

  return (
    <article className="tigre-discipline-card group overflow-hidden rounded-[10px] border border-[#0b65ff]/62 bg-[linear-gradient(180deg,rgba(6,16,31,0.9),rgba(2,8,17,0.96))] shadow-[0_24px_70px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.05)] lg:h-[clamp(430px,55vh,540px)]">
      <div className="relative h-[clamp(156px,29vw,206px)] overflow-hidden border-b border-[#0b65ff]/42 lg:h-[clamp(132px,20vh,198px)]">
        <Image
          src={discipline.image}
          alt=""
          fill
          unoptimized
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(1,5,14,0.54)_100%)]" />
      </div>

      <div className="px-[clamp(16px,1.35vw,20px)] pb-[clamp(18px,2.4vh,24px)] pt-[clamp(14px,2.1vh,18px)] lg:px-[clamp(12px,1.05vw,17px)] lg:pb-[clamp(10px,1.35vh,15px)] lg:pt-[clamp(10px,1.35vh,15px)]">
        <div className="grid grid-cols-[clamp(43px,3.7vw,54px)_1fr] items-center gap-[clamp(10px,0.95vw,14px)]">
          <Icon className="h-[clamp(42px,3.7vw,54px)] w-[clamp(42px,3.7vw,54px)] text-[#087cff]" />
          <div>
            <h3 className="text-[clamp(15px,1.12vw,18px)] font-black uppercase leading-[1.1] tracking-normal text-white lg:text-[clamp(15px,1.04vw,18px)]">
              {discipline.title}
            </h3>
            <span className="mt-[clamp(10px,1.35vh,13px)] block h-[2px] w-[clamp(66px,5.4vw,86px)] bg-[#0b65ff] lg:mt-[clamp(8px,1.05vh,12px)]" />
          </div>
        </div>

        <ul className="mt-[clamp(17px,2.4vh,23px)] space-y-[clamp(12px,1.85vh,17px)] lg:mt-[10px] lg:space-y-[7px]">
          {discipline.details.map((detail) => (
            <li
              key={`${discipline.title}-${detail.title}`}
              className="grid grid-cols-[26px_1fr] gap-[clamp(10px,0.9vw,13px)] lg:gap-[clamp(9px,0.82vw,12px)]"
            >
              <span className="mt-[2px] flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#087cff] text-[#087cff] shadow-[0_0_14px_rgba(8,124,255,0.32)] lg:h-[21px] lg:w-[21px]">
                <DetailIcon name={detail.icon} />
              </span>
              <span>
                <strong className="block text-[clamp(12px,0.88vw,14px)] font-black leading-tight text-white lg:text-[clamp(11px,0.78vw,13px)]">
                  {detail.title}
                </strong>
                <span className="mt-[3px] block text-[clamp(11px,0.82vw,13px)] leading-[1.28] text-white/72 lg:mt-[2px] lg:text-[clamp(10px,0.69vw,12px)] lg:leading-[1.22]">
                  {detail.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function DetailIcon({ name }: { name: DetailIcon }) {
  const Icon = detailIconMap[name];
  return <Icon className="h-[13px] w-[13px]" />;
}

function BoxingIcon({ className }: DisciplineIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative block shrink-0 ${className ?? ""}`}
    >
      <Image
        src="/images/tigre-azul/disciplines/boxeo-icon.png"
        alt=""
        fill
        unoptimized
        sizes="54px"
        className="object-contain drop-shadow-[0_0_13px_rgba(8,124,255,0.48)]"
      />
    </span>
  );
}

function MmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <path
        d="M36 7 61 21.5v29L36 65 11 50.5v-29L36 7Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3.4"
      />
      <path d="m18 25 18-10 18 10M18 47l18 10 18-10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
      <text
        x="36"
        y="42"
        fill="currentColor"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="15"
        fontWeight="900"
        textAnchor="middle"
      >
        MMA
      </text>
    </svg>
  );
}

function BjjIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <path
        d="M36 8.5 64 59.5H52.2L36 29.6 19.8 59.5H8L36 8.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3.4"
      />
      <path
        d="M36 8.5v21.1M26.5 47.2h19M19.8 59.5l9.8-17.7M52.2 59.5l-9.8-17.7M30.1 35.9h11.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M23.2 59.5h25.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function SandaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <circle cx="36" cy="36" r="28" stroke="currentColor" strokeWidth="3.4" />
      <text
        x="36"
        y="47"
        fill="currentColor"
        fontFamily="'Noto Serif CJK SC', 'SimSun', 'KaiTi', serif"
        fontSize="31"
        fontWeight="800"
        textAnchor="middle"
      >
        泰
      </text>
    </svg>
  );
}

function FitnessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 36h56M17 26v20M24 22v28M31 30v12M41 30v12M48 22v28M55 26v20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.7"
      />
    </svg>
  );
}

function MiniShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4 18 7v4c0 4-2.3 7-6 9-3.7-2-6-5-6-9V7l6-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="m9.5 12 1.7 1.7 3.4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniPulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 12h3l2-5 4 10 2-5h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniLevelsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 18V9M12 18V6M18 18v-4M4 18h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MiniTrainingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 15c3 2.5 7 2.5 10 0M9 8l3-3 3 3M12 5v13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniTargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2.3" stroke="currentColor" strokeWidth="2" />
      <path d="m16 8 3-3M18 5h2v2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniSystemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 8h10M7 12h10M7 16h7" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MiniHistoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 7v6l4 2M5 7a8 8 0 1 1-1 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5 7V4M5 7h3" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MiniRulesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 5h10v14H7zM9.5 9h5M9.5 13h5M9.5 17h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniTrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 5h8v4a4 4 0 0 1-8 0V5ZM10 16h4M9 20h6M6 7H4v2a3 3 0 0 0 4 2M18 7h2v2a3 3 0 0 1-4 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniConditioningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MiniStrengthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 12h16M7 8v8M10 7v10M14 7v10M17 8v8" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MiniPerformanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 15 4-4 3 3 7-8M15 6h4v4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
