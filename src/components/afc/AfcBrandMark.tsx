import Image from "next/image";

type AfcBrandMarkProps = {
  size?: "sm" | "lg";
};

export function AfcBrandMark({ size = "sm" }: AfcBrandMarkProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={`relative isolate mx-auto ${
        isLarge
          ? "h-[184px] w-[230px] md:h-[260px] md:w-[330px]"
          : "h-[58px] w-[72px] md:h-[64px] md:w-[82px]"
      }`}
      aria-hidden="true"
    >
      <Image
        src="/images/afc/afc-logo-floating.png"
        alt=""
        fill
        loading="eager"
        sizes={isLarge ? "(max-width: 767px) 230px, 330px" : "82px"}
        className="object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.72)] transition duration-300 group-hover:scale-105 group-focus-visible:scale-105"
      />
    </div>
  );
}
