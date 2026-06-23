import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionAnchorTargets } from "@/components/sections/SectionAnchorTargets";

export const metadata: Metadata = {
  title: "Tigre Azul | Academia de artes marciales",
  description:
    "Academia Tigre Azul: boxeo, MMA, BJJ, Sanda y preparacion fisica para alumnos nuevos, familias y competidores.",
  icons: {
    icon: "/images/tigre-azul/tigre-azul-logo.png",
    apple: "/images/tigre-azul/tigre-azul-logo.png"
  },
  openGraph: {
    title: "Tigre Azul | Academia de artes marciales",
    description:
      "Disciplina, respeto, tecnica y preparacion fisica en una academia de deportes de combate.",
    images: ["/images/tigre-azul/tigre-azul-final-desktop.png"]
  }
};

export default function BlueTigerPage() {
  return (
    <AppShell>
      <HeroSection />
      <SectionAnchorTargets />
    </AppShell>
  );
}
