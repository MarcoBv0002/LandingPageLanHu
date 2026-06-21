import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "white" | "ghost";
  showDot?: boolean;
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-black leading-none transition focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-950";

const variantClasses = {
  white:
    "border-transparent bg-white text-brand-850 shadow-[0_16px_38px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,0,0.34)]",
  ghost:
    "border-white/25 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15"
};

export function ButtonLink({
  children,
  className = "",
  variant = "white",
  showDot = false,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {showDot ? (
        <span className="h-2 w-2 rounded-full bg-brand-yellow shadow-[0_0_0_5px_rgba(236,168,60,0.16)]" />
      ) : null}
      {children}
    </a>
  );
}
