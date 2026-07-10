import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { TigreMobileHeader } from "@/components/layout/TigreMobileHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { DisciplinesSection } from "@/components/sections/DisciplinesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HallOfFameSection } from "@/components/sections/HallOfFameSection";
import { ProfessorsSection } from "@/components/sections/ProfessorsSection";

export const metadata: Metadata = {
  title: "Tigre Azul | Academia de artes marciales",
  description:
    "Academia Tigre Azul: disciplina que transforma. Entrena mente, cuerpo y carácter con artes marciales.",
  icons: {
    icon: "/images/tigre-azul/tigre-azul-logo.png",
    apple: "/images/tigre-azul/tigre-azul-logo.png"
  },
  openGraph: {
    title: "Tigre Azul | Academia de artes marciales",
    description:
      "Disciplina que transforma. Entrena mente, cuerpo y carácter en una academia de artes marciales.",
    images: ["/images/tigre-azul/tigre-azul-fighter-clean.png"]
  }
};

export default function BlueTigerPage() {
  return (
    <AppShell>
      <TigreMobileHeader />
      <HeroSection />
      <AboutSection />
      <DisciplinesSection />
      <ProfessorsSection />
      <HallOfFameSection />
      <GallerySection />
    </AppShell>
  );
}
