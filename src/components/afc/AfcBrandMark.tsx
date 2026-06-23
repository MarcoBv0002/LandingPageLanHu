type AfcBrandMarkProps = {
  size?: "sm" | "lg";
};

export function AfcBrandMark({ size = "sm" }: AfcBrandMarkProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={`relative isolate mx-auto grid place-items-center ${
        isLarge
          ? "h-[184px] w-[230px] md:h-[260px] md:w-[330px]"
          : "h-12 w-14"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 rotate-45 border border-afc-red/[0.70] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_42%,rgba(211,32,46,0.24))] shadow-[0_0_40px_rgba(211,32,46,0.32)] ${
          isLarge ? "rounded-[34px]" : "rounded-xl"
        }`}
      />
      <div
        className={`absolute rotate-45 border border-white/20 bg-black/[0.55] ${
          isLarge
            ? "inset-[18px] rounded-[24px]"
            : "inset-[7px] rounded-lg"
        }`}
      />
      <div className="relative text-center">
        <span
          className={`block font-black uppercase leading-none tracking-[-0.08em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)] ${
            isLarge ? "text-[5.4rem] md:text-[7.7rem]" : "text-2xl"
          }`}
        >
          <span className="text-afc-red">A</span>FC
        </span>
        {isLarge ? (
          <span className="-mt-1 block text-[0.62rem] font-black uppercase tracking-[0.32em] text-white/[0.76] md:text-xs">
            Apex Fighting Championship
          </span>
        ) : null}
      </div>
    </div>
  );
}
